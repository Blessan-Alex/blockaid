This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Installation Instructions

To install the required dependencies, run the following commands:

### Install `ethers` (Version 5)

```sh
npm install ethers@5
```

or

```sh
yarn add ethers@5
```

### Install `axios`

```sh
npm install axios
```

or

```sh
yarn add axios
```

### If you face any issues

If you encounter module resolution issues, try the following steps:

1. Delete `node_modules` and `package-lock.json` (or `yarn.lock`):

   ```sh
   rm -rf node_modules package-lock.json  # or yarn.lock
   ```

2. Reinstall dependencies:

   ```sh
   npm install  # or yarn install
   ```

3. Restart your development server.

Now you should be good to go! 🚀

### Running Blockchain Ganache

To be an admin and add transactions to the blockchain, you need to run Ganache:

```sh
ganache-cli
```

Ensure that your smart contract is deployed on Ganache using Truffle:

```sh
npx truffle migrate --network development
```

## Run the Deployment Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
