import { Link } from '@tanstack/react-router';
import { allPosts } from 'content-collections';

export const WritingSection = () => {
  return (
    <section className="section relative z-10" id="writing">
      <div className="flex items-center gap-2">
        <h2 className="font-extralight text-xl italic"> Writing </h2>
        <div className="w-3 bg-accent h-0.5" />
      </div>
      <ul className="flex flex-col gap-2 mt-4">
        {allPosts.map((post) => (
          <Link
            to="/writing/$slug"
            params={{
              slug: post._meta.path,
            }}
            key={post._meta.path}
          >
            <li className="rounded-xs hover:bg-gray-300/30 transition-colors px-4 py-4 -mx-4">
              <div>
                <h2 className="text-lg font-extralight">{post.title}</h2>
              </div>
              <p className="text-white-muted dark:text-black-muted">{post.summary}</p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
