import React, {useState} from 'react'
import { connect } from 'react-redux'
import {userLoggingIn} from '../redux/Actions/userActions'
import LoginSignUpForm from '../Components/LoginSignUpForm'
import { useHistory , Redirect} from 'react-router-dom';



const Login = (props) => {


    const history = useHistory()

    const userLoggingIn = (userInfo) => {
    
         props.userLoggingIn(userInfo)
        
         
       
        
         
     }
     if(localStorage.getItem("token")) {
        console.log(props)
        history.push('/home')
    }
        
        return (
            
           <div >
               <div>

              
     <p>
       <p>For Demo purpose only</p>
      <p>Please register to see all the features.</p>
     <p>Sign in with these credentials if you're in a hurry.</p> 
      <p>Username : shikhar</p>
      <p>Password : shikhar</p>
      </p>
      </div>
  <LoginSignUpForm formType="Login" userLoggingIn = {userLoggingIn}/>
  
  
  </div> 

        )
    }


const dispatchMapper = {
    userLoggingIn : userLoggingIn
} 

const stateMapper = (state) => {
    return {
        user : state.userReducer.user,
        isAuthenticated : state.userReducer.isAuthenticated
    }
}

export default connect(stateMapper, dispatchMapper)(Login);
