import React, { Component } from 'react'
import { Layout } from 'antd'
import HeaderBar from '@components/HeaderBar'
import SiderNav from '@components/SiderNav'
import ContentMain from "@components/ContentMain"
import './index.less';

const { Header, Content, Footer, Sider } = Layout;

class Admin extends Component{
    render(){
        return(
            <div name="Index" id='indexPage'>
                <Layout>
                    <Sider style={{position: 'fixed', left: 0, top: 64, bottom: 0}}>
                        <SiderNav />
                    </Sider>
                    <Layout>
                        <Header style={{position: 'fixed', left: 0, right: 0, height: 64, }}>
                            <HeaderBar />
                        </Header>
                        <Content style={{position: 'fixed', left: 200, top: 64, bottom: 0, right: 0, width:'calc(100% - 200px)'}}>
                            <ContentMain />
                        </Content>
                        {/*预留页脚*/}
                        <Footer />
                    </Layout>
                </Layout>
                
            </div>
        )
    }
}

export default Admin;