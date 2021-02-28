let users=[];

const addUser=({id,name,room})=>{
  if(name,room){
  name=name.trim().toLowerCase();
room=room.trim().toLowerCase();
const existing=users.find(user=>user.name===name && user.room===room);
if(existing){
  return{error:"user exist"};
}
}

const user={
  id,
  name,
  room
}

users.push(user);

return user;

}

const removeUser=(id)=>{
  const index=users.findIndex(user=> user.id === id);
  if(index !==-1){
    return users.splice(index,1)[0];
  }
}



const getUserById=(id)=>{
  const user=users.find((user)=>user.id===id);
  return user;
}


const getRoomUsers = (room) =>{
  const roomUser=users.filter((user)=>user.room===room);
  return roomUser;
}

module.exports={
  addUser,
  removeUser,
  getUserById,
  getRoomUsers
};
