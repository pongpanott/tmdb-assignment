import imagePlacholder from 'assets/icons/image-placeholder.svg';

export const handleImageLoadFail = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  return ((e.target as HTMLSourceElement).src = imagePlacholder);
};
