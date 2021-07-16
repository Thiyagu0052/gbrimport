
import React , {useState,useEffect} from 'react'
import firebase from '../util/firebase'
export default function Outform(props) {
    
    const [lastArr , setlastArr]= useState([])
    const opformno  = props.match.params.id
    console.log(opformno);
    const activateFire =async () =>{
    const form =await firebase.database().ref('forms')
        form.on('value', (snapshot)=>{
            let Totalforms = snapshot.val()
            let lastAr = []
            let obtainForm = Totalforms[opformno]
            lastAr.push(obtainForm)
        const newState = [...lastAr]
        setlastArr(newState)
       
        console.log(lastArr.map((x)=>(x.name)))
    })
    }
    useEffect(() => {
        activateFire()
    }, [])
 return (
        <>
        <div>
          {lastArr?lastArr.map((x)=>(
              <>

                  <h1>{opformno}</h1>
                  <h1>{x.name}</h1>
                  <h1>{x.material}</h1>
                  <h1>{x.mark}</h1>
                  <h1>{x.date}</h1>
                  <h1>{x.touch}</h1>
                          {setTimeout(() => { window.print() }, 5000)}
              </>
              )):""}
          haai
        </div>
        </>
    )
}
