import React,{useState} from 'react'

import { NavLink ,useHistory } from 'react-router-dom'
//taking data from react
function Signup() {
     const history = useHistory()
     const [user, setuser] = useState({
         name:"",email:"",phone:"",work:"",password:"",cpassword:""
     })
let name,value; //making global key value pair
   const handleInputs=(e)=>{
    name=e.target.name;
    value=e.target.value;

    setuser({...user,[name]:value}) // using key-value pair in setuser
   }

//connecting frontend with backend
const PostData= async (e) =>{
    e.preventDefault();

    const {name,email,phone,work,password,cpassword}=user; //object destructuring
    const res=await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({  //when sending data  to a web server ,the data has to be a string
        name,email,phone,work,password,cpassword  //as key and value pair is same ,no need to write it twice.           
        })
    })
    const data= await res.json()
    if (res.status === 422 || !data) {
        window.alert("INVALID REGISTRATION")
        console.log(`INVALID REGISTRATION`);
    }else{
        window.alert(" REGISTRATION SUCCESSFULL")
        console.log(` REGISTRATION SUCCESSFULL`);

        history.push("/login") //if registration is sucessfull then it will redirect us to login page
    }
}



    return (
        <>
            <div className="signup-form">
                <form  method="POST" />
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <span className="fa fa-user"></span>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="name" 
                        value={user.name}
                        onChange={handleInputs}
                        placeholder="Username" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" className="form-control" name="email" 
                        value={user.email}
                        onChange={handleInputs}
                        placeholder="Email Address" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-phone"></i>
                            </span>
                        </div>
                        <input type="number" className="form-control" name="phone" 
                        value={user.phone}
                        onChange={handleInputs}
                        placeholder="Phone Number" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                            <i className="fa fa-briefcase"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="work" 
                        value={user.work}
                        onChange={handleInputs}
                        placeholder="Your Profession" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="password" 
                        value={user.password}
                        onChange={handleInputs}
                        placeholder="Password" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fa fa-lock"></i>
                                <i className="fa fa-check"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control" name="cpassword" 
                        value={user.cpassword}
                        onChange={handleInputs}
                        placeholder="Confirm Password" required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <NavLink to="/login">Terms of Use</NavLink> &amp; <NavLink to="/login">Privacy Policy</NavLink></label>
                </div>
                <div className="form-group">
                    <button type="submit" name="signup" value="register"  onClick={PostData} className="btn btn-primary btn-lg">Sign Up</button>
                </div>

                <div className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></div>

            </div>

        </>
    )
}

export default Signup
