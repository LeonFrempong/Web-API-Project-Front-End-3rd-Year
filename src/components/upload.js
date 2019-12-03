// // https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
import React, { Component } from 'react'
import { Upload, icon, Modal,fileList, file, uploadButtons, previewVisible, upload } from 'antd';

class upload extends Component {

    fileSelectedHandler = event => {
        console.log(event);
    }

    render(){
        return(
            <div className="App">
                <input type="file" onChange={}/>
            </div>
        );
    }
}





export default upload;