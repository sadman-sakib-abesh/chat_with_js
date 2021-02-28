import logo from './logo.svg';
import './App.css';
import Join from './Join'
import Chat from './Chat'
import React,{Fregment} from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
const App=()=>{
  return(
    <>
    <Router>
    <Switch>
    <Route exact path="/" component={Join} />
  <Route path="/Chat" component={Chat} />
    </Switch>
    </Router>
 </>
  );
}



export default App;
