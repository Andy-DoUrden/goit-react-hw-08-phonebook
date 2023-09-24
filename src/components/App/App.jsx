import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { PublicRoute } from '../PublicRoute';
import { PrivateRoute } from '../PrivateRoute';
import { refreshCurrentUser } from 'redux/auth/auth-operations';
import { selectIsRefreshing } from 'redux/auth/auth-selectors';

const HomeView = lazy(() => import('../../pages/HomeView'));
const ContactsView = lazy(() => import('../../pages/ContactsView'));
const RegisterView = lazy(() => import('../../pages/RegisterView'));
const LoginView = lazy(() => import('../../pages/LoginView'));

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />

        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsView />} />
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute redirectTo="/login" component={<RegisterView />} />
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute redirectTo="/login" component={<LoginView />} />
          }
        />

        <Route path="*" element={<HomeView />} />
      </Route>
    </Routes>
  );
};

export default App;
