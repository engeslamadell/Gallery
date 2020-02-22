import React from 'react';
import styled from 'styled-components';

import Card from '../ui/Card';
import CardTitle from '../ui/CardTitle';
import Image from '../ui/Image';
import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';

const ContentContainer = styled.div`
  display: flex;
`

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const CategoriesPage = () => (
  <ContentContainer>
    <CardContainer>
      <Card isCategoriesPage>
        <Image imageSrc={one} isFullWidth imageHeight="100%"/>
        <CardTitle>Wedding details</CardTitle>
      </Card>
      <Card isCategoriesPage>
        <Image imageSrc={two} isFullWidth imageHeight="100%"/>
        <CardTitle>Gold/marble wedding cake</CardTitle>
      </Card>
      <Card isCategoriesPage>
        <Image imageSrc={three} isFullWidth imageHeight="100%"/>
        <CardTitle>Gold frame Invitation set</CardTitle>
      </Card>

      <Card isCategoriesPage>
        <Image imageSrc={one} isFullWidth imageHeight="100%"/>
        <CardTitle>Wedding details</CardTitle>
      </Card>
      <Card isCategoriesPage>
        <Image imageSrc={two} isFullWidth imageHeight="100%"/>
        <CardTitle>Gold/marble wedding cake</CardTitle>
      </Card>
      <Card isCategoriesPage>
        <Image imageSrc={three} isFullWidth imageHeight="100%"/>
        <CardTitle>Gold frame Invitation set</CardTitle>
      </Card>
    </CardContainer>
  </ContentContainer>
);

export default CategoriesPage;