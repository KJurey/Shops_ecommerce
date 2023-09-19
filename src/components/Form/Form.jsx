import { TextField, Button, FormControl, FormLabel, Typography } from "@mui/material";
import { FormInContainer, FormHtmlContainer, TitleContainer, FormInContainer300px } from "../../styles/SignStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { useMediaQuery } from "@mui/material"

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});



import { Card } from '@mui/material'

export default function Form() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Apply Yup schema for validation
  });

  const onSubmit = (data) => {
    console.log(data); // Data contains form field values
    // Handle form submission, e.g., send data to the server
  };

  return (
    <>
      {mobileScreen ? (
        <Card variant="outlined" sx={{
          minWidth: 350,
          minHeight: 330,
          borderRadius: '10px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <FormHtmlContainer onSubmit={handleSubmit(onSubmit)} noValidate>
            <TitleContainer>
              <h2>Sign in</h2>
            </TitleContainer>
            <FormControl>
              <FormInContainer300px>
                <TextField
                  id="Email/Username"
                  placeholder="Email or username"
                  type="email"
                  variant="outlined"
                  size="normal"
                  label='Email or username'
                  required
                  {...register('email')}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
                <TextField placeholder="Password"
                  id="Password"
                  type="password"
                  variant="outlined"
                  size="normal"
                  label='Password'
                  required
                  {...register('password')}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
                <Button variant="outlined" type="submit">Continue</Button>
                <Typography>
                  <a href='#' style={{ textDecoration: 'none', color: '#1976d2' }}>Forgot your password?</a>
                </Typography>
              </FormInContainer300px>
            </FormControl>
          </FormHtmlContainer>
        </Card>
      ) : (
        <Card variant="outlined" sx={{
          minWidth: 550,
          minHeight: 330,
          borderRadius: '10px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <FormHtmlContainer onSubmit={handleSubmit(onSubmit)} noValidate>
            <TitleContainer>
              <h2>Sign in</h2>
            </TitleContainer>
            <FormControl>
              <FormInContainer>
                <TextField
                  id="Email/Username"
                  placeholder="Email or username"
                  type="email"
                  variant="outlined"
                  size="normal"
                  label='Email or username'
                  required
                  {...register('email')}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
                <TextField placeholder="Password"
                  id="Password"
                  type="password"
                  variant="outlined"
                  size="normal"
                  label='Password'
                  required
                  {...register('password')}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
                <Button variant="outlined" type="submit">Continue</Button>
                <Typography>
                  <a href='#' style={{ textDecoration: 'none', color: '#1976d2' }}>Forgot your password?</a>
                </Typography>
              </FormInContainer>
            </FormControl>
          </FormHtmlContainer>
        </Card>
      )}
    </>
  )
};