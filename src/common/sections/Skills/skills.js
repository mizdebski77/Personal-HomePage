import React, { useState } from 'react';
import { Category, CategoryTitle, Color, DataContainer, FlagIcon, IconContainer, Level, List, ListItem, PictureCaption, ProgramIcon, TextContainer, Title, Wrapper } from './styledSkills';
import PS from '../../Images/ps.png'
import PP from '../../Images/pp.png'
import FL from '../../Images/fl.png'
import VS from '../../Images/vs.png'
import AI from '../../Images/ai.png'
import AE from '../../Images/ae.png'
import PL from '../../Images/Flags/pl.png'
import ENG from '../../Images/Flags/gb.png'
import GER from '../../Images/Flags/de.png'



export const Skills = () => {

    const [scrolledNavbar, setScrolledNavbar] = useState(false);

    const isWindowScroll = () => {
        if (window.scrollY > 1200 && window.scrollY < 2700) {
            setScrolledNavbar(true);
        } else {
            setScrolledNavbar(false)
        };
    };

    window.addEventListener("scroll", isWindowScroll);

    const skillset = [
        {
            skills: [
                "JavaScript ES6+",
                "React",
                "Redux-Saga",
                "Redux (Toolkit)",
                "React Hooks",
                "React Router",
                "Semantic & accessible HTML",
                "Responsive Web Design",
                "CSS BEM convention",
                "CSS Grid",
                "CSS Flexbox",
                "Working with API (fetch, axios)",
                "Markdown",
                "Error handling",
                "Promises, Async/Await",
                "Scrum",
                "NPM",
                "Git",
            ],
        },

        {
            goals: [
                "Node.js",
                "TypeScript",
                "JS - Classes",
                "React Native",
                "Figma",
                "React Query",
                "SQL",
                "Cypress",
            ],
        },
    ]

    return (
        <Wrapper id="skills">
            <DataContainer>
                <Category scrolledLeft={scrolledNavbar}>
                    <CategoryTitle>Skillset </CategoryTitle>
                    <List>
                        {skillset[0].skills.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </List>
                </Category>
                <Category scrolledRight={scrolledNavbar}>
                    <CategoryTitle> What i want to learn</CategoryTitle>
                    <List>
                        {skillset[1].goals.map((item, index) => (
                            <ListItem key={index}>{item}</ListItem>
                        ))}
                    </List>
                </Category>
                <Category scrolledLeft={scrolledNavbar}>
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

                <Category icons scrolledRight={scrolledNavbar}>
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
            <TextContainer>
                <Title scrolled={scrolledNavbar}> Skills </Title>
            </TextContainer>

        </Wrapper>
    );
};
