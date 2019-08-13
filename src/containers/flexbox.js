import styled, { css } from 'styled-components';

export const flexBox = styled.div`
display: flex;
`;

export const flexBoxCol = styled(flexBox)`
flex-direction: column;
`;

export const flexBoxColCenter = styled(flexBoxCol)`
justify-content: center;
align-items: center;
`;

export const flexBoxCenter = styled(flexBox)`
justify-content: center;
align-items: center;
`;

export const allCenter = css`
justify-content: center;
align-items: center;
`;