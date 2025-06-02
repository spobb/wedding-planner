import { AppBar, Toolbar, Button, Typography } from '@mui/material';

export function Header() {
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
            </Toolbar>
        </AppBar>
    );
}
