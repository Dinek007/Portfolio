import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'

import { MySkillsComponentProps } from "./types"
import { SkillElement } from '../../components/skillElement'

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    mySkills: {
        backgroundColor: palette.primary.light,
        position: "relative",
        width: "100%",
        height: "auto",
        minHeight: "100vh",
    },
    title: {
        position: "relative",
        top: "130px",
        color: palette.secondary.main,
        fontFamily: "Candara",
        fontSize: "58px",
    },
    list: {
        marginTop: "205px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "80vw",
        marginLeft: "10vw",
        paddingBottom: "90px",
        [breakpoints.down('sm')]: {
            marginLeft: "20vw",
            width: "60vw",
        },
    },
    ul: {
        width: "20vw",
        color: palette.secondary.dark,
        fontWeight: "bolder",
        [breakpoints.down('md')]: {
            width: "360px",
        },
        paddingTop: "8px",
        paddingBottom: "8px",
        margin: "0px",
        paddingLeft: "0px",
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
