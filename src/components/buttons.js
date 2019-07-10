import styled, { css } from 'styled-components';

const colors = {
    buttons: {
        shadow: 'rgba(54, 135, 165, 0.48)'
    }
}

export const roundButtonRadius = css`
border-radius: 50px;
`;

/* Prototype Button */
export const Button = styled.button`
font-weight: 700;
font-size: 0.7rem;
color: white;
cursor: pointer;
border: none;
box-shadow: 0 2px 4px 0 ${colors.buttons.shadow};
font-family: sukhumvit;
&:focus {
    outline: none;
}
`;