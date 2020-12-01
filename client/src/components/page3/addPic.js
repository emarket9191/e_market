import React from "react";
import ImageUploading from "react-images-uploading";
import '../Css/page3.css';

function ImagesUploading() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="wrapper">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <div
            className="buttonstyle"
              style={{ cursor: 'pointer'}}
              onClick={onImageUpload}
              {...dragProps}
            >
              + Add Shop Photo
            </div>
            &nbsp;
    
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
export default ImagesUploading;