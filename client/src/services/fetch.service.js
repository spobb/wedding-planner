export const fetchService = async (url, method = 'GET', body = null, token = null) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
            method,
            body: ['PUT', 'PATCH', 'POST'].includes(method) ? JSON.stringify(body) : undefined,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        return response.json();
    } catch (err) {
        console.error(err);
    }
}