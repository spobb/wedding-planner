import { useForm } from 'react-hook-form';
import { fetchService } from '../services/fetch.service';
import './WeddingForm.css';

export const WeddingForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm({ mode: 'onChange' });

    const onSubmit = async (data) => {
        data.location = `${data.city}, ${data.country}`;

        const response = await fetchService('/weddings', 'POST', data);
        console.log(response);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input">
                <label htmlFor="name">Names of the spouses</label>
                <input
                    type="text"
                    name="name"
                    placeholder='Jhin & Spobb'
                    {...register('name', { required: true })}
                />
            </div>

            <div className="input">

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    name="date"
                    placeholder='03/06/25'
                    {...register('date', { required: true })}
                />
            </div>

            <div className='input-group'>
                <div className="input">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder='Brussels'
                        {...register('city', { required: true })}
                    />
                </div>
                <div className="input">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        name="country"
                        placeholder='Belgium'
                        {...register('country', { required: true })}
                    />
                </div>
            </div>
            <input type="submit" value="send" />
        </form>
    )
}