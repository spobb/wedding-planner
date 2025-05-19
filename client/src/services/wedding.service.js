export const getAllWeddings = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/weddings`);

    if (!response.ok) throw new Error('Error while loading weddings');

    return await response.json();
}