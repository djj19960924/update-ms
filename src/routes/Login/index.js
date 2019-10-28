import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="login" style={{textAlign:'center'}}>
                login
                <Link className="loginFormForgot"
                    to="/forgotPassWord"
                >忘记密码？请点击</Link>
            </div>
        );
    }
}
 
export default Login;