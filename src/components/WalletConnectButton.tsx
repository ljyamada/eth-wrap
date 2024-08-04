import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@chakra-ui/react';

export const WalletConnectButton: React.FC = () => {
    const { isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    return isConnected ? (
        <Button onClick={() => disconnect()}>Disconnect</Button>
    ) : (
        <Button onClick={() => connect({ connector: connectors[0] })}>Connect Wallet</Button>
    );
};
