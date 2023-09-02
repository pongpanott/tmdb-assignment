import React from 'react';
import { cx } from '@emotion/css';
import { BaseComponentProps } from '../../types/base-component';

type ButtonProps = BaseComponentProps & {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const Button = ({ className, title, type = 'button', onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cx(
        className,
        'px-4 py-3 bg-blue-500 text-base font-semibold hover:bg-blue-800 active:bg-blue-300 text-white',
      )}
      onClick={onClick}
    >
      <p>{title}</p>
    </button>
  );
};

export default Button;
