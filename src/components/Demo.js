// import firebase from "../util/firebase";
// import React from 'react'

// export default function demo() {
//     var path =  firebase.database().ref('forms').child(1234);
// path.set({name:2121,material:2121,mark:2121,touch:2121,date:2121})
//     return (
//         <div>
            
//         </div>
//     )
// }

import React from 'react'
import firebase from '../util/firebase';
// import Outform from './Outform'
// import {Switch,Route} from 'react-router-dom'
// import demo from '../components/Demo'
export default function Addform() {
  const sendData =async ()=>{
    
    const formno = document.getElementById('formno').value
    const nametxt = document.getElementById('name').value
    const materialtxt = document.getElementById('material').value
    const marktxt = document.getElementById('mark').value
    const touchtxt = document.getElementById('touch').value
    const datetxt = document.getElementById('date').value
    await passFb(formno,nametxt,materialtxt,marktxt,touchtxt,datetxt);

    console.log(formno+nametxt+materialtxt+marktxt+touchtxt+datetxt)
    window.open(`/outform/${formno}`)
   
      
  }
 function passFb(formno,nametxt,materialtxt,marktxt,touchtxt,datetxt){
  var  path =  firebase.database().ref('forms').child(formno);
   path.set({name:nametxt,material:materialtxt,mark:marktxt,touch:touchtxt,date:datetxt});
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