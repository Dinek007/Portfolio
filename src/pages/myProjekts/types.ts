import { ProjektElementComponentProps } from "../../components/types"

export type MyProjektsComponentProps =
    Pick<ProjektElementComponentProps, 'buttonNames'> & {
        items: Array<ProjektElementComponentProps['data']>;
        title: string;
    }

export type MyProjektsContainerProps = {}
