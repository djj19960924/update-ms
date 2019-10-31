import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

//此组件的意义就是将数据抽离出来，通过传递数据去渲染
class CustomMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //当前展开的 SubMenu菜单项key数组
            openKey: [],
            //当前选中的菜单项key数组
            selectedKey: []
        }
    }
    componentDidMount() {
        console.log('props:',this.props.menus)
    }
    
    render() { 
        return ( 
            <div>

            </div>
        );
    }
}
 
export default CustomMenu;