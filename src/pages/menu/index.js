import React from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
=======
import { useSelector, useDispatch } from 'react-redux';
>>>>>>> bf8cca8 (Initial commit to second branch)

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

<<<<<<< HEAD
const Menu = ({ menu }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
=======
const Menu = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const menu = useSelector((state) => state.menu.menu);
  const vineCard = useSelector((state) => state.vineCard.vineCard);
>>>>>>> bf8cca8 (Initial commit to second branch)

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
<<<<<<< HEAD
  const accordion = (item, id) => (
    <MUIAccordion
      key={item.index_number}
      expanded={expanded.toString().includes(`${item.index_number}${id}`)}
      onChange={handleChange(`${item.index_number}${id}`)}
=======
  const accordion = (item) => (
    <MUIAccordion
      key={item.id}
      expanded={expanded.toString().includes(item.id)}
      onChange={handleChange(item.id)}
>>>>>>> bf8cca8 (Initial commit to second branch)
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
<<<<<<< HEAD
            variant={
              item.food_subsection ? (isSmallScreen ? 'h5' : 'h3') : isSmallScreen ? 'h6' : 'h4'
            }
=======
            variant={item.level === 1 ? (isSmallScreen ? 'h5' : 'h3') : isSmallScreen ? 'h6' : 'h4'}
>>>>>>> bf8cca8 (Initial commit to second branch)
            alignSelf="center"
            lineHeight={0.9}
            textTransform="uppercase"
            fontWeight="400"
            sx={{ px: { xs: 3, sm: 0 } }}
          >
            {item.title}
          </Typography>
<<<<<<< HEAD
          <div
            className={`toggle-icon ${expanded === `${item.index_number}${id}` ? 'open' : 'closed'}`}
          ></div>
=======
          <div className={`toggle-icon ${expanded === item.id ? 'open' : 'closed'}`}></div>
>>>>>>> bf8cca8 (Initial commit to second branch)
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          px: 0,
          py: { xs: 0, sm: 1.5 },
        }}
      >
<<<<<<< HEAD
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

=======
        {item.children.map((child) =>
          child.children ? (
            accordion(child)
          ) : (
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
                {child.mass}
                {child.mass !== '' && '/'}
                {child.price}
              </Typography>
            </Box>
          ),
        )}
      </AccordionDetails>
    </MUIAccordion>
  );
>>>>>>> bf8cca8 (Initial commit to second branch)
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
<<<<<<< HEAD
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
=======
        <Typography
          fontSize={{ xs: '1.5em', sm: '3em' }}
          textTransform="uppercase"
          fontWeight="500"
          component={Tab}
          value={0}
          label="Кухня"
          sx={{ px: 0 }}
        />
        <Typography
          fontSize={{ xs: '1.5em', sm: '3em' }}
          textTransform="uppercase"
          whiteSpace="nowrap"
          fontWeight="500"
          component={Tab}
          maxWidth="unset"
          sx={{ overflow: 'visible', px: { xs: 2, sm: 0 } }}
          value={1}
          label="Барная карта"
        />
>>>>>>> bf8cca8 (Initial commit to second branch)
      </Tabs>

      <Box
        pt={{ xs: 1, sm: 5 }}
        pb={{ xs: 0, sm: 2 }}
        sx={{ borderBottom: '1px solid', borderColor: 'text.primary' }}
      >
<<<<<<< HEAD
        {menu.map(
          (menuItem) =>
            menuItem.index_number === value &&
            menuItem.food_sections?.map((section) => accordion(section, menuItem.index_number)),
        )}
=======
        {value === 0 && menu.map((menuItem) => accordion(menuItem))}
        {value === 1 && vineCard.map((item) => accordion(item))}
>>>>>>> bf8cca8 (Initial commit to second branch)
      </Box>
    </Box>
  );
};

export default Menu;
