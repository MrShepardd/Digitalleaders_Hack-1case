const backPort = 5000;
const backPath = window.location.protocol + '//' + window.location.hostname + ":" + backPort;

export default async function callApi(endpoint, token, options, payload) {
    const sitePath = backPath;

    const authHeaders = token ? {
        'Authorization': `Bearer ${token}`
    } : {};

    const res = await fetch(sitePath + endpoint, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            ...authHeaders
        },
        body: JSON.stringify(payload),
        ...options
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${endpoint}` +
                    `, received ${response.status}`);
            }
            return response.json();
        })
        .then(json => {
            return json;
        });

    return await res;
}