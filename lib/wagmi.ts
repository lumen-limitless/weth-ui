import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WETH9
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const weth9Abi = [
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: 'guy', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: 'src', type: 'address' },
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [{ name: 'wad', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [{ name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    constant: false,
    payable: false,
    type: 'function',
    inputs: [
      { name: 'dst', type: 'address' },
      { name: 'wad', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    constant: false,
    payable: true,
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    constant: true,
    payable: false,
    type: 'function',
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  { payable: true, type: 'fallback', stateMutability: 'payable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', type: 'address', indexed: true },
      { name: 'guy', type: 'address', indexed: true },
      { name: 'wad', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', type: 'address', indexed: true },
      { name: 'dst', type: 'address', indexed: true },
      { name: 'wad', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'dst', type: 'address', indexed: true },
      { name: 'wad', type: 'uint256', indexed: false },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', type: 'address', indexed: true },
      { name: 'wad', type: 'uint256', indexed: false },
    ],
    name: 'Withdrawal',
  },
] as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const weth9Address = {
  1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  10: '0x4200000000000000000000000000000000000006',
  8453: '0x4200000000000000000000000000000000000006',
  42161: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  11155111: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
} as const

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const weth9Config = { address: weth9Address, abi: weth9Abi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useReadWeth9 = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  address: weth9Address,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useReadWeth9Name = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useReadWeth9TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useReadWeth9Decimals = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useReadWeth9BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useReadWeth9Symbol = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useReadWeth9Allowance = /*#__PURE__*/ createUseReadContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWriteWeth9 = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  address: weth9Address,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWriteWeth9Approve = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWriteWeth9TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWriteWeth9Withdraw = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWriteWeth9Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWriteWeth9Deposit = /*#__PURE__*/ createUseWriteContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useSimulateWeth9 = /*#__PURE__*/ createUseSimulateContract({
  abi: weth9Abi,
  address: weth9Address,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useSimulateWeth9Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useSimulateWeth9TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: weth9Abi,
    address: weth9Address,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"withdraw"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useSimulateWeth9Withdraw = /*#__PURE__*/ createUseSimulateContract(
  { abi: weth9Abi, address: weth9Address, functionName: 'withdraw' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useSimulateWeth9Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: weth9Abi, address: weth9Address, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link weth9Abi}__ and `functionName` set to `"deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useSimulateWeth9Deposit = /*#__PURE__*/ createUseSimulateContract({
  abi: weth9Abi,
  address: weth9Address,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWatchWeth9Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: weth9Abi,
  address: weth9Address,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWatchWeth9ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: weth9Abi,
    address: weth9Address,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWatchWeth9TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: weth9Abi,
    address: weth9Address,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__ and `eventName` set to `"Deposit"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWatchWeth9DepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: weth9Abi,
    address: weth9Address,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link weth9Abi}__ and `eventName` set to `"Withdrawal"`
 *
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
 * - [__View Contract on Op Mainnet Optimism Explorer__](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Base Basescan__](https://basescan.org/address/0x4200000000000000000000000000000000000006)
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14)
 */
export const useWatchWeth9WithdrawalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: weth9Abi,
    address: weth9Address,
    eventName: 'Withdrawal',
  })
