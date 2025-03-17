'use client'
import { useState } from "react";
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './styles.scss';
import BaseButton from "@/shared/ui/base-button";

const DateLocationPicker = () => {
    return (
        <Box className="date-location-picker">
            <Input title="Location" type="Select" />
            <Input title="Pick Up Date" type="date" />
            <Input title="Return Date" type="date" />
            <BaseButton sx={{ height: "56px", marginTop: "32px" }}>Book Now</BaseButton>
        </Box>
    );
};

interface InputProps {
    title: string;
    type: "date" | "Select";
}

const Input = ({ title, type }: InputProps) => {
    const [age, setAge] = useState('');
    const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box className="input-wrapper">
            <Typography>{title}</Typography>
            <Box>
                {type === "Select" ? (
                    <FormControl sx={{ width: { xs: "100%", md: "180px" }, mt: "8px" }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                        >
                            <MenuItem value="" disabled>
                                Select Location
                            </MenuItem>
                            <MenuItem value={10}>Dehradun</MenuItem>
                            <MenuItem value={20}>Mussorie</MenuItem>
                        </Select>
                    </FormControl>
                ) : (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                sx={{ width: { xs: "100%", md: "180px" }, mt: "8px" }} 
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                )}
            </Box>
        </Box>
    );
};

export default DateLocationPicker;
