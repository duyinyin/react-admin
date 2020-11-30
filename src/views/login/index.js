import React,{Component,Fragment} from 'react';
import './index.scss'
import LoginForm from './loginForm';
import RegisterForm from './registerForm';

class Login extends Component{
    constructor(){
        super();
        this.state={
            type:'login'
        }
    }

    switchForm=(val)=>{
        this.setState({
            type:val
        })
    }
    
    render(){
        return (
            <Fragment>
            {
              this.state.type==='login'
              ?<LoginForm switchForm={this.switchForm}></LoginForm>
              :<RegisterForm switchForm={this.switchForm}></RegisterForm>
            }
            </Fragment>
        )
    }
}
export default Login;