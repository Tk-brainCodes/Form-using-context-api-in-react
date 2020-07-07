import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './form.css';

class Forms extends Component {
    render() {
        return (
            <div className="main">
                 <div className="form-color">
                    <i className="fad fa-lock-alt"></i>
                    <h1 id="sign-in">Sign in</h1>
                    <Select value="English" className="select-box">
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="French">French</MenuItem>
                        <MenuItem value="Spain">Spain</MenuItem>
                    </Select>
                    <form className="form">
                        <div className="form-control">
                            <input type="email" id="email" autoFocus aria-label="email" placeholder='Email' />
                            <input type="password" id="password" autoFocus aria-label="password" placeholder="Password" />
                        </div>
                        <div className="FormControlBox">
                            <input type="checkbox" id="checkbox" name="checkbox" aria-label="checkbox" />
                            <label id="remember" htmlFor="Remember me">Remember me</label>
                        </div>
                    </form>
                    <button className="sign-in" type="submit">Sign in</button>
                </div>
            </div>
        )
    }
}
export default Forms;