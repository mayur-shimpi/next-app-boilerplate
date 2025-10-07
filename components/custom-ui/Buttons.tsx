import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  label: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  tooltip?: string;
};

export function PrimaryButton({ type, label, icon, className, onClick, selected = false, disabled = false , tooltip}: ButtonProps & { selected?: boolean; disabled?: boolean }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center text-center font-medium gap-2 
        min-w-[134px] lg:min-w-[134px] h-[48px] px-[12px] lg:px-[27px] py-[11px] 
        text-white text-sm lg:text-md rounded-[13px] 
        shadow-sm transition-shadow duration-300 ease-in-out mb-2
        ${selected ? 'bg-soboBlue' : 'bg-soboBlue'} 
        ${disabled ? 'bg-[#1967D299] cursor-not-allowed opacity-70' : 'hover:shadow-md hover:shadow-soboBlue/40'} 
        ${className}`}
        title={tooltip}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}

export function PrimaryOutlineButton({
  type,
  label,
  icon,
  className,
  onClick,
  selected = false,
  disabled = false
}: ButtonProps & { selected?: boolean; disabled?: boolean }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center text-center font-medium gap-2
        min-w-[134px] lg:min-w-[134px] h-[48px] px-[12px] lg:px-[27px] py-[11px]
        text-sm lg:text-md rounded-[13px]
        border transition-shadow duration-300 ease-in-out
        shadow-sm bg-soboLightBlue mb-2

        ${selected
          ? 'border-[#034EB5] text-[#034EB5]'
          : 'border-soboBlue text-soboBlue'
        }

        ${disabled
          ? 'border-[#2D60FF] text-[#2D60FF] cursor-not-allowed opacity-70'
          : 'hover:shadow-md hover:shadow-soboBlue/40'
        }

        ${className}`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}

export function SecondaryButton({ type, label, className, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center text-center font-medium gap-2 mb-2 min-w-[100px] lg:min-w-[100px] h-[48px] px-[12px] lg:px-[18px] py-[10px] lg:py-[12px] bg-soboBlue50/40 text-soboBlue text-sm rounded-[14px] hover:bg-soboBlue hover:text-white transition ${className}`}
    >
      {label}
    </button>
  );
}