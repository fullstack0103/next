import { Button, Input } from '../shared';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useSession } from '../../contexts/SessionContext';

import {
  Container,
  FormContainer,
  FormController,
  ValidationMsg,
  ButtonWrapper
} from './styles';

export const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [{ auth }, { login } ] = useSession()

  const onSubmit = (data) => {
    console.log(data);
    login({userid: 1, passwordHash: '234wefswveee'})
    router.push('/blog')
  };

  return (
    <Container>
      <h1>Login</h1>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </Button>
          <Button
            color='lightPrimary'
            type='button'
            onClick={() => router.push('/signup')}
          >
            Register
          </Button>
        </ButtonWrapper>
      </FormContainer>
    </Container>
  )
}