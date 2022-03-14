import { css } from '@emotion/react';
import React, { ReactElement, ReactNode } from 'react';

interface ButtonProps {
  title: ReactNode;
  onClick?: () => void;
}

export function Button({ title, onClick }: ButtonProps): ReactElement {
  return (
    <button
      css={css`
        background: blue;
        color: white;
      `}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
