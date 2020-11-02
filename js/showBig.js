var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for(var i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListener("click", changePic);
}

function changePic() {
    var newPic = this.src; //this는 클릭한 smallPics(직전에 실행)
    bigPic.setAttribute("src", newPic);
}