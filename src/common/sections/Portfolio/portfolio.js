import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';
import { fetchRepos, fetchStatus, selectRepositories } from './githubSlice';

export const Portfolio = () => {

    const Status = useSelector(fetchStatus);
    const Repositories = useSelector(selectRepositories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch])
    console.log(Status);





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

