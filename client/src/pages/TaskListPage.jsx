import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getAllTasks } from '../services/task.service.js';
import { fetchService } from "../services/fetch.service.js";
import { TaskForm } from "../ui/components/TaskForm.jsx";
import { useAuth } from '../auth/AuthContext.jsx';
import { Button, TableHead, TableBody, TableCell, Table, TableContainer, TableRow } from '@mui/material';

export function TaskListPage() {
    const [tasks, setTasks] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { weddingId } = useParams();
    const { user } = useAuth();

    function handleDelete(id) {
        fetchService(`/tasks/${id}`, 'DELETE', null, user.token);
        setTasks(tasks.filter(t => t._id !== id));
    }

    useEffect(() => {
        getAllTasks(weddingId)
            .then(data => setTasks(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
        <>
            <TaskForm />
            <TableContainer sx={{
                maxWidth: '80vw',
                background: '#fff',
                borderRadius: '1rem'
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell>Fait ?</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((t, i) => (
                            <TableRow key={i}>
                                <TableCell>{t.name}</TableCell>
                                <TableCell><input type="checkbox" value={t.isDone} /></TableCell>
                                <TableCell>
                                    <Button onClick={() => handleDelete(t._id)} variant="contained" color="error" >Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}