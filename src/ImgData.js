import React, { useState } from "react";

const ImgData = ({ file }) => {
    console.log(file)
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
     {preview ?  <img src={preview} alt="Product Img" width="250px" height="200px" style={{paddingTop:'20px'}}  /> : "Loading...."}
    </div>
  );
};

export default ImgData