import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Particles from 'react-particles-js';
import ContainerLogin from '../../view/components/ContainerLogin';
import useRegisterUser from '../../hook/useRegisterUser';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: '#fff',

    },


    text: {
        color: '#fff',
        fontSize: '1.4rem',
        letterSpacing: '2px'
    },
    desc: {
        color: '#fff',
        fontSize: '1.3rem'
    },
    canvas: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        background: "#16202C",
    }
}));


export default function Register() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <h1 className={classes.title}>Register</h1>
                <ContainerLogin />
                <Typography className={classes.desc}>
                    The most secure and easy authentication
                </Typography>

            </div>
            <img
                width="500px"
                src={process.env.PUBLIC_URL + '/assets/remote-team.svg'} alt="sdsd"
            />

            <Particles
                className={classes.canvas}
                params={{
                    particles: {
                        number: {
                            value: 70,
                        },
                        size: {
                            value: 2
                        },
                        shape: {
                            type: ['circle']
                        }
                    }
                }} />
        </div >
    )
}

