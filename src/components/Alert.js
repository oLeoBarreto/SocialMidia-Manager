import * as React from 'react';
import { Alert } from '@mui/material';

export default function AlertComp(props) {
    return (
        <>
            <Alert variant="filled" severity={props.typeAlert}>
                {props.children}
            </Alert>
        </>
    );
}