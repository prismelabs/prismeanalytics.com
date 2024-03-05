export default function (
  { label, id, name, type, placeholder, value, readonly }: {
    label?: string;
    id?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    readonly?: boolean;
  },
) {
  return (
    <div>
      <label
        for={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      {type === "textarea"
        ? (
          <textarea className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-32" />
        )
        : (
          <input
            type={type}
            name={name}
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder={placeholder}
            value={value}
            readonly={readonly}
          />
        )}
    </div>
  );
}
