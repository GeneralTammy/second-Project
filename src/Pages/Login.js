import React from "react";
import 'boxicons';
export default function Login() {

    
    return (
        <section class="services">

            <div class="mission">
                <div class="business">
                    <h1>Sign In</h1>
                    <div class="link">
                    <a href="/Home" class="link-1">Home</a>
                    <a href="/login" class="link-2"> > sign in</a>
                    </div> 
                </div>
            </div>



            <div class="login-container">
                <div class="log">
                    <div class="log-in">
                        <box-icon class="us" name='user' size="cssSize" color="rgb(169, 240, 98)" type="solid"></box-icon>
                        <h1>welcome back</h1>
                        <p>sign in your account</p>
                    </div>

                    <form class="login-form">
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" id="email" class="form-control" placeholder="Enter Your Email" required/>
                        </div>

                        <div class="form-group">
                            <label class="pass">Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter Your Password" required/>
                            <button class="login-btn">sign in</button>
                        </div>
                        <p>don't have an account<a href="./Signup"> Sign up</a></p>

                        
                            
                    

                    </form>
                </div>
            </div>
     </section>
    );


    
}











