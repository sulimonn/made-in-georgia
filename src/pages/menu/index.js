import React from 'react';
import { useDispatch } from 'react-redux';

import './style.css';

import {
  Typography,
  Box,
  useMediaQuery,
  Tabs,
  Tab,
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { activeItem } from 'store/reducers/nav';

const Menu = ({ menu }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();
  const formRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch(activeItem({ openItem: 'menu' }));
        }
      },
      {
        threshold: 0.5,
      },
    );

    const currentFormRef = formRef.current;

    if (currentFormRef) {
      observer.observe(currentFormRef);
    }

    return () => {
      if (currentFormRef) {
        observer.unobserve(currentFormRef);
      }
    };
  }, [formRef, dispatch]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accordion = (item, id) => (
    <MUIAccordion
      key={item.index_number}
      expanded={expanded.toString().includes(`${item.index_number}${id}`)}
      onChange={handleChange(`${item.index_number}${id}`)}
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
            variant={
              item.food_subsection ? (isSmallScreen ? 'h5' : 'h3') : isSmallScreen ? 'h6' : 'h4'
            }
            alignSelf="center"
            lineHeight={0.9}
            textTransform="uppercase"
            fontWeight="400"
            sx={{ px: { xs: 3, sm: 0 } }}
          >
            {item.title}
          </Typography>
          <div
            className={`toggle-icon ${expanded === `${item.index_number}${id}` ? 'open' : 'closed'}`}
          ></div>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: 0,
          py: { xs: 0, sm: 1.5 },
        }}
      >
        {item?.food.map((child) => (
          <Box
            key={child.index_number}
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
            <Typography
              variant={isSmallScreen ? 'h6' : 'h4'}
              fontWeight="400"
              textTransform="uppercase"
            >
              {child.title}
            </Typography>
            <Typography
              variant={isSmallScreen ? 'subtitle2' : 'h5'}
              fontWeight="400"
              sx={{ '&:first-letter': { textTransform: 'uppercase' } }}
            >
              {child.info}
            </Typography>
          </Box>
        ))}
        {item.food_subsection?.map((section) => accordion(section, `${item.index_number}${id}`))}
      </AccordionDetails>
    </MUIAccordion>
  );

  return (
    <Box
      width={{ xs: '100%', sm: '80%', md: '60%' }}
      pt={2}
      pb={6}
      mx="auto"
      id="menu"
      ref={formRef}
    >
      <Tabs
        value={value}
        onChange={handleTabChange}
        sx={{
          ml: { xs: 1, sm: 0 },
          overflow: 'visible',
          '& .MuiTabs-flexContainer': {
            display: 'flex',
            justifyContent: 'space-between',
          },
          '&MuiTabs-scroller': {
            overflow: 'visible !important',
          },
        }}
        textColor="inherit"
        indicatorColor="none"
      >
        {menu?.map((menuItem) => (
          <Typography
            fontSize={{ xs: '1.5em', sm: '3em' }}
            textTransform="uppercase"
            fontWeight="500"
            component={Tab}
            value={menuItem.index_number}
            label={menuItem.title}
            sx={{ px: 0 }}
          />
        ))}
      </Tabs>

      <Box
        pt={{ xs: 1, sm: 5 }}
        pb={{ xs: 0, sm: 2 }}
        sx={{ borderBottom: '1px solid', borderColor: 'text.primary' }}
      >
        {menu.map(
          (menuItem) =>
            menuItem.index_number === value &&
            menuItem.food_sections?.map((section) => accordion(section, menuItem.index_number)),
        )}
      </Box>
    </Box>
  );
};

export default Menu;
