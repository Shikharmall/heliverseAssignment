import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isShow0, setIsShow0] = useState(false);
  const [isShow1, setIsShow1] = useState(false);

  const handleMouseOver = () => {
    setIsShow0(true);
  };

  const handleMouseOut = () => {
    setIsShow0(false);
  };

  const handleMouseOver1 = () => {
    setIsShow1(true);
  };

  const handleMouseOut1 = () => {
    setIsShow1(false);
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 250;

      const isScrolled = window.scrollY > scrollThreshold;

      setShowButton(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-white">
      <div className=" flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-20">
        <div className="flex items-center justify-start gap-x-2 sm:gap-x-0">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R5b6t5a:"
            data-state="closed"
            onClick={() => setIsHamburger(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:hidden h-6 w-6 border-2 border-primary rounded-sm"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex"
          >
            <div className="relative">
              <ul
                data-orientation="horizontal"
                className="group flex flex-1 list-none items-center justify-center space-x-1"
                dir="ltr"
              >
                <li>
                  <Link
                    to="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    <svg
                      width ="40px"
                      height="40px"
                      viewBox="0 0 1024 1024"
                      className="icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M859.2 352c40 0 72-32 72-72 0 39.76-32.24 72-72 72zM787.2 280c0 40 32 72 72 72-39.76 0-72-32.24-72-72zM424.592 500.864c16.976 25.056 44.448 42.56 76.608 45.792-31.856-3.232-59.504-20.64-76.608-45.792zM859.2 208c39.76 0 72 32.24 72 72 0-40-32-72-72-72z"
                        fill="#E8E8E8"
                      />
                      <path
                        d="M859.2 406.4c81.632 0 149.792 66.464 162.512 153.28 1.456-15.696 2.288-31.584 2.288-47.68 0-88.08-22.256-170.976-61.44-243.36 0.4 3.728 0.64 7.52 0.64 11.36 0 57.6-46.4 104-104 104s-104-46.4-104-104 46.4-104 104-104c17.984 0 34.864 4.528 49.584 12.496C814.912 73.472 672.048 0 512 0S209.088 73.472 115.216 188.496C129.936 180.528 146.816 176 164.8 176c57.6 0 104 46.4 104 104s-46.4 104-104 104-104-46.4-104-104c0-3.84 0.24-7.632 0.64-11.36C22.256 341.024 0 423.92 0 512c0 16.096 0.832 31.984 2.288 47.68 12.72-86.816 80.88-153.28 162.512-153.28 89.6 0 161.6 80 163.2 179.2H5.344C41.04 833.488 254.24 1024 512 1024s470.96-190.512 506.656-438.4H694.4c1.6-99.2 75.2-179.2 164.8-179.2z m-347.2-104c76.8 0 137.6 62.4 137.6 137.6s-62.4 137.6-137.6 137.6-137.6-62.4-137.6-137.6 60.8-137.6 137.6-137.6zM731.2 848H292.8C296 715.2 392 609.6 512 609.6S728 715.2 731.2 848z"
                        fill="#E8E8E8"
                      />
                      <path
                        d="M522.8 546.656c32.144-3.232 59.632-20.736 76.608-45.792-17.104 25.152-44.752 42.56-76.608 45.792zM859.2 208c-40 0-72 32-72 72 0-39.76 32.24-72 72-72zM452.656 354.256c-25.008 16.976-42.48 44.432-45.712 76.528 3.232-31.792 20.592-59.424 45.712-76.528z"
                        fill="#E8E8E8"
                      />
                      <path
                        d="M419.088 491.808c0.448 0.832 0.992 1.6 1.456 2.432 1.248 2.16 2.496 4.336 3.888 6.4 0.048 0.08 0.112 0.144 0.176 0.224 17.088 25.152 44.752 42.56 76.608 45.792 3.536 0.352 7.136 0.544 10.784 0.544s7.248-0.192 10.8-0.544c31.856-3.232 59.504-20.64 76.608-45.792 0.048-0.08 0.112-0.144 0.176-0.224 1.392-2.064 2.64-4.24 3.888-6.4 0.464-0.816 1.008-1.6 1.456-2.432 0.848-1.584 1.568-3.248 2.336-4.864 0.704-1.472 1.472-2.912 2.112-4.416 0.496-1.168 0.864-2.4 1.312-3.6 0.768-2.032 1.568-4.032 2.224-6.112 0.288-0.912 0.464-1.872 0.72-2.8 0.672-2.4 1.344-4.8 1.856-7.264 0.256-1.216 0.368-2.48 0.576-3.728 0.368-2.224 0.784-4.416 1.008-6.672 0.352-3.52 0.544-7.104 0.544-10.72 0-57.6-48-105.6-105.6-105.6-3.616 0-7.184 0.192-10.72 0.544-2.272 0.224-4.496 0.64-6.72 1.024-1.216 0.208-2.48 0.32-3.68 0.56-2.496 0.512-4.912 1.2-7.344 1.872-0.896 0.256-1.84 0.432-2.72 0.704-2.112 0.656-4.16 1.472-6.224 2.256-1.168 0.448-2.368 0.8-3.504 1.28-1.536 0.64-2.976 1.424-4.48 2.128-1.616 0.768-3.248 1.472-4.816 2.32-0.848 0.448-1.632 0.992-2.448 1.472-2.16 1.248-4.304 2.48-6.368 3.872-0.112 0.08-0.208 0.16-0.32 0.24-25.104 17.088-42.48 44.72-45.712 76.528-0.368 3.52-0.56 7.12-0.56 10.768 0 3.616 0.192 7.2 0.544 10.72 0.224 2.256 0.64 4.464 1.008 6.672 0.208 1.232 0.32 2.496 0.576 3.728 0.496 2.464 1.184 4.864 1.856 7.264 0.256 0.928 0.432 1.888 0.72 2.8 0.64 2.08 1.456 4.096 2.224 6.112 0.448 1.2 0.832 2.432 1.312 3.6 0.64 1.504 1.408 2.944 2.112 4.416 0.768 1.648 1.472 3.312 2.336 4.896z"
                        fill="#FAD97F"
                      />
                      <path
                        d="M512 577.6c75.2 0 137.6-62.4 137.6-137.6s-60.8-137.6-137.6-137.6-137.6 62.4-137.6 137.6 62.4 137.6 137.6 137.6z m-98.688-98.688c-0.768-2.032-1.568-4.032-2.224-6.112-0.288-0.912-0.464-1.872-0.72-2.8-0.672-2.4-1.344-4.8-1.856-7.264-0.256-1.216-0.368-2.48-0.576-3.728-0.368-2.224-0.784-4.416-1.008-6.672a107.818 107.818 0 0 1-0.544-10.72c0-3.648 0.192-7.248 0.544-10.8 3.232-32.112 20.704-59.552 45.712-76.528 0.112-0.08 0.208-0.16 0.32-0.24 2.048-1.392 4.208-2.624 6.368-3.872 0.832-0.48 1.616-1.024 2.448-1.472 1.568-0.848 3.216-1.552 4.816-2.32 1.488-0.704 2.944-1.488 4.48-2.128 1.136-0.48 2.336-0.848 3.504-1.28 2.064-0.784 4.096-1.6 6.224-2.256 0.896-0.272 1.824-0.448 2.72-0.704 2.432-0.672 4.864-1.36 7.344-1.872 1.216-0.24 2.464-0.352 3.68-0.56 2.224-0.368 4.448-0.784 6.72-1.024 3.552-0.368 7.12-0.56 10.736-0.56 57.6 0 105.6 48 105.6 105.6 0 3.616-0.192 7.2-0.544 10.72-0.224 2.256-0.64 4.464-1.008 6.672-0.208 1.232-0.32 2.496-0.576 3.728-0.496 2.464-1.184 4.864-1.856 7.264-0.256 0.928-0.432 1.888-0.72 2.8-0.64 2.08-1.456 4.096-2.224 6.112-0.448 1.2-0.832 2.432-1.312 3.6-0.64 1.504-1.408 2.944-2.112 4.416-0.768 1.632-1.488 3.296-2.336 4.864-0.448 0.832-0.992 1.6-1.456 2.432-1.248 2.16-2.496 4.336-3.888 6.4-0.048 0.08-0.112 0.144-0.176 0.224-16.976 25.056-44.448 42.56-76.608 45.792-3.536 0.384-7.136 0.576-10.784 0.576s-7.248-0.192-10.8-0.544c-32.144-3.232-59.632-20.736-76.608-45.792-0.048-0.08-0.112-0.144-0.176-0.224-1.392-2.064-2.64-4.24-3.888-6.4-0.464-0.816-1.008-1.6-1.456-2.432-0.848-1.584-1.568-3.248-2.336-4.864-0.704-1.472-1.472-2.912-2.112-4.416-0.48-1.184-0.864-2.416-1.312-3.616z"
                        fill=""
                      />
                      <path
                        d="M512 641.6c-91.2 0-168 75.2-184 174.4h368c-16-99.2-92.8-174.4-184-174.4z"
                        fill="#FAD97F"
                      />
                      <path
                        d="M512 609.6c-120 0-216 105.6-219.2 238.4h438.4C728 715.2 632 609.6 512 609.6zM328 816c16-99.2 92.8-174.4 184-174.4s168 75.2 184 174.4H328z"
                        fill=""
                      />
                      <path
                        d="M164.8 208c-40 0-72 32-72 72s32 72 72 72 72-32 72-72-32-72-72-72z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M164.8 384c57.6 0 104-46.4 104-104s-46.4-104-104-104c-17.984 0-34.864 4.528-49.584 12.496a103.69 103.69 0 0 0-53.76 80.144A102.408 102.408 0 0 0 60.8 280c0 57.6 46.4 104 104 104z m0-32c-40 0-72-32-72-72s32-72 72-72 72 32 72 72-32 72-72 72z"
                        fill=""
                      />
                      <path
                        d="M164.8 438.4c-62.4 0-115.2 49.6-129.6 115.2h257.6c-14.4-65.6-65.6-115.2-128-115.2z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M164.8 406.4c-81.632 0-149.792 66.464-162.512 153.28C1.04 568.16 0.144 576.768 0 585.6h328c-1.6-99.2-73.6-179.2-163.2-179.2z m0 32c62.4 0 113.6 49.6 128 115.2H35.2c14.4-65.6 67.2-115.2 129.6-115.2z"
                        fill=""
                      />
                      <path
                        d="M859.2 280m-72 0a72 72 0 1 0 144 0 72 72 0 1 0-144 0Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M755.2 280c0 57.6 46.4 104 104 104s104-46.4 104-104c0-3.84-0.24-7.632-0.64-11.36-3.744-34.752-24.464-64.288-53.76-80.144C894.064 180.528 877.184 176 859.2 176c-57.6 0-104 46.4-104 104z m104 72c-40 0-72-32-72-72s32-72 72-72 72 32 72 72-32 72-72 72z"
                        fill=""
                      />
                      <path
                        d="M860 435.648c-0.288 0-0.56-0.048-0.832-0.048-63.744 0-119.104 52-134.208 120.784h268.416a180.48 180.48 0 0 0-3.264-12.64c-18.48-62.112-69.136-107.68-130.112-108.096z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M1021.712 559.68c-12.72-86.816-80.88-153.28-162.512-153.28-89.6 0-163.2 80-164.8 179.2H1024c-0.144-8.832-1.04-17.44-2.288-25.92z m-295.088-3.28h-1.664c15.104-68.784 70.464-120.784 134.208-120.784 0.288 0 0.56 0.048 0.832 0.048 60.976 0.416 111.632 45.984 130.112 108.112a180.48 180.48 0 0 1 3.264 12.64H726.624v-0.016z"
                        fill=""
                      />
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/teams"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Teams
                  </Link>
                </li>
              </ul>
            </div>
            <div className="absolute left-0 top-full flex justify-center"></div>
          </nav>
        </div>

        {isHamburger ? (
          <>
            <div
              data-state="open"
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
              //style="pointer-events: auto;"
              data-aria-hidden="true"
              aria-hidden="true"
            ></div>
            <div
              role="dialog"
              id="radix-:R5b6t5a:"
              aria-describedby="radix-:R5b6t5aH2:"
              aria-labelledby="radix-:R5b6t5aH1:"
              data-state="open"
              className="fixed z-50 gap-4 bg-background bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm w-[70%] flex flex-col"
              tabindex="-1"
              //style="pointer-events: auto;"
            >
              <div className="flex flex-col space-y-2 text-center sm:text-left">
                <h2
                  id="radix-:R5b6t5aH1:"
                  className="text-lg font-semibold text-foreground"
                >
                  <div className="flex items-center space-x-2">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 136 105"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xml:space="preserve"
                      className="w-6 fill-primary mt-[2px]"
                    >
                      <g transform="matrix(1,0,0,1,-56.9406,-284.971)">
                        <g>
                          <g transform="matrix(1,1.00944e-18,0,1,-36.5609,257.694)">
                            <g transform="matrix(120,0,0,120,90.734,118.949)">
                              <path
                                d="M0.023,0.106L0.229,0.106L0.245,0.018L0.135,0.018L0.257,-0.676L0.367,-0.676L0.383,-0.764L0.177,-0.764L0.023,0.106Z"
                                //style="fill-rule: nonzero;"
                              ></path>
                            </g>
                            <g transform="matrix(120,0,0,120,186.494,118.949)">
                              <path
                                d="M-0.006,0.106L0.2,0.106L0.354,-0.764L0.148,-0.764L0.132,-0.676L0.242,-0.676L0.12,0.018L0.01,0.018L-0.006,0.106Z"
                                //style="fill-rule: nonzero;"
                              ></path>
                            </g>
                          </g>
                          <g transform="matrix(0.999991,0.00421493,0,1.00001,6.23472,253.862)">
                            <g transform="matrix(112,0,0,112,90.734,113.109)">
                              <path
                                d="M-0.018,-0L0.399,-0L0.422,-0.13L0.198,-0.13L0.467,-0.433L0.486,-0.54L0.084,-0.54L0.062,-0.411L0.269,-0.411L0.001,-0.11L-0.018,-0Z"
                                //style="fill-rule: nonzero;"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <a href="/">
                      <h1 className="font-bold text-md">Zap!</h1>
                    </a>
                  </div>
                </h2>
                <p
                  id="radix-:R5b6t5aH2:"
                  className="text-sm text-muted-foreground"
                ></p>
              </div>
              <nav className="flex flex-col gap-3 ml-8">
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/home"
                >
                  Home
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/trade"
                >
                  Trade
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/games"
                >
                  Games
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/private-servers"
                >
                  Private Servers
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/leaderboard"
                >
                  Leaderboard
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/blox-fruits-stock"
                >
                  Blox Fruits Stock
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/tutorial"
                >
                  Tutorial
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/search"
                >
                  Search
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-md text-primary font-normal"
                  href="https://discord.gg/zap-gg-trading-community-1147592830609535049"
                >
                  Discord
                  <div className="ml-2 pl-2 pr-2 bg-accent rounded-full flex flex-row items-center text-xs">
                    <div className="mr-1 flex-initial bg-green-500 rounded-full w-1 h-1"></div>
                    5630 online
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-md text-primary font-normal"
                  href="https://blog.zap.gg"
                >
                  Blog
                </a>
              </nav>
              <nav className="flex flex-col gap-3 ml-8 mt-6">
                <a
                  className="flex items-center text-md text-muted-foreground font-normal"
                  href="/tutorial"
                >
                  Tutorial
                </a>
                <a
                  className="flex items-center text-md text-muted-foreground font-normal"
                  href="/faq"
                >
                  FAQ
                </a>
                <a
                  className="flex items-center text-md text-muted-foreground font-normal"
                  href="https://blog.zap.gg"
                >
                  Blog
                </a>
                <a
                  className="flex items-center text-md text-muted-foreground font-normal"
                  href="/sponsors"
                >
                  Sponsors
                </a>
                <a
                  className="flex items-center text-md text-muted-foreground font-normal"
                  href="/contact"
                >
                  Contact Us
                </a>
                <a
                  className="flex items-center text-md text-muted-foreground font-normal"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
                <a
                  className="flex items-center text-md text-muted-foreground font-normal"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </nav>
              <div className="mt-auto flex justify-center space-x-10">
                <a
                  href="https://twitter.com/realZapGG"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    fill="#1DA1F2"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="https://discord.gg/zap-gg-trading-community-1147592830609535049"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Discord</span>
                  <svg
                    fill="#5865F2"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.01-.059.051.051 0 00-.018-.011 8.875 8.875 0 01-1.248-.595.05.05 0 01-.02-.066.051.051 0 01.015-.019c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085 8.254 8.254 0 01-1.249.594.05.05 0 00-.03.03.052.052 0 00.003.041c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z"></path>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@realzapgg"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">TikTok</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="#ff0050"
                    height="1em"
                    width="1em"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path>
                  </svg>
                </a>
              </div>
              <button
                type="button"
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                onClick={() => setIsHamburger(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          </>
        ) : null}
      </div>

      {isLogin ? (
        <div className={`fixed inset-0 z-50 flex justify-center items-center`}>
          <div
            data-state="open"
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in"
            data-aria-hidden="true"
            aria-hidden="true"
            style={{ pointerEvents: "auto" }}
          ></div>
          <div
            role="dialog"
            id="radix-:r3:"
            aria-describedby="radix-:r5:"
            aria-labelledby="radix-:r4:"
            data-state="open"
            className={`fixed z-50 gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 h-screen w-screen sm:h-auto sm:w-auto md:mt-20 flex flex-col items-center justify-center bg-white transition-transform transform ${
              isLogin ? "scale-100" : "scale-0"
            }`}
            tabindex="-1"
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex-col space-y-1.5 text-center sm:text-left flex items-center justify-center gap-y-3">
              <img
                alt="Zap"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="rounded-full"
                src="https://t4.rbxcdn.com/30DAY-AvatarHeadshot-57748977B3F40C1CE63A075CD52FBEE4-Png"
                //style="color: transparent;"
                style={{ color: "transparent" }}
              />
              <h2
                id="radix-:r4:"
                className="font-semibold tracking-tight text-3xl mt-auto text-center"
              >
                Sign in to Zap
              </h2>
              <p
                id="radix-:r5:"
                className="text-sm text-muted-foreground text-center"
              >
                Zap uses your Roblox username, ID, and avatar to create your
                profile. We will never ask for your password.
              </p>
            </div>
            <div className="flex flex-col gap-y-6 w-full">
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full !mt-4"
              ></div>
              <div className="flex flex-col justify-start space-y-2">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id="13-plus"
                  ></button>
                  <label
                    for="13-plus"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I am 13 years of age or older
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id="tos"
                  ></button>
                  <label
                    for="tos"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <a
                      href="https://zap.gg/terms"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500"
                    >
                      Terms of Service
                    </a>
                  </label>
                </div>
              </div>
              <div className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-3 rounded-md flex items-center justify-center space-x-2 py-6 hover:cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted bg-[#f1f5f9]">
                <span>Link Roblox Account</span>
              </div>
            </div>
            <button
              type="button"
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setIsLogin(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {showButton && (
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 fixed bottom-4 right-4 z-50 border px-2 shadow-lg opacity-100  bg-white"
              onClick={moveTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          )}
        </>
      )}
    </div>
  );
}
