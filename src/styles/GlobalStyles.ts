import {createGlobalStyle} from "styled-components";

export enum GlobalColors {
    primary = "#fff",
    secondary = "#333",
    tertiary = "#F6F2EAFF",
}


export const GlobaStyles = createGlobalStyle`
    
    :root {
        background-color: ${GlobalColors.tertiary};
        font-family: 'Cabin Sketch', sans-serif;
    }
`;
