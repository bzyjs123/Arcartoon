$(function(){

    //type-tab选取事件

    $('.type-tab>span').click(function(){
        $(this).addClass('active').siblings('span').removeClass('active');
        var idx = $(this).index();
        $('.father>.main').eq(idx).addClass('selected').siblings('div').removeClass('selected');
        });

    //账号验证
    
    function testUserName(){
        var username = $('#login-username').val();
        if(username == ""){
            $('#usemsg').addClass('selected');
            $('#login-username').addClass('error');
            $('#login-username').focus();
        }else{
            $('#usemsg').removeClass('selected');
            $('#login-username').removeClass('error');      
        }
    }

    //密码验证

    function testPwd(){
        var passwd = $('#login-passwd').val();
        if(passwd == ""){
            $('#pasmsg').addClass('selected');
            $('#login-passwd').addClass('error');
            $('#login-passwd').focus();
        }else{
            $('#pasmsg').removeClass('selected');
            $('#login-passwd').removeClass('error');
        }
    }

    //账号密码正确验证

    function turecode(){
        var username = $('#login-username').val();
        var passwd = $('#login-passwd').val();
        if(username == 'Admin' && passwd == '123456'){
            $(location).attr('href','../../wzr/index.html');
            $('upmsg').removeClass('selected');
        }else{
            $('#upmsg').addClass('selected');
            $('#login-username').addClass('error');
            $('#login-passwd').addClass('error');
        }
    }

    //键盘按下事件

    function keyUser(){
        var username = $('#login-username').val();
        if(!(username == "")){
            $('#usemsg').html("");
            $('#login-username').removeClass('error');
        }
    }


    function keyPwd(){
        var passwd = $('#login-passwd').val();
        if(!(passwd == "" )){
            $('#pasmsg').html("");
            $('#login-passwd').removeClass('error');
        }
    }

    //键盘事件

    $('#login-username').keypress(function(){
        keyUser();
    })

    $('#login-passwd').keypress(function(){
        keyPwd();
    })

    //enter提交事件

    $('#login-passwd').keydown(function(e){
        if(e.keyCode==13){
            $('#Login').click();
        }
    });


    $('#login-username').blur(function(){
        var username = $('#login-username').val();
        if(username == ""){
            $('#usemsg').addClass('selected');
            $('#login-username').addClass('error');
        }else{
            $('#usemsg').removeClass('selected');
            $('#login-username').removeClass('error');      
        }
    })


    $('#login-passwd').blur(function(){
        var passwd = $('#login-passwd').val();
        if(passwd == ""){
            $('#pasmsg').addClass('selected');
            $('#login-passwd').addClass('error');
        }else{
            $('#pasmsg').removeClass('selected');
            $('#login-passwd').removeClass('error');
        }
    })

    //点击事件
    $('#Login').click(function(){
        turecode();
    })
})