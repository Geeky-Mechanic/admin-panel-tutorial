import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
flex: 2;
-webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
padding: 20px;
`;

const Title = styled.h3`
font-size: 22px;
`;

/* ---->  Table section  <---- */

const Table = styled.table`
width: 100%;
border-spacing: 20px;
`;

const TableRow = styled.tr`

`;

const TableHeader = styled.th`
text-align: left;
`;

const UserCell = styled.td`
display: flex;
align-items: center;
font-weight: 600;
`;

const Image = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`;

const Name = styled.span`

`;

const DateCell = styled.td`
font-weight: 300;
`;

const AmountCell = styled.td`
font-weight: 300;
`;

const StatusCell = styled.td`

`;

const Button = styled.button`
padding: 5px 7px;
border: none;
border-radius: 10px;
cursor: pointer;
${props => {
    if(props.Approved){
        return ("background-Color:#e5faf2; color: #3bb077;");
    }
    else if(props.Declined){
        return ("background-Color:#fff0f1; color: #d95087");
    }
    else if(props.Pending){
        return ("background-Color:#ebf1fe; color: #2a7ade;");
    }
    
}}
`;

const WidgetLarge = () => {
  return (
    <Container>
        <Title>
            Latest transactions
        </Title>
        <Table>
            <TableRow>
                <TableHeader>
                    Customer
                </TableHeader>
                <TableHeader>
                    Date
                </TableHeader>
                <TableHeader>
                    Amount
                </TableHeader>
                <TableHeader>
                    Status
                </TableHeader>
            </TableRow>
            <TableRow>
                <UserCell>
                    <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="" />
                    <Name>Susan Carol</Name>
                </UserCell>
                <DateCell> 2 Juin 2021</DateCell>
                <AmountCell> $122.00</AmountCell>
                <StatusCell>
                    <Button Approved>Approved</Button>
                </StatusCell>
            </TableRow>
            <TableRow>
                <TableHeader>
                    Customer
                </TableHeader>
                <TableHeader>
                    Date
                </TableHeader>
                <TableHeader>
                    Amount
                </TableHeader>
                <TableHeader>
                    Status
                </TableHeader>
            </TableRow>
            <TableRow>
                <UserCell>
                    <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="" />
                    <Name>Susan Carol</Name>
                </UserCell>
                <DateCell> 2 Juin 2021</DateCell>
                <AmountCell> $122.00</AmountCell>
                <StatusCell>
                    <Button Declined>Declined</Button>
                </StatusCell>
            </TableRow>
            <TableRow>
                <TableHeader>
                    Customer
                </TableHeader>
                <TableHeader>
                    Date
                </TableHeader>
                <TableHeader>
                    Amount
                </TableHeader>
                <TableHeader>
                    Status
                </TableHeader>
            </TableRow>
            <TableRow>
                <UserCell>
                    <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="" />
                    <Name>Susan Carol</Name>
                </UserCell>
                <DateCell> 2 Juin 2021</DateCell>
                <AmountCell> $122.00</AmountCell>
                <StatusCell>
                    <Button Pending>Pending</Button>
                </StatusCell>
            </TableRow>
            <TableRow>
                <TableHeader>
                    Customer
                </TableHeader>
                <TableHeader>
                    Date
                </TableHeader>
                <TableHeader>
                    Amount
                </TableHeader>
                <TableHeader>
                    Status
                </TableHeader>
            </TableRow>
            <TableRow>
                <UserCell>
                    <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="" />
                    <Name>Susan Carol</Name>
                </UserCell>
                <DateCell> 2 Juin 2021</DateCell>
                <AmountCell> $122.00</AmountCell>
                <StatusCell>
                    <Button Approved>Approved</Button>
                </StatusCell>
            </TableRow>
        </Table>
    </Container>
  )
}

export default WidgetLarge;