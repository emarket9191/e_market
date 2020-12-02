import React from 'react'
import axios, { post } from 'axios';
import '../Css/page3.css';

class SimpleReactFileUpload extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        file: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
}
onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response) => {
        console.log(response.data);
    })
}
onChange(e) {
    this.setState({ file: e.target.files[0] })
}
fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file', file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return post(url, formData, config)
}

render() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <label for="file-upload" class="custom-file-upload">
              +Add shop Business certificates and official documents
             </label>
            <input id="file-upload" type="file"  onChange={this.onChange} />
            

        </form>
    )
}
}



export default SimpleReactFileUpload;