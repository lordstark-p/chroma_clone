

    let btn = document.getElementById("button")
    btn.disabled = true;

    let enter = document.getElementById("otp")
     enter.addEventListener("keypress", valid)

     let error = document.getElementById("show")

     var count = 0;
     function valid(){
        var input = document.getElementById("otp").value;
         console.log(input.length)
        count++
        error.textContent = ""
        if(count == 4){
            btn.disabled = false;
            btn.style.backgroundColor = "turquoise";
            btn.style.color = "#121212"

            console.log("valid")
        }
        else{
            btn.disabled = true;
        }
        
     }


    //console.log(input)

    var otpData = JSON.parse(localStorage.getItem("otpData"))
    
    let phone = otpData[otpData.length-1].mobile
    let otpPin = otpData[otpData.length-1].otp
    
    let a = document.createElement("a");
    a.textContent = phone;


    let msg = document.getElementById("success");
    msg.append(a)

    //msg.textContent = `OTP sent successfully to ${a}`


    //console.log(cromaUsers)

    

    let otp = Math.floor(1000 + Math.random()*9000)

    function sendOtp(){
        alert(`${otp} is your OTP to register with Croma. This OTP is valid for 15 minutes`)
        let i = 30;
    let id = setInterval(function (){
        let receive = document.getElementById("receive")
        if(i == 0){
            clearInterval(id)

            validMsg.textContent = null
            receive.textContent = "Resend"

        }
        else {
            validMsg.textContent = `Resend in ${i} secs`;

            receive.textContent = null
        }
        console.log(i);
        
        i--;
    }, 1000)
    }

    let validMsg = document.getElementById("validMsg")
    let receive = document.getElementById("receive")

    
    

    let i = 30;
    let id = setInterval(function (){
        if(i == 0){
            clearInterval(id)

            validMsg.textContent = null
            receive.textContent = "Resend"

        }
        else {
            validMsg.textContent = `Resend in ${i} secs`
        }
        // console.log(i);
        
        i--;
    }, 1000)


    function otpCheck(){
        // var input = document.getElementById("otp").value;
        // if(input != otpPin){
        //     error.textContent = "Please Enter Correct OTP"
        // }else{
        //     window.location.href = "index.html"
        // }
        window.location.href = "index.html"
        console.log(input)
    }