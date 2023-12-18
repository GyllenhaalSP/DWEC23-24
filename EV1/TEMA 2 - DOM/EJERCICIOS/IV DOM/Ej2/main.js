function checkMail(){
    var regex = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
    var mail = document.getElementById("email");
    var error = document.getElementsByClassName("hidden");

    function check(){
        if(mail.value.match(regex)){
            mail.setAttribute("class", "ok");
            error[0].style.display = "none";
        }else{
            mail.setAttribute("class", "error");
            error[0].style.display = "block";
            error[0].style.color = "red";
        }
    }

    check();

    mail.onchange = function(){
        check()
    }
}