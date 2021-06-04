const innerHTML1 = `
<div class="content">
  <h2>Subscribe</h2>
  <small>Enter your email so we can send you the latest updates!</small>
  <form onsubmit="event.preventDefault()">
    <div class="field-wrapper">
      <input type="text" name="email" placeholder="email">
     
    </div>
    <div class="field-wrapper">
      <input type="submit" onclick="showThankYou()">
    </div>
  </form>
</div>
`;
const innerHTML2 = ` 
<div class="content">
  <h2>Sign in</h2>
  <form onsubmit="event.preventDefault()">
    <div class="field-wrapper">
      <input type="text" name="username" placeholder="username">
    
    </div>
    <div class="field-wrapper">
      <input type="password" name="password" placeholder="password" autocomplete="new-password">
     
    </div>
    <div class="field-wrapper">
      <input type="submit" onclick="showThankYou()">
    </div>
    <span class="psw" id="forgot" onclick="showForgotPassword()">Forgot Password?   </span>
    <span class="signup" onclick="showSignup()">Not a user?  Sign up</span>
  </form>
</div>
`;
const innerHTML3 = ` 
<div class="content">
  <h2>Forgot your password?</h2>
  <small>Enter your email so we can send you a reset link for your password</small>
  <form onsubmit="event.preventDefault()">
    <div class="field-wrapper">
      <input type="text" name="email" placeholder="email">
     
    </div>
    <div class="field-wrapper">
      <input type="submit" onclick="showThankYou()">
    </div>
  </form>
</div>
`;
const innerHTML4 = ` 
<div class="content">
  <h2>Sign up</h2>
  <form onsubmit="event.preventDefault()">
    <div class="field-wrapper">
      <input type="text" name="email" placeholder="email">
     
    </div>
    <div class="field-wrapper">
      <input type="password" name="password" placeholder="password" autocomplete="new-password">
     
    </div>
    <div class="field-wrapper">
      <input type="password" name="password2" placeholder="confirm password" autocomplete="new-password">
      
    </div>
    <div class="field-wrapper">
      <input type="submit" onclick="showThankYou()">
    </div>
    <span class="singin" onclick="showLogin()">Already a user?  Sign in</span>
  </form>
</div>
`;
const innerHTML5 = `     
<div class="content">
  <h2>Contact us</h2>
  <form onsubmit="event.preventDefault()">
    <div class="field-wrapper">
      <input type="text" name="name" placeholder="name">
    
    </div>
    <div class="field-wrapper">
      <input type="text" name="email" placeholder="email">
    
    </div>
    <div class="field-wrapper">
      <textarea placeholder="your message"></textarea>
    
    </div>
    <div class="field-wrapper" id="sp-sub">
      <input type="submit" onclick="showThankYou()">
    </div>
  </form>
</div>
</div>`;
const innerHTML6 = ` 
<div class="content">
  <div class="thank-you-msg">
    Thank you!
  </div>

`;

const signinHTML = `
<div class="btns">
<div id="form1" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Sign in</h3>
</div>
<div id="form2" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Sign in</h3>
</div>
<div id="form3" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Sign in</h3>
</div>
<div id="form4" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Sign in</h3>
</div>
<div id="form5" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Sign in</h3>
</div>


</div>`;

const mainHTML = `    <header class="head  " id="hover-head">
<i class="fab "><h1> Signin Options</h1></i>

<div class="btns">
<div id="form1" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Subscribe</h3>
</div>
<div id="form2" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Sign in</h3>
</div>
<div id="form3" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Forgot password?</h3>
</div>
<div id="form4" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Sign up</h3>
</div>
<div id="form5" class="home-in">
<!-- <i class="fas fa-home fa-2x"></i> -->
<h3 id="Sone">Contact us</h3>
</div>


</div>
</header>

<header class="head" id="header">
<i class="fab fa-spotify fa-3x"> Spotify Clone</i>

<div class="btns1">
<div class="opt-icons" id="home"><a href="Spotify_clone.html" target="_blank"><i class="fas fa-home fa-2x" ></i></a></div>

<div class="opt-icons" id="libry">
<i class="fab fa-spotify fa-2x"></i>
</div>

<div class="opt-icons" id="prem">
<a href="Spotify_clone.html" target="_blank">
<i class="fas fa-volleyball-ball fa-2x">

</i>
</a>
</div>
</div>
<div class="search">
<span class="search-icon"><i class="fas fa-search fa-2x"></i></span
><input type="text" id="search" value="search" />
</div>
</header>
<br />

<section class="container">
<div class="form-cont">
<div class="form">
<div class="face face-top" id="one">
<div class="content">
  <h2>Subscribe</h2>
  <small
    >Enter your email so we can send you the latest updates!</small
  >
  <form onsubmit="event.preventDefault()">
    <div class="field-wrapper">
      <input type="text" name="email" placeholder="email" />
    </div>
    <div class="field-wrapper">
      <input type="submit" onclick="showThankYou()" />
    </div>
  </form>
</div>
</div>
</div>
</div>


</section>`;
let mainpage = document.getElementById("load");
setTimeout(() => {
mainpage.style.display="none";
}, 1500);
setTimeout(() => {
alert("Click spotify icon to get help with sign in/log in");
}, 3000);
setTimeout(() => {
alert("Click ball icon to get back to playlist");
}, 4000);



let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let form4 = document.getElementById("form4");
let form5 = document.getElementById("form5");
let libry = document.getElementById("libry");
let cnt = 0;
libry.addEventListener("click", () => {
console.log("spot clicked");
let head = document.querySelector("header");
if (cnt === 0) {
head.classList.add("hover-head");
cnt = 1;
} else {
head.classList.remove("hover-head");
head.classList.add("hover-head-rev");
cnt = 0;
}
});
let prevvar = 0;

let one = document.getElementById("one");

const rotate1 = () => {
let form = document.querySelector(".form");
form.style.transform = "rotate(360deg)";
return 1;
};
const rotate2 = () => {
let form = document.querySelector(".form");
form.style.transform = "rotate(-360deg)";
return 0;
};

form1.addEventListener("click", () => {
console.log(prevvar);
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}

setTimeout(() => {
one.innerHTML = innerHTML1;
}, 1000);
});

form2.addEventListener("click", () => {
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}
setTimeout(() => {
one.innerHTML = innerHTML2;
}, 1000);
});

form3.addEventListener("click", () => {
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}
setTimeout(() => {
one.innerHTML = innerHTML3;
}, 1000);
});
form4.addEventListener("click", () => {
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}

setTimeout(() => {
one.innerHTML = innerHTML4;
}, 1000);
});
form5.addEventListener("click", () => {
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}

setTimeout(() => {
one.innerHTML = innerHTML5;
}, 1000);
});

function showThankYou() {
console.log("yeyeyeyeye");
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}

setTimeout(() => {
one.innerHTML = innerHTML6;
}, 1000);
}

const showForgotPassword = () => {
console.log("forgot clicked");
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}
setTimeout(() => {
one.innerHTML = innerHTML3;
}, 1000);
};

const showSignup = () => {
console.log("sugnup clicked");
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}
setTimeout(() => {
one.innerHTML = innerHTML4;
}, 1000);
};
const showLogin = () => {
console.log("signin clicked");
if (prevvar === 0) {
prevvar = rotate1();
} else {
prevvar = rotate2();
}
setTimeout(() => {
one.innerHTML = innerHTML2;
}, 1000);
};