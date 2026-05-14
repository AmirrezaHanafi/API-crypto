# Crypto Market Dashboard

A simple React project for practicing **API integration, data fetching, and state management** using modern frontend tools.  
This application displays cryptocurrency market data with pagination and auto‑refresh functionality.

## Features

- Fetch cryptocurrency data from an external API
- Built with **React + TypeScript**
- Data fetching and caching using **React Query**
- HTTP requests handled with **Axios**
- **Pagination (20 coins per page)**
- Automatic data refetch for updated market prices
- Modern UI styled with **TailwindCSS**
- Displays detailed information for each cryptocurrency:
  - Name
  - English name
  - Icon
  - Price (USD)
  - Price in Toman
  - Market Cap
  - Price change percentage
  - Date
  - Time

## Tech Stack

- React
- TypeScript
- Axios
- TanStack React Query
- TailwindCSS
- Vite

## Installation

Clone the repository:
```bash
git clone https://github.com/your-username/crypto-dashboard.git

Navigate to the project folder:


cd crypto-dashboard

Install dependencies:


npm install

Run the development server:


npm run dev

The app will be available at:


http://localhost:5173

## API Used

Cryptocurrency market data is fetched from:


https://api.brsapi.ir

## Project Structure


src
 ├─ components
 ├─ CryptoPage 
 ├─ API
 │   └─ api-types.ts
 ├─ App.tsx
 └─ main.tsx

## Learning Goals

This project was created to practice:

- Working with external APIs
- Managing server state with React Query
- Structuring React applications
- Using TypeScript for safer code
- Building responsive UI with TailwindCSS

## License

This project is open-source and available under the MIT License.
