import React from "react"
import { Link } from "react-router";

const Navigation = () => {
    return (
        <div>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>
        </div>
    );
}

export default Navigation;