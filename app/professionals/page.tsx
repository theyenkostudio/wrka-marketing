import React from 'react'
import ProHero from '../components/professionals/pro-hero'
import { ProBento } from './earnings'
import { ProProcess } from './proceess'
import ProFAQ from './pro-faq'
import ProAppShowcase from './pro-app-showcase'
import TestimonialGrid from './testimonials'

const Professionals = () => {
  return (
    <div>
      <ProHero />
      <ProAppShowcase />
      <ProBento />
      <ProProcess />
      <TestimonialGrid />
      <ProFAQ/>
    </div>
  )
}

export default Professionals
