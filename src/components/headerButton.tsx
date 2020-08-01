import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { HeaderButtonComponentProps } from "./types";

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    item: {
        marginLeft: "0px",
        textAlign: "center",
        color: palette.primary.main,
        width: "25%",
        height: "60px",
        borderRadius: "0",
        fontSize: "20px",
        fontFamily: "Candara",
        [breakpoints.down('xs')]: {
            height: "80px",
        },
    },
}));

export const HeaderButton: React.FC<HeaderButtonComponentProps> = ({ text = '', scroll }) => {
    const classes = useStyles();
    console.log(scroll)
    return (
        <Link to={scroll} smooth={true} duration={1000}>
            <Button className={classes.item}> {text} </Button>
        </Link>
    )
}