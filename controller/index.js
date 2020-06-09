// console.log(axios);
//tạo ra đối tượng chứa 3 thuộc tính cần thiết để giao tiếp với backend
var objectAjax = {
  url: "../data/DanhSachNguoiDung.json", //đường dẫn đến file chưa dữ liệu hoặc api backend
  method: "GET", //giao thức backend cung cấp ưng với url
  responseType: "json",
};

var renderTable = function (res) {
  var noiDungTable = "";

  for (var i = 0; i < res.data.length; i++) {
    var nguoiDung = res.data[i];
    noiDungTable += `
        <tr>
            <td>${nguoiDung.TaiKhoan}</td>
            <td>${nguoiDung.MatKhau}</td>
            <td>${nguoiDung.HoTen}</td>
            <td>${nguoiDung.Email}</td>
            <td>${nguoiDung.SoDT}</td>
        </tr>
      `;
  }
  //dom đến table tbody chèn các thẻ tr vừa tạo vào
  document.getElementById("tblNguoiDung").innerHTML = noiDungTable;
};

//dùng thư viện để đọc file hoặc api từ backend
var promise = axios(objectAjax);

promise.then(renderTable).catch(function (error) {
  //hàm xử lý khi request thành công
  // console.log(response.data);

  //hàm xử lý khi request thất bại
  console.log(error);
});
