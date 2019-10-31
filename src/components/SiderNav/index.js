import React, { Component } from 'react';
import menus from '@config/menuConfig'
import { Menu, Icon } from 'antd';
import CustomMenu from '../CustomMenu';

const { SubMenu } = Menu;

class SiderNav extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="SiderNav">
                {
                    // <Menu
                    // defaultSelectedKeys={['home']}
                    // mode="inline"
                    // theme="dark"
                    // >
                    //     <Menu.Item key="home">
                    //         <Icon type="home" />
                    //         <span>首页</span>
                    //     </Menu.Item>
                    //     <SubMenu
                    //         key="users"
                    //         title={
                    //             <span>
                    //                 <Icon type="usergroup-add" />
                    //                 <span>用户管理</span>
                    //             </span>
                    //         }
                    //     >
                    //         <Menu.Item key="/users/permissions">
                    //             <Icon type="lock" />
                    //             <span>权限管理</span>
                    //         </Menu.Item>
                    //         <Menu.Item key="/users/roles">
                    //             <Icon type="solution" />
                    //             <span>角色管理</span>
                    //         </Menu.Item>
                    //         <Menu.Item key="/users/accounts">
                    //             <Icon type="team" />
                    //             <span>账户管理</span>
                    //         </Menu.Item>
                    //     </SubMenu>
                    // </Menu>
                }
                <CustomMenu menus={menus}/>
            </div>
        );
    }
}

export default SiderNav;