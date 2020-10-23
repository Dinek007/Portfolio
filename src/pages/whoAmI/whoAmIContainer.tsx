import React from "react"

import { WhoAmIComponent } from "./whoAmIComponent"
import { WhoAmIContainerProps, ItemsData } from "./types"

const itemsData: ItemsData = {
    description: "My name is Damian Wilk. I've been collecting experience and broadening my knowledge in web programming for 5 years. I graduated from the Upper - secondary Schools of Communications in Cracow in the field of computer science, currently I am studying computer science at the Pedagogical University in Cracow. I'm communicative. I can solve problems quickly and I learn vary fast.",
    title: "ABOUT_ME",
    picture: "../../../img/face.png"
}

export const WhoAmIContainer: React.FC<WhoAmIContainerProps> = () => {
    const items = itemsData

    return (
        <WhoAmIComponent items={items} />
    )
}