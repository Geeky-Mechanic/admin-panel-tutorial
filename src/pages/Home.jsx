import React from 'react'
import styled from 'styled-components';
import Chart from '../components/Chart';
import FeaturedInfo from '../components/FeaturedInfo';
import WidgetLarge from '../components/WidgetLarge';
import WidgetSmall from '../components/WidgetSmall';
import { userData } from '../dummy';

const Container = styled.div`
flex: 4;
`;

const Widgets = styled.div`
display: flex;
margin: 20px;
`;

const Home = () => {
  return (
    <Container>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <Widgets>
          <WidgetSmall />
          <WidgetLarge />
        </Widgets>
    </Container>
  )
}

export default Home;