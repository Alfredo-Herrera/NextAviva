import Link from 'next/link';
import { FC } from 'react';
import {
    ArticleContainer,
    CardCategory,
    ImageContainer,
    ImgCardKiosStyled,
    InfoContainer,
} from './styles';

type CardPRops = {
    urlImage: string;
    title: string;
    href: string;
    disabled?: boolean;
};

const CardPageKiosks: FC<CardPRops> = ({ urlImage, title, href, disabled }) => {
    return (
        <ArticleContainer>
            <Link href={href}>
                <ImageContainer>
                    <ImgCardKiosStyled
                        src={urlImage}
                        alt={`${urlImage}-${title}`}
                    />
                </ImageContainer>
                <InfoContainer>
                    <CardCategory> {title}</CardCategory>
                </InfoContainer>
            </Link>
        </ArticleContainer>
    );
};

export default CardPageKiosks;
