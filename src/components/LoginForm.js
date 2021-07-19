import React from 'react'
// import firebase from '../util/firebase

export default function LoginForm() {
    function login(){
        
        
        var userEmail = document.getElementById("email_field").value;
        var userPass = document.getElementById("password_field").value;
        if(userEmail === "GBR" && userPass==="gbr123"){
            sessionStorage.setItem("email",userEmail)
            window.open("/newEntry","_self")
        }
       
      
      }
    return (
    
       <div class="login">

        <div class="container ">
  <p id="logo">Gb Refinery Login form</p>
  <div class="main">
    <p class="sign" align="center">Sign in</p>
    <form class="form1" action="/newEntry">
      <input class="un " type="text" align="center"  id="email_field" placeholder="Username" />
      <input class="pass" type="password" align="center" id="password_field"  placeholder="Password" />
      <input type="submit" value="Sign in" class="submit" onClick={login} align="center" />
      
            
    </form>            
  </div>
  </div>
  </div>
     

    )
}
