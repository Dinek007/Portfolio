import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { HeaderButtonComponentProps } from "./types";

const useStyles = makeStyles(({ palette }) => createStyles({
    item: {
        marginLeft: "0px",
        textAlign: "center",
        color: palette.primary.main,
        width: "15vw",
        height: "40px",
        borderRadius: "0",
        fontSize: "20px",
        fontFamily: "Candara"
    },
}));

export const HeaderButton: React.FC<HeaderButtonComponentProps> = ({ text = '' }) => {
    const classes = useStyles();

    return (
        <Button className={classes.item}> {text} </Button>
    )
}