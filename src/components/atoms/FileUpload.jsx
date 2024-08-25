import React, { useState } from 'react';
import styled from 'styled-components';
import FontStyle from '../ui/FontStyle';

const ContentTitle = styled.div`
  ${FontStyle.subhead2Bold}
  padding-bottom: 10px;
`;

const FileInput = styled.input.attrs({ type: 'file' })`
  display: block;
  margin-bottom: 10px;
`;

const FileName = styled.div`
  ${FontStyle.body1Regular}
`;

function FileUpload({ title = 'File Upload', contentTitle = 'Choose a file', onFileUpload }) {
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      onFileUpload(file);
    }
  };

  return (
    <>
      <ContentTitle>{contentTitle}</ContentTitle>
      <FileInput onChange={handleFileUpload} />
      {uploadedFileName && <FileName>{uploadedFileName}</FileName>}
    </>
  );
}

export default FileUpload;