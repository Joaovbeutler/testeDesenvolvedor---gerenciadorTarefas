import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        text-align: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #FFD6E0;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor: pointer;
    }

`;