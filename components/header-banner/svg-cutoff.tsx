import styled from 'styled-components';

export function SvgCutoff() {
    return (
        <StyledSvg viewBox="0 0 960 600" preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
        >
            <g>
                <path
                    fill="#fff"
                    d="M960 658.2c-126.1 69.39-112.7 90.73-365.1 60.99-124.6-14.68-310.1-40.5-594.9-72.28v91.29h960z"
                    transform="translate(0 -138.2)"
                />
            </g>
        </StyledSvg>
    );
}

export const StyledSvg= styled.svg`
  position: absolute;
  top:0px;
  left: 0px;
  width: 100%;
  height: 600px;
`;
