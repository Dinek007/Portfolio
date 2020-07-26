import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { FooterComponentProps } from "./types";

const useStyles = makeStyles(({ palette }) => createStyles({
    footer: {
        backgroundColor: palette.secondary.main,
        position: "relative",
        width: "100%",
        height: "auto",
        color: palette.primary.dark,
        borderTop: `4px solid ${palette.primary.dark}`,
        fontSize: "30px",
        fontFamily: "Candara",
    },
}));

export const FooterComponent: React.FC<FooterComponentProps> = ({ item }) => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <p> {item} </p>
        </div>
    )
}
