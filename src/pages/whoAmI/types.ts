export type WhoAmIComponentProps = {
    items: ItemsData;
}
export type WhoAmIContainerProps = {
    items?: ItemsData;
}

export type ItemsData = Record<"description" | "title" | "picture", string>

