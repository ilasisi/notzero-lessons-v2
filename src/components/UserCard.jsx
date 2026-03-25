import { useContext } from "react";
import { UserContext } from "../pages/Home";

export const UserCard = () => {
    const user = useContext(UserContext);
    return (
        <div className="bg-white p-5">
            UserCard
            <p>{user}</p>
        </div>
    );
};
