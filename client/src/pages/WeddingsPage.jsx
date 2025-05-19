import { useEffect, useState } from 'react';
import { getAllWeddings } from '../services/wedding.service';

import './WeddingsPage.css';
import { WeddingForm } from '../components/WeddingForm';

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
            <div className="weddings">
                <ul>
                    {weddings.map(wedding => {
                        return (
                            <li key={wedding.id}>
                                <div className='wedding'>
                                    <p><span className='bold'>{wedding.name}</span> - <span className="date">{new Date(wedding.date).toLocaleDateString()}</span></p>
                                    <p className="location">{wedding.location}</p>
                                </div>
                                <div className='guests'>
                                    <ul>
                                        {wedding?.guests.map(guest => (
                                            <li>{guest.firstName} {guest.lastName}</li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}