import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { useRouter } from 'next/router';
import { Button, Container, Typography } from '@mui/material';
import { LegalDocsList } from '../components/LegalDocsList';
import { signRequests } from '../config/mocks';
import { useEAS } from '../hooks/useEAS';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const { data, eas, getAttestation } = useEAS();
  console.log(data)
  console.log('getAttestation')

  return (
    <>
      <Head>
        <title>RainbowKit App</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
        {/* TODO */}
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <Layout header footer>
        <Container>
          <Button onClick={() => getAttestation()}>hello</Button>
          <Typography variant='h4' >Heya! We where found some usefull documents waiting to be signed by you.</Typography>
          <LegalDocsList signRequests={signRequests} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
