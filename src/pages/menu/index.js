import React from 'react';
import './style.css';

import {
  Typography,
  Box,
  useMediaQuery,
  Divider,
  Tabs,
  Tab,
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Menu = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const menu = useSelector((state) => state.menu.menu);
  const vineCard = useSelector((state) => state.vineCard.vineCard);

  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accordion = (item) => (
    <MUIAccordion
      key={item.id}
      expanded={expanded === item.id}
      onChange={handleChange(item.id)}
      sx={{
        '&.Mui-expanded::before': {
          opacity: 1,
        },
        '&.Mui-expanded': {
          m: 0,
          minHeight: 'unset',
        },
        '&.MuiAccordionSummary-content': {
          m: '0 !important',
        },
        py: {
          xs: 0.5,
          sm: 0,
        },
      }}
    >
      <AccordionSummary
        aria-controls="panel4bh-content"
        id="panel4bh-header"
        sx={{
          px: 0,
          pt: 1.5,
          pb: 1,
          m: 0,
          '&.MuiAccordionSummary-content': {
            margin: '0 !important',
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Typography
            variant={isSmallScreen ? 'h5' : 'h3'}
            alignSelf="center"
            lineHeight={0.9}
            fontWeight="400"
            sx={{ px: { xs: 3, sm: 0 } }}
          >
            {item.title}
          </Typography>
          <div className={`toggle-icon ${expanded === item.id ? 'open' : 'closed'}`}></div>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: 0,
          py: { xs: 0, sm: 1.5 },
        }}
      >
        {item.children.map((child) => (
          <Box
            key={child.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              position: 'relative',
              pr: { xs: 2, sm: 2 },
              pl: { xs: 3, sm: 0 },
              py: { xs: 1, sm: 0.5 },

              '&::before': {
                content: "''",
                position: 'absolute',
                right: 0,
                bottom: 0,
                left: 0,
                height: '1px',
                width: '100%',
                backgroundColor: 'grey.600',
              },
              '&:last-child::before': {
                display: 'none',
              },
            }}
          >
            <Typography variant={isSmallScreen ? 'h6' : 'h4'} fontWeight="400">
              {child.title}
            </Typography>
            <Typography variant={isSmallScreen ? 'subtitle2' : 'h5'} fontWeight="400">
              {child.mass}г/{child.price}
            </Typography>
          </Box>
        ))}
      </AccordionDetails>
    </MUIAccordion>
  );
  return (
    <Box width={{ xs: '100%', sm: '85%' }} pt={2} pb={6} mx="auto" id="menu">
      <Tabs
        value={value}
        onChange={handleTabChange}
        sx={{ ml: { xs: 1, sm: 0 } }}
        textColor="inherit"
        indicatorColor="none"
      >
        <Typography
          variant={isSmallScreen ? 'h3' : 'h1'}
          textTransform="uppercase"
          fontWeight="500"
          component={Tab}
          value={0}
          label="Меню"
        />
        <Divider
          sx={{ borderWidth: { xs: 2, sm: 4 }, my: { xs: 2.35, sm: 2.5 }, mx: { xs: 0.6, sm: 2 } }}
          orientation="vertical"
          variant="middle"
          flexItem
        />
        <Typography
          variant={isSmallScreen ? 'h3' : 'h1'}
          textTransform="uppercase"
          fontWeight="500"
          component={Tab}
          value={1}
          label="Напитки/барная карта"
        />
      </Tabs>

      <Box
        pt={{ xs: 1, sm: 5 }}
        pb={{ xs: 0, sm: 2 }}
        sx={{ borderBottom: '1px solid', borderColor: 'text.primary' }}
      >
        {value === 0 && menu.map((menuItem) => accordion(menuItem))}
        {value === 1 && vineCard.map((item) => accordion(item))}
      </Box>
    </Box>
  );
};

export default Menu;
