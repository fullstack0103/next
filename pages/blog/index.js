import { Layout } from "../../src/components/Layout";
import { Blog as BlogController } from '../../src/components/Blog';

export default function Blog() {
  return (
    <>
      <Layout>
        <BlogController />
      </Layout>
    </>
  )
}
