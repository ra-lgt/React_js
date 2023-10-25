import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom';
class Login extends Component{
	render(){
		return (
			<div>
			<form>
			<label>Email : </label>
			<input type="email" required/>
			<br></br>
			<label>Ph no : </label>
			<input type="tel" required/>
			<br></br>
			<button><Link to="/">Login</Link></button>
			<br></br>
			<h2><Link to="/signup">New user</Link></h2>
			</form>
			</div>
			)
	}
}

export default Login;
