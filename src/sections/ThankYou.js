import React from 'react'
import { Reveal } from 'react-gsap';
import { FadeInLeft, FadeInRight, FadeTextFromBottom, FadeToBottom, FadeToTop } from '../global/animations';

export const ThankYou = () => {
  return (
    <Reveal repeat trigger={<section />}>
    <section className="section thankyou">
    <h1><FadeTextFromBottom>Thank you</FadeTextFromBottom></h1>
    <FadeToTop><p>FOR MORE SAMPLE WORKS, PLEASE CHECK MY BEHANCE & INSTAGRAM PROFILE AT</p></FadeToTop>
    <FadeToTop><p><a href="behance.net/myraisidro_designs" target="_blank">behance.net/myraisidro_designs</a></p></FadeToTop>
    <FadeToTop delay="0.1"><p><a href="Instagram.com/typo.designs_" target="_blank">Instagram.com/typo.designs_</a></p></FadeToTop>
    <FadeToTop delay="0.2"><span>a site by <a href="github.com/andreitrinidad">andreitrinidad</a></span></FadeToTop>
  </section>
  </Reveal>

  )
}
