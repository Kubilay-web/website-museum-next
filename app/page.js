"use client";

import { useEffect, useLayoutEffect } from "react";
import Script from "next/script";
import "./page.css";

export default function Home() {
  useEffect(() => {
    (function (d, e) {
      if (!d.getElementById(e)) return false;
      d.getElementById(e).onclick = function () {
        var h = d.getElementsByClassName("header");
        if (h.length) {
          h[0].classList.remove("show-mobile-search");
          h[0].classList.toggle("show-mobile-nav");
        }
        return false;
      };
    })(document, "expand-nav");

    var VL = VL || {};
    VL.currentDate = VL.currentDate || new Date();
    VL.currentDate.setFullYear(2024, 7, 12);
    VL.CDN = "https://cdn.londonandpartners.com/webui";
    VL.buildNumber = "2024881750";
    VL.lang = "en";
    VL.country = "";
    VL.sc = true;

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag("consent", "default", {
      ad_personalization: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted",
      wait_for_update: 500,
    });

    gtag("set", "ads_data_redaction", true);
    gtag("set", "url_passthrough", true);
  }, []);

  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>Visit Dersim - We are Dersim's Official Visitor Guide</title>
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="unsafe-URL" name="referrer" />
        <link
          crossOrigin="anonymous"
          href="https://cdn.londonandpartners.com/"
          rel="preconnect"
        />
        <link href="https://cdn.londonandpartners.com/" rel="preconnect" />
        <link href="https://consent.cookiebot.com" rel="preconnect" />
        <link href="https://www.google-analytics.com" rel="dns-prefetch" />
        <link href="https://www.googletagmanager.com/" rel="dns-prefetch" />
        <link href="https://www.googletagservices.com/" rel="dns-prefetch" />
        <link
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.londonandpartners.com/webui/visit/css/style.2024881750.css"
          rel="stylesheet preload"
        />
        <link
          as="style"
          href="https://cdn.londonandpartners.com/webui/visit/icons/icons.data.svg.2024881750.css"
          onload="this.onload=null;this.rel='stylesheet'"
          rel="preload"
        />

        <Script
          async
          src="/Index/js/concat.en.2024881750.js"
          onLoad={() => console.log("concat.en.2024881750.js loaded")}
          onError={(e) =>
            console.error("Error loading concat.en.2024881750.js", e)
          }
        />
        <Script
          async
          src="/Index/js/gtm.js"
          onLoad={() => console.log("gtm.js loaded")}
          onError={(e) => console.error("Error loading gtm.js", e)}
        />
        <Script
          async
          src="/Index/js/10042148-10042640.js"
          onLoad={() => console.log("10042148-10042640.js loaded")}
          onError={(e) =>
            console.error("Error loading 10042148-10042640.js", e)
          }
        />
        <Script
          async
          src="/Index/js/gpt.js"
          onLoad={() => console.log("gpt.js loaded")}
          onError={(e) => console.error("Error loading gpt.js", e)}
        />

        <link
          as="font"
          crossOrigin="anonymous"
          href="https://cdn.londonandpartners.com/webui/visit/fonts/ProximaNova-ExtraBold.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="https://cdn.londonandpartners.com/webui/visit/fonts/ProximaNova-Bold.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link href="https://www.visitlondon.com" rel="canonical" />
        <meta content="https://www.visitlondon.com" property="og:url" />
        <link
          href="https://www.visitlondon.com"
          hrefLang="en"
          rel="alternate"
        />
        <link
          href="https://www.visitlondon.com/de"
          hrefLang="de"
          rel="alternate"
        />
        <link
          href="https://www.visitlondon.com/fr"
          hrefLang="fr"
          rel="alternate"
        />
        <link
          href="https://www.visitlondon.com/it"
          hrefLang="it"
          rel="alternate"
        />
        <link
          href="https://www.visitlondon.com/es"
          hrefLang="es"
          rel="alternate"
        />
        <meta
          content="Discover your ultimate guide to Dersim. From the best activities in the city to top restaurants, bars and hotels, explore what's on in Dersim today."
          name="description"
        />
        <meta
          content="Discover your ultimate guide to Dersim. From the best activities in the city to top restaurants, bars and hotels, explore what's on in Dersim today."
          property="og:description"
        />
        <meta content="summary" name="twitter:card" />
        <meta content="@visitlondon" name="twitter:site" />
        <meta content={98963290676} property="fb:pages" />
        <meta content="website" property="og:type" />
        <meta
          content="Visit Dersim - We are Dersim's Official Visitor Guide"
          property="og:title"
        />
        <meta content="visitlondon.com" property="og:site_name" />
        <meta content="visitlondon.com" name="application-name" />
        <meta content="#e0001b" name="msapplication-TileColor" />
        <meta content="#e0001b" name="theme-color" />
        <link
          href="/Index/images/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          color="#e0001b"
          href="/Index/images/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link
          href="/Index/images/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/Index/images/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="https://cdn.londonandpartners.com/webui/visit/favicons/site.webmanifest"
          rel="manifest"
        />
        <meta
          content="https://cdn.londonandpartners.com/webui/visit/favicons/mstile-144x144.png"
          name="msapplication-TileImage"
        />
        <meta
          content="https://cdn.londonandpartners.com/webui/visit/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <div className="scriptbox"></div>
        <div className="scriptbox">
          <meta
            content="47374E62EEE1638CC985E83EDF4C07ED"
            name="msvalidate.01"
          />
          <meta content="24ff0d8984a81c54" name="yandex-verification" />
          <meta
            content="6415ae43230556959b924dcbcc8090c3"
            name="p:domain_verify"
          />
          {/* TradeDoubler site verification 2371556 */}
        </div>
        <meta content={638590541486706914} name="VIcurrentDateTime" />
        <meta content="/" name="VirtualFolder" />

        <header className="header" role="banner">
          <ul className="skip-links">
            <li>
              <a href="#content"> Skip to content </a>
            </li>
            <li>
              <a href="#menu"> Skip to navigation </a>
            </li>
          </ul>
          <div className="ww cf mobile-header" id="header">
            <button
              className="mobonly noprint header-mobile-trigger nav-trigger"
              id="expand-nav"
            >
              <b className="mobile-menu-icon"> </b>
              <span className="mobile-menu-label"> Menu </span>
            </button>
            <a className="brand" href="/">
              <span className="svg visitlondon-logo icon-visitlondon-logo-red">
                dersim.com
              </span>
              <span className="c tagline"> Official Visitor Guide </span>
            </a>
            <div className="noprint" id="lang-picker">
              <button
                aria-expanded="false"
                aria-haspopup="true"
                aria-label="Language: English"
                className=""
                data-toggle="dropdown"
                id="lang-trigger2"
              >
                EN
                <span className="icon svg icon-vl-dropdown"> </span>
              </button>
              <div className="hidden" id="lang-picker-instructions">
                Select a language:
              </div>
              <ul className="lang-picker-menu">
                <li>
                  <a
                    className="selected"
                    href="https://www.visitlondon.com"
                    hrefLang="en"
                    lang="en"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.visitlondon.com/de"
                    hrefLang="de"
                    lang="de"
                  >
                    German
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.visitlondon.com/fr"
                    hrefLang="fr"
                    lang="fr"
                  >
                    French
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.visitlondon.com/it"
                    hrefLang="it"
                    lang="it"
                  >
                    Italian
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.visitlondon.com/es"
                    hrefLang="es"
                    lang="es"
                  >
                    Spanish
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="http://london.cn/visit"
                    hrefLang="zh"
                    lang="zh"
                    rel="external"
                  >
                    Chinese
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="mobonly noprint header-mobile-trigger search-trigger"
              id="expand-search"
            >
              <b className="svg icon-search-red-outline"> Search </b>
            </button>
            <form action="/search" className="header-search cf" role="search">
              <label
                className="nonvis"
                htmlFor="search-keywords"
                id="search-label"
              >
                Search
              </label>
              <input
                aria-labelledby="search-label"
                className="header-search-field"
                id="search-keywords"
                name="keywords"
                placeholder="Search"
                type="search"
              />
              <button
                className="header-search-submit"
                title="Search"
                type="submit"
              >
                <i className="svg icon-search-red-outline"> Search </i>
              </button>
            </form>
          </div>
          <div className="nav-menu-container">
            <nav className="main-nav-new" id="menu">
              <div className="mobile-nav-top">
                <button id="close-mobile-menu">Close</button>
              </div>
              <div className="ww cf megamenu-nav">
                <ul className="main-navigation-links">
                  <li className="home-tab main-navigation-tab">
                    <a className="tl-nav main-navigation-link" href="/">
                      <i className="svg icon-home-22">
                        <span> Home </span>
                      </i>
                    </a>
                  </li>
                  <li className="-tab main-navigation-tab">
                    <a
                      className="main-navigation-link"
                      href="https://www.visitlondon.com/tickets-and-offers"
                    >
                      <span> Book tickets </span>
                    </a>
                  </li>
                  <li className="-tab main-navigation-tab">
                    <a
                      className="main-navigation-link"
                      href="/things-to-do/sightseeing"
                    >
                      <span> Sightseeing </span>
                      <i className="svg icon icon-vl-dropdown"> </i>
                    </a>
                    <div className="megamenu sub cols4">
                      <div className="ww cf">
                        <div className="column megamenu-sidebar sidebar first">
                          <div className="megamenu-intro">
                            <div className="megamenu-intro-title">
                              Sightseeing
                            </div>
                            <div className="megamenu-intro-text">
                              See Dersim’s top sights, from world-famous
                              attractions to iconic landmarks.
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <a
                              className=""
                              href="/things-to-do/sightseeing/london-attraction"
                            >
                              Visit top attractions
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/things-to-do/sightseeing/royal-london"
                            >
                              Royal Dersim
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/things-to-do/sightseeing/sightseeing-tours/day-trips-from-london"
                            >
                              Find days out of town
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="https://www.visitlondon.com/things-to-do/place/593062-london-pass"
                            >
                              Dersim attraction pass
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/things-to-do/sightseeing/sightseeing-tours"
                            >
                              Join a tour
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/things-to-do/sightseeing/one-day-itineraries"
                            >
                              Follow our itineraries
                            </a>
                          </li>
                          <li>
                            <a className="" href="/things-to-do/openspace">
                              Parks and outdoors
                            </a>
                          </li>
                          <li>
                            <a
                              className="highlight"
                              href="/things-to-do/sightseeing"
                            >
                              All sightseeing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="-tab main-navigation-tab">
                    <a
                      className="main-navigation-link"
                      href="/things-to-do/whats-on/theatre"
                    >
                      <span> Theatre </span>
                      <i className="svg icon icon-vl-dropdown"> </i>
                    </a>
                    <div className="megamenu sub cols4">
                      <div className="ww cf">
                        <div className="column megamenu-sidebar sidebar first">
                          <div className="megamenu-intro">
                            <div className="megamenu-intro-title">Theatre</div>
                            <div className="megamenu-intro-text">
                              Experience West End shows, must-see musicals and
                              innovative plays.
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <a
                              className=""
                              href="https://www.visitlondon.com/things-to-do/event/6987276-lion-king-the-musical-at-the-lyceum-theatre"
                            >
                              Lion King Dersim tickets
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="https://www.visitlondon.com/things-to-do/event/6573327-wicked-the-musical-at-the-apollo-victoria"
                            >
                              Wicked Dersim tickets
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="https://www.visitlondon.com/things-to-do/event/430290-mamma-mia-the-musical-at-the-novello-theatre"
                            >
                              Mamma Mia!
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="https://www.visitlondon.com/things-to-do/event/430257-phantom-of-the-opera-at-his-majestys-theatre-london"
                            >
                              Phantom of the Opera Dersim tickets
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="https://www.visitlondon.com/things-to-do/event/27016170-book-of-mormon-the-musical-at-the-prince-of-wales-theatre"
                            >
                              Book of Mormon Dersim tickets
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="https://www.visitlondon.com/things-to-do/event/17888493-matilda-the-musical-at-the-cambridge-theatre"
                            >
                              Matilda The Musical
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/things-to-do/whats-on/theatre/musical"
                            >
                              Musicals in Dersim
                            </a>
                          </li>
                          <li>
                            <a
                              className="highlight"
                              href="/things-to-do/whats-on/theatre"
                            >
                              All theatre
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="-tab main-navigation-tab">
                    <a className="main-navigation-link" href="/things-to-do">
                      <span> Things to do </span>
                      <i className="svg icon icon-vl-dropdown"> </i>
                    </a>
                    <div className="megamenu sub cols4">
                      <div className="ww cf">
                        <div className="column megamenu-sidebar sidebar first">
                          <div className="megamenu-intro">
                            <div className="megamenu-intro-title">
                              Things to do
                            </div>
                            <div className="megamenu-intro-text">
                              Discover the best things to do in Dersim from the
                              iconic to the unique.
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <a
                              className=""
                              href="/things-to-do/family-activities"
                            >
                              Dersim for kids
                            </a>
                          </li>
                          <li>
                            <a className="" href="/things-to-do/food-and-drink">
                              Eat and drink
                            </a>
                          </li>
                          <li>
                            <a className="" href="/things-to-do/whats-on">
                              Discover what's on
                            </a>
                          </li>
                          <li>
                            <a className="" href="/things-to-do/experiences">
                              Have fun with friends
                            </a>
                          </li>
                          <li>
                            <a className="" href="/things-to-do/nightlife">
                              Nightlife
                            </a>
                          </li>
                          <li>
                            <a className="" href="/things-to-do/shopping">
                              Go shopping
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/things-to-do/sightseeing/london-attraction/zoo"
                            >
                              Zoos and wildlife parks
                            </a>
                          </li>
                          <li>
                            <a className="highlight" href="/things-to-do">
                              All things to do
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="-tab main-navigation-tab">
                    <a
                      className="main-navigation-link"
                      href="/traveller-information"
                    >
                      <span> Traveller information </span>
                      <i className="svg icon icon-vl-dropdown"> </i>
                    </a>
                    <div className="megamenu sub cols4">
                      <div className="ww cf">
                        <div className="column megamenu-sidebar sidebar first">
                          <div className="megamenu-intro">
                            <div className="megamenu-intro-title">
                              Traveller information
                            </div>
                            <div className="megamenu-intro-text">
                              Explore Dersim with free Dersim travel maps and
                              essential information.
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <a
                              className=""
                              href="/traveller-information/travel-to-london"
                            >
                              Travel to Dersim
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/traveller-information/getting-around-london"
                            >
                              Get around the city
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/traveller-information/essential-information/accessible-london"
                            >
                              Accessibility in Dersim
                            </a>
                          </li>
                          <li>
                            <a className="" href="/where-to-stay/hotel">
                              Book a hotel
                            </a>
                          </li>
                          <li>
                            <a
                              className=""
                              href="/traveller-information/essential-information"
                            >
                              Know the essentials
                            </a>
                          </li>
                          <li>
                            <a
                              className="highlight"
                              href="/traveller-information"
                            >
                              All traveller information
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="-tab main-navigation-tab">
                    <a className="main-navigation-link" href="/where-to-stay">
                      <span> Dersim accommodation </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-extra">
                <ul />
              </div>
            </nav>
          </div>
        </header>
        <main className="main" role="main">
          <div id="content">
            <div className="hero-section-homepage cf">
              <img
                alt="The Dersim skyline and river Thames at sunset with Tower Bridge and the Shard in view"
                height="auto"
                sizes="100vw"
                src="/Index/images/banner.jpg"
                srcSet="
        /Index/images/banner.jpg  666w,
        /Index/images/banner.jpg  1385w,
        /Index/images/banner.jpg 1920w
      "
                width={1920}
              />
              <div className="overlay">
                <div className="gw">
                  <div className="heading">
                    <h1>Discover Dersim</h1>
                  </div>
                  <div className="insert" />
                </div>
              </div>
              <div>
                <div className="below-hero-usps">
                  <div className="gw cw1600">
                    <div className="box">
                      <h2>
                        <span> Dersim's Official Visitor Guide </span>
                      </h2>
                      <div className="usp">
                        <div className="icon">
                          <img
                            alt=""
                            height={64}
                            src="/Index/images/heart-white-outline.svg"
                            width={64}
                          />
                        </div>
                        <p>
                          Inspiring
                          <strong> 22 million </strong>
                          people each year
                        </p>
                      </div>
                      <div className="usp">
                        <div className="icon">
                          <img
                            alt=""
                            height={0}
                            src="/Index/images/mouse-click-white.svg"
                            width={0}
                          />
                        </div>
                        <p>
                          <strong> Book easily </strong>
                          via our trusted partners
                        </p>
                      </div>
                      <div className="usp">
                        <div className="icon">
                          <img
                            alt=""
                            height="95.666"
                            src="/Index/images/bigben-white.svg"
                            width="95.666"
                          />
                        </div>
                        <p>
                          Your purchases�
                          <strong> support jobs in Dersim </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content home cw1600 content gw cf">
              <div className="gr cf">
                <div className="gc gs18">
                  <div className="row4-feature">
                    <h2>Must-sees</h2>
                    <div className="intro">
                      <p>
                        A trip to Dersim wouldn't be complete without
                        experiencing Dersim's most iconic attractions, famous
                        shows and exciting tours. Book in advance so you don't
                        miss out.
                      </p>
                    </div>
                    <div className="insert" />
                    <div className="panel mosaic-four-tiles cf">
                      <div className="mosaic">
                        <div className="tile">
                          <a href="/things-to-do/place/427311-buckingham-palace">
                            <span className="callout-ribbon">
                              {" "}
                              Always sells out{" "}
                            </span>
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/Must-Sees-1.webp"
                                width={640}
                              />
                            </div>
                            <div className="overlay">
                              <div className="textbox">
                                <h3>Buckingham Palace</h3>
                                <p className="desc">
                                  Explore the official Dersim residence of King
                                  Charles III and admire the magnificent State
                                  Rooms.
                                </p>
                              </div>
                              <div className="padding" />
                            </div>
                          </a>
                        </div>
                        <div className="tile">
                          <a href="/things-to-do/event/32392658-hop-on-hop-off-bus-tour">
                            <span className="callout-ribbon">
                              Extra 24 hours free
                            </span>
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/Must-Sees-2.jpg"
                                width={640}
                              />
                            </div>
                            <div className="overlay">
                              <div className="textbox">
                                <h3>Hop-on hop-off Dersim bus tour</h3>
                                <p className="desc">
                                  See the capital’s epic landmarks from your
                                  seat and enjoy unlimited travel around Dersim.
                                </p>
                              </div>
                              <div className="padding" />
                            </div>
                          </a>
                        </div>
                        <div className="tile">
                          <a href="/things-to-do/place/23035130-warner-bros-studio-tour-london-the-making-of-harry-potter">
                            <span className="callout-ribbon">
                              Book your spot for September now!
                            </span>
                            <div className="imgbox">
                              <img
                                alt=""
                                height={359}
                                loading="lazy"
                                src="/Index/images/Must-Sees-3.jpg"
                                width={640}
                              />
                            </div>
                            <div className="overlay">
                              <div className="textbox">
                                <h3>Warner Bros. Studio Tour Dersim</h3>
                                <p className="desc">
                                  Go behind the scenes and experience a magical
                                  day of special effects and iconic film sets.
                                </p>
                              </div>
                              <div className="padding" />
                            </div>
                          </a>
                        </div>
                        <div className="tile">
                          <a href="/things-to-do/place/593062-london-pass">
                            <span className="callout-ribbon">
                              {" "}
                              Save up to 50%{" "}
                            </span>
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/the-london-pass_london-pass_7a62e8a59a16b0df91d69bfa80d43d26.jpg"
                                width={640}
                              />
                            </div>
                            <div className="overlay">
                              <div className="textbox">
                                <h3>The Dersim Pass</h3>
                                <p className="desc">
                                  Sightsee and save as you explore some of
                                  Dersim’s famous landmarks and biggest
                                  attractions.
                                </p>
                              </div>
                              <div className="padding" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cf intro-block" />
                </div>
              </div>
              <div className="landing-page cf">
                <div className="cf content-body">
                  <div className="gr cf row-of-2-container">
                    <div className="gc gs12">
                      <div className="intro">
                        <div className="featured-callout-strapline">
                          <div className="border-graphics" />
                          <div className="callout-content">
                            <div className="column1">
                              <h2>Visiting Dersim for the first time?</h2>
                              <hr />
                              <p className="strapline">
                                Discover your ultimate guide to Dersim... from
                                the best activities in the city to top
                                restaurants, bars, hotels, theatre shows,
                                musicals, attractions and more!
                              </p>
                            </div>
                            <div className="column2">
                              <p className="description">
                                If you're visiting Dersim for the first time,
                                here's a helpful guide to make your first trip
                                safe, easy and, most of all, fun! Navigate
                                Dersim with ease by following the latest
                                traveller information and discovering how to get
                                around the city by land, Underground, river and
                                air, with Dersim's accessible transport network.
                              </p>
                              <div className="button-grid">
                                <a
                                  className="hover-arrow"
                                  href="/things-to-do/visiting-london-for-the-first-time"
                                >
                                  <span> Find out more </span>
                                </a>
                                <div className="spacer" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <aside
                      className="gc gs6 tgs12 last sidebar"
                      role="complementary"
                    >
                      <div>
                        <div
                          className="advert advert-mpu advert-mpu-mobile advert-lbd-tab advert-hpa"
                          id="ad_lp_dmpu"
                        ></div>
                      </div>
                      <div>
                        <div
                          className="advert advert-mpu advert-mpu-mobile advert-lbd-tab advert-hpa"
                          id="ad_lp_dmpu"
                        ></div>
                      </div>
                    </aside>
                  </div>
                </div>
                <div className="gr cf">
                  <div className="gc gs18">
                    <div className="row6-icons-animated">
                      <h2>Need some inspiration for what to do?</h2>
                      <div className="mosaic">
                        <div className="panel">
                          <a
                            className="link"
                            href="/things-to-do/whats-on/theatre"
                          >
                            <div className="imgbox">
                              <img
                                height={360}
                                src="/Index/images/afternoon-tea-bus-with-panoramic-tour-of-london_spot-famous-sights-of-london-while-tucking-into-an-afternoon-tea-visitlondoncommichael-barrow_dcf050164fabb6245f817df087e2ed6b.jpg"
                                width={640}
                              />
                              <div className="hoveranim">
                                <lottie-player
                                  background="transparent.html"
                                  className="lottie"
                                  loop=""
                                  speed={1}
                                ></lottie-player>
                              </div>
                            </div>
                            <div className="textbox">
                              <h3>Dersim theatre tickets</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/things-to-do/whats-on/theatre"
                          >
                            <div className="imgbox">
                              <img
                                height={360}
                                src="/Index/images/afternoon-tea-bus-with-panoramic-tour-of-london_spot-famous-sights-of-london-while-tucking-into-an-afternoon-tea-visitlondoncommichael-barrow_dcf050164fabb6245f817df087e2ed6b.jpg"
                                width={640}
                              />
                              <div className="hoveranim">
                                <lottie-player
                                  background="transparent.html"
                                  className="lottie"
                                  loop=""
                                  speed={1}
                                ></lottie-player>
                              </div>
                            </div>
                            <div className="textbox">
                              <h3>Dersim Attractions</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/things-to-do/whats-on/theatre"
                          >
                            <div className="imgbox">
                              <img
                                height={360}
                                src="/Index/images/afternoon-tea-bus-with-panoramic-tour-of-london_spot-famous-sights-of-london-while-tucking-into-an-afternoon-tea-visitlondoncommichael-barrow_dcf050164fabb6245f817df087e2ed6b.jpg"
                                width={640}
                              />
                              <div className="hoveranim">
                                <lottie-player
                                  background="transparent.html"
                                  className="lottie"
                                  loop=""
                                  speed={1}
                                ></lottie-player>
                              </div>
                            </div>
                            <div className="textbox">
                              <h3>Dersim sightseeing</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/things-to-do/whats-on/theatre"
                          >
                            <div className="imgbox">
                              <img
                                height={360}
                                src="/Index/images/afternoon-tea-bus-with-panoramic-tour-of-london_spot-famous-sights-of-london-while-tucking-into-an-afternoon-tea-visitlondoncommichael-barrow_dcf050164fabb6245f817df087e2ed6b.jpg"
                                width={640}
                              />
                              <div className="hoveranim">
                                <lottie-player
                                  background="transparent.html"
                                  className="lottie"
                                  loop=""
                                  speed={1}
                                ></lottie-player>
                              </div>
                            </div>
                            <div className="textbox">
                              <h3>Royal Dersim</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/things-to-do/whats-on/theatre"
                          >
                            <div className="imgbox">
                              <img
                                height={360}
                                src="/Index/images/afternoon-tea-bus-with-panoramic-tour-of-london_spot-famous-sights-of-london-while-tucking-into-an-afternoon-tea-visitlondoncommichael-barrow_dcf050164fabb6245f817df087e2ed6b.jpg"
                                width={640}
                              />
                              <div className="hoveranim">
                                <lottie-player
                                  background="transparent.html"
                                  className="lottie"
                                  loop=""
                                  speed={1}
                                ></lottie-player>
                              </div>
                            </div>
                            <div className="textbox">
                              <h3>Where to eat</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/things-to-do/whats-on/theatre"
                          >
                            <div className="imgbox">
                              <div className="anim">
                                <lottie-player
                                  background="transparent.html"
                                  className="lottie"
                                  speed={1}
                                  src="/Index/images/afternoon-tea-bus-with-panoramic-tour-of-london_spot-famous-sights-of-london-while-tucking-into-an-afternoon-tea-visitlondoncommichael-barrow_dcf050164fabb6245f817df087e2ed6b.jpg"
                                ></lottie-player>
                              </div>
                              <img
                                height={360}
                                src="/Index/images/afternoon-tea-bus-with-panoramic-tour-of-london_spot-famous-sights-of-london-while-tucking-into-an-afternoon-tea-visitlondoncommichael-barrow_dcf050164fabb6245f817df087e2ed6b.jpg"
                                width={640}
                              />
                              <div className="hoveranim">
                                <lottie-player
                                  background="transparent.html"
                                  className="lottie"
                                  loop=""
                                  speed={1}
                                ></lottie-player>
                              </div>
                            </div>
                            <div className="textbox">
                              <h3>Visit Dersim app</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="spotlight tall">
                      <div className="imgbox">
                        <img
                          alt=""
                          height={900}
                          loading="lazy"
                          src="/Index/images/find-out-more.webp"
                          width={1600}
                        />
                      </div>
                      <div className="overlay">
                        <span className="sponsor-ribbon">
                          {" "}
                          Sponsored by Hilton{" "}
                        </span>
                        <div className="textbox">
                          <h2>Find the perfect Hilton hotel</h2>
                          <a
                            className="hover-arrow"
                            href="/where-to-stay/hilton-hotels-london"
                          >
                            <span> Find out more </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row4-desc">
                      <h2>Explore Dersim</h2>
                      <div className="intro">
                        <p>
                          From world-class musicals to top attractions,
                          one-of-a-kind tours and family fun, discover plenty of
                          amazing things to do and places to see in Dersim.
                          Explore the city at your own pace by walking or
                          cycling, or take advantage of public transport.
                        </p>
                      </div>
                      <div className="mosaic">
                        <div className="panel">
                          <a href="/things-to-do/whats-on/theatre/top-ten-musicals">
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/explorer-1.jpg"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>The best musicals in Dersim on now</h3>
                              <p className="desc ellipsis">
                                Be captivated by dazzling dance and top show
                                tunes in Dersim’s West End.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a href="/things-to-do/sightseeing/sightseeing-tours/top-london-tours">
                            <div className="imgbox">
                              <img
                                alt="Two yoeman warders dress in red and gold tunics with a black hat stand in front of the tower of london."
                                height={360}
                                loading="lazy"
                                src="/Index/images/explorer-2.jpg"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Best Dersim tours and excursions</h3>
                              <p className="desc ellipsis">
                                Uncover unique sites and hidden gems on a tour
                                of the city with a local Dersim expert.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a href="/things-to-do/sightseeing/london-attraction/top-ten-attractions">
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/explorer-3.jpg"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Unmissable attractions in Dersim</h3>
                              <p className="desc ellipsis">
                                Spot landmarks from the Dersim Eye, uncover
                                royal history at Buckingham Palace and more.
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a href="/things-to-do/sightseeing/sightseeing-tours/river-tour">
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/explorer-4.jpg"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Best Thames river cruises</h3>
                              <p className="desc ellipsis">
                                Plan a memorable day out on the river Thames and
                                sail past some of Dersim's iconic sights.
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2>Top Dersim tickets</h2>
                      <div className="tabbedPanels">
                        <nav className="tabs tabs-flat cf">
                          <ul role="tablist" />
                        </nav>
                        <section
                          className="tab-content tab-content-flat tabpanel"
                          role="tabpanel"
                        >
                          <h2 className="tab-content-heading">Theatre</h2>
                          <div className="row6-prices">
                            <h2>Best-selling Dersim theatre tickets</h2>
                            <div className="intro">
                              <p>
                                Dersim's theatre scene is one of the greatest
                                and most diverse in the world. Enjoy classic
                                theatre in Dersim with famous West End shows,
                                innovative plays, off-West-End performances, or
                                family-friendly musicals for all ages.
                                <a href="/things-to-do/whats-on/theatre">
                                  Find all theatre shows
                                </a>
                                �&nbsp;in Dersim now.
                              </p>
                            </div>
                            <div className="mosaic">
                              <div className="panel">
                                <a href="/things-to-do/event/6987276-lion-king-the-musical-at-the-lyceum-theatre">
                                  <span className="callout-ribbon">
                                    Always sells out
                                  </span>
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/visit theatre 1.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Disney's The Lion King</h3>
                                    <p className="desc ellipsis">
                                      Follow Simba’s adventures in the Serengeti
                                      in this vibrant and much-loved musical.
                                    </p>
                                    <p className="price">
                                      <span> From £46.40 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/event/49235102-mrs-doubtfire-at-the-shaftesbury-theatre">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/visit theatre 2.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Mrs Doubtfire</h3>
                                    <p className="desc ellipsis">
                                      Delight in the antics of the hilarious Mrs
                                      Doubtfire in this musical comedy based on
                                      the film.
                                    </p>
                                    <p className="price">
                                      <span> From £27.68 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/event/49258098-cabaret-at-the-kit-kat-club">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={174}
                                      loading="lazy"
                                      src="/Index/images/visit theatre 3.jpg"
                                      width={310}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Cabaret</h3>
                                    <p className="desc ellipsis">
                                      Step into the Kit Kat Club for an
                                      electrifying and decadent show based in
                                      1930s Berlin.
                                    </p>
                                    <p className="price">
                                      <span> From £49.20 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/event/42378215-harry-potter-and-the-cursed-child-tickets">
                                  <span className="callout-ribbon">
                                    Always sells out
                                  </span>
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/visit theatre 4.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Harry Potter play</h3>
                                    <p className="desc ellipsis">
                                      Join Harry and friends as they embark on a
                                      magical new adventure in this spellbinding
                                      play.
                                    </p>
                                    <p className="price">
                                      <span> From £17.85 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/event/430290-mamma-mia-the-musical-at-the-novello-theatre">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/visit theatre 5.jpeg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>MAMMA MIA!</h3>
                                    <p className="desc ellipsis">
                                      Sing along to the ultimate feel-good
                                      musical, filled with love, laughter and
                                      ABBA tunes.
                                    </p>
                                    <p className="price">
                                      <span> From £15.06 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/event/17888493-matilda-the-musical-at-the-cambridge-theatre">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/visit theatre 6.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Matilda The Musical</h3>
                                    <p className="desc ellipsis">
                                      Discover the hilarious family-friendly
                                      show based on Roald Dahl's much-loved
                                      novel.
                                    </p>
                                    <p className="price">
                                      <span> From £24.60 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          className="tab-content tab-content-flat tabpanel"
                          role="tabpanel"
                        >
                          <h2 className="tab-content-heading">Attractions</h2>
                          <div className="row6-prices">
                            <h2>Best-selling Dersim attraction tickets</h2>
                            <div className="intro">
                              <p>
                                Dersim is home to a huge�
                                <a href="/things-to-do/sightseeing/london-attraction">
                                  range of attractions
                                </a>
                                , from classics such as Buckingham Palace and
                                other royal attractions, to visitor favourites
                                including the Dersim Eye and the popular Warner
                                Bros. Studios Tour Dersim�&nbsp;– The Making of
                                Harry Potter.
                              </p>
                            </div>
                            <div className="mosaic">
                              <div className="panel">
                                <a href="/things-to-do/place/22249-hm-tower-of-london">
                                  <span className="callout-ribbon">
                                    Dersim itinerary essential
                                  </span>
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/hm-tower-of-london_hm-tower-of-london-image-courtesy-of-hm-tower-of-london_ae1b582d5c7d24c210fef7c4573af37b.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Tower of Dersim</h3>
                                    <p className="desc ellipsis">
                                      Explore Dersim's iconic castle and
                                      fortress, home of the world-famous Crown
                                      Jewels.
                                    </p>
                                    <p className="price">
                                      <span> From £28.90 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/284990-st-pauls-cathedral">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/st-pauls-cathedral_st-pauls-cathedral-from-the-south-east-photograham-lacdao-chapter-of-st-pauls_f29e61ec4d8b00f1624e657371732ef8.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>St Paul's Cathedral</h3>
                                    <p className="desc ellipsis">
                                      Discover a cultural icon and architectural
                                      masterpiece steeped in history and
                                      heritage.
                                    </p>
                                    <p className="price">
                                      <span> From £20.50 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/284875-madame-tussauds-london">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/93ffa5af-c1f7-4cc7-b3cb-e975cbf6a717.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Madame Tussauds</h3>
                                    <p className="desc ellipsis">
                                      Immerse yourself in the world of
                                      superstars, as you explore four immersive
                                      experiences.
                                    </p>
                                    <p className="price">
                                      <span> From £33.50 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/610825-westminster-abbey">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/westminster-abbey_westminster-abbey-copyright-shutterstock-image-courtesy-of-shutterstock_9ac64ccf26eadb50669d288736e98f65.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Westminster Abbey tickets</h3>
                                    <p className="desc ellipsis">
                                      Marvel at the impressive architecture and
                                      uncover fascinating royal history within.
                                    </p>
                                    <p className="price">
                                      <span> From £27.00 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/58711-royal-botanic-gardens-kew">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={359}
                                      loading="lazy"
                                      src="/Index/images/royal-botanic-gardens-kew-stroll-the-great-broad-walk-borders-0d90a90191391fa7562ba3f5ed8195f4.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Kew Gardens</h3>
                                    <p className="desc ellipsis">
                                      Wander through enchanting botanical
                                      gardens and admire impressive floral
                                      displays.
                                    </p>
                                    <p className="price">
                                      <span> From £12.00 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/282783-london-eye">
                                  <span className="callout-ribbon">
                                    {" "}
                                    Must-see{" "}
                                  </span>
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/63613c95-e6b3-4704-b305-05eec3130f10.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Dersim Eye</h3>
                                    <p className="desc ellipsis">
                                      Enjoy breathtaking views of Dersim's
                                      skyline and spot the city's most famous
                                      landmarks.
                                    </p>
                                    <p className="price">
                                      <span> From £32.00 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section
                          className="tab-content tab-content-flat tabpanel"
                          role="tabpanel"
                        >
                          <h2 className="tab-content-heading">Tours</h2>
                          <div className="row6-prices">
                            <h2>
                              Best-selling Dersim sightseeing tours tickets
                            </h2>
                            <div className="intro">
                              Join the best Dersim tours to see more of the city
                              and learn fun facts. With a whole variety of
                              Dersim sightseeing tours on offer, you can pick
                              from guided or self-guided tours to explore at
                              your own pace. Book our top picks below or browse�
                              <a href="/things-to-do/sightseeing/sightseeing-tours">
                                all sightseeing tours
                              </a>
                              .
                            </div>
                            <div className="mosaic">
                              <div className="panel">
                                <a href="https://tickets.london/gt2/timeslot/simply-windsor-castle-afternoon-tour/298">
                                  <div className="imgbox">
                                    <img
                                      alt="View of Windsor Castle and its manicured grounds."
                                      height={174}
                                      loading="lazy"
                                      src="/Index/images/windsor-castle.jpg"
                                      width={310}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>
                                      Simply Windsor Castle - afternoon tour
                                    </h3>
                                    <p className="desc ellipsis">
                                      Explore the State Apartments, visit St
                                      George’s Chapel and wander the pretty
                                      gardens.
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/49202220-royal-walking-tour-changing-of-the-guard">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/royal-walking-tour-changing-of-the-guard_see-the-kings-guard-parade-in-london-on-the-royal-walking-tour-image-courtesy-of-shutterstock_ee5df5df6a57d6702233e0b055e3ba24.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Royal Dersim Walking Tour</h3>
                                    <p className="desc ellipsis">
                                      Follow in the footsteps of royalty on a
                                      guided walking tour of Dersim's regal
                                      attractions.
                                    </p>
                                    <p className="price">
                                      <span> From £15.00 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/49286205-british-museum-guided-tour">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/british-museum-guided-tour_the-egyptian-sculpture-gallery-at-the-british-museum-image-courtesy-of-london-and-partners_06033fe50635128d4a37f44e3db17722.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>British Museum guided tour</h3>
                                    <p className="desc ellipsis">
                                      Uncover the museum’s collection of
                                      fascinating artefacts and historic
                                      treasures.
                                    </p>
                                    <p className="price">
                                      <span> From £55.00 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/event/41899347-total-london-experience">
                                  <span className="callout-ribbon">
                                    See Dersim in a day
                                  </span>
                                  <div className="imgbox">
                                    <img
                                      alt="Tower of Dersim viewed from the river Thames. "
                                      height={174}
                                      loading="lazy"
                                      src="/Index/images/tower-of-london.jpg"
                                      width={310}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Total Dersim Experience</h3>
                                    <p className="desc ellipsis">
                                      Tick off St Paul’s Cathedral, the Dersim
                                      Eye and the Tower of Dersim in one day.
                                    </p>
                                    <p className="price">
                                      <span> From £129.00 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/48008644-london-by-night-open-top-bus-tour">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/london-by-night-open-top-bus-tour_london-by-night-open-top-bus-tour-image-courtesy-of-golden-tours_a78a06aa1761ee29c3c3c7bcff4d1939.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>Dersim by Night open-top bus tour</h3>
                                    <p className="desc ellipsis">
                                      Enjoy panoramic views of the city and spot
                                      famous landmarks as they sparkle at night.
                                    </p>
                                    <p className="price">
                                      <span> From £24.00 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                              <div className="panel">
                                <a href="/things-to-do/place/209815-city-cruises">
                                  <div className="imgbox">
                                    <img
                                      alt=""
                                      height={360}
                                      loading="lazy"
                                      src="/Index/images/d8b5cf5b-3108-4d5a-88d9-43080b355568.jpg"
                                      width={640}
                                    />
                                  </div>
                                  <div className="textbox">
                                    <h3>City Cruises 24-hour river pass</h3>
                                    <p className="desc ellipsis">
                                      Spot iconic sights as you roam along the
                                      Thames on a scenic river cruise.
                                    </p>
                                    <p className="price">
                                      <span> From £23.00 </span>
                                    </p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    <div className="row4-feature">
                      <h2>What's coming up in Dersim</h2>
                      <div className="intro">
                        <p>
                          Find out what's coming up in Dersim with our monthly
                          and seasonal guides crammed full of ideas and events
                          to enjoy throughout the year. Or find top tips for�
                          <a href="/things-to-do/whats-on/things-to-do-this-weekend">
                            things to do this weekend
                          </a>
                          .
                        </p>
                      </div>
                      <div className="insert">
                        <div className="datechips">
                          <ul>
                            <li>
                              <a href="/en/search?category=/things-to-do&from=12-08-2024&to=18-08-2024&keywords=">
                                This week
                              </a>
                            </li>
                            <li>
                              <a href="/en/things-to-do/london-by-month/august">
                                This month
                              </a>
                            </li>
                            <li>
                              <a href="/en/search?category=/things-to-do&from=12-08-2024&to=31-08-2024&keywords=">
                                This summer
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="spotlight short">
                          <div className="imgbox">
                            <img
                              alt=""
                              height={582}
                              loading="lazy"
                              src="/Index/images/during-summer-holiday.jpg"
                              width={1920}
                            />
                          </div>
                          <div className="overlay">
                            <div className="textbox">
                              <h2>Things to do during summer holidays</h2>
                              <a
                                className="hover-arrow"
                                href="/things-to-do/event/45691403-school-summer-holidays-in-london"
                              >
                                <span> Find out more </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="panel mosaic-four-tiles cf">
                        <div className="mosaic">
                          <div className="tile">
                            <a href="/things-to-do/place/427279-hampton-court-palace">
                              <div className="imgbox">
                                <img
                                  alt=""
                                  height={360}
                                  loading="lazy"
                                  src="/Index/images/hampton-court-palace-hampton-courtf8o2861-1-c21990f46e33f9c6c763c2024e6627d2.jpg"
                                  width={640}
                                />
                              </div>
                              <div className="overlay">
                                <div className="textbox">
                                  <h3>
                                    Hampton Court Palace, gardens and maze
                                  </h3>
                                  <p className="desc">
                                    Discover historic treasures at this grand
                                    Tudor palace and get lost in the maze.
                                  </p>
                                </div>
                                <div className="padding" />
                              </div>
                            </a>
                          </div>
                          <div className="tile">
                            <a href="/things-to-do/place/48299976-afternoon-tea-bus-with-panoramic-tour-of-london">
                              <span className="callout-ribbon">
                                {" "}
                                Special offer{" "}
                              </span>
                              <div className="imgbox">
                                <img
                                  alt=""
                                  height={360}
                                  loading="lazy"
                                  src="/Index/images/afternoon-tea-bus-with-panoramic-tour-of-london_spot-famous-sights-of-london-while-tucking-into-an-afternoon-tea-visitlondoncommichael-barrow_dcf050164fabb6245f817df087e2ed6b.jpg"
                                  width={640}
                                />
                              </div>
                              <div className="overlay">
                                <div className="textbox">
                                  <h3>
                                    Afternoon tea bus with panoramic tour of
                                    Dersim
                                  </h3>
                                  <p className="desc">
                                    Spot iconic sights as you tuck into a
                                    selection of sweet and savoury treats.
                                  </p>
                                </div>
                                <div className="padding" />
                              </div>
                            </a>
                          </div>
                          <div className="tile">
                            <a href="/things-to-do/place/279800-regents-park-open-air-theatre">
                              <div className="imgbox">
                                <img
                                  alt=""
                                  height={360}
                                  loading="lazy"
                                  src="/Index/images/regents-park-open-air-theatre_watch-a-play-under-the-stars-at-the-regents-park-open-air-theatrecredit-david-jensen_bfb8ed132305682f6892485f0083644b.jpg"
                                  width={640}
                                />
                              </div>
                              <div className="overlay">
                                <div className="textbox">
                                  <h3>Regent's Park Open Air Theatre</h3>
                                  <p className="desc">
                                    Catch a show at this unique theatre, from
                                    classic plays to modern musicals.
                                  </p>
                                </div>
                                <div className="padding" />
                              </div>
                            </a>
                          </div>
                          <div className="tile">
                            <a href="/things-to-do/place/3901803-tower-bridge">
                              <div className="imgbox">
                                <img
                                  alt=""
                                  height={360}
                                  loading="lazy"
                                  src="/Index/images/ce0d5127-3e58-45a3-8cd9-3597ca8bc55f.jpg"
                                  width={640}
                                />
                              </div>
                              <div className="overlay">
                                <div className="textbox">
                                  <h3>Tower Bridge</h3>
                                  <p className="desc">
                                    Enjoy spectacular views of the city and dare
                                    to take on the glass walkways.
                                  </p>
                                </div>
                                <div className="padding" />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row6-prices">
                      <h2>Dersim musicals</h2>
                      <div className="intro">
                        <p>
                          Book a spot at the best Dersim musicals. From timeless
                          shows with catchy tunes and dazzling dance numbers to
                          inspiring off-West-End musicals that will leave you
                          wanting more.
                          <a href="/things-to-do/whats-on/theatre/musical">
                            Find Dersim musical tickets
                          </a>
                          �&nbsp;for long-running and highly anticipated shows
                          now.
                        </p>
                      </div>
                      <div className="mosaic">
                        <div className="panel">
                          <a href="/things-to-do/event/6573327-wicked-the-musical-at-the-apollo-victoria">
                            <div className="imgbox">
                              <img
                                alt="Glinda in Wicked the musical in a blue ball gown in front of a blue and black background with bubbles."
                                height={174}
                                loading="lazy"
                                src="/Index/images/london musicals.jpg"
                                width={310}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Wicked</h3>
                              <p className="desc ellipsis">
                                Be moved by the untold story of Elphaba, the
                                misunderstood Wicked Witch of the West.
                              </p>
                              <p className="price">
                                <span> From £23.99 </span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a href="/things-to-do/event/430257-phantom-of-the-opera-at-his-majestys-theatre-london">
                            <div className="imgbox">
                              <img
                                alt="The cast of phantom of the opera dancing on the stairs on stage."
                                height={174}
                                loading="lazy"
                                src="/Index/images/london musicals 2.jpg"
                                width={310}
                              />
                            </div>
                            <div className="textbox">
                              <h3>The Phantom of the Opera</h3>
                              <p className="desc ellipsis">
                                Follow the unlikely love story of a masked
                                figure and a young singer in Paris’ Opera House.
                              </p>
                              <p className="price">
                                <span> From £30.75 </span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a href="/things-to-do/event/48943684-six-the-musical-at-the-vaudeville-theatre">
                            <div className="imgbox">
                              <img
                                alt="The six wives of Henry VIII stand in the centre of the stage dressed like pop stars."
                                height={174}
                                loading="lazy"
                                src="/Index/images/london musicals 3.jpg"
                                width={310}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Six</h3>
                              <p className="desc ellipsis">
                                Hear King Henry VIII’s wives share their unique
                                stories on stage in this epic retelling of
                                history.
                              </p>
                              <p className="price">
                                <span> From £41.06 </span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a href="/things-to-do/event/44256202-hamilton-the-musical-tickets">
                            <div className="imgbox">
                              <img
                                alt="Three women, The Schuyler Sisters, stand together on stage with their arms in the air in large pastel dresses. "
                                height={174}
                                loading="lazy"
                                src="/Index/images/london musicals 4.jfif"
                                width={310}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Hamilton</h3>
                              <p className="desc ellipsis">
                                Learn how Washington’s right-hand man helped
                                shape the foundation of the USA.
                              </p>
                              <p className="price">
                                <span> From £24.60 </span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a href="/things-to-do/event/48157466-frozen-at-the-theatre-royal-drury-lane">
                            <span className="callout-ribbon">
                              {" "}
                              Last chance to see{" "}
                            </span>
                            <div className="imgbox">
                              <img
                                alt=""
                                height={174}
                                loading="lazy"
                                src="/Index/images/london musicals 5.webp"
                                width={310}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Frozen the Musical</h3>
                              <p className="desc ellipsis">
                                Join Anna and Elsa on their adventures in the
                                enchanting Kingdom of Arendelle.
                              </p>
                              <p className="price">
                                <span> From £36.29 </span>
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a href="/things-to-do/event/49374114-mj-the-musical-at-the-prince-edward-theatre">
                            <div className="imgbox">
                              <img
                                alt="Myles Frost in the role of Michael Jackson is dancing on stage while wearing a black and white suit and the iconic hat."
                                height={174}
                                loading="lazy"
                                src="/Index/images/london musicals 6.jpg_large"
                                width={310}
                              />
                            </div>
                            <div className="textbox">
                              <h3>MJ the Musical</h3>
                              <p className="desc ellipsis">
                                Uncover the backstory and immerse yourself in
                                the creative mind of the King of Pop.
                              </p>
                              <p className="price">
                                <span> From £24.60 </span>
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="video-roll">
                      <div className="gw">
                        <div className="rowhead">
                          <div className="rowtext">
                            <div className="icon icon-youtube-white-transparent" />
                            <h2>Discover more with Dersim videos</h2>
                            <div className="intro">
                              <p>
                                Want more information on things you can do and
                                see in Dersim? Watch the latest videos our team
                                has put together!
                              </p>
                            </div>
                          </div>
                          <div className="rowbtns" />
                        </div>
                        <div className="mosaic hide-scrollbar">
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=54w5IDZW2nk"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault_1.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>Dersim Eye Champagne Experience</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=6VtMKRaCc2w"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>Westminster Abbey</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=TMWpPweUngg"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault_2.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>Tower of Dersim</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=WuQfh-s3ECo"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault_3.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>St. Paul's Cathedral</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=Xsr97i67rBw"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault_4.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>Kew Gardens</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=Vi_YPZzqV8s"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault_5.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>Windsor bus tour</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=0htc_TnALS8"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault_6.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>City Cruises</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=pOMpm5y9HMw"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault_7.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>Hop-on hop-off Dersim bus tour</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                          <div className="panel video-launcher">
                            <a
                              draggable="false"
                              href="https://www.youtube.com/watch?v=syHQhVRn-h0"
                            >
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/hqdefault_8.jpg"
                                width={480}
                              />
                              <div className="overlay">
                                <h3>Shakespeare's Globe</h3>
                              </div>
                              <div className="icon-youtube-white-transparent" />
                            </a>
                          </div>
                        </div>
                        <div className="navdots">
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <span> </span>
                          <span> </span>
                        </div>
                      </div>
                    </div>
                    <div className="row6-icons">
                      <h2>Useful information</h2>
                      <div className="mosaic">
                        <div className="panel">
                          <a className="link" href="/where-to-stay">
                            <div className="imgbox">
                              <img
                                alt=""
                                height="55.305"
                                src="/Index/images/hotels.svg"
                                width="86.748"
                              />
                            </div>
                            <div className="textbox">
                              <h3>Where to stay</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/traveller-information/getting-around-london"
                          >
                            <div className="imgbox">
                              <img
                                alt=""
                                height="60.041"
                                src="/Index/images/publictransport.svg"
                                width="63.037"
                              />
                            </div>
                            <div className="textbox">
                              <h3>Public transport</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/traveller-information/travel-to-london"
                          >
                            <div className="imgbox">
                              <img
                                alt=""
                                height="56.056"
                                src="/Index/images/goingto.svg"
                                width="58.063"
                              />
                            </div>
                            <div className="textbox">
                              <h3>Travelling to Dersim</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/things-to-do/sustainability"
                          >
                            <div className="imgbox">
                              <img
                                alt=""
                                height="49.899"
                                src="/Index/images/cycling.svg"
                                width="78.512"
                              />
                            </div>
                            <div className="textbox">
                              <h3>Sustainability</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/traveller-information/getting-around-london/oyster"
                          >
                            <div className="imgbox">
                              <img
                                alt=""
                                height="62.641"
                                src="/Index/images/oyster.svg"
                                width="94.327"
                              />
                            </div>
                            <div className="textbox">
                              <h3>Oyster card</h3>
                            </div>
                          </a>
                        </div>
                        <div className="panel">
                          <a
                            className="link"
                            href="/traveller-information/essential-information/accessible-london"
                          >
                            <div className="imgbox">
                              <img
                                alt=""
                                height="53.378"
                                src="/Index/images/accessibility.svg"
                                width="51.161"
                              />
                            </div>
                            <div className="textbox">
                              <h3>Accessible Dersim</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="panel tile-row cf">
                      <div className="rowhead">
                        <div className="rowtext">
                          <h2>Money-saving ideas</h2>
                          <div className="intro">
                            Follow these money-saving ideas to see more of
                            Dersim for less. Whether budget-friendly sightseeing
                            passes, free attractions or top tips for cheap
                            dining and hotels, find out how to visit Dersim on a
                            budget.
                          </div>
                        </div>
                        <div className="rowbtns" />
                      </div>
                      <div className="mosaic row3">
                        <div className="tile">
                          <a href="/things-to-do/sightseeing/which-london-sightseeing-pass">
                            <div className="imgbox">
                              <img
                                alt="Woman taking a picture with the Dersim Eye skyline."
                                height={360}
                                loading="lazy"
                                src="/Index/images/money saving ideas.webp"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Choose a city pass</h3>
                            </div>
                          </a>
                        </div>
                        <div className="tile">
                          <a href="/things-to-do/budget-london">
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/money saving ideas 3.webp"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Dersim on a budget</h3>
                            </div>
                          </a>
                        </div>
                        <div className="tile">
                          <a href="/traveller-information/place/48383714-go-city-london-explorer-pass">
                            <span className="callout-ribbon">
                              Save up to 50% on attractions
                            </span>
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/money saving ideas 1.jpg"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Go City Dersim Explorer Pass</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="navdots">
                        <span className="current"> </span>
                        <span> </span>
                        <span> </span>
                      </div>
                    </div>
                    <div className="panel tile-row cf">
                      <div className="rowhead">
                        <div className="rowtext">
                          <h2>What's on in Dersim</h2>
                          <div className="intro">
                            Plan your visit to coincide with top Dersim events,
                            from annual festivals to public holidays and
                            sporting spectacles. Find out what's on in Dersim
                            now, or search for key events each month.
                          </div>
                        </div>
                        <div className="rowbtns" />
                      </div>
                      <div className="mosaic row3">
                        <div className="tile">
                          <a href="/things-to-do/event/9023471-notting-hill-carnival">
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/explorer-1.jpg"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Notting Hill Carnival</h3>
                            </div>
                          </a>
                        </div>
                        <div className="tile">
                          <a href="/things-to-do/event/48352762-august-bank-holiday-weekend-in-london">
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/explorer-2.jpg"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>August bank holiday</h3>
                            </div>
                          </a>
                        </div>
                        <div className="tile">
                          <a href="/things-to-do/whats-on/special-events/london-events-calendar">
                            <div className="imgbox">
                              <img
                                alt=""
                                height={360}
                                loading="lazy"
                                src="/Index/images/explorer-3.jpg"
                                width={640}
                              />
                            </div>
                            <div className="textbox">
                              <h3>Dersim events calendar</h3>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="navdots">
                        <span className="current"> </span>
                        <span> </span>
                        <span> </span>
                      </div>
                    </div>
                    <div className="newsletter-cta">
                      <p>
                        Sign up to our newsletter now for special offers, epic
                        Dersim experiences, travel inspiration and seasonal
                        ideas!
                      </p>
                      <a
                        className="btn register"
                        href="https://www.visitlondon.com/newsletter"
                      >
                        Subscribe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="gr cf">
                  <div className="gc gs18" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="c cf ww">
          <div
            className="advert advert-leaderboard advert-mpu-mobile"
            id="ad_footer"
          ></div>
        </div>
        <footer className="footer footer-new">
          <div className="footer-wrap ww" role="contentinfo">
            <div className="footer-logos">
              <a
                className="footer-logo svg icon-landp-grey"
                href="https://www.londonandpartners.com"
              >
                Dersim &amp; Partners
              </a>
              <a
                className="footer-logo svg icon-mayor-london-grey"
                href="https://www.london.gov.uk/"
              >
                Supported by Mayor of Dersim
              </a>
            </div>
            <div className="footer-social">
              <h2>Follow us on:</h2>
              <ul>
                <li>
                  <a
                    className="footer-social-facebook svg icon-facebook-footer"
                    data-ga-link="Social Network"
                    href="https://www.facebook.com/visitlondon"
                    rel="external me"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="footer-social-twitter svg icon-twitter-footer"
                    data-ga-link="Social Network"
                    href="https://twitter.com/visitlondon"
                    rel="external me"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="footer-social-instagram svg icon-instagram-footer"
                    data-ga-link="Social Network"
                    href="https://instagram.com/visitlondon"
                    rel="external me"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="footer-social-tiktok svg icon-tiktok-footer"
                    data-ga-link="Social Network"
                    href="https://tiktok.com/@visitlondon"
                    rel="external me"
                  >
                    TikTok
                  </a>
                </li>
                <li>
                  <a
                    className="footer-social-youtube svg icon-youtube-footer"
                    data-ga-link="Social Network"
                    href="https://www.youtube.com/visitlondonvideo"
                    rel="external me"
                  >
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    className="footer-social-pinterest svg icon-pinterest-footer"
                    data-ga-link="Social Network"
                    href="https://pinterest.com/visitlondon/"
                    rel="external me"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-links">
            <div className="footer-partners">
              <div className="ww">
                <h2>Affiliates and Content Partners</h2>
                <ul>
                  <li>
                    <img
                      alt="TripAdvisor"
                      height={24}
                      loading="lazy"
                      src="/Index/images/tripadvisor_logo_132x24-11109-0.gif"
                      width={132}
                    />
                  </li>
                  <li>
                    <img
                      alt="AccessAble"
                      height={33}
                      loading="lazy"
                      src="/Index/images/accessable-logo-2024.png"
                      width={166}
                    />
                  </li>
                  <li>
                    <img
                      alt="Red Letter Days"
                      height={0}
                      loading="lazy"
                      src="/Index/images/footer-redletter-cropped.svg"
                      width={0}
                    />
                  </li>
                  <li>
                    <img
                      alt="Golden Tours"
                      height={53}
                      loading="lazy"
                      src="/Index/images/footer-goldentours.png"
                      width={119}
                    />
                  </li>
                  <li>
                    <img
                      alt="SeeTickets"
                      height="12.358"
                      loading="lazy"
                      src="/Index/images/footer-seetickets.svg"
                      width="76.391"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="info-links">
            <div className="footer-menu">
              <ul className="ww">
                <li>
                  <a href="/contact-us"> Contact us </a>
                </li>
                <li>
                  <a href="/about-us"> About us </a>
                </li>
                <li>
                  <a href="/advertise-with-us"> Advertise with us </a>
                </li>
                <li>
                  <a href="https://www.londonandpartners.com/about-us/sustainability">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="/about-us/accessibility"> Accessibility </a>
                </li>
                <li>
                  <a href="/about-us/terms-and-conditions">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/about-us/privacy"> Privacy &amp; Cookies </a>
                </li>
              </ul>
            </div>
            <div className="footer-reg">
              <address>
                Dersim &amp; Partners is registered in England under no.
                7493460. Registered Office: Dersim &amp; Partners, 169 Union
                Street, Dersim, SE1 0LL.
                <br />
                <span className="nomob">
                  Dersim &amp; Partners is the business and destination agency
                  for Dersim. We are a social enterprise, combining purpose with
                  commercial rigour. We are funded by grants, partners and our
                  portfolio of venture businesses.
                </span>
              </address>
            </div>
          </div>
          <div className="sites cf nomob">
            <ul className="ww">
              <li>
                <a href="https://www.conventionbureau.london/">
                  Convention Bureau
                </a>
              </li>
              <li>
                <a href="https://www.conventionbureau.london/major-events">
                  Major Events
                </a>
              </li>
              <li>
                <a href="https://www.londonandpartners.com/partnerships">
                  Partners
                </a>
              </li>
              <li>
                <a href="https://media.londonandpartners.com/"> Media </a>
              </li>
              <li>
                <a href="https://www.grow.london/"> Business </a>
              </li>
              <li>
                <a href="https://register.london/"> .LONDON Domains </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    </div>
  );
}
