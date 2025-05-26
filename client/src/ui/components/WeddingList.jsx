import { Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Divider } from "@mui/material"

export function WeddingList({ weddings }) {
    return (
        <Box width='60vw'>
            {weddings.map(wedding => (
                <Accordion key={wedding.id}>
                    <AccordionSummary className='wedding'>
                        <p>
                            <span className='bold'>{wedding.name}</span> - <span className='date'>{new Date(wedding.date).toLocaleDateString()}</span>
                        </p>
                        <p className='location'>{wedding.location}</p>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                        {wedding.guests.length ? (
                            <List>
                                {wedding.guests.map(guest => (
                                    <ListItem disablePadding>
                                        <ListItemText primary={`${guest.firstName} ${guest.lastName}`} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (<>This wedding has no guests.</>)}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
