import React from "react"

import { FooterComponent } from "./footerComponent"
import { FooterContainerProps, ItemData } from "./types";

const itemData: ItemData = "Cos tam na stopce"

export const FooterContainer: React.FC<FooterContainerProps> = () => {
    const item = itemData
    return (
        <FooterComponent item={item} />
    )
}