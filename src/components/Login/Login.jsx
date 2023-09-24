import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

import {
  Container,
  Form,
  LoginBlock,
  LoginName,
  LoginValue,
  LoginBtn,
} from './Login.styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LoginBlock>
          <LoginName>Email</LoginName>
          <LoginValue
            type="email"
            name="email"
            value={email}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
            autoComplete="off"
          />
        </LoginBlock>

        <LoginBlock>
          <LoginName>Password</LoginName>
          <LoginValue
            type="password"
            name="password"
            value={password}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
            autoComplete="off"
          />
        </LoginBlock>

        <LoginBtn>Login</LoginBtn>
      </Form>
    </Container>
  );
};

export default Login;
