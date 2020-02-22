import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from '../ui/Card';
import CardTitle from '../ui/CardTitle';
import Image from '../ui/Image';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import ServicesCard from '../ui/ServicesCard';
import Paragraph from '../ui/Paragraph';
import axios from '../../api/getData';

import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import icon3 from '../../assets/icons/icon3.png';
import icon4 from '../../assets/icons/icon4.png';
import icon5 from '../../assets/icons/icon5.png';
import icon6 from '../../assets/icons/icon6.png';

const AboutWeds = styled.div`
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
`

const ServicesCardImage = styled.div`
  margin-right: 20px;
`

const ContentContainer = styled.div`
  display: flex;
`

const CardContainer = styled.div`
  display: flex;
  width: 75%;
  flex-wrap: wrap;
`;

const SideSectionContainer = styled.div`
  width: 22%;
  margin-right: 2%;
`;

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://localhost:3001/data');
      setData(result.data);
    }

    getData();
  }, []);

  return (
    <div>
      <ContentContainer>
        <SideSectionContainer>
          <Button isNotLast isActive={false} buttonText="Clear" />
          <Button isActive buttonText="Apply" />
          <TextInput />
        </SideSectionContainer>
        <CardContainer>
          { data.map(item => (
            <Card key={item.id}>
              <Image imageSrc={item.photoPath} isFullWidth imageHeight="100%"/>
              <CardTitle>{item.title}</CardTitle>
            </Card>
          )) }
        </CardContainer>
      </ContentContainer>
      <Heading isCenter isMainHeading>Wedding Planning Is a peice of cake with weds360. We know what matters most and you can count on us every step of your way.</Heading>
      <AboutWeds>
        <ServicesCard>
          <ServicesCardImage>
              <Image imageSrc={icon1} />
          </ServicesCardImage>
          <div>
              <Heading fontSize="true">WEDDING WEBSITE</Heading>
              <Paragraph>Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of.</Paragraph>
          </div>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardImage>
              <Image imageSrc={icon2} />
          </ServicesCardImage>
          <div>
              <Heading fontSize="true">BUDGETER</Heading>
              <Paragraph>Set your tasks, create your priority list and never forget any wedding detail.</Paragraph>
          </div>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardImage>
              <Image imageSrc={icon3} />
          </ServicesCardImage>
          <div>
              <Heading fontSize="true">CHECK LIST</Heading>
              <Paragraph>Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.</Paragraph>
          </div>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardImage>
              <Image imageSrc={icon4} />
          </ServicesCardImage>
          <div>
              <Heading fontSize="true">GUEST LIST</Heading>
              <Paragraph>Meet your service providers, view their profiles and make all the perfect choice for your wedding night.</Paragraph>
          </div>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardImage>
              <Image imageSrc={icon5} />
          </ServicesCardImage>
          <div>
              <Heading fontSize="true">VENDORS</Heading>
              <Paragraph>Escape the awkward moments and receiving the same gift twice by listing everything you've thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.</Paragraph>
          </div>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardImage>
              <Image imageSrc={icon6} />
          </ServicesCardImage>
          <div>
              <Heading fontSize="true">REGISTRY LIST</Heading>
              <Paragraph>Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you.</Paragraph>
          </div>
        </ServicesCard>
      </AboutWeds>
    </div>
  )
}

export default HomePage;