import className from 'classnames';

interface BadgeV1Props { 
  label: string,
  variant: "primary" | "secondary" | "error" | "warning" | "success",
  isRounded: boolean,
  isLarge: boolean,
}

export const BadgeV1 = (props: BadgeV1Props) => {
  const {
    label,
    variant,
    isRounded,
    isLarge
  } = props;

  const badgeClasses = className({
    'bg-blue-100': variant === "primary",
    'bg-gray-100': variant === "secondary",
    'bg-red-100': variant === "error",
    'bg-yellow-100': variant === "warning",
    'bg-green-100': variant === "success",

    'text-blue-700': variant === "primary",
    'text-gray-700': variant === "secondary",
    'text-red-700': variant === "error",
    'text-yellow-700': variant === "warning",
    'text-green-700': variant === "success",

    'rounded': !isRounded,
    'rounded-full': isRounded,
    'py-1 px-4 text-sm': isLarge,
    'py-1 px-2 text-xs': !isLarge
  })
  return (
    <span className={badgeClasses}>{label}</span>
  );
}
