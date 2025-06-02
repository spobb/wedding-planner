import { Routes, Route } from 'react-router-dom';

import { Layout } from './ui/layout/Layout';
import { WeddingsPage } from './pages/WeddingsPage';
import { ErrorPage } from './pages/ErrorPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TaskListPage } from './pages/TaskListPage';

import { AuthProvider } from './auth/AuthContext';
import { ProtectedRoute } from './auth/ProtectedRoute';
import { LoginForm } from './auth/LoginForm';
import { RegisterForm } from './auth/RegisterForm';

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<WeddingsPage />} />
                        <Route path='/weddings/' element={<WeddingsPage />} />
                        <Route path='/tasks/:weddingId?' element={
                            <ProtectedRoute>
                                <TaskListPage />
                            </ProtectedRoute>
                        } />

                        <Route path='/login' element={<LoginForm />} />
                        <Route path='/signup' element={<RegisterForm />} />

                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </LocalizationProvider>
    )
}

export default App
