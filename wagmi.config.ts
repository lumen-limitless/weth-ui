import { defineConfig } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import WETH9abi from './lib/abi/WETH9';

export default defineConfig({
  out: 'lib/wagmi.ts',
  contracts: [
    {
      name: 'WETH9',
      abi: WETH9abi,
      address: {
        1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', // Ethereum Mainnet
        10: '0x4200000000000000000000000000000000000006', // Optimism
        42161: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // Arbitrum One
        8453: '0x4200000000000000000000000000000000000006', // Base
        11155111: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14', // Sepolia (testnet)
      },
    },
  ],
  plugins: [react()],
});
