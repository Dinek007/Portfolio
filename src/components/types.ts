export type HeaderButtonComponentProps = {
    text?: string;
    scroll: string;
}

export type ProjektElementComponentProps = {
    buttonNames: string[];
    data:
    Record<"linkPicture" | "gitLink" | "wwwLink", string> & {
        description: React.ReactNode;
    };
}

export type SkillElementComponentProps = {
    primary?: string;
    secondary?: string;
    ico?: string;
    xs?: number;
}