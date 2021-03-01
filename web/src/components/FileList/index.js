import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar'
import { Container, FileInfo, Preview } from './styles';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = () => {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src="https://media.moneytimes.com.br/uploads/2020/02/lobo-vida-selvagem.jpg" />
          <div>
            <strong>profile.png</strong>
            <span>64kb <button onClick={() => null}>Excluir</button></span>
          </div>
        </FileInfo>

        <div>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { strong: '#9159c1' }
            }}
            strokeWidth={10}
            percentage={60}
          />
          <a
            href="https://media.moneytimes.com.br/uploads/2020/02/lobo-vida-selvagem.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>

          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#e57878" />
        </div>
      </li>
    </Container>
  )
};

export default FileList