import { Box, Button, FormControl, TextField, Typography, Input, InputLabel, FormHelperText } from "@mui/material";
// es-lint-disable-next-line
import { fetchService } from "../services/fetch.service";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

export function RegisterForm() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetchService('/auth/register', 'POST', { email: data.email, password: data.password });

            if (!response) {
                return;
            }

            navigate('/');

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Typography variant="h5" color="initial" sx={{ padding: '2rem' }}>Sign up</Typography>
            <Box onSubmit={handleSubmit(onSubmit)} component='form' sx={{ display: 'flex', flexDirection: 'column', margin: '0 auto', gap: '1rem', minWidth: '384px' }}>
                <TextField
                    label="E-mail"
                    {...register('email',
                        {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please input a valid e-mail address.'
                            }
                        })}
                    variant="standard"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <FormControl variant="standard">
                    <InputLabel htmlFor='password' error={errors.password && true}>Password</InputLabel>
                    <Input
                        id="password"
                        type='password'
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 8,
                                message: 'Your password must be between 8 and 24 characters long.'
                            },
                            maxLength: {
                                value: 24,
                                message: 'Your password must be between 8 and 24 characters long.'
                            }
                        })}
                        error={!!errors.password}
                    />
                    <FormHelperText error>{errors.password?.message}</FormHelperText>
                </FormControl>

                <FormControl>
                    <Button
                        disabled={!isValid}
                        variant="contained"
                        type="submit"
                    >Sign up</Button>
                </FormControl>
            </Box>
        </>
    )
}