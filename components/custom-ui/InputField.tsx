type InputFieldProps = {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute; // allows 'text', 'email', 'tel', 'password', etc.
  required?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
};

export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  isRequired,
  isDisabled,
  className,
}: InputFieldProps) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={`w-full border border-gray-300 rounded-lg px-3 py-2 focus:border-soboBlue focus:ring-0 focus:ring-soboBlue focus:outline-none focus:border-soboBlue ${isDisabled && "bg-gray-100 text-gray-400"} ${className}`}
        disabled={isDisabled}
      />
    </div>
  );
}
