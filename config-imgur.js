$(function(){
$(".upload").zzImgUr({
    cliendID: "74f5c858f447bb9",
    mode: "file",
    format: "o,",
    css: {
        width: "100%"
    },
    max: 10,
    loading: "https://i.imgur.com/m3NXDa6.gif",
    lang: {
        noID: "Ứng dụng chưa đăng ký",
      addImage: "Chọn ảnh",
      addURL: "Thêm URL",
      reset: "Làm mới",
      upload: "Tải lên",
      choose: "Đã chọn",
      waitConnect: "Đang kết nối...",
      waitUpload: "Đang tải lên...",
      noteURL: "Nhập URL ảnh vào đây:",
      errContact: '<a href="http://mamnonit.com" rel="nofollow" target="_blank">Nhấn vào đây</a> để báo lỗi.',
      errURL: "URL không truy cập được. trungpham99 - mamnonit.com",
      errSize: "URL lỗi hoặc kích thước quá nhỏ. trungpham99 - mamnonit.com",
      errRepeat: "URL không hợp lệ hoặc đã được sử dụng. trungpham99 - mamnonit.com"
    },
    success: function (firstVal, arrVal) {
        console.log(firstVal);
        console.log(arrVal);
    },
    input: function (arrInput) {
        console.log(arrInput);
        arrInput.click(function () {
            this.select();
            console.log(this);
        });
    },
    remove: function (firstVal, arrVal) {
        console.log(firstVal);
        console.log(arrVal);
    }
});
});