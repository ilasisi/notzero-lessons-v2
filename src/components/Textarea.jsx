export const Textarea = ({ label, className, errors, ...props }) => {
    const error = errors[props.name];

    return (
        <div className="space-y-1">
            {label && (
                <label
                    className={`block font-medium ${error ? "text-red-500" : "text-neutral-500"}`}
                    htmlFor={props.id}
                >
                    {label}
                    {props.required && (
                        <span className="ml-1 text-red-500">*</span>
                    )}
                </label>
            )}
            <textarea
                className={`border w-full border-neutral-300 py-2 px-3 rounded-xl ${error && "border-red-500 text-red-500 outline-red-500"} ${className}`}
                id={props.id}
                {...props}
            />
            {error && (
                <span className="text-red-500 text-sm">{error?.message}</span>
            )}
        </div>
    );
};
