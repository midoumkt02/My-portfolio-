import React from 'react'
import ProgressSkill from '@/components/custom/progress-skill'
import TwoColSection from '@/components/layout/two-col-section'
import AvatarProfile from '@/components/custom/avatar-profile'
import SectionTitle from '@/components/custom/section-title'
import SectionDescription from '@/components/custom/section-description'

const AboutSection = () => {
  return (
    <TwoColSection id="about">
      <div className="flex justify-center md:justify-start items-center">
        <AvatarProfile
          src="/images/user/avatar-placeholder.png"
          alt="Mehdi Meklat placeholder avatar"
        />
      </div>
      <div>
        <SectionTitle name="About Me" />
        <SectionDescription
          content={`Studying network and systems administration gave me a methodical way of
          approaching everything I build. That same structure carries into my development
          projects, the ad campaigns I run for e-commerce clients, and the way I manage
          social media communities.`}
        />

        <div className="flex flex-col space-y-3">
          <ProgressSkill name="Java" value={80} />
          <ProgressSkill name="Python" value={80} />
          <ProgressSkill name="C" value={70} />
          <ProgressSkill name="React" value={75} />
          <ProgressSkill name="Flutter" value={75} />
          <ProgressSkill name="Cisco / Networking" value={80} />
        </div>
      </div>
    </TwoColSection>
  )
}

export default AboutSection
