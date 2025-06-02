import { useForm } from 'react-hook-form';
import { fetchService } from '../../services/fetch.service';
import { FormControl, Button, Input, TextField, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';

export const WeddingForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onChange' });

    const onSubmit = async data => {
        data.location = `${data.city}, ${data.country}`;
        await fetchService('/weddings', 'POST', data);

        navigate('/weddings');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing='2rem'>
                <TextField
                    name='name'
                    label='Names'
                    placeholder='Jhin & Spobb'
                    {...register('name', { required: true })}
                />
                {/* <DatePicker
                    name='date'
                    label='Date'
                    {...register('date', { required: true })}
                /> */}
                <Stack direction='row' spacing='2rem'>
                    <TextField
                        name='city'
                        label='City'
                        placeholder='Brussels'
                        {...register('city', { required: true })}
                    />
                    <TextField
                        name='country'
                        label='Country'
                        placeholder='Belgium'
                        {...register('country', { required: true })}
                    />
                </Stack>
                <Button type='submit' variant='contained'>send</Button>
            </Stack>
        </form>
    );
};
