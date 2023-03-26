import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';
import { getRepositories } from './getAPI';
import { fetchRepositoriesError, fetchRepositoriesSuccess, selectRepos } from './ghSlice';

export const Portfolio = () => {
    const [scrolledNavbar, setScrolledNavbar] = useState(false);

    const isWindowScroll = () => {
        if (window.scrollY > 3500) {
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

