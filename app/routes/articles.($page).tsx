import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Link, MetaFunction, json, useLoaderData } from "@remix-run/react";
import { prismicClient } from "./_index";

export const loader = async (args: LoaderFunctionArgs) => {
  try {
    const page = parseInt(args.params.page ?? '1')
    const { results: articles, next_page, prev_page } = await prismicClient.get({ page: page })
    return json({
      articles,
      nextPage: next_page !== null ? page + 1 : 0,
      prevPage: prev_page !== null ? page - 1 : 0,
    })
  } catch (e) {
    return json({
      articles: [],
      nextPage: 0,
      prevPage: 0
    })
  }

}
export const meta: MetaFunction = () => {
  return [
    { title: "Abid Famasya — Articles" },
  ];
}
export default function Articles() {
  const { articles, nextPage, prevPage } = useLoaderData<typeof loader>();
  const parsePublicationDate = (date: string) => {
    const pubDate = new Date(date)
    return `${pubDate.toDateString().split(' ').slice(0, 3).join(' ')} ${pubDate.getFullYear()}`
  }

  return <>
    <Link to={"/"} className="mb-6 block"><strong>Back to home</strong></Link>
    <h2 className="text-3xl font-bold mb-3">Articles</h2>

    {articles.length === 0 && <p>No articles found</p>}

    {articles.map((article: any) => <div className="block mb-1">
      <span className="text-gray-400">[{parsePublicationDate(article.first_publication_date)}] </span>
      <Link to={`/article/${article.uid}`}>{article.data.title[0].text}</Link>
    </div>)}

    <div className="mt-6">
      {nextPage !== 0 && <Link to={`/articles/${nextPage}`}>Next</Link>}
      {prevPage !== 0 && <Link to={`/articles/${prevPage}`}>Prev</Link>}
    </div>
  </>

}
