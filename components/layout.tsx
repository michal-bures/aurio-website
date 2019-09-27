import styled from 'styled-components';
import {PropsWithChildren} from 'react';

export const Layout = (props: PropsWithChildren<{}>) => {
    return (
        <FixedWithContainer>
            {props.children}
        </FixedWithContainer>
    );
};


export const FixedWithContainer = styled.div`
    max-width: 960px;
    margin:auto;  
`;
