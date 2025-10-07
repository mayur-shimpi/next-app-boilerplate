'use client'
import { Switch } from '@headlessui/react'

type Props = {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Checkbox({ label, checked, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-center mb-4">
      <Switch checked={checked} onChange={onChange} className={`${checked ? 'bg-soboBlue' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}>
        <span className={`${checked ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 bg-white rounded-full transition`} />
      </Switch>
      <span className="ml-3 text-sm">{label}</span>
    </div>
  )
}
