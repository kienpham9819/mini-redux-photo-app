import React, { Suspense, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import productApi from 'api/productApi';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);

  // handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('use not login');
        return;
      }

      const token = await user.getIdToken();
    });

    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    const fetchAllProduct = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10
        };

        const response = await productApi.getAll(params);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }
    }

    fetchAllProduct();
  }, []);

  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from='/' to='/photos' />

            <Route path='/photos' component={Photo} />
            <Route path='/login' component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
