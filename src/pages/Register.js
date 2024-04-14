import React from 'react';
import { Box, Typography, InputLabel, Button, FormHelperText } from '@mui/material';
const StyledInput = ({ label, ...props }) => {
  const inputProps = { ...props };
  delete inputProps.errors;

  return (
    <Box>
      <InputLabel
        sx={{ color: 'text.primary', fontSize: '1rem', ml: { xs: 2, sm: 0 } }}
        htmlFor={label}
      >
        {label}
      </InputLabel>
      <input
        {...props}
        style={{
          width: '100%',
          padding: '10px',
          borderTop: 'none',
          borderRight: 'none',
          borderLeft: 'none',
          borderBottom: '1px solid #ccc',
          background: 'none',
          outline: 'none',
          color: Boolean(props?.errors?.phoneNumber) ? 'red' : 'inherit',
          fontSize: '2rem',
          fontFamily: 'inherit',
          paddingLeft: '9vw',
        }}
      />
      {props.errors?.phoneNumber && (
        <FormHelperText sx={{ ml: { xs: 2, sm: 0 } }} error>
          {props.errors.phoneNumber}
        </FormHelperText>
      )}
    </Box>
  );
};

const Register = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [errors, setErrors] = React.useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length === 0) {
      return;
    } else {
      const lettersOnly = value.replace(/\d/g, '');
      if (lettersOnly.length > 0 && !lettersOnly.includes('+')) {
        return;
      }
      const inputValue = value.replace(/\D/g, '');

      const numericValue = inputValue.replace(/\D/g, '');
      let formattedValue = '';
      if (numericValue.length === 1) {
        if (phoneNumber.length === 0) {
          formattedValue = '+7 (' + numericValue;
        }
      } else if (numericValue.length > 1) {
        formattedValue =
          '+7 (' +
          numericValue
            .slice(1, 11)
            .replace(/(\d{1,3})?(\d{1,3})?(\d{1,2})?(\d{1,2})?/, function (match, p1, p2, p3, p4) {
              let formattedNumber = '';
              if (p1) formattedNumber += p1 + (p1.length === 3 ? ') ' : '');
              if (p2) formattedNumber += ' ' + p2;
              if (p3) formattedNumber += '-' + p3;
              if (p4) formattedNumber += '-' + p4;
              console.log(formattedNumber.length, phoneNumber.length);
              if (
                (formattedNumber.length === 5 && phoneNumber.length === 11) ||
                (formattedNumber.length === 5 && phoneNumber.length === 9)
              ) {
                formattedNumber = formattedNumber.slice(0, 3);
              }

              return formattedNumber;
            });
      }
      setPhoneNumber(formattedValue);
    }

    setErrors({ phoneNumber: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 19) setPhoneNumber('');
    else if (phoneNumber.length === 0) setErrors({ phoneNumber: 'Поле не может быть пустым' });
    else setErrors({ phoneNumber: 'Некорректный номер' });
  };
  return (
    <Box id="register" my={5}>
      <Typography
        component="h1"
        variant="h1"
        lineHeight={{ xs: 0.9, sm: 0.8 }}
        fontSize={{ xs: '1.8rem', sm: '2.7rem' }}
        sx={{
          pr: { xs: 0, sm: 20, md: 50 },
          maxWidth: { xs: '90%', sm: '700px', md: '900px' },
          textAlign: { xs: 'center', sm: 'left' },
          mx: 'auto',
        }}
      >
        Добро пожаловать в новую программу лояльности{' '}
        <Typography
          component="span"
          whiteSpace="nowrap"
          lineHeight={{ xs: 1, sm: 1.1 }}
          fontSize={{ xs: '1.8rem', sm: '2.7rem' }}
          color="inherit"
        >
          MADE IN GEORGIA
        </Typography>
      </Typography>
      <Box
        maxWidth={{ xs: '100%', sm: '700px', md: '900px' }}
        mx="auto"
        textAlign="left"
        mt={5}
        mb={10}
      >
        <form method="post" onSubmit={handleSubmit}>
          <StyledInput
            label="Введите номер телефона"
            id="component-simple"
            placeholder="+7 (___) ___ - __ - __"
            type="tel"
            onChange={handleChange}
            value={phoneNumber}
            errors={errors}
          />
          <Button
            color="error"
            variant="contained"
            size="small"
            type="submit"
            sx={{
              my: 4,
              fontSize: { xs: '1.2rem', sm: '1.25rem' },
              textTransform: 'none',
              ml: { xs: 2, sm: 0 },
            }}
          >
            Получить пароль
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
