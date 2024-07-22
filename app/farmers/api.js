import axios from "axios";
import config from "@/app/components/constants";



const apiKey = config.apikeyCurrency;




export async function getCurrency() {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)

    return response.data.conversion_rates;
}


