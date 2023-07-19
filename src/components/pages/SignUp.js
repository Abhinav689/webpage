import React,{useState} from 'react'
import axios from 'axios';
import './Signup.css';


  

const App = () => {

  
  const [data,setData]=useState({

    username:'',email:'',
    password:'',confirmpassword:"",
  })
  const {username,password,email,confirmPassword}=data;
  const changeHandler =e =>{
setData({...data,[e.target.name]:e.target.value});
  }
  const submitHandler= e=>{
    e.preventDefault()
    if(password!==confirmPassword){
      alert("passwords do not match");
    }
    else
     axios.post('https://loginform-2f043-default-rtdb.firebaseio.com/loginform.json',data).then(()=>alert("submitted successfully"))
    }
    return (
    <div className='bck'>
      <center>
      <div className="register">
                    
            
                <h2 className="title">Sign In</h2>
                <p className="subtitle"> register and enjoy the service</p>
                
            <form  id ='form' className='forms' onSubmit={submitHandler}>
            <div className="inputs_container">
                     <h2>Enter your name:</h2><br />
                    <input type='name' name='username' placeholder='Username' value={username} onChange={changeHandler} /><br />
                         <h2> Enter your Email address:</h2><br />
                       <input type='email' name= "email" placeholder='Enter your email' value={email} onChange={changeHandler} /><br />
                           <h2>Create a New password:</h2><br />
             <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandler}/><br />
               <  h2> Confirm Password:</h2><br />
            <input type='password'name="confirmPassword"  placeholder='Confirm Password' value={confirmPassword} onChange={changeHandler}/><br/>
           
            </div>
               <button input type='submit' name='submit' className="btn">Sign In</button>
             
              </form>
              </div>
             
           
         </center>

      
          </div>
         
      
  )
}

export default App
  