import React from 'react'
import firebase from '../util/firebase'
import Outform from './Outform'
import {Switch,Route} from 'react-router-dom'
export default function Addform() {
  const sendData =async ()=>{
    console.log("sended")
    const formno = document.getElementById('formno').value
    const nametxt = document.getElementById('name').value
    const materialtxt = document.getElementById('material').value
    const marktxt = document.getElementById('mark').value
    const touchtxt = document.getElementById('touch').value
    const datetxt = document.getElementById('date').value
    var firebaseRef =await firebase.database().ref('forms').child(formno).set({name:nametxt,material:materialtxt,mark:marktxt,touch:touchtxt,date:datetxt})
   
    window.open(`/outform/${formno}`)
    document.getElementById('formno').value=" "
    document.getElementById('name').value=" "
    document.getElementById('material').value=" "
    document.getElementById('mark').value=" "
    document.getElementById('touch').value=" "
    document.getElementById('date').value=" "
      
  }
 
  
  
  
    return (
        
    <form class="form-inline" action="#">
   <div class="form-group">
      <label for="number">Form no:</label>
      <input type="number" class="form-control" id="formno" placeholder="Enter Form number" name="text" />
    </div>
   <div class="form-group">
      <label for="text">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter text" name="text" />
    </div>
   <div class="form-group">
      <label for="text">Material:</label>
      <input type="material" class="form-control" id="material" placeholder="Enter Material" name="material" />
    </div>
   <div class="form-group">
      <label for="text">Mark:</label>
      <input type="text" class="form-control" id="mark" placeholder="Enter Mark" name="text" />
    </div>
   <div class="form-group">
      <label for="number">touch:</label>
      <input type="number"  class="form-control" id="touch" placeholder="Enter Touch" name="text" />
    </div>
   <div class="form-group">
      <label for="text">Date:</label>
      <input type="text" class="form-control" id="date" placeholder="Enter text" name="text" />
    </div>
   
    <button type="submit" class="btn btn-primary send" onClick={sendData}>Submit</button>
  </form>
        
    )
}
