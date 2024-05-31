import Layout from "./pages/layout";
import Routes from "./Routes.tsx";
import {ReactElement} from "react";

function App(): ReactElement {
    return (
        <>
            <Layout/>
            <Routes/>
        </>
    );
}

export default App
