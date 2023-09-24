import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import {
  Container,
  Navigation,
  LinkContainer,
  StyledNavLink,
} from './Layout.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserMenu from 'components/UserMenu';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <ToastContainer autoClose={3000} theme={'dark'} />

      <header>
        <Navigation>
          <LinkContainer>
            <StyledNavLink to="/" end>
              Home
            </StyledNavLink>

            {isLoggedIn ? (
              <>
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>

                <UserMenu />
              </>
            ) : (
              <>
                <StyledNavLink to="/register">Register</StyledNavLink>
                <StyledNavLink to="/login">Login</StyledNavLink>
              </>
            )}
          </LinkContainer>
        </Navigation>
      </header>

      <main>
        <Suspense
          fallback={
            <Oval
              height={60}
              width={60}
              color="#f2ab26"
              wrapperStyle={{}}
              wrapperClass="loaderMargin"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#f2ab26"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <footer></footer>
    </Container>
  );
};

export default Layout;
