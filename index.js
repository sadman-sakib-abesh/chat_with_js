const express=require("express");
const app=express();
const cors=require("cors");
const socket=require("socket.io");
const http=require("http");
const server=http.createServer(app);
const io=socket(server)
const {getRoomUsers,addUser,removeUser,getUserById}=require("./users");
const port=4008;
app.use(cors());




io.on("connection",(socket)=>{

  socket.on("join",({name,room},callback)=>{
  console.log("join request ",name);
  const {error,user}=addUser({id:socket.id,name,room});
  
  if(error){
    callback(error);
  }


  socket.join(room);
  socket.emit("msgs",{
    user:"system",
    text:`welcome ${name} to ${room}.`
 , });
 socket.broadcast.to(room).emit("msgs",{
   user:"system",
   text:`${name} joined`,
 });
 
  });
  
  
  socket.on("msg",(msg)=>{
const user=getUserById(socket.id);
io.to(user.room).emit("msgs",{
   user:user.name,
   text:msg,
 });
  });
  
  
  socket.on("disconnect",()=>{
    const user=getUserById(socket.id);
if(user){
io.to(user.room).emit("msgs",{
   user:"system",
   text:`${user.name} left`,
 });
}
  removeUser(socket.id);

  });
  
});//io closing

















server.listen(port,(err)=>{
  if(err){
    console.log(err);
  }else{
  console.log(`server running localhost:${port}`);
  }
});