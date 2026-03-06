import { useState } from "react";
import { extentions } from "../lib/extentions";

export const Extentions = () => {
    const [companies, setCompanies] = useState(extentions);

    const handleDelete = (index) => {
        const newCompanies = companies.filter((_, idx) => idx !== index);
        setCompanies(newCompanies);
    };

    return (
        <div>
            <div>
                {companies.map((item, index) => (
                    <div className="flex" key={index}>
                        <p>{item.name}</p>
                        <button
                            onClick={() => handleDelete(index)}
                            className="text-red-500"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
