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
            gitLink: "https://github.com/Dinek007/Shop_app",
            wwwLink: "",
        },
        {
            linkPicture: "../../../img/PokerPic.png",
            description: "ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ",
            gitLink: "https://github.com/Dinek007/Poker",
            wwwLink: "https://poker-9cc0e.web.app/",
        },
        {
            linkPicture: "../../../img/TodoListPic.png",
            description: "ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ",
            gitLink: "https://github.com/Dinek007/Todo-List",
            wwwLink: "https://todo-list-76a23.web.app/",
        },
        {
            linkPicture: "../../../img/PortfolioPic.png",
            description: "ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ",
            gitLink: "https://github.com/Dinek007/Portfolio",
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