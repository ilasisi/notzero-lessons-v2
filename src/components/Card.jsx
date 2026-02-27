export const Card = ({ person }) => {
    return (
        <div className="border w-60 p-3 rounded-2xl">
            <div>
                <p className="font-bold text-xl">
                    {person.name} : {person.age}
                </p>
                <p className="text-sm text-neutral-500">{person.company}</p>
            </div>
        </div>
    );
};
