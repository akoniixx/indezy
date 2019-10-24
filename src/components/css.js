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
    font-family: "sukhumvit";
    src: url("/assets/fonts/sukhumvit.ttf") format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
}

html {
    font-size: 16px;
}

#root {
    ${heightFillContent}
}

body {
    font-family: Helvetica !important;
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
    color: ${colors.guest.text};
}
body {
    color: ${colors.guest.text};
    background: url(${({ background }) => background});
    background-size: cover;
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