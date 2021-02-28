import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState,createRef} from 'react'
import {useLocation,Link} from 'react-router-dom'
import queryString from 'query-string'
import io from 'socket.io-client'
import ScrollToBottom  from 'react-scroll-to-bottom'



let socket;



const Chat = () => {
  const [msg,setMsg]=useState([])
  const {search}=useLocation()
  const {name,room}=queryString.parse(search );

useEffect(()=>{
  socket=io.connect("http://localhost:4008/",{reconnect:false})
  socket.emit("join",{name,room},(error)=>{
    alert(error)
    window.location.replace("/");
  })
  
  
  
  socket.on("msgs",(msgs)=>{
    
    setMsg((existingMsg)=>[...existingMsg,msgs])
  })

return ()=>{
  socket.emit("disconnect");
  socket.close();
}
  
},[])

function toggle() {
  var x = document.getElementById("users");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

  
  
const send=(e)=>{
  if(e.key === "Enter" && e.target.value){
socket.emit("msg",e.target.value)
e.target.value="";

  }
}
  
  return(
      <div>
    
 <ScrollToBottom id="body" className="root">
  <nav id="header">{room}<Link to="/" id="leave">x</Link></nav>
  <br/><br/><br/>
 
  {msg.map((message,index)=>
   
    <div key={index} className={`message ${name===message.user?"self":""}`}>
    <span className="user"><b>{message.user}</b></span><span className="message-text">{message.text}</span>
    <br />
    </div>
  
  )}
  


</ScrollToBottom>
<br/><br/><br/><br/><br/><br/>
  <div id="sending">
  <input placeholder="Aa" id='in' onKeyDown={send} />
  </div>

  
    </div>
  );
}



export default Chat;
