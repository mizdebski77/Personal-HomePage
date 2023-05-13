import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';
import { fetchRepos, selectRepositories } from './githubSlice';
import { CustomSlider, Description, DescriptionTitle, LinkContainer, LinkTitle, ProjectLink, ProjectTitle, ProjectWrapper } from './styledPortfolio';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Portfolio = () => {
    const Repositories = useSelector(selectRepositories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRepos());

    }, [dispatch])

    const [scrolledNavbar, setScrolledNavbar] = useState(false);
    const isWindowScroll = () => {
        if (window.scrollY > 3650) {
            setScrolledNavbar(true);
        } else if (window.scrollY < 3400) {
            setScrolledNavbar(false)
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", isWindowScroll);
        return () => window.removeEventListener("scroll", isWindowScroll)
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Wrapper RightWrapper id="portfolio" >
            <DataContainer gh>
                <CustomSlider scrolledLeft={scrolledNavbar} {...settings}>
                    {Repositories.map((repo) => (
                        <ProjectWrapper
                            key={repo.id}>
                            <ProjectTitle> {repo.name}</ProjectTitle>
                            <LinkContainer>
                                <LinkTitle> Repository : </LinkTitle>
                                <ProjectLink href={repo.html_url} target="_blank">
                                    {repo.html_url}
                                </ProjectLink>
                            </LinkContainer>

                            <LinkContainer>
                                <LinkTitle> Website : </LinkTitle>
                                <ProjectLink href={repo.homepage} target="_blank">
                                    {repo.html_url}
                                </ProjectLink>
                            </LinkContainer>
                            <DescriptionTitle>Description</DescriptionTitle>
                            <Description>{repo.description}</Description>
                        </ProjectWrapper>
                    ))}
                </CustomSlider>
            </DataContainer>
            <TitleContainer>
                <Title BigTitle scrolled={scrolledNavbar} RightTitle > Portfolio </Title>
            </TitleContainer>
        </Wrapper>
    );
};

