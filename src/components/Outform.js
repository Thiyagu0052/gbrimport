
import React , {useState,useEffect} from 'react'
import firebase from '../util/firebase'



export default function Outform(props) {
    
    const [lastArr , setlastArr]= useState([])
   
    
    const opformno  = props.match.params.id
   
    const activateFire =async () =>{
    const form =await firebase.database().ref('forms')
        form.on('value', (snapshot)=>{
            let Totalforms = snapshot.val()
            let lastAr = []
            let obtainForm = Totalforms[opformno]
            lastAr.push(obtainForm)
        const newState = [...lastAr]
        setlastArr(newState)
        setTimeout(function(){ window.print() }, 3000);
    
    })
    }
    useEffect(() => {
        activateFire();
    }, [])
    // var firstDig = ''
    // var secondDig = ''
    // var thirdDig = ''
    // var fourthDig = ''
    // System for American Numbering 
var th_val = ['', 'thousand', 'million', 'billion', 'trillion'];
// System for uncomment this line for Number of English 
// var th_val = ['','thousand','million', 'milliard','billion'];
 
var dg_val = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tn_val = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tw_val = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
function toWordsconver(s) {
  s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s))
        return 'not a number ';
    var x_val = s.indexOf('.');
    if (x_val == -1)
        x_val = s.length;
    if (x_val > 15)
        return 'too big';
    var n_val = s.split('');
    var str_val = '';
    var sk_val = 0;
    for (var i = 0; i < x_val; i++) {
        if ((x_val - i) % 3 == 2) {
            if (n_val[i] == '1') {
                str_val += tn_val[Number(n_val[i + 1])] + ' ';
                i++;
                sk_val = 1;
            } else if (n_val[i] != 0) {
                str_val += tw_val[n_val[i] - 2] + ' ';
                sk_val = 1;
            }
        } else if (n_val[i] != 0) {
            str_val += dg_val[n_val[i]] + ' ';
            if ((x_val - i) % 3 == 0)
                str_val += 'hundred ';
            sk_val = 1;
        }
        if ((x_val - i) % 3 == 1) {
            if (sk_val)
                str_val += th_val[(x_val - i - 1) / 3] + ' ';
            sk_val = 0;
        }
    }
    if (x_val != s.length) {
        var y_val = s.length;
        str_val += 'point ';
        for (var i = x_val + 1; i < y_val; i++)
            str_val += dg_val[n_val[i]] + ' ';
    }
    return str_val.replace(/\s+/g, ' ');
}
   
 return (
        <>
        <div>
          {lastArr?lastArr.map((x)=>(
              <>
                    
                  
                  <h1 className="formNo">{opformno}</h1>
                  <h1 className="fname">{x.name}</h1>
                  <h1 className="fmaterial">{x.material}</h1>
                  <h1 className="fmark">{x.mark}</h1>
                  <h1 className="fdate">{x.date}</h1>
                  <h1 className="ftouch">{x.touch.slice(0,2)}</h1>
                  <h1 className="ftouchslice">{x.touch.slice(3,)}</h1>
                
                  <h1 className="ftouch1">{toWordsconver(parseInt(x.touch[0]))}</h1>
                  <h1 className="ftouch2">{toWordsconver(parseInt(x.touch[1]))}</h1>
                  <h1 className="ftouch3">{toWordsconver(parseInt(x.touch[3]))}</h1>
                  <h1 className="ftouch4">{toWordsconver(parseInt(x.touch[4]))}</h1>
                  
                  
                  
                  
                  
                 
                  
                        
              </>
              )):""}
          
        </div>
        </>
    )
}
