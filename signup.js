var cromaUsers = JSON.parse(localStorage.getItem("cromaUserData")) || []

    let otpData = JSON.parse(localStorage.getItem("otpData")) || []

    document.getElementById("name").addEventListener("keypress", showAlert)
    document.getElementById("email").addEventListener("keypress", showAlert)
    document.getElementById("mobile").addEventListener("keypress", showAlert)
    document.getElementById("password").addEventListener("keypress", showAlert)


    let show = document.getElementById("show");
    
    let empty = document.getElementById("empty");

    function showAlert(){
        show.textContent = ""
        empty.textContent = ""
    }

    //console.log(cromaUsers)

    function signUp(){
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let mobile = document.getElementById("mobile").value
        let password = document.getElementById("password").value
        
        if (mobile.length > 0 && mobile.length<10){
            empty.textContent = ""
            show.textContent = "Incorrect number,Please enter a 10 digit mobile number or email to receive your OTP"
        }
        else if (name.length < 1 || mobile.length < 1 || email.length < 1 || password.length < 1){

            show.textContent = ""
            empty.textContent = "All fields are required"
        }
        else{
            let obj = {
                name: name,
                email: email,
                mobile: mobile,
                password: password
            }
            cromaUsers.push(obj)

            let otp = Math.floor(1000 + Math.random()*9000)

            let otp_data = {
                mobile:mobile,
                otp:otp
            }

            otpData.push(otp_data)

            alert(`${name} you are registered successfully`)

             window.location.href = "signin.html"


        }
        

        localStorage.setItem("cromaUserData", JSON.stringify(cromaUsers))

        localStorage.setItem("otpData", JSON.stringify(otpData))
        
    }