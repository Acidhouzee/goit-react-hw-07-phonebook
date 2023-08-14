import React, { lazy } from "react";
import css from "./App.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthentificated, selectUserToken } from "redux/selectors";
import { useEffect } from "react";
import { refreshUser } from "redux/operations";


const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));


export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if(!token) return;

    dispatch(refreshUser());

  }, [token, dispatch]);

  return(
    <div>
      <header className={css.header}>
        <ul className={css.menu_list}>
          <li><NavLink className={css.menu_item} to="/">Home</NavLink></li>
          {authentificated ? (
            <>
              <li><NavLink className={css.menu_item} to="/contacts">Contacts</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink className={css.menu_item} to="/login">Login</NavLink></li>
              <li><NavLink className={css.menu_item} to="/register">Register</NavLink></li>
            </>
          )}
        </ul>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/contacts" element={<ContactsPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
          </Routes>
        </Suspense>
      </main>
    </div>
  ); 
};

export default App;
