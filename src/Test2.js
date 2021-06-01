
import {useState,useEffect} from "react"
 

function Test2 () { 
    const [datas,setData]=useState([])    
   
async function getdata (){
        let myResult = await fetch ('https://randomuser.me/api/')
        
        try{
            let respon =await myResult .json()
             console.log (respon,"res")
            setData (respon)
            console.log (datas,"my data")
        }catch {console.log ("error")}
       
    }
    
   
    
   
    
    
   return(
       <div>
       {datas.results?.map((data)=>{
            return (
                <div>
                 <img src ={data.picture.large}/>  
                <div> Email :{data.email}  </div>
                <div> Male :{data.gender}  </div>
                <div> {data.name.title} {data.name.first}  {data.name.last} </div>
                </div>
                
                
            )
       })}
       <div>

       <button 
       onClick = {getdata}
       > Click me </button>
       </div>
       </div>
   )
     
}
export default Test2;
