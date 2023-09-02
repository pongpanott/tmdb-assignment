import { cx } from '@emotion/css';
import { BaseComponentProps } from 'common/types/base-component';

type TextFieldProps = BaseComponentProps & {
  placeholder: string;
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ className, placeholder, value, onChange }: TextFieldProps) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cx(
        className,
        value && 'bg-blue-100 focus:bg-white border-blue-300',
        'border w-full focus:border-grey-400 outline-none text-base placeholder:text-base px-4 py-3 border-grey-300 text-grey-700',
      )}
    />
  );
};

export default TextField;
