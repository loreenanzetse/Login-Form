import React, {useState}from "react";
import LoginForm from "./components/loginform";

function App() {
  const adminUser ={
    email:"anloreen103@gmail.com",
    password:"keziah123"
  }

  const[user,setUser] =useState({name:"",email:""});
  const[error,setError] =useState("");

  const Login = details =>{
    console.log(details);

    if( details.email==adminUser.email && details.password==adminUser.password,
      console.log("Log In"),
      setUser({
        name:details.name,
        email:details.email
      }));  
    } 
  

  const Logout =() =>{
    console.log ("Logout");
  }
  return (
    <div className="App">
      {(user.email !="") ?(
        <div className="welcome">
          <h2>welcome,<span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ):(
        <LoginForm Login={Login} error={error}></LoginForm>
      )}
    </div>
  );
}
export default App;
