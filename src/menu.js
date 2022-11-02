import React from "react";
import { Link } from "react-router-dom";




const Menu=()=>{
    return(
        <div>
            <Link to="/">About</Link>
            <Link to="/contact">Contact</Link><br/>
        
        </div>
    )
}

export default Menu;