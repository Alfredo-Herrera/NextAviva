import styled from '@emotion/styled';
import breakpoints from '../../../styles/theme/breakpoints';

export const ImageContainer = styled('section')``;

export const ArticleContainer = styled.article`
    margin-right: 25px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    position: relative;
    max-width: 300px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
    &:hover {
        box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
        transform: scale(1.1, 1.1);
        img {
            opacity: 0.3;
        }
        div {
            background-color: transparent;
            position: relative;
        }
    }
    a:link,
    a:visited,
    a:active {
        text-decoration: none;
    }
`;

export const ArticleContainerDisable = styled.article`
    margin-right: 25px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    position: relative;
    max-width: 300px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
    img {
        opacity: 0.3;
    }
`;

export const InfoContainer = styled('div')`
    z-index: 2;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
    text-align: center;
`;

export const CardCategory = styled.span`
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    jus
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
`;

export const ImgCardKiosStyled = styled.img`
    width: 300px;
    height: 250px;
    @media (max-width: ${breakpoints.values.sm}px) {
        width: 250px;
        height: 200px;
    }
`;
