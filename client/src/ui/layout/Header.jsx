import { AppBar, Toolbar, Button, Typography, Divider } from '@mui/material';
import { useAuth } from '../../auth/AuthContext';

export function Header() {
    const { user, logout } = useAuth();

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h1' fontSize='2.5rem' component='a' href='/' marginRight='auto'>
                    WEDDER
                </Typography>
                <Button href='/weddings' color='inherit'>
                    Weddings
                </Button>
                <Button href='/guests' color='inherit'>
                    Guests
                </Button>
                <Button href='/budgets' color='inherit'>
                    Budgets
                </Button>
                <Button href='/vendors' color='inherit'>
                    Vendors
                </Button>
                <Divider sx={{ marginX: '1rem' }} />
                {!user && <div>
                    <Button href='/signup' color='inherit'>
                        Sign up
                    </Button>
                    <Button href='/login' color='inherit'>
                        Log in
                    </Button>
                </div>}
                {user && <Button onClick={logout} color='inherit'>
                    Log out
                </Button>}
            </Toolbar>
        </AppBar>
    );
}
