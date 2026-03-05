import { useState } from "react";
import { faqs } from "../lib/static-data";
import { ChevronRight } from "lucide-react";

export const Faq = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleFaq = (index) => {
        setSelectedIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="space-y-3 p-5">
            <h1 className="font-bold text-3xl">Frequently Asked Questions</h1>
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={index}
                        faq={faq}
                        selectedIndex={selectedIndex}
                        index={index}
                        toggleFaq={toggleFaq}
                    />
                ))}
            </div>
        </div>
    );
};

const FaqItem = ({ faq, selectedIndex, index, toggleFaq }) => {
    return (
        <div className="space-y-2 max-w-md overflow-hidden bg-white shadow rounded-2xl border border-neutral-300 px-5 py-3">
            <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between gap-3"
            >
                <p className="font-bold text-xl mb-0">{faq.question}</p>
                <span>
                    <ChevronRight
                        className={`transition duration-300 ease-in-out ${selectedIndex === index ? "rotate-90" : ""}`}
                    />
                </span>
            </button>
            <p
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    selectedIndex === index ? "max-h-40" : "max-h-0"
                }`}
            >
                {faq.answer}
            </p>
        </div>
    );
};
