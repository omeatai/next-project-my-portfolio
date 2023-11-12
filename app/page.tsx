import Image from "next/image";
import Me from "@/public/images/Anyi2.jpeg";

export default function Home() {
  return (
    <section className="mx-4 sm:mx-8">
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        <div className="space-y-2 pt-5 pb-8 md:space-x-5">
          {/* <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
            Home
          </h1> */}
        </div>

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              alt="Picture of Ifeanyi Omeata"
              src={Me}
              className="h-48 w-48 sm:h-52 sm:w-52 md:h-64 md:w-64 rounded-full object-cover object-top"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              Ifeanyi Omeata
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-center">
              Software Engineer
            </p>

            <div className="flex space-x-5 pt-6">
              <a href="https://github.com/omeatai" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/omeatai/" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                </svg>
              </a>
              <a href="" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
                </svg>
              </a>
              <a href="https://twitter.com/iomeata" target="_blank">
                <svg
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  className="w-8 h-8 text-teal-500 hover:text-teal-600"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 01-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 01-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 00229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
            <p>
              Hi! I am Ifeanyi, a skilled Software Engineer and Full-Stack
              Developer based here in the beautiful province of Alberta, Canada.
              With a track record of over 6 years in the field, I excel in
              creating resilient, scalable, and user-centric web, mobile and
              data-driven applications that tackle real-world challenges
              head-on.
            </p>

            <p>
              My development stack is teeming with cutting-edge technologies and
              frameworks. I'm not just proficient but deeply passionate about
              JavaScript, TypeScript, React Native, React, Vue, Node, Next.js,
              python and Django. I take pride in my ability to craft visually
              stunning UI/UX designs and templates with Figma and Tailwind CSS.
            </p>

            <p>
              On the backend, I harness the power of Node.js, Next.js, Python,
              and Django as my trusted companions for constructing
              high-performance applications. My expertise extends to managing
              databases, including MySQL, MongoDB, and PostgreSQL. When it comes
              to deployment and infrastructure, I excel in orchestrating
              seamless CI/CD pipelines with tools like Github Actions, Travis
              CI, and Jenkins . Additionally, I have a great background in cloud
              platforms like Azure and AWS, with a keen focus on Security.
            </p>

            <p>
              My academic journey led me to the University of Greenwich in
              London, UK, where I achieved a masters degree in Computer Network
              Security. This academic foundation equips me with a profound
              understanding of security challenges in the digital landscape,
              making me a valuable asset within any Team in ensuring the
              integrity of projects. I also have knowledge and experience of
              Scrum Agile Methodologies and have worked within sprint cycles to
              produce deliverables in time.
            </p>

            <p>
              Beyond coding, I am a passionate football enthusiast and a devoted
              reader and researcher. Viewing the world through the lens of
              sports and research sharpens my creativity and problem-solving
              skills, enriching my approach to development.
            </p>

            <p>
              If you are searching for a dedicated developer who can transform
              your vision into reality and build solutions that not only
              function flawlessly but also captivate clients, you have found the
              perfect match.
            </p>
            <p className="flex items-center">
              <span className="mr-2">
                Lets join forces and breathe life into your projects!
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
