import './App.css';
import { css } from '@emotion/react';
import React, { ReactElement } from 'react';

function App(): ReactElement {
  return (
    <div
      className='App'
      css={css`
        background: red;
      `}
    >
      <h1> Hello, World! </h1>
    </div>
  );
}

export default App;
