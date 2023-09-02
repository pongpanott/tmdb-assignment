import { cx } from '@emotion/css';
import { BaseComponentProps } from 'common/types/base-component';

type SkeletonLoadingProps = BaseComponentProps & {
  wrapperClassName?: string;
};

const SkeletonLoading = ({ className, wrapperClassName }: SkeletonLoadingProps) => {
  return (
    <div className={cx(wrapperClassName, 'animate-pulse')}>
      <div className={cx(className, 'bg-grey-200 rounded-lg')} />
    </div>
  );
};

export default SkeletonLoading;
