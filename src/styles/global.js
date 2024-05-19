import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: pink transparent;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        color: ${({ theme }) => theme.COLORS.WHITE_200};

        --webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea { 
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: pink;
        border-radius: 3px;
        border: 2px solid transparent;
    }

    ::-webkit-scrollbar-button {
        display: none;
    }
`;