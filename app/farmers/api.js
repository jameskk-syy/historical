import axios from "axios";
import {  apikeyCurrency } from '../components/constants';




const apiKey = apikeyCurrency;




export async function getCurrency() {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)

    return response.data.conversion_rates;
}


