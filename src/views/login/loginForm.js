import React,{Component} from 'react';
import './index.scss'
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {validate_password} from '../../utils/validate'
import {Login} from "../../api/account"

class LoginForm extends Component{
    constructor(){
        super();
        this.state={}
    }
    onFinish = (values) => {
        console.log('Success:', values);
        Login().then(()=>{

        }).catch(()=>{
            
        })
    };
    
    formToggle=()=>{
        this.props.switchForm('rigister')
    }
    
    render(){
        return (
        <div className="form-wrap">
            <div>
                <div className="form-header">
                    <h4 className="left">登录</h4>
                    <span className="right" onClick={this.formToggle}>账号注册</span>
                </div>
                <div className="form-content">
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    >
                    <Form.Item name="username" rules={[
                        {required: true, message: 'Please input your Username!',},
                        {type:'email', message: '请输入正确的邮箱'}
                        ]} >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" rules={[ 
                        { required: true, message: 'Please input your Password!', },
                        {pattern:validate_password,message:'请输入大于6位小于20位数字+字母'}
                        ]} >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item  name="code" rules={[ 
                            { required: true, message: '验证码不能为空!', },
                            {len:6,message:'请输入长度是6位的验证码'}
                        ]}>
                        <Row gutter={13}>
                            <Col span={15}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />}  placeholder="code" />
                            </Col>
                            <Col span={9}>
                                <Button type="danger" className="login-form-button">获取验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
                    </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
        )
    }
}
export default LoginForm;