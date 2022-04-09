import { Publish } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Chart from '../components/Chart';
import { productData } from '../dummy';

const Container = styled.div`
flex: 4;
padding: 20px;
`;

const TitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const ProductTitle = styled.h1`

`;

const ProductAddButton = styled.button`
width: 80px;
border: none;
padding: 5px;
background-color:teal;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 16px;
`;

/* ---->  Top section  <---------------------------------- */ 

const Top = styled.div`
display: flex;
`;

/* --->  Left subsection  <--- */

const TopLeft = styled.div`
flex:1;
`;

/* --->  Right subsection  <--- */

const TopRight = styled.div`
flex: 1;
padding: 20px;
margin: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductInfoTop = styled.div`
display: flex;
align-items: center;
`;

const ProductInfoImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 20px;
`;

const ProductName = styled.span`
font-weight: 600;
`;

const ProductInfoBottom = styled.div`
margin-top: 10px;
`;

const InfoItem = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
`;

const InfoKey = styled.span`

`;

const InfoValue = styled.span`
font-weight: 300;
`;

/* ---->  Bottom section  <---------------------------------- */

const Bottom = styled.div`
flex: 1;
padding: 20px;
margin: 20px;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ProductForm = styled.form`
display: flex;
justify-content: space-between;
`;

/* --->  Form Left subsection  <--- */

const FormLeft = styled.div`
display: flex;
flex-direction: column;
`;

const LeftLabel = styled.label`
margin-bottom: 10px;
color: grey;
`;

const Input = styled.input`
margin-bottom: 10px;
border: none;
padding: 5px;
border-bottom: 1px solid grey;
`;

const Select = styled.select`
margin-bottom: 10px;
`;

const Option = styled.option`

`;

/* --->  Form right subsection  <--- */

const FormRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const RightLabel = styled.label`

`;

const ProductUpload = styled.div`
display: flex;
align-items: center;

`;  

const UploadImage = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`;

const ProductButton = styled.button`
border: none;
padding: 5px;
border-radius: 5px;
background-color: darkblue;
color: white;
font-weight: 600;
cursor: pointer;
`;

const Product = () => {
  return (
    <Container>
        <TitleContainer>
            <ProductTitle>Product</ProductTitle>
            <Link to="/newproduct">
                <ProductAddButton>Create</ProductAddButton>
            </Link>
        </TitleContainer>
        <Top>
            <TopLeft>
                <Chart 
                    data={productData}
                    dataKey="Sales"
                    title="Sales Performance"
                />
            </TopLeft>
            <TopRight>
                <ProductInfoTop>
                    <ProductInfoImage
                    src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
                    />
                    <ProductName>Apple airpods</ProductName>
                </ProductInfoTop>
                <ProductInfoBottom>
                    <InfoItem>
                        <InfoKey>ID:</InfoKey>
                        <InfoValue>123</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoKey>sales:</InfoKey>
                        <InfoValue>5123</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoKey>active:</InfoKey>
                        <InfoValue>yes</InfoValue>
                    </InfoItem>
                    <InfoItem>
                        <InfoKey>In stock:</InfoKey>
                        <InfoValue>no</InfoValue>
                    </InfoItem>
                </ProductInfoBottom>
            </TopRight>
        </Top>
        <Bottom>
            <ProductForm>
                <FormLeft>
                    <LeftLabel>Product Name</LeftLabel>
                    <Input type="text" placeholder="Apple Airpods"/>
                    <LeftLabel>In Stock</LeftLabel>
                    <Select name="inStock" id="inStock">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                    <LeftLabel>Active</LeftLabel>
                    <Select name="active" id="active">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                </FormLeft>
                <FormRight>
                    <ProductUpload>
                        <UploadImage
                        src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
                        />
                        <RightLabel for="file">
                            <Publish />
                        </RightLabel>
                        <Input type="file" id="file" style={{display: "none"}}/>
                    </ProductUpload>
                    <ProductButton>Update</ProductButton>
                </FormRight>
            </ProductForm>
        </Bottom>
    </Container>
  )
}

export default Product;