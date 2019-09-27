import styled from 'styled-components';
import {PropsWithChildren, Fragment, SyntheticEvent} from 'react';
import {headerTheme} from './header-theme';
import * as React from 'react';

const svgBackgroundSize = {
    width: 3840,
    height: 600,
    top: 0,
    left: -1400,
};

export function SvgBackground() {
    return (
        <StyledSvg
            id="svgRoot"
            xmlns="http://www.w3.org/2000/svg"
            height="600"
            version="1.1"
            viewBox={`${svgBackgroundSize.left} ${svgBackgroundSize.top} ${svgBackgroundSize.width} ${svgBackgroundSize.height}`}
        >
            <AbstractBackground/>
            <TechLayer/>
        </StyledSvg>
    );

}

export const AbstractBackground = () => (
    <>
        <defs>
            <linearGradient
                id="a"
                x1="16.39"
                x2="180.4"
                y1="193.1"
                y2="151.2"
                gradientTransform="matrix(3.233 -1.862 1.867 3.225 166.8 113.8)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#fff" stopOpacity="0.091"/>
                <stop offset="1" stopColor="#fff" stopOpacity="0"/>
            </linearGradient>
        </defs>
        <path fill={headerTheme.backgroundColor} d="M -1440 0H2400V600H-1440z"/>
        <g>
            <path
                fill={headerTheme.backgroundColor}
                fillOpacity="1"
                strokeWidth="0.25"
                d="M-1440 0H2400V600H-1440z"
                opacity="1"
                vectorEffect="none"
            />
            <path
                fill="#fff"
                fillOpacity="0.035"
                strokeWidth="0.5"
                d="M578 0l318.778 600H2400V2.396z"
                display="inline"
                opacity="1"
                vectorEffect="none"
            />
            <path
                fill="url(#a)"
                fillOpacity="1"
                strokeWidth="0.5"
                d="M1493.736 0L356 600h1137.736z"
                display="inline"
                opacity="1"
                vectorEffect="none"
            />
        </g>
    </>
);

export const TechLayer = () => (
    <Fragment>
        <mask id="techyOverlayMask">
            <rect width="100%" height={svgBackgroundSize.height} x={svgBackgroundSize.left} y={svgBackgroundSize.top}
                  fill="black"/>
            <g id="maskSpotlightCircle" transform="translate(0, 0)">
                <circle cx={svgBackgroundSize.left + 1640} cy={svgBackgroundSize.top + 200} r={headerTheme.spotlightRadius} fill="white"/>
            </g>
        </mask>

        <g fillOpacity="1" strokeOpacity="1" display="inline" mask="url(#techyOverlayMask)">
            <SolidLine d="M1492.895.442L356 600M578.5-.5l318 603"/>

            <SolidLine d="M773.375 379.841a5 5 0 012.14-6.719"/>
            <TinyLabel x="770" y="377">90°</TinyLabel>

            <SolidLine
                d="m 667,167 a 7.1390376,7.1390376 0 0 1 -6.91838,-0.19371 7.1390376,7.1390376 0 0 1 -3.50291,-5.96917"/>
            <TinyLabel x="658" y="177">120°</TinyLabel>

            <SolidLine d="M -1440 160.5 H 3840
                      M -1440 342.5 H 3840
                      M 133.5 600 V 0"/>
            <TinyLabel x="128" y="174">01</TinyLabel>
            <TinyLabel x="128" y="356">02</TinyLabel>
            <TinyLabel x="128" y="404">03</TinyLabel>
        </g>
    </Fragment>
)

export const TinyLabel = (props: PropsWithChildren<any>) => (
    <text
        fill={headerTheme.techDrawing.color}
        stroke="none"
        strokeWidth="1"
        style={{lineHeight: '1.25'}}
        display="inline"
        fontFamily="Roboto, sans-serif"
        fontSize="9"
        fontStyle="normal"
        fontWeight="normal"
        letterSpacing="0"
        wordSpacing="0"
        xmlSpace="preserve"
        textAnchor="end"
        {...props}
    >{props.children}</text>
);

export const SolidLine = (props: any) => (
    <path
        fill="none"
        stroke={headerTheme.techDrawing.color}
        strokeDasharray="none"
        strokeDashoffset="0"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeWidth="0.5"
        display="inline"
        opacity="1"
        vectorEffect="none"
        {...props}
    />
);

export const StyledSvg = styled.svg`
    position: absolute;
    top: 0;
    left: 50%;
    width: ${svgBackgroundSize.width}px;
    margin-left: ${-(svgBackgroundSize.width / 2)}px;
`;
