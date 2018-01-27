window.onload=function () {
    var oCover = document.getElementById("cover");
    var oPassWord = document.getElementById("password");
    var oLitPic = document.getElementById("little_pic");
    var oCover1 = document.getElementById("cover1");
    var oPassWord1 = document.getElementById("password1");
    var oLitPic1 = document.getElementById("little_pic1");
    var oWord = document.getElementById("word");
    //点击密码是否可见
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
    // 统计输入框已输入字数
    oWord.onkeydown = function countChar() {
        document.getElementById("counter").innerHTML = document.getElementById("word").value.length;
    };
    oWord.onkeyup = function countChar() {
        document.getElementById("counter").innerHTML = document.getElementById("word").value.length;
    };
    //登录注册验证
    var myLogin = document.getElementById('myLogin');
    var mySign = document.getElementById('mySign');
    var loginInput = myLogin.getElementsByTagName('input');
    var signInput = mySign.getElementsByTagName('input');
    var loginBtn = document.getElementsByClassName('loginBtn')[0];
    var signBtn = document.getElementsByClassName('signBtn')[0];
    var prompt = document.getElementsByClassName('prompt');
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
    signBtn.setAttribute('index','0');
    loginInput[0].onblur = function () {
        blur.call(this,0);
    };
    loginInput[1].onblur = function () {
        blur.call(this,1);
    }
    signInput[0].onblur = function () {
        if(this.value.indexOf(' ') != -1 || this.value == '') {
            prompt[2].style.visibility = 'visible';
        }
        else {
            prompt[2].style.visibility = 'hidden';
        }
    }
    signInput[1].onblur = function () {
        if(!reg.test(this.value) || this.value == '') {
            prompt[3].style.visibility = 'visible';
        }
        else {
            prompt[3].style.visibility = 'hidden';
        }
    }
    function blur(i) {
        if(this.value == '') {
            prompt[i].style.visibility = 'visible';
        }
        else {
            prompt[i].style.visibility = 'hidden';
        }
    }
    signBtn.onclick = function () {
        var flag = true;
        if(!reg.test(signInput[1].value) || signInput[1].value == '' || signInput[0].value.indexOf(' ') != -1 || signInput[0].value == '')
        {
            flag = false;
        }
        if(flag){
            this.setAttribute('index','1');
        }
        // if(!flag)
        // {
        //     return false;
        // }else{
        //     this.setAttribute('index','1');
        //     return false;
        // }
    }
    //记住密码
    var rem = document.getElementById('remember');
    loginBtn.onclick = function () {
        var flag = true;
        for(var j = 0;j < 2;j ++)
        {
            if(loginInput[j].value == '')
            {
                flag = false;
            }
        }
        if(flag)
        {
            if(rem.checked){
                localStorage.setItem("lybName",loginInput[0].value);
                localStorage.setItem("lybPassWord",loginInput[1].value);
            }
            sessionStorage.setItem("lybName",loginInput[0].value);
            sessionStorage.setItem("lybPassWord",loginInput[1].value);
            alert("登录成功！");
        }
        else {
            alert("请正确填写以上信息！")
            return false;
        }

    }
    if(localStorage.getItem("lybName") != '' && localStorage.getItem("lybPassWord") != '')
    {
        loginInput[0].value = localStorage.getItem("lybName");
        loginInput[1].value = localStorage.getItem("lybPassWord");
        rem.checked = 'checked';
    }
    //发表
    var pub = document.getElementById('pub');
    var word = document.getElementById('word');
    pub.onclick = function () {
        if(word.innerHTML == ''){
            alert("发表内容不能为空！");
            return false;
        }else {
            alert("发表成功！");
        }
    }
}

