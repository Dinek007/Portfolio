import React from "react"

import { CommunicationComponent } from "./communicationComponent"
import { CommunicationContainerProps, ItemsData } from "./types"

const itemsData: ItemsData = {
    title: "CONTACT",
    phone: "+48 505 934 407",
    mail: "damian.wilk991213@gmail.com",
    linkedin: "www.linkedin.com/in/damian-wilk-1843931b9/",
    facebook: "www.facebook.com/damian.wilk.14"
}

export const CommunicationContainer: React.FC<CommunicationContainerProps> = () => {
    const items = itemsData

    return (
        <CommunicationComponent items={items} />
    )
}