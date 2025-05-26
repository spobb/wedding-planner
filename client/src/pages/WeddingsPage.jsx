import { useEffect, useState } from 'react';
import { getAllWeddings } from '../services/wedding.service';

import './WeddingsPage.css';
import { WeddingForm } from '../ui/components/WeddingForm';
import { WeddingList } from '../ui/components/WeddingList';

export const WeddingsPage = () => {
    const [weddings, setWeddings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllWeddings()
            .then(data => setWeddings(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
        <>
            <WeddingForm />
            <WeddingList weddings={weddings} />
        </>
    );
};
