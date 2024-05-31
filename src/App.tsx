import Routes from "./Routes.tsx";
import {ReactElement} from "react";
import {GlobaStyles} from "./styles/GlobalStyles.ts";
import {Header} from "./ui/organism/Header";
import {Body} from "./ui/organism/Body";

function App(): ReactElement {
    return (
        <>
            <GlobaStyles />
            <Header />
            <Body />
            <Routes/>
        </>
    );
}

export default App
