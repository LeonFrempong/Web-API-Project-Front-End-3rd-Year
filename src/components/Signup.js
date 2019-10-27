import React from 'react';

import {
    Form,
    Input,
    Alert,
    Checkbox,
    Button
}   from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

class RegistrationForm extends React.Component{
    state = {
        confirmDirty: false,
        addedSuccessfully: false,
        showSuccess: false,
        showError: false,
        errorCode: 400,
        responseStatus: "nothing",
        errorMessage: ""
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validationFieldAndScroll((err, values) => {
            if (!err){
                console.log('Recieved values of form: ', values);

                fetch('http://localhost:3000/api/v1.0/users', {
                    method: 'POST',
                    headers:{
                        'Accept' : 'application/json',
                        'content-Type': 'application/json',
                    },
                    body: JSON.stringify({values})
                }).then(res =>{
                    if(res.ok)
                        this.setState({
                            addedSuccessfully:false,
                            errorCode: res.status
                        });

                        return res.json()
                }).then(data => this.checkResponse(data))
            }
        });
    }
};
handleEmail = () => {
    this.setState({responseStatus:"nothing"})
}
handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value});
};

compareToFirstPassword = (rule, value, callback) =>{
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')){
        callback('Two password that you enter is consistent!');
    } else {
        callback();
    }
};

checkResponse = (data) =>{
    if(this.state.addedSuccessfully){
        this.props.form.resetFields();
        this.setState({
            showSuccess:true,
            showError: false
        });
    }
    else{
        this.setState({
            errorMessage: data.message,
            showSuccess:false
            showError: true
            responseStatus:"error"
        });
    }
}

            render(){
                const { getFieldDecorator } = this.props.form;

                const formItemLayot = {
                    labelCol: {
                        xs:{ span: 24 },
                        sm: { span: 8 },
                    },
                    wrapperCol:{
                        xs:{ span: 24 },
                        sm:{ span: 16 },
                    },
                };
                const tailFormItemLayout = {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 8,
                        }
                    },
                };

                const prefixEmail = getFieldDecorator('email')(
                    <h4>@</h4>,
                );
            }