'use client'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/outline'

type Option = { label: string; value: string }
type Props = {
  label: string
  value: string
  options: Option[]
  onChange?: (value: string) => void
  className?: string
}

export default function SelectOptions({ label, value, options, onChange, className }: Props) {
  return (
    <div className={` ${className}`}>
      <Listbox value={value} onChange={onChange}>
        <Listbox.Label className="block text-sm font-medium mb-1">{label}</Listbox.Label>
        <div className="relative">
          <Listbox.Button className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg outline-soboBlue">
            <span>{options?.find((o) => o.value === value)?.label || 'Select Option ...'}</span>
            <ChevronDownIcon className="w-5 h-5 text-gray-500 ml-3" />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-[99] outline-soboBlue ">
            {options.map((opt) => (
              <Listbox.Option key={opt.value} value={opt.value} className={({ active, selected }) =>
                `cursor-pointer px-4 py-2 ${active && 'bg-soboBlue text-white hover:bg-soboBlue100 hover:text-soboBlue'} ${selected && 'font-semibold bg-soboBlue text-white  hover:bg-soboBlue hover:text-white'}`
              }>
                {({ selected }) => (
                  <div className="flex justify-between">
                    <span>{opt.label}</span>
                    {selected && <CheckIcon className="w-5 h-5 text-white" />}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}
