import { asHTML } from "@prismicio/helpers";
import { LoaderFunctionArgs, redirect } from "@remix-run/cloudflare";
import { Link, MetaFunction, json, useLoaderData } from "@remix-run/react";
import { prismicClient } from "./_index";

export const loader = async (args: LoaderFunctionArgs) => {
  try {
    const { data, first_publication_date, tags } = await prismicClient.getByUID('articles', args.params.id ?? '')

    if (data.length === 0) return redirect('/')

    console.log(JSON.stringify(data.content), 123)

    const pubDate = new Date(first_publication_date);
    return json({
      article: asHTML(data.content),
      title: data.title[0].text,
      published_at: `${pubDate.toDateString().split(' ').slice(0, 3).join(' ')} ${pubDate.getFullYear()}`,
      tags: tags,
    })
  } catch (e) {
    return redirect('/')
  }
}

export const meta: MetaFunction<typeof loader> = ({
  data,
}) => {
  return [{ title: data?.title }];
};

export default function Article() {
  const { article, title, published_at, tags } = useLoaderData<typeof loader>();

  return <>
    <Link to={"/"} className="mb-6 block"><strong>Back to home</strong></Link>
    <h1 className="text-3xl font-bold mb-3">{title}</h1>
    <div className="text-sm text-gray-500 mb-3">Published at {published_at} under {tags.map((tag: string) => <span className="bg-gray-200 px-2 rounded">{tag}</span>)}</div>
    <div dangerouslySetInnerHTML={{ __html: article ?? '' }} />
  </>
}
