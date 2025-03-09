import { CAREER_TIMELINE } from "../config/timeline";
import { Timeline } from "../components/Timeline";
import { AnimateInBlock } from "../components/AnimateInBlock";
import Head from "next/head";
import { SectionHeader } from "@/components/SectionHeader";

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>Touko Peltomaa - Resume</title>
        <meta
          name="description"
          content="Full resume and career timeline of Touko Peltomaa"
        />
      </Head>
      <AnimateInBlock order={1}>
        <div className="container mx-auto max-w-7xl px-4 py-20">
          <SectionHeader
            title="Resume"
            description="Here's a summary of my experience, showcasing key roles, projects,
            and the technologies I've mastered."
          />
          <Timeline items={CAREER_TIMELINE} showDescriptionList />
        </div>
      </AnimateInBlock>
    </>
  );
};

export default ResumePage;
