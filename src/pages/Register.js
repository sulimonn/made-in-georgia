import React from 'react';
import { Box, Typography, Button, FormHelperText, TextField } from '@mui/material';
import { CloseOutlined } from '@ant-design/icons';
// const StyledInput = ({ label, ...props }) => {
//   const inputProps = { ...props };
//   delete inputProps.errors;

//   return (
//     <Box>
//       <InputLabel
//         sx={{ color: 'text.primary', fontSize: '1rem', ml: { xs: 2, sm: 0 } }}
//         htmlFor={label}
//       >
//         {label}
//       </InputLabel>
//       <input
//         {...props}
//         style={{
//           width: '100%',
//           padding: '10px',
//           borderTop: 'none',
//           borderRight: 'none',
//           borderLeft: 'none',
//           borderBottom: '1px solid #ccc',
//           borderRadius: '0px',
//           background: 'none',
//           outline: 'none',
//           color: Boolean(props?.errors?.phoneNumber) ? 'red' : 'inherit',
//           fontSize: '2rem',
//           fontFamily: 'inherit',
//           paddingLeft: '9vw',
//         }}
//       />
//       {props.errors?.phoneNumber && (
//         <FormHelperText sx={{ ml: { xs: 2, sm: 0 } }} error>
//           {props.errors.phoneNumber}
//         </FormHelperText>
//       )}
//     </Box>
//   );
// };

