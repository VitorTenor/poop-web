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
    const [ranking, setRanking] = useState<ShitterRanking[]>(jsonSchema);
    const [updatedPodium, setUpdatedPodium] = useState<string>("");

    useEffect((): void => {
            const updateImages = async (): Promise<void> => {
                const updatedRanking: ShitterRanking[] = [...ranking];
                let newPodium : string = await readFileAsString(podium);
                for (const shitter of updatedRanking) {
                    if (shitter.position === 1) {
                        const base64Image : string = await base64FromPath(firstImage);
                        shitter.base64Image = base64Image;
                        newPodium = newPodium.replace("${ranking1}", base64Image);
                    }
                    if (shitter.position === 2) {
                        const base64Image : string = await base64FromPath(secondImage);
                        shitter.base64Image = base64Image;
                        newPodium = newPodium.replace("${ranking2}", base64Image);
                    }
                    if (shitter.position === 3) {
                        const base64Image : string = await base64FromPath(thirdImage);
                        shitter.base64Image = base64Image;
                        newPodium = newPodium.replace("${ranking3}", base64Image);
                    }
                }

                setRanking(updatedRanking);
                setUpdatedPodium(newPodium);
            };

            updateImages().then();
    }, [ranking]);

    return (
        <BodyStyles>
            {updatedPodium && <ImageRankingPanelStyles src={`data:image/svg+xml;base64,${btoa(updatedPodium)}`} alt="podium" />}
        </BodyStyles>
    );
};
