type TextAreaProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};

export default function TextArea({ label, name, value, onChange, placeholder }: TextAreaProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border border-gray-300 rounded px-3 py-2 outline-soboBlue bg-transparent"
        rows={4}
      />
    </div>
  );
}
