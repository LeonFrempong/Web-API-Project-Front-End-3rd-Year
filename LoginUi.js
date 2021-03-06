import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React from 'react';
//import { Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import mountNode from 'react';
import { register } from '../serviceWorker';


class NormalLoginForm extends React.Component {



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <Button type= "primary" htmlType = "register" className="register">
            Register
          </Button>
        
        </Form.Item>
      </Form>
    );
  }
}

const Login = Form.create({ name: 'login' })(NormalLoginForm);

export default Login;