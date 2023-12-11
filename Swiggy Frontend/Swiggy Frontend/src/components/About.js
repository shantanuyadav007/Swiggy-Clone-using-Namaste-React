import User from "./user";
import UserClass from "./UserClass";
import { Component } from "react";

const About=()=>{
    return(
        <div class="text-center m-4p-4"> 
          <h1 class="text-2xl font-bold">User Profile</h1>
          <h2 className="text-lg "> This is User Profile </h2>
          
          <UserClass/>
        </div>

    );
};
export default About;