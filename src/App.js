import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Routes from './router/Routes';
import { CssBaseline } from '@material-ui/core';
import { firebase } from './config/firebase';
import useAuthProvider from './shared/hook/useAuthProvider';
import ClipLoader from "react-spinners/ClipLoader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authState, authDispatch] = useAuthProvider();

  const updateAuth = (isAuth) => {
    authDispatch({ type: 'UPDATE_AUTH', payload: isAuth });
    setIsLoading(false)
  }

  useEffect(() => {
    const readSession = () => {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        if (user) {
          updateAuth(true)
        } else {
          updateAuth(false)
        }
      })
    }
    readSession()
  }, [])

  return (
    <div>
      <CssBaseline />
      {/* <Routes /> */}
      {isLoading ? <Loading loading={isLoading} /> : <Routes />}
    </div>
  )
}

const Loading = ({ loading }) => {
  return (
    <ClipLoader
      color={'green'}
      loading={loading}
      size={150} />
  )
}