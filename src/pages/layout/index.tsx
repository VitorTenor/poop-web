import {ReactElement} from "react";
import {GlobaStyles} from "../../styles/GlobalStyles.ts";
import {Header} from "../../ui/organism/Header";

export default function Layout(): ReactElement {
    return (
        <>
            <GlobaStyles />
            <Header />
        </>
    );
}
