import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { useRouter } from 'next/router';
import { Button, Container, Stack, Typography } from '@mui/material';
import { CreateLegalDoc } from '../components/CreateLegalDoc';

const Create: NextPage = () => {
  const router = useRouter();

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
          <Typography variant='h4' >Submit a document for signature</Typography>
          <CreateLegalDoc />
        </Container>
      </Layout>
    </>
  );
};

export default Create;
