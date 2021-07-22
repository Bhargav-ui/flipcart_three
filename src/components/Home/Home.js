import { useState } from "react";
import Nav from '../Nav/Nav';
const Home = () => {

    const [name, setname] = useState("Deraj&Bavs");
    return (
        <>
        {/* <Nav/> */}
            <h2>{name}</h2>
        </>
    );
};

export default Home;