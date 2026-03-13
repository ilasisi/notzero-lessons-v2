import { Loader2 } from "lucide-react";

export const Button = ({ isLoading, children, ...props }) => {
    return (
        <button
            className="flex gap-3 items-center justify-center bg-green-700 w-full text-white px-4 py-2 rounded-xl"
            {...props}
        >
            {isLoading ? (
                <span>
                    <Loader2 className="animate-spin size-5" />
                </span>
            ) : (
                children
            )}
        </button>
    );
};
