import { useState, useEffect } from 'react';
import { Button, Input, Box } from '@chakra-ui/react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useSendTransaction } from 'wagmi';
import {AbstractSigner, ethers, Provider} from 'ethers';

export const WrapUnwrap: React.FC = () => {
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const [signer, setSigner] = useState<ethers.Signer | null>(null);
    const [amount, setAmount] = useState('');
    const { sendTransaction } = useSendTransaction()

    const handleWrap = async () => {
        sendTransaction({
            to: '0xd2135CfB216b74109775236E36d4b433F1DF507B',
            value: ethers.parseEther(amount),
        })
    };

    const handleUnwrap = async () => {
        // Unwrap logic here
    };

    return (
        <Box>
            <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <Button onClick={handleWrap}>Wrap ETH</Button>
            <Button onClick={handleUnwrap}>Unwrap ETH</Button>
        </Box>
    );
};
