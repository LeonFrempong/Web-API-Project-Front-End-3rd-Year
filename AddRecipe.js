import React, { Component } from 'react';
import { form, Button, NavLink, FormButton } from 'react';
import {render} from 'react-dom';
import { Input } from 'antd';
import upload from './upload';
import { Icon, Modal } from 'antd';
const { TextArea } = Input;


class AddRecipe extends React.Component{
    state = {
        value: '',
    };

    onchange=({ target: {value} }) => {
        this.setState({ value});
    };

    render() {
        const { value } = this.state;

        return (
            <div>
              <TextArea placeholder="Recipe title" autoSize />
              <div style={{ margin: '24px 0' }} />
              <TextArea
                placeholder="Recipe Description"
                autoSize={{ minRows: 2, maxRows: 6 }}
              />
              <div style={{ margin: '24px 0' }} />
              <TextArea
                value={value}
                onChange={this.onChange}
                placeholder="Ingredients"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
              <div style={{ margin: '24px 0' }}/>
              <TextArea
                value={value}
                onChange={this.onChange}
                placeholder="Steps"
                autoSize={{ minRows: 5, maxRows: 5 }}
              />
            <div style={{ margin: '24px 0' }}/>
              <button variant="primary" type="button" class="ant-btn">
                  Confirm recipe Details
              </button>
            </div>
          );
    }
}    
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    }
    
    class Upload extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-3',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-4',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-5',
            name: 'image.png',
            status: 'error',
        },
        ],
    };
    
    handleCancel = () => this.setState({ previewVisible: false });
    
    handlePreview = async file => {
        if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
        }
    
        this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        });
    };
    
    handleChange = ({ fileList }) => this.setState({ fileList });
    
    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
        );
        return (
        <div className="clearfix">
            <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
            >
            {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
        );
    }
    }
    




    
    
    
    
    // class AddRecipe extends React.Component{
    //     constructor(props){
    //         super(props);
    //         this.state = {
    //             recipe: '',
    //             Description: '',
    //             ingredients: '',
    //             steps: '',
    //         };
    //     }

    //     myChangeHandler = (event) => {
    //         let nam = event.target.name;
    //         let val = event.target.value;
    //         this.setState({[nam]: val});
    //     }


    //     render(){
    //         return(
    //             <form>

    //             <h1>My recipe is {this.state.recipe}</h1>
    //             <p>Enter your recipe</p>
    //             <input
    //                 type = 'text'
    //                 name = 'recipe'
    //                 onChange={this.myChangeHandler}
    //             />
                

    //             <h5>{this.state.Description}</h5>
    //             <h6>Fill in description</h6>
    //             <input
    //                 type = 'text'
    //                 name = 'Description'
    //                 onChange={this.myChangeHandler}
    //             />

    //             <h5>Lists of ingredients</h5>
    //             <h5>{this.state.ingredients}</h5>
    //             <input
    //                 type = 'text'
    //                 name = 'ingredients'
    //                 onChange={this.myChangeHandler}
    //             />

    //             <h5>Steps</h5>
    //             <h5>{this.state.steps}</h5>
    //             <input
    //                 type = 'text'
    //                 name = 'steps'
    //                 onChange={this.myChangeHandler}
    //             />
           
    //             </form>
                
               
                    
                
            

    //         )
    //     }
    // }

    // https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_multiple

// https://reactjs.org/docs/jsx-in-depth.html 

  


export default AddRecipe;