'use client';
import { FC, MouseEvent, useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Gallery",
    href: "#gallery",
  },
  {
    label: "My Works",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { y: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { y: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);

      navAnimate([
        [navScope.current, { height:"100%"}],
        [navScope.current, { duration:0.7 }],
      ]);

    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { y: 0 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { y: 0 }],
      ]);

      navAnimate([
        [navScope.current, { height:"0%"}],
        [navScope.current, { duration:0.7 }],
      ])
    }
  }, [isOpen]);

  const handleClickMobileNavItem = (e:MouseEvent<HTMLAnchorElement>) =>{
    e.preventDefault();
    setIsOpen(false);
    
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if(!target) return;
    target.scrollIntoView({ behavior: "smooth"});
    console.log(hash);
  }

  return (
    <header>
      <div className="fixed top-0 left-0 w-full h-0 z-10 overflow-clip bg-stone-900" ref={navScope}>
        <nav className="mt-20 flex flex-col">
          {navItems.map(({label,href})=>(
              <a className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative isolate" href={href} key={label} onClick={handleClickMobileNavItem}>
                <div className="container flex !max-w-full items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">{label}</span>
                <div className="lg:group-hover/project: pr-8 transition-all duration-700">
                    <div className="size-6 overflow-hidden">
                    <div className="h-6 w-12 transform transition-transform duration-500 group-hover/nav-item:-translate-y-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="absolute w-full h-0 bottom-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 -z-10"></div>
              </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full z-10 mix-blend-difference backdrop-blur-md ">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <a href="/">
              <span className="text-xl font-bold uppercase text-white">
                Sarvan&nbsp;Kumar
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full z-50">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="size-11 border border-stone-400 rounded-full bg-stone-200 inline-flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentCblack"
                    ref={topLineScope}
                    style={{ transformOrigin: "12px 8px" }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="black"
                    ref={bottomLineScope}
                    style={{ transformOrigin: "12px 16px" }}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
