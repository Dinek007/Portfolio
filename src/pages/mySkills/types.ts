export type MySkillsComponentProps = {
    skillsLibrary: Array<
        {
            ico: string,
            name: string,
            description: string
        }
    >
}
export type MySkillsContainerProps = {
    skillsLibrary?: Array<
        {
            ico: string,
            name: string,
            description: string
        }
    >
}
