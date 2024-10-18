/**
 * This is a temporary script to fetch forwarder reserved tokens. In Future reserved tokens will be added here directly. 
 */
import axios from 'axios';
import fs from "fs-extra";

// Define the API URL - fwd fee service
const apiUrl = `${process.env.FEE_SERVICE_URL}/tokens?page=1&limit=300`;

// Define the interface for the API response structure
interface Token {
    name: string;
    symbol: string;
    symbolId: string;
    chainId: string;
    decimals: number;
    address: string;
}

// Define the transformed structure
interface TransformedToken {
    id: string;
    name: string;
    symbol: string;
    chainId: string;
    decimals: number;
    address: string;
    isNative: boolean;
    isWNative: boolean;
    price: null
}

// Function to fetch and transform tokens
const fetchAndTransformTokens = async () => {
    try {
        // Fetch the data from the API
        const response = await axios.get(apiUrl);

        // Extract token data from the API response
        const tokens: Token[] = response.data;

        // Transform the tokens
        const transformedTokens: TransformedToken[] = tokens.map(token => ({
            id: token.symbolId.toLowerCase(),
            name: token.name,
            symbol: token.symbol.toUpperCase(),
            chainId: token.chainId,
            decimals: token.decimals,
            address: token.address,
            isNative: false,
            isWNative: false,
            price: null
        }));

        // Write the transformed tokens to a file
        fs.writeFileSync('transformedTokens.json', JSON.stringify(transformedTokens, null, 2));

        console.log('Tokens successfully transformed and stored in transformedTokens.json');
    } catch (error) {
        console.error('Error fetching or transforming tokens:', error);
    }
};

// Call the function
fetchAndTransformTokens();
