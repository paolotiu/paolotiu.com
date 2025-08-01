import Taikee from '~/assets/projects/taikee.png';
import Vika from '~/assets/projects/vika.png';
const PROJECTS = [
  {
    title: 'Trust IQ',
    role: 'Developer',
    year: 2024,
    description:
      'Product catalog and landing page for Trust IQ, a company that provides AI solutions for businesses.',
    urls: [
      {
        label: 'Website',
        url: 'https://trustiq.ai/',
      },
    ],
  },
  {
    title: 'Vika Sports',
    description:
      "A website for Vika Sports, a women's athletic brand. Contracted to build a landing page. Built with Astro.",
    role: 'Developer',
    year: 2024,
  },
  {
    title: 'Bball HQ',
    description:
      'An advanced NBA Fantasy Basketball platform that provides tools for users to analyze and manage their fantasy teams.',
    role: 'Designer & Developer',
    year: 2024,
  },
  {
    title: 'The Canvas Jewelry',
    description:
      'An e-commerce website for a jewelry company. Included a CMS for managing products, and deployments.',
    role: 'Designer & Developer',
    year: 2022,
  },
] as Array<{
  title: string;
  description: string;
  image: string;
  role: string;
  year?: number;
  urls?: [
    {
      label: string;
      url: string;
    },
  ];
}>;

const ProjectCard = ({ image, title, description, role, year }: (typeof PROJECTS)[number]) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="flex gap-2 items-center">
          <h4 className="font-extralight text-xl">{title}</h4>
          <div className="inline-block h-px w-4 dark:bg-black-muted bg-white-muted" />
          <span className="text-white-muted dark:text-black-muted font-light">{year}</span>
          {/* <span className="text-gray-500 dark:text-gray-400 text-sm">{year}</span> */}
        </div>
        <span className="text-white-muted dark:text-black-muted">{role}</span>
      </div>
      <p className="">{description}</p>
      {/* <div className="border rounded-xs w-fit overflow-hidden relative border-gray-500">
        <img src={image} alt="Project Thumbnail" className="h-48 object-cover aspect-[1.85]" />
      </div> */}
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="section relative z-10" id="projects">
      <div className="flex items-center gap-2">
        <h2 className="font-extralight text-xl italic"> Projects </h2>
        <div className="w-3 bg-accent h-0.5" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
