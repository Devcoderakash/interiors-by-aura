import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { ShowroomExperience } from '../components/ShowroomExperience';

export const ContactPage: React.FC = () => {
  return (
    <div id="contact-page-container" className="w-full">
      <ContactSection />
      <ShowroomExperience />
    </div>
  );
};
