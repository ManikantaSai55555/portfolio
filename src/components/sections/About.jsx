import React from 'react';
import { Card } from '../common/Card';
import { SectionTitle } from '../common/SectionTitle';

export const About = ({ content }) => (
  <section id="about" className="py-20 px-6">
    <div className="max-w-6xl mx-auto" data-id="about">
      <Card>
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-white">
          {content.map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
          ))}
        </div>
      </Card>
    </div>
  </section>
);