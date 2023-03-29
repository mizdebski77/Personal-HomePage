import React, { useState } from 'react';
import { useEffect } from 'react';
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';
import { Category, Color, InformationContainer, InformationWrapper } from './styledEducation';

export const Education = () => {

    const [scrolledNavbar, setScrolledNavbar] = useState(false);

    const isWindowScroll = () => {
        if (window.scrollY > 2200) {
            setScrolledNavbar(true);
        } else {
            setScrolledNavbar(false);
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", isWindowScroll);

        return () => window.removeEventListener("scroll", isWindowScroll)

    }, []);

    return (
        <Wrapper leftWrapper id="education">
            <TitleContainer>
                <Title BigTitle leftTitle scrolled={scrolledNavbar}> Education</Title>
            </TitleContainer>
            <DataContainer >
                <InformationContainer>
                    <Category scrolledLeft={scrolledNavbar}>University  </Category>
                    <InformationWrapper scrolledLeft={scrolledNavbar} >Technical School of Energy and Electronics them. Tadeusz Kościuszko No. 9 in Krakow <Color>2015 - 2019</Color></InformationWrapper>
                    <InformationWrapper scrolledLeft={scrolledNavbar}>Silesian University of Technology. <Color>2019 - 2023</Color></InformationWrapper>
                </InformationContainer>

                <InformationContainer>
                    <Category scrolledRight={scrolledNavbar}>Courses</Category>
                    <InformationWrapper scrolledRight={scrolledNavbar}>ProfiLingua Language School<Color>2019 - 2023</Color> </InformationWrapper>
                    <InformationWrapper scrolledRight={scrolledNavbar}>IMPULS Center for Foreign Languages<Color>2019 - 2023</Color> </InformationWrapper>
                </InformationContainer>

            </DataContainer>
        </Wrapper>
    );
};
