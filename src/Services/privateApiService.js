import { useState, useEffect } from 'react';
import axios from 'axios';

const authTokenHeaders = (userToken) => (
    {
        headers: {
            Authorization: userToken
        }
    }
)

export const GetHandle = (apiEndpoint, id, userToken) => {

    const [response, setResponse] = useState()

    const axiosUrl = id ? `${apiEndpoint}/${id}` : `${apiEndpoint}`

    useEffect(() => {
        axios
            .get(axiosUrl, authTokenHeaders(userToken))
            .then(res => setResponse(res.data))
            .catch(err => setResponse({ error: err }))
    }, []);

    return  response 
}

