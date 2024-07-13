let signInbtn = document.querySelector('.signinbtn');
let signUpbtn = document.querySelector('.signupbtn');
let title = document.querySelector('.title');
let namefield = document.querySelector('.name-field');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text1');
let isSignup = false;


signInbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpbtn.classList.add('disable');
    signInbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
    isSignup = false;
    console.log("clicke on signin ", isSignup);
})
signUpbtn.addEventListener('click', () => {
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestion';
    signUpbtn.classList.remove('disable');
    signInbtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
    isSignup = true;
    console.log("clicked on signup", isSignup);
})

function data() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const Password = document.getElementById("password").value.trim();
    const namepattern = /^[a-zA-Z\s]+$/;

    if (isSignup) {
        if (name == "" || email == "" || Password == "") {
            alert("all data are mandatory! ");
            return false;
        }
        else if (!namepattern.test(name)) {
            alert("only character are allowed! ");
            return false;
        }
        else if (Password.length < 8) {
            alert("password must containe 8length");
            return false;
        }
        else {
            return true;
        }
    } else {
        if (email == "" || Password == "") {
            alert("all data are mandatory! ");
            return false;
        }
        else if (Password.length < 8) {
            alert("password must containe 8length");
            return false;
        }
        else {
            return true;
        }
    }

}