import styled from "styled-components";
import {GlobalColors} from "../../../styles/GlobalStyles.ts";

export const StyledDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    padding:  10% 0 0 10%;
    background-color: ${GlobalColors.primary};
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const StyledH1 = styled.h1`
    font-size: 80px;
    font-weight: 400;
    color: ${GlobalColors.secondary};
`;
