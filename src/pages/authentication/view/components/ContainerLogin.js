import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { register } from '../../../../service/auth.service';
import { githubAuth, googleAuth } from '../../../../config/firebase';
import useRegisterUser from '../../hook/useRegisterUser';

const useStyles = makeStyles((theme) => ({
    container: {
        marginRight: theme.spacing(2)
    },
    textContainer: {
        flexGrow: 1,
        textAlign: 'center'
    },

    box: {
        borderRadius: '10px',
        width: '300px',
        background: '#3E3C3F',
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        transition: theme.transitions.create("bckground-color", {
            duration: theme.transitions.duration.shortest
        }),

        "&:hover": {
            backgroundColor: "#7d73f9"
        },
        cursor: 'pointer'
    },
    text: {
        color: '#fff',
        fontSize: '1.4rem',
        letterSpacing: '2px'
    },
}));


export default function ContainerLogin() {
    const classes = useStyles();
    const registerUser = useRegisterUser()

    return (
        <div clssName={classes.container}>
            <div className={classes.box} onClick={() => registerUser(githubAuth)}>
                <img src={process.env.PUBLIC_URL + "/assets/github.png"}
                    alt="github"
                    width="60px"
                    height="60px"
                />
                <div className={classes.textContainer}>
                    <Typography className={classes.text}>Github</Typography>
                </div>

            </div>
            <div className={classes.box} onClick={() => registerUser(googleAuth)}>
                <img src={process.env.PUBLIC_URL + "/assets/google.png"}
                    alt="google"
                    width="60px"
                    height="60px"
                />
                <div className={classes.textContainer}>
                    <Typography className={classes.text}>Google</Typography>
                </div>
            </div>
        </div>
    )
}

