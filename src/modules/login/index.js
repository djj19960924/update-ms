import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import CanvasNest from 'canvas-nest.js';
import './index.less'

const FormItem = Form.Item;

@Form.create()
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.initBG();
      }
    
    initBG() {
        // 注入动画
        const config = {
          color: '0,0,0',
          count: 99,
          zIndex: 9,
          opacity: 0.5
        };
    
        const cn = new CanvasNest(document.querySelector('.Login'), config);
        // Using config rendering effect at 'element'.
        this.setState({
          backGround: cn
        })
    }
    
    //提交表单
    handleSubmit = (e)=>{
        e.preventDefault();
        const { push } = this.props.history;
        const showLoading = Is => this.setState({loading: Is});
        //进行表单验证
        this.props.form.validateFields((err,value)=>{
            if(!err){
                showLoading(true);
                console.log('value:',value)
            }
        })
    }

    render() { 
        // 将表单数据保存至this.props.form, 由form组件托管当前数据
        const { getFieldDecorator } = this.props.form;
        const { loading } = this.state;
        return ( 
            <div className="Login" style={{textAlign:'center'}}>
                {/*表单容器*/}
                <div className="loginContainer">
                    <Form className="loginForm" onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem>
                            {getFieldDecorator('username',{
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password',{
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                            )}
                        </FormItem>

                        <FormItem>
                            {/*设置是否记住该账号*/}
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox className="remember">保存当前用户名</Checkbox>
                            )}
                            <Link className="loginFormForgot"
                                    to="/forgotPassWord"
                            >忘记密码？请点击</Link>
                            <Button type="primary"
                                    htmlType="submit"
                                    className="loginFormButton"
                                    style={{width: '100%', marginTop: '10px'}}
                                    loading={loading}
                            >登录</Button>
                            {/*后台管理系统暂不支持开放注册*/}
                            {/*Or <a href="">register now!</a>*/}
                        </FormItem>
                    </Form>
                    <p className="info">欢迎登陆后台管理系统</p>
                </div>
            </div>
        );
    }
}

export default Login;