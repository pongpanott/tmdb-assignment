import { cx } from '@emotion/css';
import { BaseComponentProps } from 'common/types/base-component';
import { ReactComponent as CloseIcon } from 'assets/icons/times.svg';

type TextFieldProps = BaseComponentProps & {
  placeholder: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearSearch?: () => void;
};

const TextField = ({
  className,
  placeholder,
  value,
  onChange,
  handleClearSearch,
}: TextFieldProps) => {
  return (
    <div
      className={cx(
        className,
        value && 'bg-blue-100  border-blue-300',
        'border flex items-center gap-x-2 w-full focus-within:bg-white focus-within:border-grey-400 px-4 py-3 border-grey-300 text-grey-700',
      )}
    >
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='text-base placeholder:text-base bg-transparent outline-none flex-1'
      />
      {value ? (
        <button type='button' onClick={handleClearSearch}>
          <CloseIcon className='w-6 h-6' />
        </button>
      ) : null}
    </div>
  );
};

export default TextField;
