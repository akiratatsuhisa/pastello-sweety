import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  DefaultOptions,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useAuth0 } from '@auth0/auth0-react';
import { FC, ReactNode, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface IApolloAuthProviderProps {
  children?: ReactNode;
}

export const ApolloAuthProvider: FC<IApolloAuthProviderProps> = ({
  children,
}) => {
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authLink = setContext(async (_: any, { headers, ...rest }: any) => {
    const token = await getAccessTokenSilently().catch(() =>
      navigate('/not-logged'),
    );

    return {
      ...rest,
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const defaultOptions: DefaultOptions = {
    // watchQuery: {
    //   fetchPolicy: 'no-cache',
    //   errorPolicy: 'ignore',
    // },
    // query: {
    //   fetchPolicy: 'no-cache',
    //   errorPolicy: 'all',
    // },
  };

  const client = useRef<ApolloClient<NormalizedCacheObject>>();

  if (!client.current) {
    client.current = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
      defaultOptions,
    });
  }

  return <ApolloProvider client={client.current}>{children}</ApolloProvider>;
};
