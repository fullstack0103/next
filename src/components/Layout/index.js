import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../contexts/SessionContext';
import {
  Container,
  InnerContainer,
  LoadingContainer
} from './styles';

export const Layout = (props) => {
  const { children } = props;

  const router = useRouter();
  const [{ auth, loading }] = useSession();

  useEffect(() => {
      if (!auth && router.pathname !== '/signup' && router.pathname !== '/signin') {
          router.push('/signin');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>fullstack2022</title>
        <meta name='description' content='Developed the app by fullstack developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {loading ? (
        <LoadingContainer>Loading</LoadingContainer>
      ) : (
        <Container>
          <InnerContainer>
            {children}
          </InnerContainer>
        </Container>
      )}
    </>
  )
}