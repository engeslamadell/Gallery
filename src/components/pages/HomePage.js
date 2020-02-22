import React from 'react';
import styled from 'styled-components';

import Card from '../ui/Card';
import CardTitle from '../ui/CardTitle';
import Image from '../ui/Image';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';

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

const HomePage = () => (
  <ContentContainer>
    <SideSectionContainer>
      <Button isNotLast isActive={false} buttonText="Clear" />
      <Button isActive buttonText="Apply" />
      <TextInput />
    </SideSectionContainer>
    <CardContainer>
      <Card>
        <Image imageSrc={one} isFullWidth imageHeight="100%"/>
        <CardTitle>Wedding details</CardTitle>
      </Card>
      <Card>
        <Image imageSrc={two} isFullWidth imageHeight="100%"/>
        <CardTitle>Gold/marble wedding cake</CardTitle>
      </Card>
      <Card>
        <Image imageSrc={three} isFullWidth imageHeight="100%"/>
        <CardTitle>Gold frame Invitation set</CardTitle>
      </Card>

      <Card>
        <Image imageSrc={one} isFullWidth imageHeight="100%"/>
        <CardTitle>Wedding details</CardTitle>
      </Card>
      <Card>
        <Image imageSrc={two} isFullWidth imageHeight="100%"/>
        <CardTitle>Gold/marble wedding cake</CardTitle>
      </Card>
      <Card>
        <Image imageSrc={three} isFullWidth imageHeight="100%"/>
        <CardTitle>Gold frame Invitation set</CardTitle>
      </Card>
    </CardContainer>
  </ContentContainer>
);

export default HomePage;