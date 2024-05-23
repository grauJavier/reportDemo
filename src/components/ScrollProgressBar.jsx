import { useEffect, useState } from 'react';

function ScrollProgressBar() {
  const documentHeight = document.body.clientHeight;
  let [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const scrollY = window.scrollY;

      setScrollPercentage((scrollY / (documentHeight - windowHeight)) * 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <span
      className="fixed top-0 left-0 z-20 border border-t-4 border-x-0 border-[#FF004D]"
      style={{ width: `${scrollPercentage}%` }}
    />
  );
}

export default ScrollProgressBar;
