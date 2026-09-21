'use client'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import AppSection from '@/components/layout/app-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

// type Props = {}

const ContactSection = () => {
  const [email, setEmail] = useState('')

  const handleContact = () => {
    const subject = encodeURIComponent('Contact from your portfolio')
    const body = encodeURIComponent(
      `Hi Mehdi,\n\nI'm reaching out from your portfolio.\nMy email: ${email}\n\nMessage:\n`
    )
    window.location.href = `mailto:mehdimeklat.pro@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <AppSection id="contact">
      <div className="w-full md:w-2/3 mx-auto mb-20 md:mb-32">
        <SectionTitle name={"Let's work together"} className="text-center" />
        <SectionDescription
          content={`Development, an ad campaign or social media management — reach out and
          I'll get back to you quickly.`}
        />
        <div className="flex space-x-3 mt-10">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="font-bold h-12" onClick={handleContact}>
            Contact me
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
          Opens your email client, addressed to mehdimeklat.pro@gmail.com.
        </p>
      </div>
    </AppSection>
  )
}

export default ContactSection
