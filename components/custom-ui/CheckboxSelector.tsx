'use client'
import { useState } from 'react'

type Option = {
  label: string
  value: string
}

interface Props {
  label?: string
  name: string
  value: string[]
  options: Option[]
  onChange: (value: string[]) => void
}

export default function CheckboxSelector({ label, name, value, options, onChange }: Props) {
  const handleToggle = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(v => v !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <div className="flex flex-wrap gap-3">
        {options.map(opt => {
          const selected = value.includes(opt.value)
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleToggle(opt.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors 
                ${selected
                  ? 'border-soboBlue bg-white text-soboBlue'
                  : 'border-gray-300 text-gray-700 hover:border-soboBlue hover:text-soboBlue'}
              `}
            >
              <span
                className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors 
                  ${selected ? 'bg-soboBlue border-blue-500' : 'border-gray-300'}`}
              >
                {selected && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
