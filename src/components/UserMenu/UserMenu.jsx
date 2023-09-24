import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUserName } from 'redux/auth/auth-selectors';

import { Container, Nickname, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <Container>
      <Nickname>Welcome, {userName}</Nickname>

      <LogOutBtn
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </LogOutBtn>
    </Container>
  );
};

export default UserMenu;
