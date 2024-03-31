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
        <div class="flex items-center justify-start gap-x-2 sm:gap-x-0">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="md:hidden h-6 w-6 border-2 border-primary rounded-sm"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            class="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex"
          >
            <div className="relative">
              <ul
                data-orientation="horizontal"
                class="group flex flex-1 list-none items-center justify-center space-x-1"
                dir="ltr"
              >
                <li>
                  <Link
                    to="/"
                    class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 250 105"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xml:space="preserve"
                      class="h-6 min-h-[1.5rem] fill-primary hidden md:block"
                    >
                      <g transform="matrix(1,0,0,1,-65.8028,-149.894)">
                        <g transform="matrix(1,0,0,1,-19.866,1.806)">
                          <g>
                            <g transform="matrix(1,5.53089e-19,0,1,-16.1128,120.811)">
                              <g transform="matrix(120,0,0,120,90.734,118.949)">
                                <path
                                  d="M0.098,0.106C0.098,0.106 0.307,0.106 0.307,0.106C0.307,0.106 0.323,0.019 0.323,0.019C0.323,0.019 0.21,0.019 0.21,0.019C0.253,-0.21 0.295,-0.44 0.338,-0.669C0.338,-0.669 0.451,-0.669 0.451,-0.669C0.451,-0.669 0.466,-0.758 0.466,-0.758C0.466,-0.758 0.257,-0.758 0.257,-0.758C0.252,-0.478 0.149,-0.169 0.098,0.106Z"
                                  style={{ fillRule: "nonzero" }}
                                ></path>
                              </g>
                              <g transform="matrix(120,0,0,120,298.574,118.949)">
                                <path
                                  d="M0.068,0.106C0.068,0.106 0.277,0.106 0.277,0.106C0.328,-0.169 0.431,-0.478 0.436,-0.758C0.436,-0.758 0.227,-0.758 0.227,-0.758C0.227,-0.758 0.212,-0.669 0.212,-0.669C0.212,-0.669 0.325,-0.669 0.325,-0.669C0.282,-0.44 0.24,-0.21 0.197,0.019C0.197,0.019 0.084,0.019 0.084,0.019C0.084,0.019 0.068,0.106 0.068,0.106Z"
                                  style={{ fillRule: "nonzero" }}
                                ></path>
                              </g>
                            </g>
                            <g transform="matrix(0.999991,0.00421493,0,1.00001,23.1081,118.221)">
                              <g transform="matrix(110,0,0,110,90.734,111.65)">
                                <path
                                  d="M0.074,0.002C0.074,0.002 0.497,0.002 0.497,0.002C0.497,0.002 0.521,-0.127 0.521,-0.127C0.521,-0.127 0.287,-0.127 0.287,-0.127C0.287,-0.127 0.569,-0.428 0.569,-0.428C0.569,-0.428 0.589,-0.534 0.589,-0.534C0.589,-0.534 0.18,-0.534 0.18,-0.534C0.18,-0.534 0.156,-0.406 0.156,-0.406C0.156,-0.406 0.375,-0.406 0.375,-0.406C0.375,-0.406 0.094,-0.107 0.094,-0.107C0.094,-0.107 0.074,0.002 0.074,0.002Z"
                                  style={{ fillRule: "nonzero" }}
                                ></path>
                              </g>
                              <g transform="matrix(110,0,0,110,141.994,111.65)">
                                <path
                                  d="M0.224,0.006C0.295,0.006 0.356,-0.023 0.404,-0.075C0.404,-0.075 0.39,0.002 0.39,0.002C0.39,0.002 0.542,0.002 0.542,0.002C0.542,0.002 0.617,-0.406 0.617,-0.406C0.632,-0.487 0.595,-0.534 0.512,-0.534C0.512,-0.534 0.323,-0.534 0.323,-0.534C0.24,-0.534 0.186,-0.488 0.171,-0.406C0.171,-0.406 0.163,-0.362 0.163,-0.362C0.163,-0.362 0.318,-0.362 0.318,-0.362L0.324,-0.392C0.327,-0.406 0.335,-0.413 0.349,-0.413C0.349,-0.413 0.441,-0.413 0.441,-0.413C0.455,-0.413 0.461,-0.406 0.458,-0.392C0.458,-0.392 0.446,-0.328 0.446,-0.328C0.39,-0.325 0.334,-0.321 0.278,-0.313C0.179,-0.299 0.125,-0.254 0.106,-0.154C0.088,-0.056 0.117,0.006 0.224,0.006ZM0.288,-0.116C0.257,-0.116 0.261,-0.143 0.265,-0.167C0.27,-0.194 0.278,-0.212 0.306,-0.218C0.306,-0.218 0.43,-0.24 0.43,-0.24C0.43,-0.24 0.414,-0.155 0.414,-0.155C0.374,-0.135 0.334,-0.116 0.288,-0.116Z"
                                  style={{ fillRule: "nonzero" }}
                                ></path>
                              </g>
                              <g transform="matrix(110,0,0,110,201.724,111.65)">
                                <path
                                  d="M0.073,0.16C0.073,0.16 0.23,0.16 0.23,0.16C0.23,0.16 0.273,-0.07 0.273,-0.07C0.306,-0.012 0.36,0.007 0.425,0.007C0.52,0.007 0.583,-0.03 0.6,-0.126C0.6,-0.126 0.652,-0.406 0.652,-0.406C0.67,-0.502 0.619,-0.539 0.526,-0.539C0.454,-0.539 0.395,-0.515 0.346,-0.464C0.346,-0.464 0.359,-0.534 0.359,-0.534C0.359,-0.534 0.201,-0.534 0.201,-0.534C0.158,-0.303 0.116,-0.071 0.073,0.16ZM0.405,-0.125C0.363,-0.125 0.325,-0.134 0.289,-0.155C0.289,-0.155 0.33,-0.378 0.33,-0.378C0.37,-0.398 0.412,-0.407 0.457,-0.407C0.479,-0.407 0.494,-0.405 0.49,-0.382C0.49,-0.382 0.447,-0.151 0.447,-0.151C0.443,-0.128 0.427,-0.125 0.405,-0.125Z"
                                  style={{ fillRule: "nonzero" }}
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/teams"
                    class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    
                  >
                    Teams
                  </Link>
                </li>

              </ul>
            </div>
            <div class="absolute left-0 top-full flex justify-center"></div>
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
              class="fixed z-50 gap-4 bg-background bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm w-[70%] flex flex-col"
              tabindex="-1"
              //style="pointer-events: auto;"
            >
              <div class="flex flex-col space-y-2 text-center sm:text-left">
                <h2
                  id="radix-:R5b6t5aH1:"
                  class="text-lg font-semibold text-foreground"
                >
                  <div class="flex items-center space-x-2">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 136 105"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xml:space="preserve"
                      class="w-6 fill-primary mt-[2px]"
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
                      <h1 class="font-bold text-md">Zap!</h1>
                    </a>
                  </div>
                </h2>
                <p
                  id="radix-:R5b6t5aH2:"
                  class="text-sm text-muted-foreground"
                ></p>
              </div>
              <nav class="flex flex-col gap-3 ml-8">
                <a
                  class="flex items-center text-md text-primary font-normal"
                  href="/home"
                >
                  Home
                </a>
                <a
                  class="flex items-center text-md text-primary font-normal"
                  href="/trade"
                >
                  Trade
                </a>
                <a
                  class="flex items-center text-md text-primary font-normal"
                  href="/games"
                >
                  Games
                </a>
                <a
                  class="flex items-center text-md text-primary font-normal"
                  href="/private-servers"
                >
                  Private Servers
                </a>
                <a
                  class="flex items-center text-md text-primary font-normal"
                  href="/leaderboard"
                >
                  Leaderboard
                </a>
                <a
                  class="flex items-center text-md text-primary font-normal"
                  href="/blox-fruits-stock"
                >
                  Blox Fruits Stock
                </a>
                <a
                  class="flex items-center text-md text-primary font-normal"
                  href="/tutorial"
                >
                  Tutorial
                </a>
                <a
                  class="flex items-center text-md text-primary font-normal"
                  href="/search"
                >
                  Search
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center text-md text-primary font-normal"
                  href="https://discord.gg/zap-gg-trading-community-1147592830609535049"
                >
                  Discord
                  <div class="ml-2 pl-2 pr-2 bg-accent rounded-full flex flex-row items-center text-xs">
                    <div class="mr-1 flex-initial bg-green-500 rounded-full w-1 h-1"></div>
                    5630 online
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  class="flex items-center text-md text-primary font-normal"
                  href="https://blog.zap.gg"
                >
                  Blog
                </a>
              </nav>
              <nav class="flex flex-col gap-3 ml-8 mt-6">
                <a
                  class="flex items-center text-md text-muted-foreground font-normal"
                  href="/tutorial"
                >
                  Tutorial
                </a>
                <a
                  class="flex items-center text-md text-muted-foreground font-normal"
                  href="/faq"
                >
                  FAQ
                </a>
                <a
                  class="flex items-center text-md text-muted-foreground font-normal"
                  href="https://blog.zap.gg"
                >
                  Blog
                </a>
                <a
                  class="flex items-center text-md text-muted-foreground font-normal"
                  href="/sponsors"
                >
                  Sponsors
                </a>
                <a
                  class="flex items-center text-md text-muted-foreground font-normal"
                  href="/contact"
                >
                  Contact Us
                </a>
                <a
                  class="flex items-center text-md text-muted-foreground font-normal"
                  href="/privacy"
                >
                  Privacy Policy
                </a>
                <a
                  class="flex items-center text-md text-muted-foreground font-normal"
                  href="/terms"
                >
                  Terms of Service
                </a>
              </nav>
              <div class="mt-auto flex justify-center space-x-10">
                <a
                  href="https://twitter.com/realZapGG"
                  class="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="sr-only">Twitter</span>
                  <svg
                    fill="#1DA1F2"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="https://discord.gg/zap-gg-trading-community-1147592830609535049"
                  class="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="sr-only">Discord</span>
                  <svg
                    fill="#5865F2"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 00-3.257-1.011.05.05 0 00-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 00-3.658 0 8.258 8.258 0 00-.412-.833.051.051 0 00-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 00-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 003.995 2.02.05.05 0 00.056-.019c.308-.42.582-.863.818-1.329a.05.05 0 00-.01-.059.051.051 0 00-.018-.011 8.875 8.875 0 01-1.248-.595.05.05 0 01-.02-.066.051.051 0 01.015-.019c.084-.063.168-.129.248-.195a.05.05 0 01.051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 01.053.007c.08.066.164.132.248.195a.051.051 0 01-.004.085 8.254 8.254 0 01-1.249.594.05.05 0 00-.03.03.052.052 0 00.003.041c.24.465.515.909.817 1.329a.05.05 0 00.056.019 13.235 13.235 0 004.001-2.02.049.049 0 00.021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 00-.02-.019zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612z"></path>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@realzapgg"
                  class="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="sr-only">TikTok</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="#ff0050"
                    height="1em"
                    width="1em"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path>
                  </svg>
                </a>
              </div>
              <button
                type="button"
                class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                onClick={() => setIsHamburger(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span class="sr-only">Close</span>
              </button>
            </div>
          </>
        ) : null}
      </div>

      {isLogin ? (
        <div class={`fixed inset-0 z-50 flex justify-center items-center`}>
          <div
            data-state="open"
            class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in"
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
            <div class="flex-col space-y-1.5 text-center sm:text-left flex items-center justify-center gap-y-3">
              <img
                alt="Zap"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                class="rounded-full"
                src="https://t4.rbxcdn.com/30DAY-AvatarHeadshot-57748977B3F40C1CE63A075CD52FBEE4-Png"
                //style="color: transparent;"
                style={{ color: "transparent" }}
              />
              <h2
                id="radix-:r4:"
                class="font-semibold tracking-tight text-3xl mt-auto text-center"
              >
                Sign in to Zap
              </h2>
              <p
                id="radix-:r5:"
                class="text-sm text-muted-foreground text-center"
              >
                Zap uses your Roblox username, ID, and avatar to create your
                profile. We will never ask for your password.
              </p>
            </div>
            <div class="flex flex-col gap-y-6 w-full">
              <div
                data-orientation="horizontal"
                role="none"
                class="shrink-0 bg-border h-[1px] w-full !mt-4"
              ></div>
              <div class="flex flex-col justify-start space-y-2">
                <div class="flex items-center space-x-2">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    class="peer h-4 w-4 shrink-0 rounded-sm border border-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id="13-plus"
                  ></button>
                  <label
                    for="13-plus"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I am 13 years of age or older
                  </label>
                </div>
                <div class="flex items-center space-x-2">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    class="peer h-4 w-4 shrink-0 rounded-sm border border-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id="tos"
                  ></button>
                  <label
                    for="tos"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <a
                      href="https://zap.gg/terms"
                      target="_blank"
                      rel="noreferrer"
                      class="text-blue-500"
                    >
                      Terms of Service
                    </a>
                  </label>
                </div>
              </div>
              <div class="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-3 rounded-md flex items-center justify-center space-x-2 py-6 hover:cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted bg-[#f1f5f9]">
                <span>Link Roblox Account</span>
              </div>
            </div>
            <button
              type="button"
              class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setIsLogin(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              <span class="sr-only">Close</span>
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