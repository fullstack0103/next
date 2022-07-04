import { Layout } from '../../src/components/Layout';
import { SignIn as SignInController } from '../../src/components/SignIn';

export default function SignIn() {
  return (
    <>
      <Layout>
        <SignInController />
      </Layout>
    </>
  )
}