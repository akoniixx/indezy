import { createGlobalStyle, css } from 'styled-components';

/**
 * This const is css that will use all over the project.
 * Register or edit global css here.
 */

export const colors = {
    contentProvider: {
        text: '#101010'
    },
    guest: {
        text: '#101010'
    }
};

export const heightFillContent = css`
height: 100%;
height: -moz-available; /* For Mozilla Firefox */
height: -webkit-fill-available; /* For Chrome */
height: fill-available;
`;

export const widthFillContent = css`
width: 100%;
width: -moz-available; /* For Mozilla Firefox */
width: -webkit-fill-available; /* For Chrome */
width: fill-available;
`;

const rootCSS = css`
@font-face {
    font-family: "Helvetica";
    src: url("/assets/fonts/Helvetica.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
}
@font-face {
    font-family: "Helvetica Neue";
    src: url("/assets/fonts/HelveticaNeue.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
}
@font-face {
    font-family: "Helvetica Neue Light";
    src: url("/assets/fonts/HelveticaNeue Light.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
}
@font-face {
    font-family: "Helvetica Neue Condensed Black";
    src: url("/assets/fonts/HelveticaNeue BlackCond.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
}
@font-face {
    font-family: "Roboto";
    src: url("/assets/fonts/Roboto-Medium.ttf") format("truetype");
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
}
@font-face {
    font-family: "Kanit";
    src: url("/assets/fonts/Kanit-Medium.ttf") format("truetype");
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
}

html {
    font-size: 16px;
}

#root {
    ${heightFillContent}
}

body {
    font-family: Helvetica Neue;
    margin: 0;
    display: flex;
    flex-direction: column;
}
input {
    border: none;
}
input:focus {
    outline: none;
}
`;

export const GlobalStyleGuest = createGlobalStyle`
${rootCSS}
html {
    color: ${colors.guest.text};
}
body {
    color: ${colors.guest.text};
    background-image: !important;
    background-repeat: no-repeat;
    background-size: cover;
}
`;

export const GlobalStyleMain = createGlobalStyle`
${rootCSS}
html {
    color: white;
}
body {
    color: white;
    background: url(${({ background }) => background});
    background-size: cover;
    position: relative;
    ::before {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        opacity: 0.8;
        background: black;
    }
}
`;

export const GlobalStyleCP = createGlobalStyle`
${rootCSS}
html {
    color: ${colors.contentProvider.text};
}
body {
    color: ${colors.contentProvider.text};
    background-image: url('/assets/img/landingBG.svg') !important;
}
`;

export const disableTextSelection = css`
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`;