import { Card, CardContent, Stack, Typography } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { useAccount } from 'wagmi';

type Props = {
  children: ReactNode;
  footer?: boolean;
  header?: boolean;
};

export const Layout: React.FC<Props> = ({ children, footer, header }) => {
  const { isConnected } = useAccount()
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    setShowPage(isConnected)
  }, [isConnected])

  return (
    <>
      <main>
        {header && <Header />}
        <Stack
          sx={{
            minHeight: '100vh',
            width: '100vw',
            mt: '12vh',
            mb: '6vh',
            px: { xs: 2, sm: 5, md: 10, lg: 20 },
            gap: 4
          }}
        >
          {showPage ? children :
            <Card sx={{ alignSelf: "center", maxWidth: '80vw', marginTop: "30vh", p: "16px", backgroundColor: "#f0f0f0" }}>
              Connect your wallet to see what documents has been requested for your signature.
            </Card>
          }
        </Stack>
      </main>

      {footer && <Footer />}
    </>
  );
}
