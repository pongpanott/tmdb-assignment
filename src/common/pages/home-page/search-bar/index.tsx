import TextField from 'common/base-ui/text-field';

type SearchBarProps = {
  handleSeachInput: (value: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

const SearchBar = ({ handleSeachInput, searchTerm }: SearchBarProps) => {
  return (
    <div className='mt-4 mb-8 md:mb-12 lg:mb-[60px] max-w-[420px] w-full mx-auto'>
      <TextField
        placeholder='Search for a movie...'
        value={searchTerm}
        onChange={handleSeachInput}
      />
    </div>
  );
};

export default SearchBar;
