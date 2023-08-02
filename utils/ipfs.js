import axios from "axios";
import IPFSHttpClient from "ipfs-http-client";

// Function to fetch data from an IPFS URL
export async function fetchFromIPFS(ipfsURL) {
    try {
        // Use axios to fetch the IPFS URL
        const response = await axios.get(ipfsURL);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from IPFS:", error);
        return null;
    }
}
