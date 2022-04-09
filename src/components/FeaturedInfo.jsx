import React from 'react'
import styled from 'styled-components';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

const Item = styled.div`
flex:1;
margin: 0 20px;
padding: 30px;
border-radius: 10px;
cursor: pointer;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
font-size: 20px;
`;

const MoneyContainer = styled.div`
margin: 10px 0;
display: flex;
align-items: center;
`;

const Money = styled.span`
font-size: 30px;
font-weight: 600;
`;

const MoneyRate = styled.span`
display: flex;
align-items: center;
margin-left: 20px;
`;

const Subtitle = styled.span`
font-size: 15px;
color: grey;
`;

const num1 = -11.4;
const num2 = -8.4;
const num3 = +2.1;

const upArrow = {
    color: "green",
    marginLeft: "5px",
    fontSize: "14px",
};

const downArrow = {
    color: "red",
    marginLeft: "5px",
    fontSize: "14px",
};


const FeaturedInfo = () => {
  return (
    <Container>
        <Item>
            <Title>
                Revenue
            </Title>
            <MoneyContainer>
                <Money>$2.00</Money>
                <MoneyRate> {num1} {num1 >= 0 ? <ArrowUpward style={upArrow} /> : <ArrowDownward style={downArrow} />}</MoneyRate>
            </MoneyContainer>
            <Subtitle>Compared to last month</Subtitle>
        </Item>
        <Item>
            <Title>
                Sales
            </Title>
            <MoneyContainer>
                <Money>$2.00</Money>
                <MoneyRate> {num2} {num2 >= 0 ? <ArrowUpward style={upArrow} /> : <ArrowDownward style={downArrow} />}</MoneyRate>
            </MoneyContainer>
            <Subtitle>Compared to last month</Subtitle>
        </Item>
        <Item>
            <Title>
                Cost
            </Title>
            <MoneyContainer>
                <Money>$2.00</Money>
                <MoneyRate> {num3} {num3 >= 0 ? <ArrowUpward style={upArrow} /> : <ArrowDownward style={downArrow} />}</MoneyRate>
            </MoneyContainer>
            <Subtitle>Compared to last month</Subtitle>
        </Item>
    </Container>
  )
}

export default FeaturedInfo