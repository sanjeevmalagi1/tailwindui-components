import className from 'classnames';

import Sizes from '../common/sizes';

interface AvatarV1Props extends Sizes { 
  isCircular: boolean,
  src: string,
  alt: string
}

export const AvatarV1 = (props: AvatarV1Props) => {
  const {
    src,
    alt,
    size,
    isCircular
  } = props;

  const avatarClasses = className({
    'inline-block ring-2 ring-white': true,
    'rounded': !isCircular,
    'rounded-full': isCircular,
    'h-6 w-6': size === "xs",
    'h-8 w-8': size === "sm",
    'h-10 w-10': size === "md",
    'h-12 w-12': size === "lg",
    'h-14 w-14': size === "xl"
  })

  return (
    <img
      className={avatarClasses}
      src={src}
      alt={alt}
    />
  );
}
