import styled from 'styled-components';
import {PropsWithChildren} from 'react';
import {theme} from '../theme';

export const Layout = (props: PropsWithChildren<{}>) => {
    return (
        <ContentContainer>
            {props.children}
        </ContentContainer>
    );
};


export const ContentContainer = styled.div`
    max-width: ${theme.contentWidth}px;
    margin:auto;  
`;
