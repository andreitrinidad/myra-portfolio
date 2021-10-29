import { Reveal } from 'react-gsap';
import BgStripe from '../components/bgStripe';
import { FadeInLeft, FadeTextFromBottom, FadeToTop } from '../global/animations';


export const Homepage = () => {
  return (
    <Reveal repeat trigger={<section />}>
      <section className="section homepage">
        <BgStripe />
        <div className="homepage__container">
          <div className="grid">
            <h1 className="hello">
              <FadeTextFromBottom>
                Hello,
              </FadeTextFromBottom>
            </h1>
            <h1 className="im">
              <FadeTextFromBottom>
                I’m
              </FadeTextFromBottom>
            </h1>

            <FadeInLeft>
            <span className="gd">
                graphic designer
              <br />
                ui/ux designer
            </span>
            </FadeInLeft>
            <h1 className="myra"><FadeTextFromBottom>Myra Isidro</FadeTextFromBottom></h1>
          </div>
          <FadeToTop>
          <p>And here's my portfolio</p>
          </FadeToTop>
        </div>
      </section>
    </Reveal>

  )
}
