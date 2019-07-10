import styled, { css } from 'styled-components';

export const flexBox = styled.div`
display: flex;
`;

export const flexBoxCol = styled(flexBox)`
flex-direction: column;
`;

export const allCenter = css`
justify-content: center;
align-items: center;
`;