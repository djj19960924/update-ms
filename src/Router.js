import React,{ Component } from 'react';
import { Route, Switch, Redirect, } from 'react-router-dom';
import Bundle from './Bundle';
import './common.less';

const Login = (props) => (<Bundle load={() => import('./modules/login')}>{(Login) => <Login {...props}/>}</Bundle>);
const ForgotPassWord = (props) => (<Bundle load={() => import('./modules/forgotPasswd')}>{(ForgotPasswd) => <ForgotPasswd {...props}/>}</Bundle>);
const Admin = (props) => (<Bundle load={() => import('./modules/admin')}>{(Admin) => <Admin {...props}/>}</Bundle>);

class BasicRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/forgotPassWord' component={ForgotPassWord} />
            <Route exact path='/' component={Admin} />
        </Switch>
    );
  }
}
 
export default BasicRoute;

