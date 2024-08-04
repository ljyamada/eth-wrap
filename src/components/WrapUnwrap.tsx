import { useState, useEffect } from 'react';
import { Button, Input, Box } from '@chakra-ui/react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ethers } from 'ethers';

export const WrapUnwrap: React.FC = () => {
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const [signer, setSigner] = useState<ethers.Signer | null>(null);
    const [amount, setAmount] = useState('');

    // useEffect(() => {
    //     const getSigner = async () => {
    //         if (isConnected) {
    //             const provider = ethers.getDefaultProvider('mainnet')
    //             const signer = provider.getSigner();
    //             setSigner(signer);
    //         }
    //     };
    //     getSigner();
    // }, [isConnected]);

    const handleWrap = async () => {
        if (signer) {
            const tx = await signer.sendTransaction({
                to: '0x...', // Replace with the actual WETH contract address
                value: ethers.parseEther(amount),
            });
            await tx.wait();
        }
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
