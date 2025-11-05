// your-project/app/blogs/[slug]/page.tsx
import { LoadingV2 } from '@weekend-studio/easyblog-components';
import { 
  getBlogPaths, 
  NextBlogPage,
  getBlogPost
} from '@weekend-studio/easyblog-next/app';
import { getSEOTags, GetSEOTagsParams } from '@weekend-studio/easyblog-next/seo';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import '@weekend-studio/easyblog-components/styles.css';

const config = {
  apiKey: process.env.EASYBLOG_API_KEY!,
  projectId: process.env.EASYBLOG_PROJECT_ID!,
  apiUrl: process.env.EASYBLOG_API_URL!
};

// Add basic SEO properties
const baseSEO = {
  applicationName: "EasyBlog",
  description: "EasyBlog is a lightweight blog CMS that allows you to create and manage your blog posts.",
  domainName: "easyblog.io",
  x_handle: "@realchuyao",
}

export const generateStaticParams = async () => {
  const paths = await getBlogPaths(config);
  return paths;
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const post = await getBlogPost(config, slug);
  
  return getSEOTags({
    ...baseSEO,
    title: post.title,
    description: post.excerpt,
    canonicalUrlRelative: `/blogs/${slug}`,
    keywords: ["blog", "article", post.title],
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  } as GetSEOTagsParams);
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  return (
    <div className="container mx-auto flex flex-col justify-center gap-4">
      <Link href="/blogs" className="text-primary mx-auto hover:opacity-70 flex items-center gap-2">
          <ArrowLeftIcon className="w-4 h-4"/>
          <span className="">Back to blogs</span>
      </Link>
      <Suspense fallback={<LoadingV2 type="article" />}>
        <NextBlogPage 
          config={config} 
          slug={slug} 
          darkMode={false} // Customize based on your need
          showAuthor={false}
          showToc={true}
        />
      </Suspense>
    </div>
  );
}

export const revalidate = 3600; // revalidate every 1 hour
