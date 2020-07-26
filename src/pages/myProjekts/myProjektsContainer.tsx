import React from "react"

import { MyProjektsComponent } from "./myProjektsComponent"
import { MyProjektsContainerProps, ItemsData } from "./types";

const itemsData: ItemsData = {
    title: "@_MY_SKILLS",
    buttonNames: ["GIT Repository", "WWW Page"],
    projekt: [
        {
            linkPicture: "../../../img/matrix.png",
            description: "ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ",
            gitLink: "",
            wwwLink: "",
        },
        {
            linkPicture: "../../../img/matrix.png",
            description: "ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ",
            gitLink: "",
            wwwLink: "",
        },
        {
            linkPicture: "../../../img/matrix.png",
            description: "ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ",
            gitLink: "",
            wwwLink: "",
        },
        {
            linkPicture: "../../../img/matrix.png",
            description: "ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ",
            gitLink: "",
            wwwLink: "",
        }
    ]
}

export const MyProjektsContainer: React.FC<MyProjektsContainerProps> = () => {
    const items = itemsData
    return (
        <MyProjektsComponent items={items} />
    )
}