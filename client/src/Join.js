import logo from './logo.svg';
import './App.css';
import React,{Fregment,useState} from 'react'
import {Link} from 'react-router-dom'

const Join=()=>{
  
  const [name,setName]=useState("");
const [room,setRoom]=useState("");
  
  
  
  
    
  return(
      <>
  <br />  <br />
  <center>
      <div id="full">
<br />
      <input type="text" id="in1" onChange={(e)=>setName(e.target.value)} placeholder="name" />
  <br />
   <input type="text" id="in1" onChange={(e)=>setRoom(e.target.value)} placeholder="room"/>
     <br />
      <br /><Link to={`/Chat?name=${name}&room=${room}`} id="btn">   join    </Link>
      </div>
      </center>
  
    </>
  );
}



export default Join;
