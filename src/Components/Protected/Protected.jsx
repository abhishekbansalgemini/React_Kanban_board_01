import React from 'react';
import { useHistory } from "react-router-dom";

function Protected(props) {
    const {Component} = props;
    const history = useHistory();
  return (
    <>
    {
        localStorage.getItem("userCredentials") === null ? history.push('/login') : history.push('/')
    }
    <Component/>
    </>
  )
}

export default Protected