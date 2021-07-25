import className from 'classnames';

import Sizes from '../common/sizes';

interface BasicInputV1Props extends Sizes { 
  label: string,
  value: string,
  variant: 'normal' | 'error',
  type: "text" | "number" | 'email' | 'password' | undefined,
  underText: string,
  isRequired: boolean
}

export const BasicInputV1 = (props: BasicInputV1Props) => {
  const {
    label,
    value,
    variant,
    type,
    underText,
    size,
    isRequired
  } = props;

  const labelClasses = className({
    'block font-medium text-gray-400': true,
    'hidden': !label,
    
    'text-red-500': variant === 'error',
    'text-gray-700': variant === 'normal',
    
    'text-xs': size === "sm" || size === "xs",
    'text-sm': size === "md",
    'text-lg': size === "lg" || size === "xl",
  })

  const inputClasses = className({
    "mt-1 px-3 py-2 block w-full shadow-sm border": true,

    'border-red-500': variant === 'error',
    'border-gray-400': variant === 'normal',

    'text-xs': size === "xs",
    'text-sm': size === "sm",
    'text-base': size === "md",
    'text-lg': size === "lg",
    'text-xl': size === "xl",

    'px-1 py-0': size === "xs",
    'px-2 py-1': size === "sm",
    'px-3 py-2': size === "md",
    'px-4 py-3': size === "lg",
    'px-5 py-4': size === "xl",
    
    "focus:ring-indigo-500 focus:border-indigo-500 rounded-md": true
  })

  const underTextClasses = className({
    'hidden': !underText,
    'font-medium ': true,
    'text-xs': size === "sm" || size === "xs",
    'text-sm': size === "md",
    'text-lg': size === "lg" || size === "xl",

    'text-red-500': variant === 'error',
    'text-gray-400': variant === 'normal',
  })

  return (
    <div>
      <label className={labelClasses}>{label}</label>
      <input
        className={inputClasses}
        required={isRequired}
        type={type}
        value={value}
      />
      <span className={underTextClasses}>{underText}</span>
    </div>
  );
}
