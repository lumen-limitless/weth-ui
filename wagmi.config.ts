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
        1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      },
    },
  ],
  plugins: [react()],
});
