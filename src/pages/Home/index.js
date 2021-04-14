import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useSignOut from './hook/useSignout';

const useStyles = makeStyles((theme) => ({

}));
export default function Home() {
    const classes = useStyles();
    const signOutUser = useSignOut();

    return (
        <div>
            <h1>Halaman Home</h1>
            <button onClick={signOutUser}>Logout</button>
        </div>
    )
}

