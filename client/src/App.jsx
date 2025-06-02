import { Routes, Route } from 'react-router-dom';

import { Layout } from './ui/layout/Layout';
import { WeddingsPage } from './pages/WeddingsPage';
import { ErrorPage } from './pages/ErrorPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<WeddingsPage />} />
                    <Route path='/weddings' element={<WeddingsPage />} />

                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </LocalizationProvider>
    )
}

export default App
