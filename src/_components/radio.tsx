export default function (
  { label, id, name, placeholder, value, readonly }: {
    label?: string;
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    readonly?: boolean;
  },
) {
  return (
    <label
      for={id}
      className="flex gap-2 items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      <input
        type="radio"
        id={id}
        name={name}
        className="flex h-4 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={placeholder}
        value={value}
        readonly={readonly}
      />
      {label}
    </label>
  );
}
