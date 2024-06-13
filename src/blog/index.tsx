export const lang = "en";
export const title = "Prisme Analytics - Blog";
export const layout = "layout.tsx";
export const type = "bloglist";

export default (
  { search }: Lume.Data,
  { date }: Lume.Helpers,
) => {
  const posts = search.pages("type=blogpost draft!=true", "date=desc");

  return (
    <main className="w-full flex flex-col pb-12 overflow-x-hidden md:overflow-visible px-4">
      <h1 className="text-5xl mt-12 mb-6 mx-auto text-foreground-dark font-bold text-center">
        Prisme Labs Blog
      </h1>
      <h2 className="text-xl text-center mb-12">
        News, releases, technical articles, cool stories, and more.
      </h2>
      <div className="max-w-2xl mx-auto">
        {posts.map((post, index) => (
          <>
            <time
              className="text-foreground-dark block"
              dateTime={date(post.created_at, "DATE")}
            >
              {date(post.created_at, "HUMAN_DATE")}
            </time>
            <a
              href={post.page.outputPath}
              class="block text-xl text-blue-700 dark:text-blue-400 visited:text-indigo-800 visited:dark:text-indigo-500"
            >
              {post.metas.title ?? post.title}
            </a>
            <img
              class="block mx-auto max-w-full max-h-92 mt-4 rounded-sm"
              src={post.metas.image}
              transform-images="jpg png avif webp 1600@2"
            />
            {index != posts.length - 1 &&
              <hr class="my-12" />}
          </>
        ))}
      </div>
    </main>
  );
};
