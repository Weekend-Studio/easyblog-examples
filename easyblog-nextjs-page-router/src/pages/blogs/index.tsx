import { 
  withListServerSideProps, 
  NextBlogListPageForPageRouter
} from "@weekend-studio/easyblog-next/page";
import { EasyBlogConfig } from "@weekend-studio/easyblog-next/models";
import { InferGetStaticPropsType } from "next";
import Layout from "../layout";
  
const config: EasyBlogConfig = {
  apiKey: process.env.EASYBLOG_API_KEY!,
  apiUrl: process.env.EASYBLOG_API_URL! ,
  projectId: process.env.EASYBLOG_PROJECT_ID!
};

export const getServerSideProps = withListServerSideProps({
  config,
  type: "list",
  displayOptions: {
    showThumbnail: true,
    showReadingTime: true,
    showExcerpt: true,
    showTags: true,
    showDate: true,
    showAuthor: true,
    showCategory: true,
    isNextPage: true,
  }
}).getServerSideProps;

export default function BlogsPage(props: InferGetStaticPropsType<typeof getServerSideProps>) {
  
  return (
    <Layout>
      <h1 className="text-4xl font-bold my-12">Blog</h1>
      <p className="text-xl my-12">Read our latest blog posts</p>
      <NextBlogListPageForPageRouter 
        {...props}
      />
    </Layout>
  );
}
