import React from 'react';
import {useContextStateProvider} from "../components/context";

const Home = () => {
    const { context, setContextState } = useContextStateProvider();
    return (
        <div> Home </div>
    )

}
export default Home;