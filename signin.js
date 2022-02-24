let data = JSON.parse(localStorage.getItem("cromaUserData"))

    document.getElementById("userId").addEventListener("keypress", showAlert)
    var show = document.getElementById("show");
    
    var empty = document.getElementById("empty");
    

    function showAlert(){
        show.textContent = ""
        empty.textContent = ""
    }
    
    function signIn(){

        let userId = document.getElementById("userId").value;
        let password = document.getElementById("password").value;

        let otpData = JSON.parse(localStorage.getItem("otpData")) || []
        
        
        // if (userId.length > 0 && userId.length<10){
        //     empty.textContent = ""
        //     show.textContent = "Incorrect number,Please enter a 10 digit mobile number or email to receive your OTP"
        // }
        // else 
        console.log(userId.length, password.length)
        if (userId.length < 1 || password.length < 1){

            show.textContent = ""
            empty.textContent = "All fields are required"
        }
        else{
            var count  = 0;

            for(var i = 0; i<data.length; i++){
                if((userId == data[i].mobile || userId == data[i].email) && (password == data[i].password)){

                    let otp = Math.floor(1000 + Math.random()*9000)

                    let otp_data = {
                        mobile:userId,
                        otp:otp
                    }

                    otpData.push(otp_data)

                    
                    window.location.href = "./otp.html"

                    //alert(`${otp} is your OTP to register with Croma. This OTP is valid for 15 minutes`)

                    count++
                }
            }

            if(count == 0){
                alert("Please Enter Correct Email and Password")
                //window.location.href = "./signup.html"
            }
        }
        
        localStorage.setItem("otpData", JSON.stringify(otpData))

        
        
    }