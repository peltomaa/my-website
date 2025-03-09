import { CAREER_TIMELINE } from "../config/timeline";
import { Timeline } from "../components/Timeline";
import { AnimateInBlock } from "../components/AnimateInBlock";
import Head from "next/head";
import { SectionHeader } from "@/components/SectionHeader";

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
        <SectionHeader
          title="Resume"
          description="Here's a summary of my experience, showcasing key roles, projects,
            and the technologies I've mastered."
        />
      </AnimateInBlock>
      <AnimateInBlock order={2}>
        <Timeline items={CAREER_TIMELINE} showDescriptionList />
      </AnimateInBlock>
    </div>
  );
};

export default ResumePage;
