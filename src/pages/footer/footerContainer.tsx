import React from "react"

import { FooterComponent } from "./footerComponent"
import { FooterContainerProps, ItemData } from "./types"

const itemData: ItemData = "Damian Wilk 2020"

export const FooterContainer: React.FC<FooterContainerProps> = () => {
    const item = itemData

    return (
        <FooterComponent item={item} />
    )
}