import React from 'react'
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import UserList from './pages/UserList';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import User from './pages/User';
import NewUser from './pages/NewUser';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import NewProduct from './pages/NewProduct';


const Container = styled.div`
margin-top: 10px;
`;  

const Body = styled.div`
display: flex;
`;  



function App() {
  return (
    <Router>
      <Container>
        <Topbar />
        <Body>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/users" element={<UserList />}/>
            <Route exact path="/user/:userId" element={<User />}/>
            <Route exact path="/newuser" element={<NewUser />}/>
            <Route exact path="/newproduct" element={<NewProduct />}/>
            <Route exact path="/products" element={<ProductList />}/>
            <Route exact path="/product/:productId" element={<Product />}/>

          </Routes>
        </Body>
      </Container>
    </Router>
  )
}

export default App;