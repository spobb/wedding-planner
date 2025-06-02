import { Box, Typography } from "@mui/material"

export function ErrorPage() {
    return (
        <Box sx={{ display: 'flex', placeItems: 'center', flex: 1 }}>
            <Typography variant="body1" color="text.disabled">404 | Not found</Typography>
        </Box>
    )
}