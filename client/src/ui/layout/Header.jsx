import {AppBar, Toolbar, Button, Typography} from '@mui/material';

export function Header() {
	return (
		<AppBar>
			<Toolbar>
				<Typography variant='h2' component='a' href='/' marginRight='auto'>
					Wedder
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
