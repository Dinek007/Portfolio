export type HeaderComponentProps = {
    buttons: string[];
    items: ItemsData;
}
export type HeaderContainerProps = {
    buttons?: string[];
    items?: ItemsData;
}

export type ItemsData = {
    description: string;
    title: string;
    picture: string;
}
