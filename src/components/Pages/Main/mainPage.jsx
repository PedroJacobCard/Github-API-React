import {useState} from 'react';
import { Container, Logo, Title, Form, Input, Button, Footer} from './style';
import './mainPage.css';
import gitHubLogo from '../../../assets/images/gitHubLogo.svg';
import {TbSearch} from 'react-icons/tb';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function MainPage({ setLogin }){
  const [login, setLoginState] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin(login);
    navigate(`/${login}/repositories`)
  }
  
  return (
    <div className="container">
      <Container >
          <Logo src={gitHubLogo} alt="API Github"/>
        <Title>API Github</Title>
        <Form onSubmit={handleSubmit}>
          <Input 
          placeholder='usuário'
          value={login}
          onChange={(e) => setLoginState(e.target.value)}
          ></Input>
          <Button type='submit'>
            <TbSearch size={24}/>
          </Button>
        </Form>
        <Footer>
          &copy; Copyright - Pedro Jacob | 2023
        </Footer>
      </Container>
    </div>
  )
}

MainPage.propTypes = {
  setLogin: PropTypes.func.isRequired,
}

export default MainPage;