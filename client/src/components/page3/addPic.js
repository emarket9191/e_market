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
              +Add shop Photo
             </label>
            <input id="file-upload" type="file"  onChange={this.onChange} />
            

        </form>
    )
}
}



export default SimpleReactFileUpload;






















// import React from "react";
// import ImageUploading from "react-images-uploading";
// import '../Css/page3.css';

// function ImagesUploading() {
//   const [images, setImages] = React.useState([]);
//   const maxNumber = 69;
//   const onChange = (imageList, addUpdateIndex) => {
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   return (
//     <div className="wrapper">
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageUpdate,
//           dragProps
//         }) => (
//             <div className="upload__image-wrapper">
//               <div
//                 className="buttonstyle"
//                 style={{ cursor: 'pointer' }}
//                 onClick={onImageUpload}
//                 {...dragProps}
//               >
//                 + Add Shop Photo
//             </div>
//             &nbsp;

//               {imageList.map((image, index) => (
//                 <div key={index} className="image-item">
//                   <div className="picPic">
//                     <img src={image.data_url} alt="" width="250" height="124" onClick={() => onImageUpdate(index)} cursor="pointer" />
//                   </div>
                 
//                 </div>
//               ))}
//             </div>
//           )}
//       </ImageUploading>
//     </div>
//   );
// }
// export default ImagesUploading;