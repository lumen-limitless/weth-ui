'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { Skeleton } from '@/components/ui/skeleton';
import { Box, Fuel } from 'lucide-react';
import { formatGwei } from 'viem';
import { useBlockNumber, useGasPrice } from 'wagmi';
export default function Footer() {
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const { data: feeData } = useGasPrice();

  return (
    <footer
      id="footer"
      className="flex flex-col items-center justify-center gap-5 border-t p-1 px-5 lg:flex-row"
    >
      <div className="flex">
        <Box className="mr-1" />{' '}
        {blockNumber?.toLocaleString() || <Skeleton className="h-6 w-16" />}
      </div>
      <div className="flex">
        <Fuel className="mr-1" />{' '}
        {feeData ? (
          formatGwei(feeData) + ' Gwei'
        ) : (
          <Skeleton className="h-6 w-16" />
        )}
      </div>
      <ModeToggle />
    </footer>
  );
}
