import React from 'react';
import client from 'react-dom';
import App from "./App";


const root = client.createRoot(document.getElementById('root'));
root.render(
    <App />,
    document.getElementById('root')
);

