import React, { Component } from 'react';
import './index.less';

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'qqz'
        }
    }
    render() { 
        return ( 
            <div className="HeaderBar">
                <div className="logo">BuyersHouse后台管理系统</div>
                <div className="userInfo">
                    <ul>
                        <li>欢迎回来！{this.state.userName}</li>
                        <li className="loginOut">退出登录</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default HeaderBar;