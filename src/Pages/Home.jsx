import '../Styles/Home.css';

import { BASE } from '../constants';
import { FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import HomeHeader from '../Components/HomeHeader';
import { useEffect, useRef } from 'react';
import useAnimationFrame from '../Hooks/useAnimationFrame';
import { Link } from 'wouter';
import { useTransitionNavigation } from "../Hooks/useTransitionNavigation";
import TransitionToPage from '../Components/TransitionToPage';


const HomeContent = ({ ref, navigate }) => {
  const handlePointer = (e) => {
    /** @type { HTMLButtonElement }  */
    const element = e.target;

    if (element) {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      element.style.setProperty('--x', x + 'px');
      element.style.setProperty('--y', y + 'px');
    }
  };

  return (
    <section ref={ref} className="HomeContent">
      <div>
        <h1>Take Control of Your Time</h1>
        <h4>Plan smarter, stay focused, and get things done — all in one place.</h4>
      </div>
      <div>
        <p>Todo Machine is an all-in-one tool for task management and more that automatically organizes itself.</p>
        <button
          onPointerEnter={handlePointer}
          onPointerLeave={handlePointer}
          onClick={() => navigate('/app')}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

const HomeServices = ({ navigate }) => (
  <section id="services" className="HomeServices">
    <div className="title-wrapper">
      <h2>Why will you choose Coders AI Sdn Bhd?</h2>
      <p>
        As a SAAS expert, we have mindset and compilation of strategies to help customers
        get value out of a product or service.
      </p>
    </div>
    <div className="cards-wrapper">
      <div className="card">
        <figure className="card-logo">
          <BiTask />
        </figure>
        <div>
          <h3>Full Task Manager</h3>
          <p>
            Every web application that we design are always be viewable and responsive
            from modern portable devices.
          </p>
        </div>
        <button onClick={() => navigate('/app')}>Launch</button>
      </div>
      <div className="card">
        <figure className="card-logo">
          <FaTasks />
        </figure>
        <div>
          <h3>Simple Task Manager</h3>
          <p>
            Every web application that we design are always be viewable and responsive
            from modern portable devices.
          </p>
        </div>
        <button onClick={() => navigate('/simple')}>Launch</button>
      </div>
    </div>
  </section>
);

/**
 * This component is the homepage.
 *
 * It will render a <HomeHeader />, <HomeContent /> and a <HomeServices />.
 *
 * The <HomeContent /> will follow the mouse position and animate the background
 * image translation accordingly.
 *
 * @returns {JSX.Element} The JSX Element.
 */
const Home = () => {
  // NAVIGATION
  const [onTransition, setTransitionFinish, navigate] = useTransitionNavigation();

  const home = useRef(null);
  const homeContent = useRef(null);
  const target = useRef({ x: 0.5, y: 0.5 });
  const mouse = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    // This calculus are okay, 'cause homeContent has the viewport size.
    target.current.x = (e.clientX / window.innerWidth);
    target.current.y = (e.clientY / window.innerHeight);
  };

  useAnimationFrame((clock) => {
    mouse.current.x += (target.current.x - mouse.current.x) * clock.deltaTime * 3;
    mouse.current.y += (target.current.y - mouse.current.y) * clock.deltaTime * 3;

    const diff = 30;
    const beforeX = mouse.current.x * 100;
    const beforeY = (mouse.current.y + 0.5) * 100 + mouse.current.y * diff;
    const afterX = mouse.current.x * 100;
    const afterY = (mouse.current.y - 0.5) * 100 - mouse.current.y * diff;

    if (home.current) {
      home.current.style.setProperty('--bx', `${beforeX}%`);
      home.current.style.setProperty('--by', `${beforeY}%`);

      home.current.style.setProperty('--ax', `${afterX}%`);
      home.current.style.setProperty('--ay', `${afterY}%`);
    }

  });

  useEffect(() => {
    if (homeContent.current) {
      const homeElement = homeContent.current;
      homeElement.addEventListener('pointermove', handleMouseMove);

      return () => homeElement.removeEventListener('pointermove', handleMouseMove);
    }

  }, [homeContent]);

  return (
    <>
      <TransitionToPage veil={onTransition} setFinish={setTransitionFinish} />
      <div className="Home" ref={home}>
        <HomeHeader navigate={navigate} isOnHome={true} />
        <HomeContent ref={homeContent} navigate={navigate} />
        <HomeServices navigate={navigate} />
      </div>
    </>
  );
};

export default Home;
