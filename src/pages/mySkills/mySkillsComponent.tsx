import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { MySkillsComponentProps } from "./types";
import { SkillElement } from '../../components/skillElement'

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    mySkills: {
        backgroundColor: palette.primary.light,
        position: "relative",
        width: "100%",
        height: "1030px",
        minHeight: "100vh",
        [breakpoints.down('md')]: {
            height: "1300px",
        },
        [breakpoints.down('sm')]: {
            height: "2090px",
        },
    },
    title: {
        position: "relative",
        top: "130px",
        color: palette.secondary.main,
        fontFamily: "Candara",
        fontSize: "58px",
    },
    list: {
        marginTop: "190px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",

        height: "400px",
        width: "80vw",
        marginLeft: "15vw",
        [breakpoints.down('sm')]: {
            marginLeft: "20vw",
            width: "60vw",
            height: "800px",
        },
    },
    ul: {
        width: "340px",
        color: palette.secondary.dark,
        fontWeight: "bolder",
        [breakpoints.down('md')]: {
            width: "360px",
        },
        paddingTop: "8px",
        paddingBottom: "8px",
        margin: 0
    }
}));

export const MySkillsComponent: React.FC<MySkillsComponentProps> = ({ items }) => {
    const classes = useStyles();

    return (
        <div className={classes.mySkills} id="MySkillsComponent">
            <p className={classes.title}> {items.title} </p>
            <div className={classes.list}>
                {
                    items.skillNames.map((item, index) =>
                        <SkillElement
                            key={index}
                            ico={item.ico}
                            primary={item.name}
                            secondary={item.description}
                        />
                    )
                }
                <ul className={classes.ul} />
            </div>
        </div>
    )
}
