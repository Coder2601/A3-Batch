import React, { useState } from 'react';
import {Lifecycles} from './components/classbasedComps/Lifecycle-methods/Lifecycles';

function App() {
  
  const[isLogin, setLogin] = useState(false);

  return (
    <>
      
      {
      isLogin?
      <>
      <button onClick={()=>setLogin(false)}>Logout</button>
      <Lifecycles />
      </>
      :
      <>
      <button onClick={()=>setLogin(true)}>Login</button>
      <Login/>
      </>
      }
    </>      
  );
}

export class Login extends React.Component{
  componentWillUnmount(){
    console.log('componentWillUnmount chal peyaa..');
  }
  render(){
      return(
          <>
            Login Component
          </>
      )
  }
}

export {App}
