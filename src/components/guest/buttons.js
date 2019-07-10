import styled, { css } from 'styled-components';
import { roundButtonRadius, Button } from '../buttons';

const colors = {
    buttons: {
        cancel: '#ACA7A2',
        cp: '#3F69B8',
        default: '#368741'
    },
    shadow: {
        button: '#D9D5D2'
    }
}

const cssButton = css`
${roundButtonRadius}
padding: 10px 20px 9px 20px;
box-shadow: 0 2px 7px 0 ${colors.shadow.button};
`;

export const GuestButton = styled(Button)`
background-color: ${colors.buttons.default};
${cssButton}
`;

export const ButtonToCP = styled(Button)`
background-color: ${colors.buttons.cp};
${cssButton}
`;

export const CancelButton = styled(Button)`
${roundButtonRadius}
background-color: ${colors.buttons.cancel};
`;