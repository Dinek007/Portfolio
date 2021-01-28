import React from "react"

import { MyProjektsComponent } from "./myProjektsComponent"
import { MyProjektsContainerProps } from "./types"

type DescriptionComponentProps = Partial<Record<'description' | 'technologies', string>>
const DescriptionComponent: React.FC<DescriptionComponentProps> = ({
    description,
    technologies
}) => {
    return <>
        {description} <br /> <br /> {technologies}
    </>
}

const itemsData = {
    title: "MY_SKILLS",
    buttonNames: ["GIT Repository", "WWW Page"],
    items: [
        {
            linkPicture: "../../../img/ShopAppPic.png",
            description: <DescriptionComponent
                description={"FASHION MYSTERY - shop application"}
                technologies={"Used technologies: TypeScript, React, React Hooks, React Router Dom, Redux, Redux Saga, Firebase Storage, Cloud Firestore, Material-Ui"}
            />,
            gitLink: "https://github.com/Dinek007/Shop_app",
            wwwLink: "https://shop-fashion-mistery.web.app/",
        },
        {
            linkPicture: "../../../img/PokerPic0.png",
            description: <DescriptionComponent
                description={"Web PC game based on popular game POKER"}
                technologies={"Used technologies: React, React Hooks, Redux, Material-Ui "}
            />,
            gitLink: "https://github.com/Dinek007/Poker/tree/master/poker",
            wwwLink: "https://poker-9cc0e.web.app/",
        },
        {
            linkPicture: "../../../img/WorldOfNotesPic.png",
            description: <DescriptionComponent
                description={"Cooperation in WORLD OF NOTES - online notebook app (in progress)"}
                technologies={"Used technologies: React, Redux, Redux-Thunk, Material Ui, Lerna, Jest, Node Js, Netlify Functions, Fauna Db, Typescript, JWT Based Authentication "}
            />,
            gitLink: "https://github.com/meho99/worldOFNotesMonorepo",
            wwwLink: "https://world-of-notes.netlify.app",
        },
        {
            linkPicture: "../../../img/PortfolioPic.png",
            description: <DescriptionComponent
                description={"My porfolio page"}
                technologies={"Used technologies: TypeScript, React, React Hooks, Material-Ui "}
            />,
            gitLink: "https://github.com/Dinek007/Portfolio",
            wwwLink: "",
        }
    ]
}

export const MyProjektsContainer: React.FC<MyProjektsContainerProps> = () => {
    const items = itemsData

    return (
        <MyProjektsComponent {...items} />
    )
}