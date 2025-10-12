# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based Web3 dApp for wrapping and unwrapping ETH to WETH (Wrapped Ether) across multiple blockchain networks. The application uses RainbowKit for wallet connections, Wagmi for Ethereum interactions, and supports Ethereum Mainnet, Optimism, Arbitrum One, Base, and Sepolia testnet.

## Development Commands

### Essential Commands
- `pnpm dev` - Start development server on localhost:3000
- `pnpm build` - Production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm typecheck` - Type check without emitting files

### Testing Commands
- `pnpm test` - Run all tests (unit + e2e)
- `pnpm test:unit` - Run Jest unit tests only
- `pnpm test:e2e` - Run Playwright e2e tests only
- Unit tests: `*.test.ts` or `*.test.tsx` files
- E2e tests: Located in `tests/e2e/`

### Web3 Commands
- `pnpm generate` - Generate Wagmi hooks from contract ABIs using `wagmi.config.ts`

### Other Commands
- `pnpm analyze` - Analyze bundle size with Next.js bundle analyzer

## Architecture

### Web3 Integration Layer

**Contract Configuration** (`wagmi.config.ts`):
- Uses `@wagmi/cli` to generate type-safe React hooks from ABIs
- Configured for WETH9 contract with addresses for multiple chains
- Output: `lib/wagmi.ts` (generated hooks like `useWriteWeth9Deposit`, `useReadWeth9BalanceOf`)
- Run `pnpm generate` after modifying contract configurations

**Chain Support**:
- Mainnet (1): 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
- Optimism (10): 0x4200000000000000000000000000000000000006
- Arbitrum One (42161): 0x82aF49447D8a07e3bd95BD0d56f35241523fBab1
- Base (8453): 0x4200000000000000000000000000000000000006
- Sepolia (11155111): 0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14

### Provider Architecture

**Root Provider Chain** (`app/providers.tsx`):
1. `WagmiProvider` - Ethereum interaction layer with RainbowKit config
2. `QueryClientProvider` - TanStack Query for async state management
3. `RainbowKitProvider` - Wallet connection UI
4. `ThemeProvider` - Theme management (system/light/dark)

**Configuration**:
- RainbowKit project ID in providers.tsx needs to be replaced with actual WalletConnect project ID
- SSR enabled for all providers

### Application Structure

**Layout Hierarchy**:
- `app/layout.tsx` - Root layout with Header, Main, Footer wrapped in Providers
- Uses Kode Mono font (Google Fonts)
- Includes accessibility features (skip link)
- TailwindIndicator in development mode shows current breakpoint

**Core Components**:
- `components/weth.tsx` - Main WETH wrap/unwrap interface
  - Displays ETH and WETH balances
  - Handles wrap (ETH → WETH) and unwrap (WETH → ETH) transactions
  - Uses generated Wagmi hooks for contract interactions
  - Transaction state management with pending/loading states
- `components/theme-provider.tsx` - next-themes integration
- `components/mode-toggle.tsx` - Dark/light mode toggle
- `components/ui/*` - shadcn/ui components (Radix UI primitives)

### Path Aliases
- `@/*` maps to project root
- Example: `@/components/ui/button` resolves to `/components/ui/button`

### Styling
- Tailwind CSS 4.x with custom configuration
- Uses `tailwind-merge` and `class-variance-authority` for component variants
- `tailwindcss-animate` plugin for animations
- Utility function: `lib/utils.ts` exports `cn()` for className merging

### Next.js Configuration

**Webpack Customizations** (`next.config.js`):
- SVG support via `@svgr/webpack` (imports SVGs as React components)
- Client-side encoding fallback for Web3 libraries
- Bundle analyzer enabled with `ANALYZE=true` env var

## Testing

**Unit Tests (Jest)**:
- Test environment: jsdom
- Path aliases configured to match TypeScript
- Setup file: `jest.setup.ts`

**E2E Tests (Playwright)**:
- Test directory: `tests/e2e/`
- Browsers: Chromium, Firefox, WebKit
- Base URL: http://127.0.0.1:3000 (configurable via `PLAYWRIGHT_TEST_BASE_URL`)
- Automatically builds and starts production server before tests
- Traces enabled on first retry

## Environment Variables

Required variables (defined in `process-env.d.ts`):
- `NEXT_PUBLIC_APP_NAME` - Application name
- `NEXT_PUBLIC_APP_URL` - Application URL

## Important Notes

- Node.js >=20.0.0 required
- Package manager: pnpm (uses pnpm-lock.yaml)
- SVG imports return React components due to custom webpack config
- The project uses React 19 with Next.js 15
- All generated Wagmi hooks are in `lib/wagmi.ts` - do not modify this file directly
- Contract ABIs are stored in `lib/abi/` directory
- When adding new contracts, update `wagmi.config.ts` and run `pnpm generate`
