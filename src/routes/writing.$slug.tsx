import { Link, createFileRoute } from '@tanstack/react-router';
import { allPosts } from 'content-collections';
import Markdown from 'react-markdown';

import { PostErrorComponent } from '~/components/PostError';

const fetchPost = async (slug: string) => {
  const post = allPosts.find((post) => post._meta.path === slug);
  if (!post) {
    throw new Error('Post not found');
  }
  return post;
};

export const Route = createFileRoute('/writing/$slug')({
  loader: async ({ params: { slug } }) => fetchPost(slug),

  component: PostComponent,
});

function PostComponent() {
  const post = Route.useLoaderData();

  return (
    <section className="section relative z-10">
      <div className="space-y-2">
        <h4 className="text-xl font-bold underline">{post.title}</h4>
        {/* <article className="prose" dangerouslySetInnerHTML={{ __html: post.content }} /> */}
        <Markdown children={post.content} />
      </div>
    </section>
  );
}
