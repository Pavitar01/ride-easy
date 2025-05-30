import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Typography, Box, Popper, Paper, Autocomplete, TextField, ClickAwayListener } from '@mui/material';
import { states } from '@/utils/states';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import "./styles.scss"

const StyledPopper = styled(Popper)(({ theme }) => ({
  zIndex: 1300,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#f5f5f5',
  borderRadius: 8,
  boxShadow: theme.shadows[4],
  marginTop: 8,
  padding: 4,
}));

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: '6px 12px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputBase-input': {
    padding: '10px 0',
  },
});

const StyledOptionBox = styled(Box)(({ theme }) => ({
  padding: '10px 12px',
  borderRadius: 6,

  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
}));

export default function StateAutocomplete() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState<string | null>(null);
  const [currentStatusCode, setCurrentRegionCode] = React.useState<string | null>(null);


  React.useEffect(() => {
    const fetchCurrentLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        const code = response.data.region_code;
        setCurrentRegionCode(code);

        const matchingState = states.find((state) => state.state_code === code);
        if (matchingState) {
          setValue(matchingState.state_code);
        }
      } catch (err) {
        console.error('Error fetching current location:', err);
      }
    };

    fetchCurrentLocation();
  }, []);


  const handleIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClickAway = (event: MouseEvent | TouchEvent) => {
    const target = event.target as HTMLElement;
    if (
      anchorEl &&
      !anchorEl.contains(target) &&
      !document.getElementById('autocomplete-input')?.contains(target)
    ) {
      setOpen(false);
    }
  };

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <Button onClick={handleIconClick} disableRipple className='state-selector-button'>
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          {value || currentStatusCode || 'Select a state'}
        </Typography>
        <LocationOnIcon color='inherit' />
      </Button>

      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <StyledPopper open={open} anchorEl={anchorEl} placement="bottom-start">
            <Autocomplete
              open
              disablePortal
              value={value}
              onChange={(_, newValue) => {
                setValue(newValue);
                setOpen(false);
              }}
              options={(states || []).map((state) => state.state_code)}
              sx={{ width: 260 }}
              PaperComponent={({ children }) => <StyledPaper>{children}</StyledPaper>}
              renderInput={(params) => (
                <StyledTextField
                  {...params}
                  id="autocomplete-input"
                  label=""
                  placeholder="Select a state"
                  autoFocus
                  variant="outlined"
                />
              )}
              renderOption={(props, option) => {
                const { key, ...rest } = props;
                return <li key={key} {...rest}>
                  <StyledOptionBox>{option}</StyledOptionBox>
                </li>
              }}
            />
          </StyledPopper>
        </div>
      </ClickAwayListener>
    </Box>
  );
}
