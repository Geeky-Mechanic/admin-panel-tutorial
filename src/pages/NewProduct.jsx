import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
flex: 4;
`;

const ProductTitle = styled.h1`

`;

const AddForm = styled.form`
margin-top: 10px;
`;

const ProductItem = styled.div`
width: 250px;
display: flex;
flex-direction: column;
margin-bottom: 10px;
`;

const Label = styled.label`
color: grey;
font-weight: 600;
margin-bottom: 10px;
`;

const Input = styled.input`
padding: 10px;
`;

const Select = styled.select`
padding: 10px;
`;

const Option = styled.option`

`;

const Button = styled.button`
margin-top: 10px;
padding: 7px 10px;
border:none;
border-radius: 10px;
background-color: darkblue;
color: white;
font-weight: 600;
cursor: pointer;
`;

const NewProduct = () => {
  return (
    <Container>
        <ProductTitle>New Product</ProductTitle>
        <AddForm>
            <ProductItem>
                <Label>Image</Label>
                <Input type="file" id="file"/>
            </ProductItem>
            <ProductItem>
                <Label>Name</Label>
                <Input type="text" placeholder="Apple Airpods"/>
            </ProductItem>
            <ProductItem>
                <Label>Stock</Label>
                <Input type="text" placeholder="123"/>
            </ProductItem>
            <ProductItem>
                <Label>Active</Label>
                <Select name="active" id="active">
                    <Option value="yes" >Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </ProductItem>
            <Button>Create</Button>
        </AddForm>
    </Container>
  )
}

export default NewProduct;