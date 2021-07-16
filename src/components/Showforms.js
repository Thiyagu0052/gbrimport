import React , {useEffect , useState} from 'react'
import firebase from '../util/firebase'

export default function Showforms() {
    const [LastForm , setLastForm]= useState([])
    var count = 0
    
    const getData = () =>{
        const form = firebase.database().ref('forms')
        form.on('value', (snapshot)=>{
            let Totalforms = snapshot.val()
            const formses = []
            for (let formno in Totalforms){
                formses.push({formno,formDetails :Totalforms[formno]})
                
            }
           
            setLastForm([...formses])
            // console.log(LastForm)
        }) 
    }
    useEffect(() => {
        getData()
    }, []) 
    return (
        <div class="table1">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Form No</th>
      <th scope="col">Name</th>
      <th scope="col">Material</th>
      <th scope="col">Mark</th>
      <th scope="col">Touch</th>
      <th scope="col">Date</th>
      <th scope="col">Delete Form</th>
    </tr>
  </thead>
  <tbody>
  {LastForm ? LastForm.map((x)=>(
    <tr>
      <th >{x.formno}</th>
      <td>{x.formDetails.name}</td>
      <td>{x.formDetails.material}</td>
      <td>{x.formDetails.mark}</td>
      <td>{x.formDetails.touch}</td>
      <td>{x.formDetails.date}</td>
      <td><a target="_blank" href={`outform/${x.formno}`}><button><span class="fa fa-print"/></button></a></td>
      
    </tr>
       
        
    )):""
    }
    </tbody>
    </table>

        {console.log(LastForm)}
   
            
        </div>
    )
}
