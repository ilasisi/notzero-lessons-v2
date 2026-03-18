import { useState } from "react";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "./Select";

const ContactSchema = z.object({
    first_name: z.string().min(3, "First name must be greater 2 chars."),
    last_name: z.string().min(3, "Last name must be greater 2 chars."),
    email: z.email("Enter a valid email address"),
    gender: z.enum(["male", "female"], "Either male or female"),
    occupation: z.string().min(1, "Occupation is required"),
    message: z.string().min(10, "Message must be greater 9 chars."),
    consent: z.boolean(),
});

const occupations = [
    { value: "doctor", label: "Doctor" },
    { value: "lawyer", label: "Lawyer" },
    { value: "engineer", label: "Engineer" },
    { value: "lecturer", label: "Lecturer" },
];

export const ContactFormWithRHF = () => {
    const [isLoading, setIsLoading] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            message: "",
            consent: false,
        },
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = (data) => {
        setIsLoading(true);

        setTimeout(() => {
            console.log(data);
            alert(`Form submitted successfully!\n ${JSON.stringify(data)}`);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="max-w-lg mx-auto h-dvh flex items-center">
            <div className="space-y-6 bg-white border border-neutral-200 shadow p-5 w-full rounded-2xl">
                <p className="font-bold text-neutral-600 text-2xl">
                    Contact Us
                </p>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input
                            name="first_name"
                            placeholder="e.g John"
                            label="First name"
                            id="first_name"
                            required
                            errors={errors}
                            {...register("first_name")}
                        />
                        <Input
                            name="last_name"
                            placeholder="e.g Doe"
                            label="Last name"
                            id="last_name"
                            required
                            errors={errors}
                            {...register("last_name")}
                        />
                        <div className="sm:col-span-2">
                            <Input
                                type="email"
                                name="email"
                                placeholder="e.g email@email.com"
                                label="Email Address"
                                id="email"
                                required
                                errors={errors}
                                {...register("email")}
                            />
                        </div>
                        <Select
                            label="Gender"
                            placeholder="Select gender"
                            options={[
                                { value: "male", label: "Male" },
                                { value: "female", label: "Female" },
                            ]}
                            errors={errors}
                            {...register("gender")}
                        />
                        <Select
                            label="Occupation"
                            placeholder="Select occupation"
                            options={occupations}
                            errors={errors}
                            {...register("occupation")}
                        />
                        <div className="sm:col-span-2">
                            <Textarea
                                name="message"
                                placeholder="Enter message ..."
                                label="Message"
                                id="message"
                                required
                                errors={errors}
                                {...register("message")}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Checkbox
                                name="consent"
                                label="I consent to being contacted by the team"
                                id="consent"
                                required
                                errors={errors}
                                {...register("consent")}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Button isLoading={isLoading} type="submit">
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
