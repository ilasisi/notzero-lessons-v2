import { useRef, useState } from "react";
import { DataSchema } from "../lib/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HomeIcon, UploadCloudIcon } from "lucide-react";

export const InputValidation = () => {
    const [data, setData] = useState({ email: "", name: "" });
    const [error, setError] = useState(null);
    const inputRef = useRef(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ resolver: zodResolver(DataSchema) });

    const email = watch("email");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({ ...data, [name]: value });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (data.email.length === 0) {
    //         setError("Email is required");
    //         return;
    //     }

    //     if (data.name.length === 0) {
    //         setError("Name is required");
    //         return;
    //     }

    //     if (data.name.length < 4) {
    //         setError("Name should more less 4 chars");
    //         return;
    //     }

    //     if (data.name.length > 10) {
    //         setError("Name should more than 10 chars");
    //         return;
    //     }

    //     setError(null);

    //     console.log(data);
    // };

    const handleSubmitUsingZod = (e) => {
        e.preventDefault();

        const result = DataSchema.safeParse(data);

        console.log(result.error);

        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }

        setError(null);

        console.log(data);
    };

    const handleSubmitWithRHF = (data) => {
        console.log(data);
    };

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(handleSubmitWithRHF)}>
            {email && <p>Email present</p>}
            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    {...register("email")}
                />
                <p>{errors.email?.message}</p>
            </div>
            <div>
                <input
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    {...register("name")}
                />
                <p>{errors.name?.message}</p>
            </div>
            <button>Submit</button>
            <p>{error}</p>

            <label>
                <div>
                    <HomeIcon />
                    <span className="sr-only">Home Icon</span>
                </div>
                <label className="relative">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-5 flex items-center px-1 transition-colors duration-300 bg-neutral-200 peer-checked:bg-amber-600 rounded-full group">
                        <div className="size-4 bg-white rounded-full transition-transform duration-300 group-peer-checked:translate-x-5"></div>
                    </div>
                </label>
            </label>

            <div
                className="border cursor-pointer p-5 border-dashed w-40 rounded-md border-neutral-500"
                onClick={() => inputRef.current.click()}
            >
                <div className="flex flex-col items-center">
                    <UploadCloudIcon />
                    <p>Upload a file</p>
                </div>

                <input ref={inputRef} type="file" className="sr-only" />
            </div>
        </form>
    );
};
