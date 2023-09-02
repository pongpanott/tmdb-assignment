import React from 'react';
import { cx } from '@emotion/css';
import { BaseComponentProps } from '../../types/base-component';
import { ReactComponent as LoadingIcon } from 'assets/icons/loader.svg';

type ButtonProps = BaseComponentProps & {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

const Button = ({ className, title, type = 'button', onClick, loading, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      className={cx(
        className,
        loading && 'pointer-events-none',
        'px-4 py-3 bg-blue-500 text-base font-semibold hover:bg-blue-800 active:bg-blue-300 text-white relative disabled:bg-grey-100',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {loading && (
        <span
          className={cx(
            !loading
              ? 'hidden'
              : 'absolute top-0 left-0 items-center flex h-full w-full justify-center',
          )}
        >
          <LoadingIcon className='w-6 h-6 text-white animate-spin' />
        </span>
      )}

      <p className={loading ? 'invisible' : 'visible'}>{title}</p>
    </button>
  );
};

export default Button;
