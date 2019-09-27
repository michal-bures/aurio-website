import * as React from 'react';
import styled from 'styled-components';
import {SvgBackground} from './svg-background';
import {SvgCutoff} from './svg-cutoff';
import {HeaderContent} from './header-content';
import {layers, theme} from '../../theme';
import {SyntheticEvent} from 'react';
import {headerTheme} from './header-theme';

export const Header = () => {
    return (
        <MainContainer onMouseMove={handleMouseMove}>
            <SvgContainer>
                <SvgBackground/>
                <SvgCutoff/>
            </SvgContainer>
            <HeaderContent/>
        </MainContainer>
    );


    function handleMouseMove(event: SyntheticEvent<HTMLDivElement,MouseEvent>) {
        const maskElement = document.getElementById('maskSpotlightCircle') as any as SVGCircleElement;
        const svg = document.getElementById('svgRoot') as any as SVGSVGElement;
        console.log("MOUSEMOVE", maskElement.getAttribute('transform'));

            const pt = svg.createSVGPoint();

            let relX = event.nativeEvent.pageX;
            let relY = event.nativeEvent.pageY;

            pt.x = relX;
            pt.y = relY;
            const svgP = pt.matrixTransform(svg.getScreenCTM()!.inverse());

            relX = svgP.x - 240;
            relY = svgP.y - 200;


            maskElement.setAttribute('transform', `translate(${relX},${relY})`);
            //document.getElementById('debugSpotlightCircle')!.setAttribute('transform', `translate(${relX},${relY})`);

    }
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
