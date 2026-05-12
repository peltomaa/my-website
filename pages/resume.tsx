import { CAREER_TIMELINE } from "../config/timeline";
import { Timeline } from "../components/Timeline";
import { AnimateInBlock } from "../components/AnimateInBlock";
import Head from "next/head";
import { SectionHeader } from "@/components/SectionHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const ResumePage = () => {
  return (
    <div className="space-y-10">
      <Head>
        <title>Touko Peltomaa - Resume</title>
        <meta
          name="description"
          content="Full resume and career timeline of Touko Peltomaa"
        />
      </Head>

      <AnimateInBlock order={1}>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Touko Peltomaa</h1>
          <p className="text-gray-400">Lead Software Engineer</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <MdLocationOn /> Helsinki, Finland
            </span>
            <a
              href="https://linkedin.com/in/toukopeltomaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <FaLinkedin /> linkedin.com/in/toukopeltomaa
            </a>
            <a
              href="https://github.com/peltomaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <FaGithub /> github.com/peltomaa
            </a>
          </div>
        </div>
      </AnimateInBlock>

      <AnimateInBlock order={2}>
        <SectionHeader
          title="Resume"
          description="Here's a summary of my experience, showcasing key roles, projects,
            and the technologies I've mastered."
        />
      </AnimateInBlock>
      <AnimateInBlock order={3}>
        <Timeline items={CAREER_TIMELINE} showDescriptionList />
      </AnimateInBlock>
    </div>
  );
};

export default ResumePage;
