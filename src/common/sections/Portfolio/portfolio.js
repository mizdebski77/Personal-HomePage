import React, { useState } from 'react';
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';

export const Portfolio = () => {
    const [scrolledNavbar, setScrolledNavbar] = useState(false);

    const isWindowScroll = () => {
        if (window.scrollY > 3000) {
            setScrolledNavbar(true);
        } else {
            setScrolledNavbar(false)
        };
    };

    window.addEventListener("scroll", isWindowScroll);

    return (
        <Wrapper RightWrapper id="portfolio" >
            <DataContainer>

            </DataContainer>

            <TitleContainer>
                <Title BigTitle scrolled={scrolledNavbar} RightTitle > Portfolio </Title>
            </TitleContainer>
        </Wrapper>
    );
};

