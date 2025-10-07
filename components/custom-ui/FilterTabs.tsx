import React from "react";

interface FilterTabsProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ options, value, onChange, className = "" }) => {
  return (
    <div
      className={`flex items-center bg-soboLightBlue rounded-xl border border-solid border-[#CAD7FF] ${className}`}
    >
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`
      text-sm font-[500] lg:text-base py-[11px] px-[15px] lg:px-3 lg:w-[134px] h-[48px] transition-all duration-200 border-r border-[#CAD7FF] capitalize
      ${value === option
              ? "bg-soboBlue text-white"
              : "bg-soboLightBlue text-soboBlue hover:bg-soboBlue/10 hover:text-soboBlue"
            }
      ${index === 0 ? "rounded-tl-xl rounded-bl-xl" : ""}
      ${index === options.length - 1 ? "rounded-tr-xl rounded-br-xl border-r-0" : ""}
      whitespace-nowrap
    `}
        >
          {option}
        </button>
      ))}

    </div>
  );
};

export default FilterTabs;
