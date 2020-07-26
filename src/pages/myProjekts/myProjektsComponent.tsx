import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { ProjektElement } from '../../components/projektElement'
import { MyProjektsComponentProps } from "./types";


const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    myProjekts: {
        backgroundColor: palette.secondary.dark,
        position: "relative",
        width: "100%",
        height: "auto",
        paddingBottom: "180px"
    },
    title: {
        position: "relative",
        top: "90px",
        color: palette.primary.light,
        fontFamily: "Candara",
        fontSize: "58px",
        paddingBottom: "50px"
    },
    projekts: {
        position: "relative",
        textAlign: "center",
        width: "90vw",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        top: "150px",

    }
}));

export const MyProjektsComponent: React.FC<MyProjektsComponentProps> = ({ items }) => {
    const classes = useStyles();
    return (
        <div className={classes.myProjekts}>
            <p className={classes.title}>@_MY_PROJECTS</p>
            <div className={classes.projekts}>
                {
                    items.projekt.map((item, index) =>
                        <ProjektElement
                            data={item}
                            buttonNames={items.buttonNames}
                            key={index}
                        />
                    )
                }
            </div>

        </div>
    )
}
