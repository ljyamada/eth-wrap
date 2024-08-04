import React from 'react';
import { WrapUnwrap } from './components/WrapUnwrap';
import { WalletConnectButton } from './components/WalletConnectButton';
import { Container, Text } from '@chakra-ui/react';
import { useAccount } from 'wagmi';

const App: React.FC = () => {
  const { isConnected } = useAccount();

  return (
      <Container>
        {isConnected ? (
            <>
              <WrapUnwrap />
            </>
        ) : (
            <Text>Wallet is not connected</Text>
        )}
        <WalletConnectButton />
      </Container>
  );
};

export default App;
