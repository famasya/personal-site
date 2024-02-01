import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import avatar from "~/assets/avatar.webp";
import email from "~/assets/email.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Abid Famasya" },
    { name: "description", content: "Abid Famasya personal site" },
  ];
};

export default function IndexPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center my-8">
        <div className="flex-none w-28">
          <img
            src={avatar}
            alt="Avatar"
            className="w-20 rounded-xl"
          />
        </div>
        <div className="flex-initial">
          <h1 className="text-3xl font-bold">
            On a personal quest to <span className="underline leading-8 underline-offset-8 decoration-4 decoration-blue-500">
              improve the lives of living creatures
            </span>
            .
          </h1>
        </div>
      </div>
      <main className="mb-6">
        <p className="text-lg mb-4">
          Hi there, I am Abid. Currently, I&apos;m leading the tech team at Trustmedis to empower healthcare providers to serve millions of patients better.
        </p>
        <p className="text-lg mb-4">
          Reach me out on <Link to="https://twitter.com/famasya" rel="noreferrer" target="_blank">Twitter</Link>, <Link to="https://www.linkedin.com/in/abid-famasya" rel="noreferrer" target="_blank">Linkedin</Link>, or just drop me an email at <img src={email} alt="contact@abidf.dev" className="inline" />.
        </p>
        <p>...</p>
        <p>Well, that's the short version. <Link to="about">Wants to know more?</Link></p>
      </main>
      <div className="flex flex-row items-center gap-2 footer">
        <Link to="tech">Tech & Projects</Link>
      </div>
    </div>
  );
}
