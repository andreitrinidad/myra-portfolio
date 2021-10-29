import Image from 'next/image';
import { Reveal } from 'react-gsap';
import BgStripe from '../components/bgStripe';
import { FadeInLeft, FadeInRight } from '../global/animations';
import myraPic from './../../public/myra.png';

export const About = () => {
  return (
    <Reveal repeat trigger={<section />}>
    <section className="section about">
    <BgStripe />
      <div className="about__container">
        <FadeInLeft delay="0">
        <div className="about-a">
          <h2>Myra Isidro</h2>
          <h4>myraisidro4@gmail.com</h4>
          <h4>+63 927 2577 989</h4>
          <h4>linkedin.com/in/myraisidro/</h4>
        </div>
        </FadeInLeft>
        <FadeInRight delay="0.1">
        <div className="about-b">
          <Image src={myraPic}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom left"
            alt="Myra"
          />
        </div>
        </FadeInRight>
        <FadeInLeft delay="0.2">

        <div className="about-c">
          <ul>
            <li>behance.net/myraisidro_designs</li>
            <li>Instagram.com/typo.designs_</li>
          </ul>
        </div>
        </FadeInLeft>

        <FadeInRight delay="0.3">
        <div className="about-d">
          <p>
            I'm a Freelance Graphic & UI/UX Designer for more than 2 years now. Ever since I started designing I still keep on looking forward to a lot more challenges & experiences I can get on this field, that can contribute to my personal growth and to have share it to anyone whom I can future work with.
          </p>
        </div>
        </FadeInRight>
      </div>
    </section>
      </Reveal>
  )
}
