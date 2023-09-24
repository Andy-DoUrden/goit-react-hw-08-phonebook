import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

import { Container, Title, TryNowBtn } from './Home.styled';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Title>Welcome to Phonebook</Title>

      <TryNowBtn to={isLoggedIn ? '/contacts' : '/login'}>Try now!</TryNowBtn>
    </Container>
  );
};

export default Home;
