window.onload=function () {
    var oCover = document.getElementById("cover");
    var oPassWord = document.getElementById("password");
    var oLitPic = document.getElementById("little_pic");
    var oCover1 = document.getElementById("cover1");
    var oPassWord1 = document.getElementById("password1");
    var oLitPic1 = document.getElementById("little_pic1");
    var oWord = document.getElementById("word");
    oCover.onclick = function () {
        if (oPassWord.type === 'text') {
            oPassWord.type = 'password';
            oLitPic.className = 'glyphicon glyphicon-eye-open form-control-feedback';
        } else {
            oPassWord.type = 'text';
            oLitPic.className = 'glyphicon glyphicon-eye-close form-control-feedback';
        }
    };
    oCover1.onclick = function () {
        if (oPassWord1.type === 'text') {
            oPassWord1.type = 'password';
            oLitPic1.className = 'glyphicon glyphicon-eye-open form-control-feedback';
        } else {
            oPassWord1.type = 'text';
            oLitPic1.className = 'glyphicon glyphicon-eye-close form-control-feedback';
        }
    };
    oWord.onkeydown = function countChar() {
        document.getElementById("counter").innerHTML = document.getElementById("word").value.length;
    };
    oWord.onkeyup = function countChar() {
        document.getElementById("counter").innerHTML = document.getElementById("word").value.length;
    };
}