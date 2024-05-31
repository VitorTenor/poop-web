import {ReactElement, useState, useEffect} from "react";
import podium from "./../../../assets/podium.svg";
import {BodyStyles, ImageRankingPanelStyles} from "./styles.ts";

type ShitterRanking = {
    name: string;
    position: number;
    points: number;
    base64Image: string;
}


export const Body = () : ReactElement =>{
    const [ranking, setRanking] = useState([] as  ShitterRanking[]);
    const newPodium : string = podium.toString();

    useEffect(() => {



    }, [newPodium]);



    return (
        <BodyStyles>
            <ImageRankingPanelStyles src={newPodium} alt="podium" />
        </BodyStyles>
    )
}
