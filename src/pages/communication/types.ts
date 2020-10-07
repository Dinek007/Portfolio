export type CommunicationComponentProps = {
    items: ItemsData;
}

export type CommunicationContainerProps = {
    items?: ItemsData;
}

export type ItemsData = Record<"title" | "phone" | "mail" | "linkedin" | "facebook", string>