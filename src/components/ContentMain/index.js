import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
// 这里引用各个组件内容, 内容为方便管理, 统一写入pages页面
//主页
import Home from '@modules/home';

//用户管理
    // 角色管理
    import roles from '@modules/users/roles';
    // 账户管理
    import accounts from '@modules/users/accounts';
    // 权限列表
    import permissions from '@modules/users/permissions';

import tests from '@modules/test/tests';

import menus from '@config/menuConfig'

const componentsList = {
    Home,
    roles,
    accounts,
    permissions,
    tests
}
class ContentMain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menusList: [],
            routesList: [],
        }
    }
    UNSAFE_componentWillMount(){
        this.getMenusList(menus)
        // 用于更新已处于登陆状态的用户刷新页面以后的路由组件信息
        this.getNewRoutesList()
    }
    UNSAFE_componentWillUpdate(){
    }

    //递归获取新的菜单列表
    getMenusList(list){
        for(let obj of list){
            if(obj.components){
                this.state.menusList.push({components: obj.components})
            }else{
                this.getMenusList(obj.subs)
            }
        }
    }

    //获取路由列表
    getNewRoutesList() {
        const dataList = [];
        const {menusList} = this.state;
        for(let obj of menusList){
            for (let obj1 of obj.components) dataList.push(<Route exact path={obj1.path} component={componentsList[obj1.name]}
                key={obj1.path}/>);
        }
        // 不直接使用 setState, 是因为该方法会在组件卸载时重复渲染, 造成内存负载, 会导致 react 报错
        // this.setState({routesList: dataList})
        this.state.routesList = dataList;
    }
    
    render() { 
        const { routesList } = this.state;
        return ( 
            <div style={{backgroundColor: '#eee', width: '100%', height: '100%', padding: '10px'}}>
                <Switch>
                    {/*放置循环路由,放进去是一个数组,react会自动遍历里面的元素*/}
                    { routesList }
                </Switch>  
            </div>
        );
    }
}
 
export default ContentMain;