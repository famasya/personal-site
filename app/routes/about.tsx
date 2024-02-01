import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Abid Famasya — About" },
    { name: "description", content: "About Abid Famasya" },
  ];
};


export default function AboutPage() {
  return <>
    <h1 className="text-3xl font-bold mb-3">About me, longer version...</h1>
    <p>
      Hello! I am Abid Famasya. I am on my personal journey to making a positive impact on the lives of living organisms through technology.
    </p>
    <p>
      I have been working as a CTO at Trustmedis from 2019, previously known a software-house-turned-healthtech company that specializes in providing health information system for healthcare providers. We has been partnering with <Link to="https://setkab.go.id/inilah-prosedur-layanan-telemedisin-bagi-pasien-isolasi-mandiri-terkonfirmasi-omicron/" target="_blank" rel="noreferrer">government entities</Link> to <Link to="https://news.detik.com/adv-nhl-detikcom/d-6200556/virtu-digilab-national-research-center-fasilitas-penelitian-terbaik-ri" target="_blank" rel="noreferrer">big companies</Link> to develop digital health technology. My primary role has been to transition our project-based system into SaaS products. Today, our platform serves millions of patients nationwide.
    </p>
    <p>
      I hold a Master's degree in Informatics from ITS Surabaya, Indonesia, which has equipped me with a strong theoretical foundation and practical skills in the field. Aligned with my personal mission, I pioneered the development of the first  <Link to='https://huggingface.co/abid/indonesia-bioner' target="_blank" rel="noreferrer">biomedical Named Entity Recognition in Bahasa Indonesia</Link> capable of recognizing biomedical entities in freetext. Additionally, I have conducted research on internet of underwater things and network security in the past.
    </p>
    <p>
      When I'm not working, you can find me reading books, conquering casual games, or paving my path to becoming an aspiring farmer.
    </p>

    <div className="mt-8"><Link to="/" className="bg-blue-500 hover:no-underline text-white py-2 px-4 rounded mt-4">Back home</Link></div>
  </>
}
