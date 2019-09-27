import * as React from 'react';
import styled from 'styled-components';
import {SvgBackground} from './svg-background';
import {SvgCutoff} from './svg-cutoff';
import {HeaderContent} from './header-content';
import {layers, theme} from '../../theme';

export const HeaderBanner = () => {
    return (
        <MainContainer>
            <SvgContainer>
                <SvgBackground/>
                <SvgCutoff/>
            </SvgContainer>
            <HeaderContent/>
        </MainContainer>
    )
};

const MainContainer = styled.div`
    width: 100%;
    height: ${theme.headerBanner.height}px;
    
    @media (max-width: ${theme.minBannerWidth}px) {
        height: auto;
        background-color: #003380;
    }

`;

const SvgContainer = styled.div`
    position: absolute;
    height: ${theme.headerBanner.height}px;
    width: 100%;
    overflow: hidden;
    z-index: ${layers.background};
    
    @media (max-width: ${theme.minBannerWidth}px) {
        display: none;
    }

`;
