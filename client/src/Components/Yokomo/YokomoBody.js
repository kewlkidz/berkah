import React from 'react';
import styled from 'styled-components';
import YokomoBanner from './YokomoBanner';

const YokomoBanWrap = styled.div `
display: flex;
justify-content:center;
flex-direction: column;
align-items: center;
`;

const YokomoBody =()=>{
    return(
        <YokomoBanWrap>
        <YokomoBanner />
        </YokomoBanWrap>
    )
}
export default YokomoBody