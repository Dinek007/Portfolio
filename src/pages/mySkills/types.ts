export type MySkillsComponentProps = {
    items: ItemsData;
}

export type MySkillsContainerProps = {
    items?: ItemsData;
}

export type ItemsData = {
    title: string;
    skillNames: Array<
        {
            ico: string;
            name: string;
            description: string;
        }
    >;
}