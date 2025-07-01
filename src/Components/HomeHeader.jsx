import { useEffect, useRef, useState } from 'react';
import '../Styles/HomeHeader.css';
import { BASE } from "../constants";
import { useLocation } from 'wouter';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const links = [
  { path: '/', title: 'Home' },
  { path: `${BASE}/#services`, title: 'Our Services', onHome: true },
  { path: '/app', title: 'Application' },
  { path: '/simple', title: 'Simplified' }
];

const HomeHeader = ({ navigate, isOnHome = false }) => {
  const [activeClass, setActiveClass] = useState('');
  const [menuLinksActive, setMenuLinksActive] = useState(false);
  const [location] = useLocation();
  const scroll = useRef({
    progress: 0
  });

  const handleScroll = () => {
    scroll.current.progress = window.scrollY;
    const value = scroll.current.progress > 180 ? 'active' : '';
    setActiveClass(value);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Links = () => links.map((link, idx) => {
    const isActive = link.path === location;
    if (link.onHome && !isOnHome) return null;

    return (link.onHome
      ? <li key={idx}>
        <a href={link.path}>{link.title}</a>
      </li>
      : <li
        key={idx}
        className={isActive ? "active" : ''}
        onClick={isActive ? undefined : (() => navigate(link.path))}
      >{link.title}</li>
    );

  });


  return (
    <header className={`HomeHeader ${activeClass}`}>
      <figure className="logo">
        <div onClick={isOnHome ? undefined : () => navigate('/')}>
          <img src={`${BASE}/favicon.png`} alt="Logo Todo Machine" />
        </div>
      </figure>
      <nav>
        <ul>
          <Links />
        </ul>
        <button className="menuBtn" onClick={() => setMenuLinksActive((prev) => !prev)}>
          {menuLinksActive ? <IoClose /> : <IoMenu />}
        </button>
      </nav>
      <ul className={`linksWrapper-menuOpen ${menuLinksActive && 'open'}`}><Links /></ul>
    </header>
  );
};

export default HomeHeader;