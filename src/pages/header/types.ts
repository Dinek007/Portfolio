export type HeaderComponentProps = {
    items: ItemsData;
}
export type HeaderContainerProps = {
    items?: ItemsData;
}

export type ItemsData = Record<"description" | "title" | "picture", string> &
{
    buttonsNames: string[];
    scrolls: string[];
}


