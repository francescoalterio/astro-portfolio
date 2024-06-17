interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function TextInput({ className, value, onChange }: Props) {
  return (
    <input
      className={` bg-customGray-300 rounded-lg px-4 py-2 outline-none ${className}`}
      type="text"
      value={value}
      placeholder="Buscar proyecto..."
      onChange={onChange}
    />
  );
}
