import React, { Fragment } from 'react';
//import for styled
import styled, { css } from 'styled-components';
import { flexBoxCenter, flexBox } from 'Containers/flexbox';

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
// };

const Point = props => {
    const { point, setPoint, totalPoints } = props;
    return (
        <Fragment>
            <Containers>
                {[...Array(totalPoints)].map(
                    (e, i) => {
                        const Box = point == i ? PointBoxSelected : PointBox;
                        const pointname = `Point ${i + 1}`;
                        return (
                            <Box key={i} onClick={() => setPoint(i)}>
                                <PointText>{pointname}</PointText>
                            </Box>
                        );
                    }
                )}
            </Containers>
        </Fragment>
    );
}

export default Point;

const selected = css`
background: transparent linear-gradient(242deg, #2B90C4 0%, #2C68A1 100%) 0% 0% no-repeat padding-box;
`;

const Containers = styled(flexBox)`
justify-content: center;
width: 100%;
padding: 0 100px;
background-color: #050617;
& > :not(:first-child){
    margin-left: 10px;
}
`;

const PointBox = styled(flexBoxCenter)`
width: 160px;
height: 72px;
cursor: pointer;
border-radius: 15px;
margin: 10px 0;
background-color: #1C1E3E;
 :hover{
    ${selected}
}
`;

const PointBoxSelected = styled(PointBox)`
${selected}
`;

const PointText = styled.span`
font-size: 1.2em;
color: #FFFFFF;
`;