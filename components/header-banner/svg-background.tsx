import styled from 'styled-components';

const svgBackgroundSize = {
    width: 3840,
    height: 600,
    top: 0,
    left: -1400,
};

export function SvgBackground() {
    return (
        <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            height="600"
            version="1.1"
            viewBox={`${svgBackgroundSize.left} ${svgBackgroundSize.top} ${svgBackgroundSize.width} ${svgBackgroundSize.height}`}
        >
            <defs>
                <linearGradient
                    id="a"
                    x1="16.39"
                    x2="138.4"
                    y1="193.1"
                    y2="151.2"
                    gradientTransform="matrix(3.233 -1.862 1.867 3.225 166.8 113.8)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#fff" stopOpacity="0.091"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </linearGradient>
            </defs>
            <path fill="#003380" d="M -1440 0H2400V600H-1440z"/>
            <path fill="#fff" fillOpacity="0.035" d="M578 0l318.8 600h1503V2.4z"/>
            <path fill="url(#a)" d="M1494 0L356 600h1138z"/>
            <g>
                <path
                    fill="none"
                    stroke="#80b3ff"
                    strokeWidth="0.5"
                    d="M1493 .442l-1137 599.6M578.5-.5l318 603M773.4 379.8a5 5 0 012.141-6.719"
                />
                <text
                    style={{lineHeight: '1.25'}}
                    x="759.96"
                    y="376.306"
                    fill="#80b3ff"
                    fontFamily="sans-serif"
                    fontSize="5.907"
                    letterSpacing="0"
                    wordSpacing="0"
                >
                    <tspan x="759.96" y="376.306">
                        90°
                    </tspan>
                </text>
            </g>
        </StyledSvg>
    );
}


export const StyledSvg = styled.svg`
    position: absolute;
    top: 0;
    left: 50%;
    width: ${svgBackgroundSize.width}px;
    margin-left: ${-(svgBackgroundSize.width/2)}px;
`;
