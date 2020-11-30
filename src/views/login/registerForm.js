import React,{Component} from 'react';
import './index.scss'
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class RegisterForm extends Component{
    constructor(){
        super();
        this.state={}
    }
    onFinish = (values) => {
        console.log('Success:', values);
    };
    formToggle=()=>{
        this.props.switchForm('login')
    }
    render(){
        return (
        <div className="form-wrap">
            <div>
                <div className="form-header">
                    <h4 className="left">注册</h4>
                    <span className="right" onClick={this.formToggle}>登录</span>
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
                    <Form.Item name="username" rules={[{required: true, message: 'Please input your Username!',},]} >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item name="password" rules={[ { required: true, message: 'Please input your Password!', },]} >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item name="passwordr" rules={[ { required: true, message: 'Please input your Password!', },]} >
                        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item  name="code" rules={[ { required: true, message: 'Please input your code!', },]}>
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
                        <Button type="primary" htmlType="submit" className="login-form-button" block>注册</Button>
                    </Form.Item>

                    </Form>
                </div>
            </div>
        </div>
        )
    }
}
export default RegisterForm;