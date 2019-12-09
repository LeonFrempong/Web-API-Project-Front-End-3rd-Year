// // https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
import React, { Component } from 'react'
import { icon, Modal,fileList, file, uploadButtons, previewVisible } from 'antd';
import axios from 'axios';



class upload extends Component {
    state={
        selectedFile: null
    }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0]})
    }

    uploadHandler = () => {
        console.log(this.state.selectedFile)
      }
    
    uploadHandler = () => { 
        axios.post('https://api.cloudinary.com/v1_1/dntokpkyh/image/upload', this.state.selectedFile)
    }

    uploadHandler = () => {
        const FormData = new FormData()
        FormData.append(
          'myFile',
          this.state.selectedFile,
          this.state.selectedFile.name
        )
        axios.post('https://api.cloudinary.com/v1_1/dntokpkyh/image/upload', FormData)
      }

      uploadHandler = () => {
        axios.post('https://api.cloudinary.com/v1_1/dntokpkyh/image/upload', FormData, {
          onUploadProgress: progressEvent => {
            console.log(progressEvent.loaded / progressEvent.total)
          }
        })
      }

    fileSelectedHandler = event => {
        this.setState({
           selectedFile: event.target.files[0]})
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        axios.post('https://api.cloudinary.com/v1_1/dntokpkyh', fd, {
            onUploadProgress: progressEvent =>{
                console.log('Upload Progress:' + Math.round(progressEvent.loaded / progressEvent.total) * 100)
            }
        })
    }

    render() {
        return (
            <div className="App">
                <input type="file" onChange={this.fileSelectedHandler}/>
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}





export default upload;