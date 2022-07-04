import { Button, Input } from '../shared';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import {
  Container,
  FormContainer,
  FormController,
  ValidationMsg,
  ButtonWrapper
} from './styles';

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    router.push('/blog');
  };

  return (
    <Container>
      <h1>SignUp</h1>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormController>
          <label htmlFor='firstName'>First name</label>
          <Input
            placeholder='First name'
            id='firstName'
            autoComplete='off'
            {...register(
              'firstname',
              {
                required: {
                  value: true,
                  message: 'First name is required*'
                }
              }
            )}
          />
          {errors?.firstname && <ValidationMsg>{errors?.firstname?.message}</ValidationMsg>}
        </FormController>
        <FormController>
          <label htmlFor='lastName'>Last name</label>
          <Input
            placeholder='Last name'
            id='lastName'
            autoComplete='off'
            {...register(
              'lastname',
              {
                required: {
                  value: true,
                  message: 'Last name is required*'
                }
              }
            )}
          />
          {errors?.lastname && <ValidationMsg>{errors?.lastname?.message}</ValidationMsg>}
        </FormController>
        <FormController>
          <label htmlFor='email'>Email</label>
          <Input
            placeholder='Email'
            id='email'
            autoComplete='off'
            {...register(
              'email',
              {
                required: {
                  value: true,
                  message: 'Email address is required*'
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                }
              }
            )}
          />
          {errors?.email && <ValidationMsg>{errors?.email?.message}</ValidationMsg>}
        </FormController>
        <FormController>
          <label htmlFor='password'>Password</label>
          <Input
            type='password'
            placeholder='Password'
            id='password'
            autoComplete='off'
            {...register(
              'password',
              {
                required: {
                  value: true,
                  message: 'Password is required*'
                },
                minLength: {
                  value: 8,
                  message: 'The length must be bigger than 8'
                },
                maxLength: {
                  value: 30,
                  message: 'The length must be smaller than 30'
                }
              }
            )}
          />
          {errors?.password && <ValidationMsg>{errors?.password?.message}</ValidationMsg>}
        </FormController>
        <ButtonWrapper>
          <Button
            color='primary'
            type='submit'
          >
            Register
          </Button>
          <Button
            color='lightPrimary'
            type='button'
            onClick={() => router.push('/signin')}
          >
            Login
          </Button>
        </ButtonWrapper>
      </FormContainer>
    </Container>
  )
}