import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Login from './Login'
import {Signup} from './Signup'
class Nav extends Component{
    render()
    {
    	return(
    		<nav id="buttons">
             <button > <Link to="login">login</Link></button>
             <button > <Link to="signup">Signup</Link></button>
             </nav>
    		)
    }
}
export default Nav;
