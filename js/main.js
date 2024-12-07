let signupNameInput = document.getElementById("Name");
let signupEmailInput = document.getElementById ("Email");
let signupPasswordInput = document.getElementById ("Password");




let sing=[];
if(JSON.parse(localStorage.getItem("alltext")!==null)){
  sing = JSON.parse(localStorage.getItem("alltext"));
}

let userNameWelcome =[];


if(JSON.parse(localStorage.getItem("usernaem")!==null)){
  userNameWelcome = JSON.parse(localStorage.getItem("usernaem"));
}







function singup(){

 let site={
  user:signupNameInput.value,
  emai:signupEmailInput.value,
  pass:signupPasswordInput.value,
 };


 sing.push(site);

 localStorage.setItem("alltext",JSON.stringify(sing));



 if(signupNameInput.value == "" ||
    signupEmailInput.value == ""||
     signupPasswordInput.value == ""){
   console.log("hiiii")
document.getElementById("action").innerHTML=`<p id="action" class="text-danger ">All inputs is required</p>`
 }
 else{
  console.log("byeeeeer")
document.getElementById("action").innerHTML=`<p id="action" class="text-success ">Sucess</p>`

 }

//  if (
//   signupNameInput.value == "" ||
//   signupEmailInput.value == ""||
//   signupPasswordInput.value == ""
// ) {
//   document.getElementById(
//     "messageError"
//   ).innerHTML =  <span id="messageError" class="text-danger  ">All inputs is required</span>;
// } else {
//   document.getElementById(
//     "messageError"
//   ).innerHTML =  <span id="messageError" class="text-success">Sucess</span>;
// }
clearData();
};



function clearData(){
  signupNameInput.value="";
  signupEmailInput.value="";
  signupPasswordInput.value="";

  signupNameInput.classList.remove("is-valid");
  signupEmailInput.classList.remove("is-valid");
  signupPasswordInput.classList.remove("is-valid");
};



function validateForm(vir){

  let regex={
    Name:/^\w{3,}(\s+\w+)*$/,
    Email:/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
    Password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  };



let isvalid = regex [vir.id].test(vir.value);
console.log(isvalid);

};














// function singup() {
//   if (isEmpty()) {
//     document.getElementById('action').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
//     return;
//   }

//   let site = {
//     user: signupNameInput.value,
//     email: signupEmailInput.value,
//     pass: signupPasswordInput.value,
//   };

//   if (!isEmailExist()) {
//     document.getElementById('action').innerHTML = '<span class="text-danger m-3">Email already exists</span>';
//     return;
//   }

//   sing.push(site);
//   localStorage.setItem('alltext', JSON.stringify(sing));
//   document.getElementById('action').innerHTML = '<span class="text-success m-3">Success</span>';
//   clearData();
// }





let signinEmail= document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");

if(document.title=="logout"){
  
  document.getElementById("welcome").innerHTML= `Welcome ${userNameWelcome[userNameWelcome.length - 1 ]}` 
};


    
console.log(userNameWelcome);

function Login(){

for (let i = 0; i < sing.length; i++) {
  if (signinEmail.value == sing[i].emai && signinPassword.value == sing[i].pass) {
   console.log("match");

   userNameWelcome.push(sing[i].user);
   localStorage.setItem("usernaem", JSON.stringify(userNameWelcome))
   location.assign("http://127.0.0.1:5501/index3.html");
   cleaData();
  }else{
   console.log("Not-match");
   document.getElementById("yes").innerHTML=`<p id="yes" class="text-danger ">All inputs is required</p>`;
  };
};


    

};


function cleaData(){
    signinEmail.value="";
    signinPassword.value="";

  
    signinEmail.classList.remove("is-valid");
    signinPassword.classList.remove("is-valid");
  };


  // function validateForm(vir){

  //   let regex={
  //     Name:/^\w{3,}(\s+\w+)*$/,
  //     Email:/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
  //     Password:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  //   };
  
  
  
  // let isvalid = regex [vir.id].test(vir.value);
  
  
  // if (isvalid){
  //   vir.classList.remove("is-invalid");
  //   vir.classList.add("is-valid");
  
  // }
  // else{
  //   vir.classList.remove("is-valid");
  //   vir.classList.add("is-invalid");
  // }
  
  // return isvalid;
  
  
  
  
  // };















