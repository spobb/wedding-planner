import { Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Divider, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export function WeddingList({ weddings }) {
    const navigate = useNavigate();

    return (
        <Box width='60vw'>
            {weddings.map((wedding, i) => (
                <Accordion key={i}>
                    <AccordionSummary className='wedding'>
                        <p>
                            <span className='bold'>{wedding.name}</span> - <span className='date'>{new Date(wedding.date).toLocaleDateString()}</span>
                        </p>
                        <p className='location'>{wedding.location}</p>
                        <Button onClick={() => navigate(`/tasks/${wedding._id}`)} >TASKS</Button>
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
