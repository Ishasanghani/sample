import React from 'react'
import './Login.css';


export default function Login() {
    return (
        
        <div className="container">
        <div className="title-text">
            <div className="title user">login</div>
            
        </div>
    <div className="form-container">
        <div className="row mx-2">
            <div className="slide-controls btn-group mb-3 justify-content-center" role="group">
                <input type="radio" className="btn-check"  name="slide" id="user" checked/>
                <label className="slide user" for="user"> Student </label>
              
                <input type="radio" className="btn-check"name="slide" id="admin" />
                <label className="slide admin" for="admin">Faculty</label>
                <div className="slider-tab"></div>
              </div>
        </div>
    
    <div className="form-inner">
       <form action="#" className="admin">
        <div className="row mx-2 pt-4 pb-5 mb-4">
            <div className="input-group mb-3 ">
                <span className="input-group-text">No.</span>
                <div className="form-floating">
                    <input type="Number" className="form-control" name="name" id="name" placeholder="Enrollment Number"/>
                    <label for="name">Enrollment Number</label>
                </div>
            </div> 
            <div className="input-group mb-4">
                <span className="input-group-text">*</span>
                <div className="form-floating">
                    <input type="password" className="form-control" name="pass" id="pass" placeholder="Password" pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                    <label for="pass">Password</label>
                </div>
            </div>
                
            <center>
              
              <div className="btn-layer"> 
                
                <button type="Submit" className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5" id="submit">Submit</button>
                <button type="Reset"  className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5 " id="reset">Reset</button>
                <a > <button className="btn btn-primary mt-4 mx-1 pt-2 pb-2 px-5" id="register">Register</button></a>
                
              </div>
            </center>
           </div>
        </form>

     
        </div>
        </div>
    </div>
    

    )
  }

