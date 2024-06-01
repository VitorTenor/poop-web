import { ReactElement, useState, useEffect } from "react";
import podium from "./../../../assets/podium.svg";
import { BodyStyles, ImageRankingPanelStyles } from "./styles.ts";
import firstImage from "./../../../assets/7.svg";
import secondImage from "./../../../assets/5.svg";
import thirdImage from "./../../../assets/6.svg";
import { base64FromPath, readFileAsString} from "../../../util/fileUtil.ts";

type ShitterRanking = {
    name: string;
    position: number;
    points: number;
    base64Image: string;
};

const jsonSchema: ShitterRanking[] = [
    {
        name: "Xico",
        position: 1,
        points: 100,
        base64Image: "1"
    },
    {
        name: "Ina",
        position: 2,
        points: 90,
        base64Image: "2"
    },
    {
        name: "Vitor",
        position: 3,
        points: 80,
        base64Image: "3"
    }
];

export const Body = (): ReactElement => {
    const ranking : ShitterRanking[] = jsonSchema;
    const [updatedPodiumSVG, setUpdatedPodiumSVG] = useState<string>("");

    useEffect((): void => {
            const updateImages = async (): Promise<void> => {
                let newPodium : string = await readFileAsString(podium);
                const base64Image = {
                    1 : await base64FromPath(firstImage),
                    2 : await base64FromPath(secondImage),
                    3 : await base64FromPath(thirdImage)
                }

                ranking.forEach((shitter: ShitterRanking) : void => {
                    switch (shitter.position) {
                        case 1:
                            shitter.base64Image = base64Image[1];
                            newPodium = newPodium.replace("${ranking1}", shitter.base64Image);
                            break;
                        case 2:
                            shitter.base64Image = base64Image[2];
                            newPodium = newPodium.replace("${ranking2}", shitter.base64Image);
                            break;
                        case 3:
                            shitter.base64Image = base64Image[3];
                            newPodium = newPodium.replace("${ranking3}", shitter.base64Image);
                            break;
                    }
                });

                setUpdatedPodiumSVG(newPodium);
            };

            if (updatedPodiumSVG === "") {
                updateImages().then();
            }
    }, [ranking]);

    return (
        <BodyStyles>
            {updatedPodiumSVG && <ImageRankingPanelStyles src={`data:image/svg+xml;base64,${btoa(updatedPodiumSVG)}`} alt="podium" />}
        </BodyStyles>
    );
};
