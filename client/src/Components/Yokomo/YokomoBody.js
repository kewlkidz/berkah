import React from 'react';
import styled from 'styled-components';
import YokomoBanner from './YokomoBanner';
import YokomoItems from './YokomoItems';

const YokomoWrap = styled.div `
width: 100%;
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
margin-bottom: 100px;
`;

const YokomoBody =()=>{
    return(
        <YokomoWrap>
        <YokomoBanner />
        <YokomoItems />
        </YokomoWrap>
    )
}
export default YokomoBody