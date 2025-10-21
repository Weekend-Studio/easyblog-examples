// your-project/app/blogs/page.tsx
import { NextBlogListPage } from '@weekend-studio/easyblog-next/app';
import { XIcon } from 'lucide-react';
import { Suspense } from 'react';
import { LoadingV2 } from '@weekend-studio/easyblog-components';
import Link from 'next/link';

const config = {
  apiKey: process.env.EASYBLOG_API_KEY!,
  projectId: process.env.EASYBLOG_PROJECT_ID!,
  apiUrl: process.env.EASYBLOG_API_URL!
};

export async function generateMetadata() {
    return {
      title: 'Your Website Blog Home',
      description: 'Your Website Blog Home Description',
      openGraph: {
        title: 'Your Website Blog Home',
        description: 'Your Website Blog Home Description',
        type: 'website',
        url: '/blogs',
      },
  }
}

const displayOptions = { // Customize based on your need
    showThumbnail: true,
    showReadingTime: false,
    showExcerpt: true,
    showTags: true,
    showDate: true,
    type: "grid" as "list" | "grid",
    showAuthor: false,
    showCategory: true,
    blogPerPage: 9,
    darkMode: false,
}

export default async function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  /**
   * You can customize the page styles here by wrapping <NextBlogListPage> in extra layers, this example uses tailwindcss to style the page
   */
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold my-12">Blog</h1>
      {!resolvedParams.tags && !resolvedParams.category && <p className="text-xl my-12">Read our latest blog posts (Powered by <span className="text-primary"><Link href="https://easyblog.io" target="_blank" className="inline-block text-blue-600 underline hover:opacity-70">EasyBlog</Link></span>)</p>}
      {resolvedParams.tags && (
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl my-12">Selected tag:</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2">
            {Array.isArray(resolvedParams.tags) 
              ? resolvedParams.tags[0] 
              : resolvedParams.tags}
            <a href={`/blogs`}>
              <XIcon className="w-4 h-4 cursor-pointer hover:opacity-70" />
            </a>
          </span>
        </div>
      )}
      {resolvedParams.category && (
        <div className="flex items-center gap-2 mb-8">
          <span className="text-xl my-12">Selected category:</span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2">
            {resolvedParams.category}
            <a href={`/blogs`}>
              <XIcon className="w-4 h-4 cursor-pointer hover:opacity-70" />
            </a>
          </span>
        </div>
      )}
      <Suspense fallback={<LoadingV2 type="article-grid" />}>
          <NextBlogListPage 
            config={config}
            searchParams={resolvedParams}
            displayOptions={displayOptions}
          />
      </Suspense>
    </div>
  );
}

export const revalidate = 3600; // revalidate every 1 hour
