import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Abid Famasya — About" },
    { name: "description", content: "About Abid Famasya" },
  ];
};

const projects = [{
  title: 'KawalCovid19',
  summary: 'Public-initiated Covid-19 tracker and information for Indonesia',
  link: 'https://kawalcovid19.id',
  code_url: 'https://github.com/kawalcovid19'
}, {
  title: 'WargaBantuWarga',
  summary: 'Information sharing platform during Covid19',
  link: 'https://www.wargabantuwarga.com',
  code_url: 'https://github.com/kawalcovid19/wargabantuwarga.com'
}, {
  title: 'Jatimbus Tracker',
  summary: 'East java bus tracker',
  link: 'https://jatimbus.abidf.com',
  code_url: 'https://github.com/famasya/jatim-bus-tracker'
}, {
  title: 'Github trending API',
  summary: 'Github trending repositories as API',
  link: 'https://github-trending.abidf.com',
  code_url: 'https://github.com/famasya/github-trending-api'
}, {
  title: 'AyoBaca',
  summary: 'Better reader for letsreadasia.org',
  link: 'https://ayobaca.pages.dev',
  code_url: 'https://github.com/famasya/ayobaca'
}]


export default function Projects() {
  return <>
    <h1 className="text-3xl font-bold mb-3">Tech</h1>
    <p>I have extensive experience with Typescript, Javascript, PHP, and Python, which have been the primary languages used throughout my professional career. Professionally, I have primarily worked with PostgreSQL databases, and co-led the development of data automation and ETL on top of it for internal use.</p>
    <p>My graduate studies focused heavily on Python. I wrangled Jupyter Notebook on a daily basis to conduct academic research on Transformer architectures built on top of frameworks like FlairNLP (a state-of-the-art NLP library for text embeddings) and SimpleTransformers (a library for training and evaluating Transformer models), including scratch implementation in Pytorch.</p>

    <h3 className="font-bold text-lg mt-8">Projects</h3>
    <p>Here are list of projects I've involved in</p>

    <div className="grid auto-rows-fr grid-cols-2 lg:grid-cols-3 gap-2">
      {projects.map(project => <div className="no-underline text-black border hover:bg-gray-200 hover:border hover:border-gray-300 bg-gray-100 p-3 rounded-md" key={project.link}>
        <div className="flex flex-col justify-between">
          <h3 className="text-base mb-2 showcase break-all">
            <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
          </h3>
          <p className="text-xs text-left leading-4">{project.summary}. {project.code_url && <>[<a href={project.code_url} target="_blank" rel="noreferrer">code</a>]</>}</p>
        </div>
      </div>)}
    </div>

    <div className="mt-8"><Link to="/" className="bg-blue-500 hover:no-underline text-white py-2 px-4 rounded mt-4">Back home</Link></div>
  </>
}
