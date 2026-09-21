import AvatarProfile from '@/components/custom/avatar-profile'
import TwoColSection from '@/components/layout/two-col-section'
import { Button } from '@/components/ui/button'
import React from 'react'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import WhatsappIcon from '@/components/icons/whatsapp-icon'
import { MailIcon } from 'lucide-react'
import Link from 'next/link'
import { RevealText } from '@/components/motion/reveal-text'
import { SlideUp } from '@/components/motion/slide-up'
import { ZoomIn } from '@/components/motion/zoom-in'

// type Props = {}

const IntroductionSection = () => {
  return (
    <TwoColSection id="home">
      <div className="order-2 md:order-1">
        <p className="text-lg font-semibold">Hi I am</p>
        <h1 className="text-3xl font-bold  text-orange-500">
          <RevealText text="Mehdi Meklat" />
        </h1>
        <SlideUp>
          <h2 className="hidden md:block md:text-7xl font-extrabold mb-10">
            Network &amp;
            <br />
            <span className="ml-10 md:ml-20">Software Dev</span>
          </h2>
          {/* mobile */}
          <p className="my-2 md:my-5">
            Networking &amp; systems administration student, building web, mobile and software
            projects on the side. I also run media buying campaigns and manage social media
            accounts for Algerian e-commerce brands.
          </p>
          <Link href="#contact">
            <Button className="bg-orange-500 hover:bg-orange-600">Hire Me</Button>
          </Link>
        </SlideUp>
      </div>
      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <ZoomIn>
          <div className="flex flex-col items-center space-y-5">
            <AvatarProfile
              src={'/images/user/avatar-placeholder.png'}
              alt={'Mehdi Meklat placeholder avatar'}
            />
            <div className="flex space-x-5">
              <Link href={'https://wa.me/213562164623'} target="_blank" rel="noopener">
                <WhatsappIcon className="social-icon" />
              </Link>
              <Link href={'https://github.com/midoumkt02'} target="_blank" rel="noopener">
                <GithubIcon className="social-icon" />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/mehdi-meklat-23478b18a/'}
                target="_blank"
                rel="noopener"
              >
                <LinkedinIcon className="social-icon" />
              </Link>
              <Link href={'mailto:mehdimeklat.pro@gmail.com'}>
                <MailIcon className="social-icon" />
              </Link>
            </div>
          </div>
        </ZoomIn>
      </div>
    </TwoColSection>
  )
}

export default IntroductionSection
