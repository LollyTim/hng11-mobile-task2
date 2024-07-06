# React Native Product List Application

## Overview

This application is a React Native project that fetches product data from the Timbu API and displays it in a list. The application uses TypeScript for type safety, Zustand for state management, and Axios for API calls.

## Features


- Fetches product data from the Timbu API.
- Displays product images, names, prices, and descriptions.

- Handles loading and error states.

## Getting Started

### Prerequisites


- Node.js installed on your machine.
- Expo CLI installed globally (`npm install -g expo-cli`).

### Installation


1. Clone the repository:

   ```bash
   git clone https://github.com/LollyTim/hng11-mobile-task2.git

2. Navigate to the project directory:
   
       ```bash
         cd hng11-mobile-task2
   
4. Install dependencies:
   
     ```bash
   npm install
## Usage
1. Start the Expo development server:

       ```bash
         expo start
2. Open the Expo app on your device and scan the QR code to view the application.

## API Configuration
          ```bash
                  // store.ts
               // ...
               const useStore = create<State>((set) => ({
                 // ...
                 fetchProducts: async () => {
                   try {
                     const response = await axios.get(
                       'https://api.timbu.cloud/products',
                       {
                         params: {
                           organization_id: 'YOUR_ORGANIZATION_ID', // Replace with your organization ID
                           reverse_sort: false,
                           page: 1,
                           size: 10,
                           Appid: 'YOUR_APP_ID', // Replace with your App ID
                           Apikey: 'YOUR_API_KEY', // Replace with your API key
                         },
                       }
                     );
                     // ...
                   } catch (e: any) {
                     // ...
                   }
                 },
               }));
               // ...


### Project Structure
.store.ts: Contains the Zustand store for managing the application state.
 .HomeScreen.tsx: The main screen that displays the list of products.
