import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from "./styles";

const Upload = props => {

  const { onUpload } = props;

   const renderDragMessage = (isDragActive, isDragReject) => {
     if(!isDragActive){
       return <UploadMessage>Arraste arquivos aqui</UploadMessage>
     }

     if(isDragReject){
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
   }

    return (
      <>
        <Dropzone accept="image/*" onDropAccepted={onUpload}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
            Arraste seus arquivos aqui...
            </DropContainer>
          )}
        </Dropzone>
      </>
    );
}

export default Upload;