import React from "react"

import { HeaderComponent } from "./headerComponent"
import { HeaderContainerProps, ItemsData } from "./types";

const itemsData: ItemsData = {
    buttonsNames: [
        "About me",
        "My skills",
        "My projects",
        "Contact"
    ],
    scrolls: ["WhoAmIComponent", "MySkillsComponent", "MyProjektsComponent", "CommunicationComponent"],
    description: "PORTFOLIO PAGE",
    title: "DAMIAN WILK",
    picture: "../../../img/matrix.png"
}
export const HeaderContainer: React.FC<HeaderContainerProps> = () => {
    const items = itemsData
    return (
        <HeaderComponent items={items} />
    )
}