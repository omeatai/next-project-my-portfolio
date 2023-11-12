import Image from "next/image";
import { client } from "../lib/sanity";
import GithubSVG from "../assets/github.svg";
import YoutubeSVG from "../assets/youtube.svg";
import DemoSVG from "../assets/demo2.svg";

interface Data {
  title: string;
  overview: string;
  link: string;
  github: string;
  demo: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    title,
    overview,
    link,
    github,
    demo,
    _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;

export default async function Projects() {
  const data: Data[] = await getProjects();

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Projects
        </h1>
      </div>

      <div className="grid gap-y-8 sm:gap-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8 mb-12">
        {data.map((project) => (
          <article
            key={project._id}
            className="overflow-hidden shadow-lg bg-white dark:bg-black dark:shadow-gray-700 shadow-gray-700 border border-2 rounded-lg border-black"
          >
            <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 h-56 w-full border border-2 border-black dark:border-black relative">
              <a href={project.link} target="_blank">
                <Image
                  fill
                  src={project.imageUrl}
                  alt="Image of the project"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>

            <div className="p-4 sm:p-6">
              <a href={project.link} target="_blank">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </a>

              <p className=" line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {project.overview}
              </p>

              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-500"
                >
                  <span className="font-bold">Watch</span>
                  <Image
                    src={YoutubeSVG}
                    width={32}
                    height={32}
                    alt="Github logo"
                  />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-600"
                >
                  <span className="font-bold">Github</span>
                  <Image
                    src={GithubSVG}
                    width={32}
                    height={32}
                    alt="Github logo"
                  />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-500"
                >
                  <span className="font-bold">Demo</span>
                  <Image
                    src={DemoSVG}
                    width={32}
                    height={32}
                    alt="Github logo"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
