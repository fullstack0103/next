import { Layout } from '../../src/components/Layout';
import { SignUp as SignUpController } from '../../src/components/SignUp';

export default function SignUp() {
  return (
    <>
      <Layout>
        <SignUpController />
      </Layout>
    </>
  )
}