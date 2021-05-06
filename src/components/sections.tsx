import React, { ComponentProps } from 'react';
import { useRouter } from 'next/router';
import { WithUserAgentProps } from 'next-useragent';

import HeroSection from './sections/hero';
import TutorialSection from './sections/tutorial';
import TabSection from './sections/tab';
import RichTextSection from './sections/rich-text';
import InvitationSection from './sections/invitation';
import CompanySection from './sections/company';
import FaqSection from './sections/faq';
import ContactSection from './sections/contact';

// Map Strapi sections to section components
const sectionComponents: { [key: string]: React.ReactNode } = {
  'sections.hero': HeroSection,
  'sections.tutorial-section': TutorialSection,
  'sections.tab': TabSection,
  'sections.rich-text': RichTextSection,
  'sections.invitation-section': InvitationSection,
  'sections.company-section': CompanySection,
  'sections.question-and-answer': FaqSection,
  'sections.contact-section': ContactSection,
};

// Display a section individually
const Section = ({
  sectionData,
  ua,
}: { sectionData: { __component: string } } & WithUserAgentProps) => {
  // Prepare the component
  const SectionComponent: any = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} ua={ua} />;
};

const PreviewModeBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(router.asPath)}`;

  return (
    <div className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{' '}
        <a className="underline" href={`/api/exit-preview?redirect=${router.asPath}`}>
          Turn off
        </a>
      </div>
    </div>
  );
};

interface SectionsProps extends WithUserAgentProps {
  sections: {
    id: string | number;
    __component: string;
  }[];
  preview: boolean;
}

// Display the list of sections
const Sections: React.FC<SectionsProps> = ({ sections, preview, ua }: SectionsProps) => {
  return (
    <div>
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section sectionData={section} key={`${section.__component}${section.id}`} ua={ua} />
      ))}
    </div>
  );
};

export default Sections;
