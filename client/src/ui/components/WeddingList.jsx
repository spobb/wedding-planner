import { Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Divider, Typography } from "@mui/material"

export function WeddingList({ weddings }) {
    return (
        <Box width='60vw'>
            {weddings.map((wedding, i) => (
                <Accordion key={i}>
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
                                {wedding.guests.map((guest, i) => (
                                    <ListItem disablePadding key={i}>
                                        <ListItemText primary={`${guest.firstName} ${guest.lastName}`} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (<ListItem>
                            <ListItemText primary='This wedding has no guests.' sx={{ color: "text.disabled" }} />
                        </ListItem>)}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
