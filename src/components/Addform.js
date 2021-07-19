import firebase from "../util/firebase";
import React from 'react'

export default function Addform() {
  
  const sendData = ()=>{
    
    const formno = document.getElementById('formno').value
    const nametxt = document.getElementById('name').value
    const materialtxt = document.getElementById('material').value
    const marktxt = document.getElementById('mark').value
    const touchtxt = document.getElementById('touch').value
    const datetxt = document.getElementById('date').value
    console.log(formno+nametxt+materialtxt+marktxt+touchtxt+datetxt)

    // console.log()
    var  path =  firebase.database().ref('forms').child(formno);
   path.set({name:nametxt,material:materialtxt,mark:marktxt,touch:touchtxt,date:datetxt});
   
 
      
  }
  return (
    <div>
       <form className="form-inline" action="/newEntry">
   <div className="form-group">
      <label >Form no:</label>
      <input type="number" className="form-control un" id="formno" placeholder="Enter Form number" name="formno" />
    </div>
   <div className="form-group">
      <label >Name:</label>
      <input type="text" className="form-control un" id="name" placeholder="Enter text" name="name" />
    </div>
   <div className="form-group">
      <label >Material:</label>
      <input type="material" className="form-control un" id="material" placeholder="Enter Material" name="material" />
    </div>
   <div className="form-group">
      <label >Mark:</label>
      <input type="text" className="form-control un" id="mark" placeholder="Enter Mark" name="mark" />
    </div>
   <div className="form-group">
      <label >touch:</label>
      <input type="number"  className="form-control un" id="touch" placeholder="Enter Touch" name="touch" />
    </div>
   <div className="form-group">
      <label >Date:</label>
      <input type="text" className="form-control un" id="date" placeholder="Enter text" name="date" />
    </div>
   
    <input type="button" value="submit" className="btn btn-primary send un" onClick={sendData} />
  </form>
    </div>
  )
}
