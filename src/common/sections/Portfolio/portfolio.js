import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';
import { fetchRepos, selectRepositories } from './githubSlice';
import { LinkContainer, LinkTitle, ProjectLink, ProjectTitle, ProjectWrapper } from './styledPortfolio';

export const Portfolio = () => {
    const Repositories = useSelector(selectRepositories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepos());

    }, [dispatch])



    const [scrolledNavbar, setScrolledNavbar] = useState(false);
    const isWindowScroll = () => {
        if (window.scrollY > 3200) {
            setScrolledNavbar(true);
        } else {
            setScrolledNavbar(false)
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", isWindowScroll);
        return () => window.removeEventListener("scroll", isWindowScroll)
    }, []);


    return (
        <Wrapper RightWrapper id="portfolio" >
            <DataContainer gh>
                {Repositories.map((repo, index) => (
                    <ProjectWrapper
                        key={repo.id}
                        scrolledRight={scrolledNavbar && index % 2 !== 0}
                        scrolledLeft={scrolledNavbar && index % 2 === 0}>
                        <ProjectTitle> {repo.name}</ProjectTitle>
                        <LinkContainer>
                            <LinkTitle> Repository : </LinkTitle>
                            <ProjectLink href={repo.html_url} target="_blank">
                                {repo.html_url}
                            </ProjectLink>
                        </LinkContainer>

                    </ProjectWrapper>
                ))}
            </DataContainer>
            <TitleContainer>
                <Title BigTitle scrolled={scrolledNavbar} RightTitle > Portfolio </Title>
            </TitleContainer>
        </Wrapper>
    );
};

