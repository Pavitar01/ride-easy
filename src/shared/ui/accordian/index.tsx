import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./styles.scss"

interface IAccordianProps {
    title: string;
    description: string;
}

export const Accordian = ({ title, description }: IAccordianProps) => {
    return (
        <Accordion elevation={0} disableGutters>
            <AccordionSummary
                sx={{
                    padding: 0
                }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography component="h1" id="accordian-title">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    padding: 0
                }}>
                {description}
            </AccordionDetails>
        </Accordion>
    );
}
