import className from 'classnames';

import Sizes from '../common/sizes';

interface ButtonV1Props extends Sizes { 
  label: string,
  type: "button" | "submit" | "reset" | undefined,
  variant: "primary" | "secondary" | "white",
  isRounded: boolean,
}

export const ButtonV1 = (props: ButtonV1Props) => {
  const {
    label,
    type,
    size,
    variant,
    isRounded
  } = props;

  const buttonClasses = className({
    'bg-blue-700': variant === "primary",
    'bg-blue-100': variant === "secondary",
    'bg-white': variant === "white",
    'text-white': variant === "primary",
    'text-blue-700': variant === "secondary",
    'text-black': variant === "white",
    'border': variant === "white",
    'rounded': !isRounded,
    'rounded-full': isRounded,
    'px-2 py-0': size === "xs",
    'px-3 py-1': size === "sm",
    'px-4 py-2': size === "md",
    'px-5 py-3': size === "lg",
    'px-6 py-4': size === "xl",
    'text-xs': size === "xs",
    'text-sm': size === "sm",
    'text-base': size === "md",
    'text-lg': size === "lg",
    'text-xl': size === "xl"
  })
  return (
    <button className={buttonClasses} type={type}>{label}</button>
  );
}
