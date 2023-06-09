import React, { useState } from 'react';
import { Category, CategoryTitle, CategoryWrapper, Color, FlagIcon, IconContainer, Level, List, ListItem, PictureCaption, ProgramIcon, } from './styledSkills';
import PS from '../../Images/Programs/ps.png'
import PP from '../../Images/Programs/pp.png'
import FL from '../../Images/Programs/fl.png'
import VS from '../../Images/Programs/vs.png'
import AI from '../../Images/Programs/ai.png'
import AE from '../../Images/Programs/ae.png'
import PL from '../../Images/Flags/pl.png'
import ENG from '../../Images/Flags/gb.png'
import GER from '../../Images/Flags/de.png'
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';



export const Skills = () => {

    const [scrolledNavbar, setScrolledNavbar] = useState(false);

    const isWindowScroll = () => {
        if (window.scrollY > 1500) {
            setScrolledNavbar(true);
        }
    };

    window.addEventListener("scroll", isWindowScroll);

    const skillset = [
        {
            skills: [
                "Semantic & accessible HTML",
                "CSS BEM convention",
                "CSS Grid",
                "CSS Flexbox",
                "JavaScript ES6+",
                "Immutability",
                "Git",
                "React",
                "React Hooks",
                "React Router",
                "Redux-Saga",
                "Redux (Toolkit)",
                "Responsive Web Design",
                "Working with API (fetch, axios)",
                "Markdown",
                "Error handling",
                "Promises, Async/Await",
                "Scrum",
                "NPM",
                "Trello",
                "TanStack Query",
            ],
        },
        {
            current: [
                "TypeScript",
                "Figma",
                "JS - Classes",
            ]

        },
        {
            goals: [
                "Node.js",
                "React Native",
                "React Query",
                "SQL",
                "Cypress",
            ],
        },
    ]

    return (
        <Wrapper RightWrapper id="skills">
            <DataContainer>
                <Category scrolledRight={scrolledNavbar}>
                    <CategoryTitle>Skillset </CategoryTitle>
                    <List>
                        {skillset[0].skills.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </List>
                </Category>
                <CategoryWrapper>

                    <Category scrolledLeft={scrolledNavbar}>
                        <CategoryTitle> What i want to learn</CategoryTitle>
                        <List>
                            {skillset[2].goals.map((item, index) => (
                                <ListItem key={index}>{item}</ListItem>
                            ))}
                        </List>
                    </Category>
                    <Category scrolledLeft={scrolledNavbar}>
                        <CategoryTitle> Currently learning
                        </CategoryTitle>
                        <List>
                            {skillset[1].current.map((item, index) => (
                                <ListItem key={index}>{item}</ListItem>
                            ))}
                        </List>
                    </Category>
                </CategoryWrapper>

                <Category scrolledRight={scrolledNavbar}>
                    <CategoryTitle> Language</CategoryTitle>
                    <List flags>
                        <IconContainer flags>
                            <FlagIcon src={ENG} />
                            <PictureCaption>English</PictureCaption>
                            <Level>●●●●<Color>●●</Color></Level>
                        </IconContainer >
                        <IconContainer flags>
                            <FlagIcon src={GER} />
                            <PictureCaption>German</PictureCaption>
                            <Level>●●<Color>●●●●</Color></Level>

                        </IconContainer>
                        <IconContainer flags >
                            <FlagIcon src={PL} />
                            <PictureCaption>Polish</PictureCaption>
                            <Level>●●●●●●</Level>

                        </IconContainer>

                    </List>
                </Category>

                <Category icons scrolledLeft={scrolledNavbar}>
                    <CategoryTitle> Programs</CategoryTitle>
                    <List icons>
                        <IconContainer>
                            <ProgramIcon src={PS} />
                            <PictureCaption>Adobe Photoshop</PictureCaption>
                        </IconContainer>
                        <IconContainer>
                            <ProgramIcon src={PP} />
                            <PictureCaption>Premiere Pro</PictureCaption>
                        </IconContainer>
                        <IconContainer>
                            <ProgramIcon src={FL} />
                            <PictureCaption>Fl Studio</PictureCaption>
                        </IconContainer>
                        <IconContainer>
                            <ProgramIcon src={AI} />
                            <PictureCaption>Adobe Ilustrator</PictureCaption>
                        </IconContainer>
                        <IconContainer>
                            <ProgramIcon src={AE} />
                            <PictureCaption>After Effect</PictureCaption>
                        </IconContainer>
                        <IconContainer>
                            <ProgramIcon src={VS} />
                            <PictureCaption>Visual Studio Code </PictureCaption>
                        </IconContainer>
                    </List>
                </Category>
            </DataContainer>

            <TitleContainer>
                <Title RightTitle scrolled={scrolledNavbar}> Skills </Title>
            </TitleContainer>

        </Wrapper>
    );
};

