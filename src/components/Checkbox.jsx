export const Checkbox = ({ label, errors, className, ...props }) => {
    const error = errors[props.name];

    return (
        <div>
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    className={`${className}`}
                    id={props.id}
                    {...props}
                />
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
            </div>
            {error && (
                <span className="text-red-500 text-sm">{error?.message}</span>
            )}
        </div>
    );
};
