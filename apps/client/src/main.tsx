import './index.css';

import { AppState, Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/App.tsx';

import { ApolloAuthProvider, ThemeProvider } from './providers';

const onRedirectCallback = (appState?: AppState) => {
  window.location.replace(
    appState?.returnTo && appState.returnTo
      ? appState.returnTo
      : window.location.origin,
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Auth0Provider
      cacheLocation="localstorage"
      clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
      domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
      authorizationParams={{
        audience: import.meta.env.VITE_APP_AUTH0_AUDIENCE,
        redirect_uri: window.location.origin + '/callback',
        scope: 'profile email',
      }}
      useRefreshTokens={true}
      onRedirectCallback={onRedirectCallback}
    >
      <ApolloAuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ApolloAuthProvider>
    </Auth0Provider>
  </BrowserRouter>,
);
