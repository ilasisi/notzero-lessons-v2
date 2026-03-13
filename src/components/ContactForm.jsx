import { useState } from "react";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export const ContactForm = () => {
    const [isLoading, setIsLoading] = useState();
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        consent: false,
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        setTimeout(() => {
            console.log(data);

            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="max-w-lg mx-auto h-dvh flex items-center">
            <div className="space-y-6 bg-white shadow p-5 w-full rounded-2xl">
                <p className="font-bold text-neutral-600 text-2xl">
                    Contact Us
                </p>
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input
                            value={data.first_name}
                            name="first_name"
                            placeholder="e.g John"
                            label="First name"
                            id="first_name"
                            required
                            onChange={handleChange}
                        />
                        <Input
                            value={data.last_name}
                            name="last_name"
                            placeholder="e.g Doe"
                            label="Last name"
                            id="last_name"
                            required
                            onChange={handleChange}
                        />
                        <div className="sm:col-span-2">
                            <Input
                                value={data.email}
                                type="email"
                                name="email"
                                placeholder="e.g email@email.com"
                                label="Email Address"
                                id="email"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Textarea
                                value={data.message}
                                name="message"
                                placeholder="Enter message ..."
                                label="Message"
                                id="message"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Checkbox
                                value={data.consent}
                                name="consent"
                                label="I consent to being contacted by the team"
                                id="consent"
                                required
                                onChange={handleChange}
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
