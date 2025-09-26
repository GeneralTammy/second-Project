import React from "react";
import 'boxicons';
export default function Signup() {
    return (
       <section class="services">

            <div class="mission">
                <div class="business">
                    <h1>Sign up</h1>
                    <div class="link">
                    <a href="/Home" class="link-1">Home</a>
                    <a href="/Signup" class="link-2"> > sign up</a>
                    </div> 
                </div>
            </div>



            <div class="login-container">
                <div class="log">
                    <div class="log-in">
                        <box-icon class="us" name='user' size="cssSize" color="rgb(169, 240, 98)" type="solid"></box-icon>
                        <h1>Create Account</h1>
                        <p>start your journey with us</p>
                    </div>

                    <form class="login-form">
                        <div class="form-group">
                            <label class="pass">First Name</label>
                            <input type="name" id="name" class="form-control" placeholder="Enter Your First Name" required></input>
                        </div>

                        <div class="form-group">
                            <label class="pass">Last Name</label>
                            <input type="name" id="name" class="form-control" placeholder="Enter Your Last Name" required></input>
                        </div>

                        <div class="form-group">
                            <label>Date Of Birth</label>
                            <input type="date" id="date" class="form-control" placeholder="Date of Birth" required></input>
                        </div>
                        
                        <div class="form-group">
                            <label >Email Address</label>
                            <input type="email" id="email" class="form-control" placeholder="Enter Your Email" required></input>
                        </div>

                        <div class="form-group">
                            <label class="pass">Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter Your Password" required></input>
                            <a href="/home"><button class="login-btn">sign up</button></a>
                        </div>
                        <p>already have an account<a href="/Login"> Sign in</a></p>

                        
                            
                    

                    </form>
                </div>
            </div>
     </section>
    );
}


