'use client';
import Image from 'next/image';
import wethImg from 'public/weth.png';
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
import { Skeleton } from './ui/skeleton';

export const WETH = () => {
  const [amount, setAmount] = useState('');
  const { address } = useAccount();
  const chainId = useChainId();

  const { data: ethBalance } = useBalance({
    address,
  });

  const { data: wethBalance } = useBalance({
    address,
    token: weth9Address[chainId as 1],
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
      <Image src={wethImg} alt="WETH" height={25} />

      <h2 className="text-2xl font-bold">Wrap/Unwrap ETH</h2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex items-center">
          <span>ETH Balance: </span>
          {ethBalance ? (
            <span>{formatEther(ethBalance.value)}</span>
          ) : (
            <Skeleton className="mx-1 h-6 w-16" />
          )}
          <span> ETH</span>
        </div>
        <div className="flex items-center">
          <span>WETH Balance: </span>
          {wethBalance ? (
            <span>{formatEther(wethBalance.value)}</span>
          ) : (
            <Skeleton className="mx-1 h-6 w-16" />
          )}
          <span> WETH</span>
        </div>
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
