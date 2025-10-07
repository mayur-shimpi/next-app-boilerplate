'use client'
import { RadioGroup } from '@headlessui/react'

type Option = { label: string; value: string }
type Props = {
  label: string
  value: string
  options: Option[]
  onChange: (value: string) => void
}

export default function RadioButtons({ label, value, options, onChange }: Props) {
  return (
    <RadioGroup value={value} onChange={onChange} className="space-y-2">
      <RadioGroup.Label className="block text-sm font-medium">{label}</RadioGroup.Label>
      {options.map((opt) => (
        <RadioGroup.Option key={opt.value} value={opt.value} className={({ active, checked }) =>
          `flex items-center space-x-2 p-2 rounded cursor-pointer border border-gray-300
          ${checked ? 'bg-soboBlue text-white' : 'bg-white text-gray-700'}
          ${active && 'ring ring-indigo-300'}`
        }>
          {({ checked }) => (
            <>
              <div className={`w-4 h-4 rounded-full border-2 ${checked ? 'border-white' : 'border-gray-300'}`}></div>
              <span>{opt.label}</span>
            </>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}
