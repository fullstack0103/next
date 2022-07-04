import { Layout } from '../src/components/Layout';
import { Home as HomeController } from '../src/components/Home';

export default function Home() {
  return (
    <>
      <Layout>
        <HomeController />
      </Layout>
    </>
  )
}
