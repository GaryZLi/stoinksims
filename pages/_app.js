import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../frontend/redux/store';
import App from '../frontend/App';

export default function Main(props) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Stoink Sims</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <style global jsx>
                {`
                    html,
                    body {
                        height: 100%;
                        width: 100%;
                        margin: 0px;
                    }

                    body > div:first-child {
                        height: 100%;
                        width: 100%;
                        margin: 0px;
                        min-width: 800px;
                        overflow: auto;
                        position: relative;
                        font-family: -apple-system, system-ui, BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;
                    }
                `}
            </style>
            <Provider store={store}>
                <App Component={Component} pageProps={pageProps}/>
            </Provider>
        </React.Fragment>
    );
}

Main.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};