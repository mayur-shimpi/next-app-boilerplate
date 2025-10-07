'use client';
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

type PasswordFieldProps = {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
};

export default function PasswordField({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder = "",
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="">
      {label && <label htmlFor={name} className="block text-sm font-medium mb-1">{label}</label>}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 pr-10 outline-soboBlue"
        />
        <div
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" />
          ) : (
            <EyeIcon className="h-5 w-5" />
          )}
        </div>
      </div>
    </div>
  );
}
