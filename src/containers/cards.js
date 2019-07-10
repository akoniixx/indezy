import styled, { css } from 'styled-components';
import { flexBox, flexBoxCol, allCenter } from 'Containers/flexbox';

const colors = {
    titleText: '#5F3109'
}

export const Card = styled(flexBoxCol)`
background-color: white;
box-shadow: 0 0 10px 0 rgba(63, 105, 184, 0.33);
border-radius: 7px;
padding: 20px;
`;

export const CardTitle = styled.span`
color: ${colors.titleText};
font-weight: bold;
font-size: 16px;
margin-bottom: 10px;
`;