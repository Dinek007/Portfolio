import React from "react"
import { makeStyles, createStyles } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { CommunicationComponentProps } from "./types"

const useStyles = makeStyles(({ palette, breakpoints }) => createStyles({
    communication: {
        backgroundColor: "white",
        position: "relative",
        width: "100%",
        height: "auto",
    },
    title: {
        position: "relative",
        top: "90px",
        color: palette.secondary.light,
        fontFamily: "Candara",
        fontSize: "58px",
    },
    contacts: {
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: "150px",
        paddingBottom: "100px",
    },
    contact: {
        marginTop: "45px",
        marginBottom: "45px",
        textAlign: "center",
        width: "800px",
        height: "80px",
        borderRadius: "0",
        fontSize: "20px",
        fontFamily: "Candara",
        position: "relative",
        paddingBottom: "50px",
    },
    text: {
        fontSize: "30px",
        color: palette.primary.dark,
        marginTop: "5px",
        [breakpoints.down('xs')]: {
            fontSize: "20px"
        },
    },
    icon: {
        fontSize: "70px"
    }
}));

export const CommunicationComponent: React.FC<CommunicationComponentProps> = ({ items }) => {
    const classes = useStyles();

    return (
        <div className={classes.communication} id="CommunicationComponent">
            <p className={classes.title}>{items.title}</p>
            <div className={classes.contacts}>
                <div className={classes.contact}>
                    <EmailIcon className={classes.icon} />
                    <p className={classes.text}>{items.mail}</p>
                </div>
                <div className={classes.contact}>
                    <PhoneIcon className={classes.icon} />
                    <p className={classes.text}> {items.phone} </p>
                </div>
                <div className={classes.contact}>
                    <LinkedInIcon className={classes.icon} />
                    <p className={classes.text}>{items.linkedin}</p>
                </div><div className={classes.contact}>
                    <FacebookIcon className={classes.icon} />
                    <p className={classes.text}>{items.facebook}</p>
                </div>
            </div>
        </div>
    )
}
