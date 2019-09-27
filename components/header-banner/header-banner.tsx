import * as React from 'react';
import styled from 'styled-components';
import {SvgBackground} from './svg-background';
import {SvgCutoff} from './svg-cutoff';

export const HeaderBanner = () => {
    return (
        <StyledDiv>
            <SvgBackground/>
            <SvgCutoff/>
        </StyledDiv>
    )
};

const StyledDiv = styled.div`
  width: 100%
`;
