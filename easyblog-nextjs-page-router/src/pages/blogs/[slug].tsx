import {
  NextBlogPageForPageRouter,
  withPageStaticProps
} from '@weekend-studio/easyblog-next/page';
import { InferGetStaticPropsType } from 'next';
import Layout from '../layout';

const config = {
  apiKey: process.env.EASYBLOG_API_KEY!,
  projectId: process.env.EASYBLOG_PROJECT_ID!,
  apiUrl: process.env.EASYBLOG_API_URL!
};

// Export both getStaticProps and getStaticPaths
const { getStaticProps, getStaticPaths } = withPageStaticProps({
  config
});

export default function BlogPost(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <NextBlogPageForPageRouter {...props} config={config} />
    </Layout>
  );
}

export { getStaticProps, getStaticPaths };