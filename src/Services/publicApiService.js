import { useState, useEffect } from 'react';
import axios from 'axios';



export const GetPublicHandle = (apiEndpoint, id) => {

    const [response, setResponse] = useState()

    const axiosUrl = id ? `${apiEndpoint}/${id}` : `${apiEndpoint}`

    useEffect(() => {
        axios
        .get(axiosUrl)
            .then(res => setResponse(res.data))
            .catch(err => setResponse({ error: err }))
    }, []);

    return  response 
}