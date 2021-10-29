import { Tween, SplitChars, SplitWords } from 'react-gsap';
export const FadeInLeft = (props) => (
  <Tween
    from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
    ease="expo.out(1.4)"
    {...props}
  />
);

export const FadeInRight = (props) => (
  <Tween
    from={{ opacity: 0, transform: 'translate3d(100vw, 0, 0)' }}
    ease="expo.out(1.4)"
    {...props}
  />
);

export const FadeToTop = (props) => (
  <Tween
    from={{ opacity: 0, transform: 'translate3d(0, 100vh, 0)' }}
    ease="expo.out(1.4)"
    {...props}
  />
);
export const FadeToBottom = (props) => (
  <Tween
    from={{ opacity: 0, transform: 'translate3d(0, -100vh, 0)' }}
    ease="expo.out(1.4)"
    {...props}
  />
);

export const FadeTextFromBottom = ({ children }) => (
  <Tween from={{ y: '200px', opacity: 0 }} stagger={0.1} duration={1} delay={0.3} ease="expo.out(1.7)">
    <SplitWords wrapper={<div style={{ display: 'inline-block' }} />} >
      {children}
    </SplitWords>
  </Tween>
);