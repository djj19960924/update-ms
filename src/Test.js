import React,{ Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '@routes/Login'
import ForgotPassWord from '@routes/ForgotPasswd';
import './test.less'

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/forgotPassWord' component={ForgotPassWord} />
        </Switch>
    );
  }
}
 
export default Test;

