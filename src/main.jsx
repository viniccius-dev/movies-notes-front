import React from 'react';
import ReactDom from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import { SignUp } from './pages/SignUp'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <SignUp />
        </ThemeProvider>
    </React.StrictMode>
);