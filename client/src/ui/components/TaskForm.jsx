import { useForm } from 'react-hook-form';
import { fetchService } from '../../services/fetch.service';
import { Button, TextField, Stack, FormControl } from '@mui/material';
import { useState, useEffect } from 'react';
import { getAllWeddings } from '../../services/wedding.service';

export const TaskForm = () => {
    const [weddings, setWeddings] = useState();
    const [selectedWedding, setSelectedWedding] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        await fetchService('/tasks', 'POST', data);
    };

    function handleChange(e) {
        setSelectedWedding(e.target.value);
    }

    useEffect(() => {
        getAllWeddings()
            .then(data => setWeddings(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing='2rem'>
                <TextField
                    name='name'
                    label='Names'
                    {...register('name', { required: true })}
                />
                <select
                    id="wedding"
                    name='wedding'
                >
                    {weddings.map((w, i) => {
                        <option key={i} value={w.name}>{w.name}</option>
                    })
                    }
                </select>
                <Button type='submit' variant='contained'>send</Button>
            </Stack>
        </form>
    );
};
