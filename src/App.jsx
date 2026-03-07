import { Avatar } from "./components/Avatar";
import { BrowserExtentions } from "./components/BrowserExtentions";
import { Card } from "./components/Card";
import { Counter } from "./components/Counter";
import { Faq } from "./components/Faq";
import { GithubProfileSearch } from "./components/GithubProfileSearch";
import { UpdateName } from "./components/UpdateName";

const App = () => {
    const person1 = {
        name: "John Doe",
        company: "Google Inc.",
        age: 30,
    };

    const person2 = {
        name: "James Doe",
        company: "Meta Inc.",
        age: 50,
    };

    return (
        <div className="space-y-5">
            {/* <BrowserExtentions /> */}
            <GithubProfileSearch />
            {/* <Faq />
            <UpdateName />
            <Counter />
            <div className="flex gap-4">
                <Card person={person1} />
                <Card person={person2} />
            </div>
            <div className="flex gap-4">
                <Avatar name="james avatar" imageId="1bX5QH6" />
                <Avatar
                    name="doe avatar"
                    imageId="YfeOqp2"
                    width={80}
                    height={80}
                />
                <Avatar name="john" imageId="OKS67lh" width={50} height={50} />
                <Avatar
                    name="man avatar"
                    imageId="1bX5QH6"
                    width={30}
                    height={30}
                />
            </div> */}
        </div>
    );
};

export default App;
