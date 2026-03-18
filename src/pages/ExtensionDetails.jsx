import { useParams } from "react-router-dom";
import { rawExtensions } from "../lib/extensions";

const ExtensionDetails = () => {
    const { name } = useParams();

    const extension = rawExtensions.find((item) => item.name === name);

    if (!extension) return;

    return (
        <div>
            <img src={extension.logo} />
            <p>{extension.name}</p>
            <p>{extension.description}</p>
        </div>
    );
};

export default ExtensionDetails;
