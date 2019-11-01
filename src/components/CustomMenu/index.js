import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link,withRouter } from 'react-router-dom';

//此组件的意义就是将数据抽离出来，通过传递数据去渲染
@withRouter
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
        // 防止页面刷新侧边栏又初始化了
        const pathname = this.props.location.pathname;
        console.log('pathname:',pathname)
        //获取当前所在的目录层级
        const rank = pathname.split('/');
        switch (rank.length) {
            case 2: //一级目录
                this.setState({
                    selectedKeys: [pathname]
                })
                break;
            case 5 : //三级目录，要展开两个subMenu
                this.setState({
                  selectedKeys: [pathname],
                  openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
                })
                break;
            default:
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
                })
        }
    }
    componentDidUpdate(nextProps){
        //当点击面包屑导航时，侧边栏要同步响应
        const pathname = nextProps.location.pathname;
        console.log('pathname1:',pathname)
        if (this.props.location.pathname !== pathname) {
            this.setState({
                selectedKeys: [pathname],
            })
        }
    }

    onOpenChange = (openKeys) => {
        console.log('openKeys：',openKeys)
        //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
        if (openKeys.length === 0 || openKeys.length === 1) {
          this.setState({
            openKeys
          })
          return
        }
    
        //最新展开的菜单
        const latestOpenKey = openKeys[openKeys.length - 1]
        //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
        //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
        //只适用于3级菜单
        if (latestOpenKey.includes(openKeys[0])) {
          this.setState({
            openKeys
          })
        } else {
          this.setState({
            openKeys: [latestOpenKey]
          })
        }
    }
    //菜单渲染递归
    renderMenu = (data)=>{
        return data.map(item=>{
            if(item.subs){
                return (
                    <Menu.SubMenu key={item.key} title={<span>{item.icon && <Icon type={item.icon}/>}<span>{item.title}</span></span>}>
                        {this.renderMenu(item.subs)}
                    </Menu.SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}>
                    <Link to={item.key}>
                        {item.icon && <Icon type={item.icon}/>}
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }
    // renderMenuItem = ({key,icon,title})=>{
    //     return (
    //         <Menu.Item key={key}>
    //             <Link to={key}>
    //                 {icon && <Icon type={icon}/>}
    //                 <span>{title}</span>
    //             </Link>
    //         </Menu.Item>
    //     )
    // }
    // renderSubMenu = ({key,icon,title,subs})=>{
    //     return (
    //         <Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
    //             {
    //                 subs && subs.map(item => {
    //                 return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
    //                 })
    //             }
    //         </Menu.SubMenu>
    //     )
    // }
    
    render() { 
        const {openKeys, selectedKeys} = this.state
        return ( 
            <Menu
                onOpenChange={this.onOpenChange.bind(this)}
                onClick={({key}) =>this.setState({selectedKeys: [key]})}
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                theme={this.props.theme ? this.props.theme : 'dark'}
                mode='inline'
            >
                {
                    this.renderMenu(this.props.menus)
                    // this.props.menus && this.props.menus.map(item => {
                    //     this.renderMenu(item)
                    //     // return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
                    // })
                }
            </Menu>
        );
    }
}
 
export default CustomMenu;