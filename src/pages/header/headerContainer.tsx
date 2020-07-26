import React from "react"

import { HeaderComponent } from "./headerComponent"
import { HeaderContainerProps, ItemsData } from "./types";

const buttonsNames = ["About me", "My skills", "My projekts", "Contact"]
const itemsData: ItemsData = {
    description: "PORTFOLIO PAGE",
    title: "DAMIAN WILK",
    picture: "../../../img/matrix.png"
}
export const HeaderContainer: React.FC<HeaderContainerProps> = () => {
    const buttons = buttonsNames
    const items = itemsData
    return (
        <HeaderComponent
            buttons={buttons}
            items={items}
        />
    )
}