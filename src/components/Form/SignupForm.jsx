import { TextField, Button, FormControl, FormLabel, Typography } from "@mui/material";
import { FormInContainer2, FormHtmlContainer, TitleContainer, FormInContainer2_300px } from "../../styles/SignStyles";
import { useForm } from 'react-hook-form';
import { Card } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material"

const schema = yup.object().shape({
  name: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()\-+.#_])[A-Za-z\d@$!%*?&()\-+.#_]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});



export default function SignupForm() {

  const mobileScreen = useMediaQuery('(max-width: 750px)');
  const navigate = useNavigate();

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
    navigate('success')
  };

  return (
    <>
      {mobileScreen ? (<Card variant="outlined" sx={{
        minWidth: 350,
        minHeight: 600,
        borderRadius: '10px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <FormHtmlContainer onSubmit={handleSubmit(onSubmit)} noValidate>
          <TitleContainer>
            <h2>Create account</h2>
          </TitleContainer>
          <FormControl>
            <FormInContainer2_300px>
              <TextField
                id="Name"
                placeholder="First Name"
                type="text"
                variant="outlined"
                size="normal"
                label='First name'
                required
                {...register('name')}
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
              <TextField
                id="Lastname"
                placeholder="Last Name"
                type="text"
                variant="outlined"
                size="normal"
                label="Last Name  "
                required
                {...register('lastname')}
                error={Boolean(errors.lastname)}
                helperText={errors.lastname?.message}
              />
              <TextField
                id="Email"
                placeholder="Email"
                type="email"
                variant="outlined"
                size="normal"
                label='Email'
                required
                {...register('email')}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
              <TextField
                placeholder="Password"
                id="Password"
                type="password"
                variant="outlined"
                size="normal"
                required
                label='Password'
                {...register('password')}
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
              />
              <TextField
                placeholder="Re-enter password"
                id="ConfirmPassword"
                type="password"
                variant="outlined"
                size="normal"
                label='Re-enter password'
                required
                {...register('confirmPassword')}
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword?.message}
              />
              <Button variant="outlined" type="submit">Continue</Button>
            </FormInContainer2_300px>
          </FormControl>
          <hr style={{ margin: '25px 0 15px', border: '1px solid #e5e2e1' }}></hr>
          <Typography variant='body'>
            Already have an account? <a href='/signin' style={{ textDecoration: 'none', color: '#1976d2' }}>Sign in</a>
          </Typography>
        </FormHtmlContainer>
      </Card>
      ) : (
        <Card variant="outlined" sx={{
          minWidth: 550,
          minHeight: 600,
          borderRadius: '10px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <FormHtmlContainer onSubmit={handleSubmit(onSubmit)} noValidate>
            <TitleContainer>
              <h2>Create account</h2>
            </TitleContainer>
            <FormControl>
              <FormInContainer2>
                <TextField
                  id="Name"
                  placeholder="First Name"
                  type="text"
                  variant="outlined"
                  size="normal"
                  label='First name'
                  required
                  {...register('name')}
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
                <TextField
                  id="Lastname"
                  placeholder="Last Name"
                  type="text"
                  variant="outlined"
                  size="normal"
                  label="Last Name  "
                  required
                  {...register('lastname')}
                  error={Boolean(errors.lastname)}
                  helperText={errors.lastname?.message}
                />
                <TextField
                  id="Email"
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  size="normal"
                  label='Email'
                  required
                  {...register('email')}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
                <TextField
                  placeholder="Password"
                  id="Password"
                  type="password"
                  variant="outlined"
                  size="normal"
                  required
                  label='Password'
                  {...register('password')}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
                <TextField
                  placeholder="Re-enter password"
                  id="ConfirmPassword"
                  type="password"
                  variant="outlined"
                  size="normal"
                  label='Re-enter password'
                  required
                  {...register('confirmPassword')}
                  error={Boolean(errors.confirmPassword)}
                  helperText={errors.confirmPassword?.message}
                />
                <Button variant="outlined" type="submit">Continue</Button>
              </FormInContainer2>
            </FormControl>
            <hr style={{ margin: '25px 0 15px', border: '1px solid #e5e2e1' }}></hr>
            <Typography variant='body'>
              Already have an account? <a href='/signin' style={{ textDecoration: 'none', color: '#1976d2' }}>Sign in</a>
            </Typography>
          </FormHtmlContainer>
        </Card>
      )}
    </>
  )
};