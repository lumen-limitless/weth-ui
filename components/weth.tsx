'use client';
import { useState } from 'react';
import { formatEther, parseEther } from 'viem';
import {
  useAccount,
  useBalance,
  useChainId,
  useWaitForTransactionReceipt,
} from 'wagmi';
import {
  useWriteWeth9Deposit,
  useWriteWeth9Withdraw,
  weth9Address,
} from '../lib/wagmi';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const WETH = () => {
  const [amount, setAmount] = useState('');
  const { address } = useAccount();
  const chainId = useChainId();

  const { data: ethBalance } = useBalance({
    address,
  });

  const { data: wethBalance } = useBalance({
    address,
    token: weth9Address[1],
  });

  const {
    writeContract: wrap,
    data: wrapData,
    isPending: isWrapping,
  } = useWriteWeth9Deposit();

  const {
    writeContract: unwrap,
    data: unwrapData,
    isPending: isUnwrapping,
  } = useWriteWeth9Withdraw();

  const { isLoading: isWrapPending } = useWaitForTransactionReceipt({
    hash: wrapData,
  });

  const { isLoading: isUnwrapPending } = useWaitForTransactionReceipt({
    hash: unwrapData,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount) {
      const value = parseEther(amount);
      wrap({ value });
    }
  };

  const handleUnwrap = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount) {
      const value = parseEther(amount);
      unwrap({ args: [value] });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Wrap/Unwrap ETH</h2>
      <div className="flex gap-4">
        <p>
          ETH Balance: {ethBalance ? formatEther(ethBalance.value) : '0'} ETH
        </p>
        <p>
          WETH Balance: {wethBalance ? formatEther(wethBalance.value) : '0'}{' '}
          WETH
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount in ETH"
          className="rounded border p-2"
        />
        <Button
          type="submit"
          disabled={isWrapping || isWrapPending}
          className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isWrapping || isWrapPending ? 'Wrapping...' : 'Wrap ETH'}
        </Button>
      </form>
      <form onSubmit={handleUnwrap} className="flex flex-col gap-2">
        <Button
          type="submit"
          disabled={isUnwrapping || isUnwrapPending}
          className="rounded bg-green-500 p-2 text-white hover:bg-green-600 disabled:bg-gray-400"
        >
          {isUnwrapping || isUnwrapPending ? 'Unwrapping...' : 'Unwrap WETH'}
        </Button>
      </form>
    </div>
  );
};
