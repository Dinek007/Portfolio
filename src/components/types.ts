export type HeaderButtonComponentProps = { text?: string }
export type ProjektElementComponentProps = {
    data: {
        linkPicture: string;
        description: string;
        gitLink: string;
        wwwLink: string;
    };
    buttonNames: string[];
}
export type SkillElementComponentProps = {
    primary?: string,
    secondary?: string,
    ico?: string,
    xs?: number
}

