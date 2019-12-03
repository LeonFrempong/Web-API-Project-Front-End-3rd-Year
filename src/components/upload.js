// https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
import React from 'react'
import { Upload, icon, Modal,fileList, file, uploadButtons, previewVisible, upload } from 'antd';
import { previewImage } from 'antd/lib/upload/utils';


return(
    <div className="clearfix">
        <Upload
            action = "https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType = "picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
        >
            {file.length >= 8 ? null : uploadButtons}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage}/>
        </Modal>
    </div>

);

export default upload;