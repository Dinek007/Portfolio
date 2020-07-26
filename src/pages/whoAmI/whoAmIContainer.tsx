import React from "react"

import { WhoAmIComponent } from "./whoAmIComponent"
import { WhoAmIContainerProps, ItemsData } from "./types";

const itemsData: ItemsData = {
    description: "ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble ble bel bel ble ble ble ble ble ble ble ble ble ble ble ble ble ",
    title: "@_ABOUT_ME",
    picture: "../../../img/face.png"
}

export const WhoAmIContainer: React.FC<WhoAmIContainerProps> = () => {
    const items = itemsData
    return (
        <WhoAmIComponent items={items} />
    )
}