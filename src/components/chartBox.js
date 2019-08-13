import styled from 'styled-components';
import { disableTextSelection } from 'Components/css';
import {flexBoxColCenter,flexBoxCenter} from 'Containers/flexbox';

export const lineChartBox = styled.line`
display: flex;
justify-content: center;
align-items: center;
background: #37BC9B;
height: 300px;
${disableTextSelection}
`;

export const ChartBoxLine = styled(flexBoxColCenter)`
`;