const Register = ({ handleClose }) => {
  const [input, setInput] = React.useState({
    name: '',
    phone: '',
    email: '',
    feedback: '',
    date: formatDate(),
  });
  const [success, setSuccess] = React.useState(false);
  const [errors, setErrors] = React.useState('');

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === 'phone') {
      const lettersOnly = value.replace(/\d/g, '');
      if (lettersOnly.length > 0 && !lettersOnly.includes('+')) {
        return;
      }
      const inputValue = value.replace(/\D/g, '');

      const numericValue = inputValue.replace(/\D/g, '');
      let formattedValue = '';
      if (numericValue.length === 1) {
        if (input?.phone?.length === 0) {
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
              if (
                (formattedNumber.length === 5 && input.phone.length === 11) ||
                (formattedNumber.length === 5 && input.phone.length === 9)
              ) {
                formattedNumber = formattedNumber.slice(0, 3);
              }

              return formattedNumber;
            });
      }
      setInput({ ...input, [name]: formattedValue });
    } else {
      setInput({ ...input, [name]: value });
    }

    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    let isFull = true;
    for (const property in input) {
      if (input[property] === '') {
        setErrors((prevErrors) => {
          const prev = { ...prevErrors };
          prev[property] = 'Поле не может быть пустым';
          return prev;
        });
        isFull = false;
      }
    }
    e.preventDefault();
    if (!isFull) return;
    if (!/\d/.test(input.phone) || input.phone.length !== 19) {
      setErrors((prevErrors) => {
        const prev = { ...prevErrors };
        prev.phone = 'Некорректный номер';
        return prev;
      });
      return;
    }
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      setErrors((prevErrors) => {
        const prev = { ...prevErrors };
        prev.email = 'Некорректная почта';
        return prev;
      });
      return;
    }
    // eslint-disable-next-line
    const mailtoLink = createMailtoLink(input);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      window.location.href = mailtoLink;
      handleClose();
    }, 1500);
  };
  const createMailtoLink = (data) => {
    const { name, phone, email, feedback, date } = data;
    const subject = encodeURIComponent('Отзыв от ' + name);
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nДата визита: ${date}\nОтзыв: ${feedback}`,
    );
    return `mailto:madeingeorgia.upr@gmail.com?subject=${subject}&body=${body}`;
  };
  function formatDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are 0-indexed
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        p: 5,
        borderRadius: 3,
        overflow: 'hidden',
      }}
      position="relative"
    >
      <Button onClick={handleClose} sx={{ position: 'absolute', top: 10, right: 10, minWidth: 0 }}>
        <CloseOutlined />
      </Button>
      {success === true ? (
        <Box>Ваш отзыв успешно отправлен</Box>
      ) : (
        <Box sx={{ transition: 'all 0.3s ease', height: success === 'loading' ? '0' : '100%' }}>
          <Typography
            component="h1"
            variant="h1"
            lineHeight={{ xs: 0.9, sm: 0.8 }}
            fontSize={{ xs: '1.8rem', sm: '2.7rem' }}
            sx={{
              textAlign: 'center',
              textTransform: 'uppercase',
              mx: 'auto',
            }}
          >
            оставить отзыв
          </Typography>
          <Typography
            variant="h5"
            lineHeight={{ xs: 0.9, sm: 0.8 }}
            sx={{
              textAlign: 'center',
              textTransform: 'uppercase',
              mx: 'auto',
              pt: 4,
            }}
          >
            Ваше мнение очень важно для нас{' '}
          </Typography>
          <form method="post" onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Box
              sx={{
                mt: 4,
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 1.5, sm: 3 },
                flexDirection: 'column',
                width: { xs: '300px', sm: '400px', md: '500px' },
              }}
              mt={5}
            >
              <div style={{ width: '100%' }}>
                <TextField
                  label="Дата визита"
                  id="date-input"
                  placeholder="ДД.ММ.ГГГГ"
                  type="date"
                  onChange={handleChange}
                  name="date"
                  value={input?.date}
                  errors={errors}
                  fullWidth
                  error={errors?.date}
                />
                {errors?.date && (
                  <FormHelperText sx={{ ml: { xs: 2, sm: 0 } }} error>
                    {errors.date}
                  </FormHelperText>
                )}
              </div>
              <div style={{ width: '100%' }}>
                <TextField
                  label="Имя"
                  id="component-name"
                  name="name"
                  placeholder="Ваше имя"
                  type="text"
                  onChange={handleChange}
                  value={input?.name}
                  errors={errors}
                  fullWidth
                  error={errors?.name}
                />
                {errors?.name && (
                  <FormHelperText sx={{ ml: { xs: 2, sm: 0 } }} error>
                    {errors.name}
                  </FormHelperText>
                )}
              </div>
              <div style={{ width: '100%' }}>
                <TextField
                  label="Телефон"
                  id="component-simple"
                  name="phone"
                  placeholder="+7 (___) ___ - __ - __"
                  type="tel"
                  onChange={handleChange}
                  value={input?.phone}
                  errors={errors}
                  fullWidth
                  error={errors?.phone}
                />
                {errors?.phone && (
                  <FormHelperText sx={{ ml: { xs: 2, sm: 0 } }} error>
                    {errors.phone}
                  </FormHelperText>
                )}
              </div>
              <div style={{ width: '100%' }}>
                <TextField
                  label="Email"
                  id="component-email"
                  name="email"
                  placeholder="Ваш email"
                  type="text"
                  onChange={handleChange}
                  value={input?.email}
                  errors={errors}
                  fullWidth
                  error={errors?.email}
                />
                {errors?.email && (
                  <FormHelperText sx={{ ml: { xs: 2, sm: 0 } }} error>
                    {errors.email}
                  </FormHelperText>
                )}
              </div>
              <div style={{ width: '100%' }}>
                <TextField
                  label="Отзыв"
                  id="component-feedback"
                  name="feedback"
                  placeholder="Оставьте ваше впечатление"
                  type="text"
                  multiline
                  rows={2}
                  onChange={handleChange}
                  value={input?.feedback}
                  errors={errors}
                  fullWidth
                  error={Boolean(errors?.feedback)}
                />
                {errors?.feedback && (
                  <FormHelperText sx={{ ml: { xs: 2, sm: 0 } }} error>
                    {errors.feedback}
                  </FormHelperText>
                )}
              </div>
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
                Отправить
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default Register;
