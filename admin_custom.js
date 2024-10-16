// Hàm hiển thị popup hình ảnh khi click
function showImagePopup(img) {
    // Tạo div popup
    var popup = document.createElement('div');
    popup.classList.add('image-popup');
    popup.innerHTML = '<img src="' + img.src + '" />';
    document.body.appendChild(popup);
    popup.style.display = 'flex';

    // Click để đóng popup
    popup.onclick = function () {
        popup.style.display = 'none';
        document.body.removeChild(popup);
    };
}
