import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';
import { ContactItem } from '../cards/ContactItem';
import { MailIcon } from '../../utils/icons';

export const Contact = ({ email, github, linkedin }) => (
  <section id="contact" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <Card>
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          <ContactItem 
            href={`mailto:${email}`}
            icon={<MailIcon />}
            label="Email"
          />
          <ContactItem 
            href={github}
            icon={<Github className="w-12 h-12 text-white" />}
            label="GitHub"
          />
          <ContactItem 
            href={linkedin}
            icon={<Linkedin className="w-12 h-12 text-white" />}
            label="LinkedIn"
          />
        </div>
      </Card>
    </div>
  </section>
);