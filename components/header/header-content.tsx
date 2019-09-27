import styled from 'styled-components';
import {layers, theme} from '../../theme';

export function HeaderContent() {
    return (
        <Container>
            <Heading>Jsme parta zkušených programátorů,<br/>
                které baví vyvíjet skvělý software</Heading>
            <ButtonLayout>
                <Button>Co umíme</Button>
                <Button>Jak pracujeme</Button>
            </ButtonLayout>
        </Container>
    )
}

export const Container = styled.div`
    max-width: ${theme.contentWidth-100}px;
    margin: auto;
    z-index: ${layers.content};
    padding-left: 100px;
    
    @media (max-width: ${theme.minBannerWidth}px) {
        padding: 100px 20px ;
    }
`;

export const Heading = styled.div`
    padding-top: 200px;
    font-size: 36px;
    color: #eee;
    line-height: 1.5;
    white-space: nowrap;
    
    @media (max-width: ${theme.minBannerWidth}px) {
        padding-top: 0px;
        white-space: normal;
    }

`;

export const ButtonLayout = styled.div`
    padding-top: 34px;
    flex: 1;
    flex-direction: column;
`;

export const Button = styled.div`
    color: white;
    padding: 8px;
    margin-top: 8px;
    width: 140px;
    background-color: #ffffff10;
    cursor: pointer;
    font-size: 20px;
        
    &:hover {
        background-color: #ffffff50;
    }
`;
