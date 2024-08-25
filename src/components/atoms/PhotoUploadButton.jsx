import React, { useState } from 'react';
import styled from 'styled-components';

const UploadButton = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 200px;
  background-color: #f0f0f0;
  border: 2px dashed #ccc;
  cursor: pointer;
  overflow: hidden;
`;

const HiddenInput = styled.input.attrs({ type: 'file', accept: 'image/*' })`
  display: none;
`;

const UploadedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function PhotoUploadButton({ title = 'Photo Upload', contentTitle = 'Upload a photo', onPhotoUpload }) {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      onPhotoUpload(file);
    }
  };

  return (
    <>
      <UploadButton>
        {uploadedImage ? (
          <UploadedImage src={uploadedImage} alt="Uploaded photo" />
        ) : (
          '사진 업로드'
        )}
        <HiddenInput onChange={handlePhotoUpload} />
      </UploadButton>
    </> 
  );
}

export default PhotoUploadButton;