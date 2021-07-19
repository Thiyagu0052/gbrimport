import React from 'react'


export default function Header() {
  if(sessionStorage.getItem("email") === null){
    window.open("/","_self")
  }
  function logout(){
    sessionStorage.removeItem("email")
    window.open("/","_self")
   
  }
    return (
        <div>
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#" onClick={logout}>Gb Refinery</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="/newEntry">New Entry</a></li>
        <li ><a href="/entries">Entry's</a></li>
        
        
      </ul>
      <ul class="nav navbar-nav navbar-right">
        
        <li><a onClick={logout}><span class="glyphicon glyphicon-user"></span> Sign Out</a></li>
       
        
      
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
