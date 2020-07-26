export type MyProjektsComponentProps = {
    items: ItemsData;
}
export type MyProjektsContainerProps = {
    items?: ItemsData
}

export type ItemsData = {
    title: string;
    buttonNames: string[];
    projekt: Array<
        {
            linkPicture: string;
            description: string;
            gitLink: string;
            wwwLink: string;
        }
    >;
}