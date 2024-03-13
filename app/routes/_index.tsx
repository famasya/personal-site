import * as prismic from "@prismicio/client";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { Link, json, useLoaderData } from "@remix-run/react";
import avatar from "~/assets/avatar.webp";

export const meta: MetaFunction = () => {
  return [
    { title: "Abid Famasya" },
    { name: "description", content: "Abid Famasya personal site" },
  ];
};

export const prismicClient = prismic.createClient('abidf', {
  fetch,
})
export const loader = async (args: LoaderFunctionArgs) => {
  try {
    const { results: articles } = await prismicClient.get()
    return json({
      articles
    })
  } catch (e) {
    return json({
      articles: []
    })
  }
}

export default function IndexPage() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="flex flex-row items-center gap-2 footer" >
        <Link to="about" prefetch="render"> About</Link>
        <Link to="tech" prefetch="render"> Tech & Projects </Link>
        <Link to="https://scholar.google.co.id/citations?user=JGNxsqcAAAAJ&hl=en" rel="noreferrer" target="_blank" > Research </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center my-8" >
        <div className="flex-none w-20 md:mr-8" >
          <img
            src={avatar}
            alt="Avatar"
            className="rounded-xl"
          />
        </div>
        <div className="flex-initial text-center md:text-left" >
          <h1 className="text-3xl font-bold" >
            On a personal quest to improve the lives of living beings.
          </h1>
        </div>
      </div>
      <main className="mb-6 text-md" >
        <p className="mb-4" >
          Hi there! I am Abid. Currently, I&apos;m leading the tech team at Trustmedis to empower healthcare providers to serve millions of patients better.
        </p>
        <p className="mb-4" >
          Reach me out on <Link to="https://twitter.com/famasya" rel="noreferrer" target="_blank">Twitter</Link>, <Link to="https://www.linkedin.com/in/abid-famasya" rel="noreferrer" target="_blank">Linkedin</Link >, or just drop me an email at contact@{'{thisdomain}'}.
        </p>
      </main>
      <div className="text-center text-gray-400 text-2xl mb-3">...</div>
      <article>
        <h2 className="text-2xl font-bold mb-4">
          Last articles
          (<Link to="/articles" prefetch="render">archives</Link>)
        </h2>
        {articles && articles.map((article: any) => (
          <div className="block mb-1" key={article.uid}>
            <Link to={`article/${article.uid}`} prefetch="render">{article.data.title[0].text}</Link>
          </div>
        ))}
      </article>
      <div className="text-center text-gray-400 text-2xl mb-3">...</div>
      <div className="text-center text-gray-400 text-sm mt-6">Built on <Link to="https://remix.run" target="_blank">Remix</Link>, <Link to="https://prismic.io" target="_blank" >Prismic</Link> and <Link to="https://pages.cloudflare.com/" target="_blank">Cloudflare Pages</Link></div>
    </div >
  );
}
