import React from 'react';

export default function ArticleDetail() {
  return (
    <div className="bg-article-bg-light text-[#111812] font-display antialiased flex flex-col min-h-screen" style={{ fontFamily: "'Noto Serif', serif" }}>
      <style>{`
        .article-wrapper .font-sans {
            font-family: 'Noto Sans', sans-serif;
        }
        .article-wrapper .font-display, .article-wrapper .font-serif {
            font-family: 'Noto Serif', serif;
        }
      `}</style>
      <div className="article-wrapper flex-grow w-full">
      
{/*  Top Navbar  */}
<header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#2a382e] px-10 py-4 bg-white dark:bg-[#1a2c1d]">
<div className="flex items-center gap-4 text-[#111812] dark:text-white">
<div className="size-6 text-article-primary">
<span className="material-symbols-outlined text-2xl">menu_book</span>
</div>
<h2 className="text-[#111812] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">Haobi's Stories</h2>
</div>
<div className="flex flex-1 justify-end gap-8 hidden md:flex">
<div className="flex items-center gap-9">
<a className="text-[#111812] dark:text-gray-200 text-sm font-medium leading-normal hover:text-article-primary transition-colors" href="#">Home</a>
<a className="text-[#111812] dark:text-gray-200 text-sm font-medium leading-normal hover:text-article-primary transition-colors" href="#">About</a>
<a className="text-[#111812] dark:text-gray-200 text-sm font-medium leading-normal hover:text-article-primary transition-colors" href="#">Blog</a>
<a className="text-[#111812] dark:text-gray-200 text-sm font-medium leading-normal hover:text-article-primary transition-colors" href="#">Contact</a>
</div>
<button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-article-primary text-[#111812] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-article-primary/90 transition-colors">
<span className="truncate">Subscribe</span>
</button>
</div>
<div className="md:hidden">
<span className="material-symbols-outlined">menu</span>
</div>
</header>
{/*  Main Content Area  */}
<main className="flex-1 w-full max-w-4xl mx-auto px-6 py-10 md:py-16">
{/*  Breadcrumbs  */}
<nav className="flex flex-wrap items-center gap-2 mb-8 text-sm font-sans">
<a className="text-gray-500 hover:text-article-primary transition-colors" href="#">Home</a>
<span className="text-gray-400">/</span>
<a className="text-gray-500 hover:text-article-primary transition-colors" href="#">Blog</a>
<span className="text-gray-400">/</span>
<span className="text-gray-800 dark:text-gray-200 font-medium">Data &amp; Wisdom</span>
</nav>
{/*  Article Header  */}
<header className="mb-10 text-center md:text-left">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#111812] dark:text-white mb-6">
                The Intersection of Big Data and Ancient Bazi Wisdom
            </h1>
<div className="flex items-center justify-center md:justify-start gap-4 text-gray-600 dark:text-gray-400 font-sans text-sm md:text-base">
<div className="flex items-center gap-2">
<div className="size-8 rounded-full bg-gray-200 overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="Portrait of the author Haobi smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtTYvHs3Ijn4jMujV6JGhguKmdrK2vwDzAu56SkyCWANP925bUpj2g0B6LkYuMoq8cM5OU59u7gispMCMhXITrk37A00X-kfpbHviya653byd2UZuvVWoH4Qk8FwkJFrCjW3jV8eVAtQ0PYdbxjpoQdWihgbgQvclOE5OPpKVzWgij5m2zhkbrE5QoYzM1_fav-Ym0CQRd5Yv3HCOxvoOsbVRfdK6RTykCvOQ83Igiw1nnj6seYGIS6ZqLqmF5ZBkGPhNu3OErawc"/>
</div>
<span className="font-bold text-[#111812] dark:text-gray-200">By Haobi</span>
</div>
<span>•</span>
<time datetime="2023-10-24">Oct 24, 2023</time>
<span>•</span>
<span>8 min read</span>
</div>
</header>
{/*  Featured Image  */}
<figure className="mb-12 rounded-xl overflow-hidden shadow-sm">
<img alt="Abstract digital connections resembling constellations in night sky" className="w-full h-auto aspect-video object-cover" data-alt="Abstract digital connections resembling constellations in night sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRNtBDfOOXXMIb5XgZJ2eKjU4fJuawE1uM4XygzgQ7IehCUp0w5H960r_Y9ayX6KcteFnJulelw7rGmbx6uBHNSRT0ccoOkVGszUYrbOWQfLae5p1M8NCSq4-o74sbJjQnNPPCGaQKdFwNSyOLIcCjxO_pa0_oRMzcIW3NIo_cw1l2EBQdTWFdd_-xfaktYrNTfpuiJoTZcXHtDnODWrq8uOrC1HqvbCk0jKEfFZp1eG_N9ReokL04B9SIONyTiLW6Z8X3T8pgGMo"/>
<figcaption className="mt-3 text-center text-sm text-gray-500 italic font-sans">
                Mapping the constellations of data points in our modern lives.
            </figcaption>
</figure>
{/*  Content Body  */}
<article className="prose prose-lg prose-headings:font-display prose-p:font-display prose-li:font-display max-w-none text-[#111812]/90 dark:text-gray-300">
<p className="text-xl leading-relaxed mb-6 font-serif">
                In the modern world, we often look to numbers for answers. We track metrics, analyze trends, and build predictive models. We are obsessed with the "what" and the "how much." Yet, ancient wisdom offers a different kind of predictive power—one that focuses on the "when" and the "why."
            </p>
<p className="mb-8 leading-relaxed">
                Big Data gives us the granular details of human behavior, aggregating billions of signals to forecast consumer trends or economic shifts. Bazi (Eight Characters), a system of Chinese astrology, looks at the energy imprint of time itself to forecast individual and collective cycles. Surprisingly, when we layer these two distinct disciplines, a fascinating harmony emerges.
            </p>
<h2 className="text-3xl font-bold mt-12 mb-6 text-[#111812] dark:text-white">Patterns in the Chaos</h2>
<p className="mb-8 leading-relaxed">
                Just as a data scientist cleans a dataset to find the signal in the noise, a Bazi master analyzes the elemental balance of a chart. Both are systems of pattern recognition. The algorithm looks for correlation; the sage looks for balance.
            </p>
{/*  Blockquote  */}
<div className="my-12 pl-6 md:pl-10 border-l-4 border-article-primary/50 py-2">
<blockquote className="text-2xl md:text-3xl italic font-serif text-[#111812] dark:text-white leading-normal">
                    "Data tells us what is happening; wisdom tells us why it matters. Without the 'why', prediction is merely observation without insight."
                </blockquote>
</div>
<p className="mb-8 leading-relaxed">
                Recent analysis of market volatility aligns eerily well with the Water-Fire clashes predicted in the yearly Bazi charts. While correlation does not imply causation, the synchronization suggests that our modern "random" data might be flowing through ancient, predictable channels.
            </p>
{/*  Data Chart Placeholder  */}
<div className="my-12 p-8 bg-white dark:bg-[#1a2c1d] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm">
<h3 className="text-lg font-bold mb-6 font-sans text-gray-900 dark:text-gray-100">Cyclical Trends: Bazi Elements vs. Market Volatility</h3>
<div className="flex items-end gap-4 h-64 w-full">
{/*  Chart Bars  */}
<div className="flex-1 bg-article-primary/20 rounded-t-sm relative group h-[40%]">
<div className="absolute -top-8 w-full text-center text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity">Year 1</div>
</div>
<div className="flex-1 bg-article-primary/40 rounded-t-sm relative group h-[60%]">
<div className="absolute -top-8 w-full text-center text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity">Year 2</div>
</div>
<div className="flex-1 bg-article-primary/30 rounded-t-sm relative group h-[55%]">
<div className="absolute -top-8 w-full text-center text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity">Year 3</div>
</div>
<div className="flex-1 bg-article-primary/60 rounded-t-sm relative group h-[85%]">
<div className="absolute -top-8 w-full text-center text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity">Year 4</div>
</div>
<div className="flex-1 bg-article-primary rounded-t-sm relative group h-[95%]">
<div className="absolute -top-8 w-full text-center text-xs font-bold text-article-primary opacity-100">Peak Year</div>
</div>
<div className="flex-1 bg-article-primary/50 rounded-t-sm relative group h-[70%]">
<div className="absolute -top-8 w-full text-center text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity">Year 6</div>
</div>
</div>
<div className="flex justify-between mt-4 text-xs font-sans text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-2">
<span>Low Influence</span>
<span>High Influence</span>
</div>
</div>
<h2 className="text-3xl font-bold mt-12 mb-6 text-[#111812] dark:text-white">Key Takeaways</h2>
<ul className="space-y-4 mb-12 list-none pl-0">
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-article-primary mt-1">check_circle</span>
<span><strong>Cycles are universal.</strong> Whether it's a 10-year economic cycle or a 10-year Luck Pillar, the rhythm of rise and fall is constant.</span>
</li>
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-article-primary mt-1">check_circle</span>
<span><strong>Context is king.</strong> Big Data provides the text, but philosophy provides the context. One without the other is incomplete.</span>
</li>
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-article-primary mt-1">check_circle</span>
<span><strong>Prediction is preparation.</strong> The goal isn't to control the future, but to prepare our sails for the winds that are coming.</span>
</li>
</ul>
<p className="leading-relaxed">
                As we move forward into an increasingly quantified world, perhaps the most valuable data points aren't the ones we collect from our devices, but the ones we observe in nature and time itself.
            </p>
</article>
{/*  Divider  */}
<hr className="my-16 border-gray-200 dark:border-gray-800"/>
{/*  Author Bio  */}
<div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white dark:bg-[#1a2c1d] p-8 rounded-xl border border-gray-100 dark:border-gray-800">
<div className="size-24 md:size-28 flex-shrink-0 rounded-full overflow-hidden border-2 border-article-primary/20">
<img className="w-full h-full object-cover" data-alt="Close up of Haobi smiling in natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKGpuyHQtrHlV8XP3yWsJgHYtBGNGo8OisganE7F1BOEyTrEHU4ZcnvPxfRkhcxYdiR3dcSURRd0Tt9PyafkJtEjMbOoibCjxkvpmUbIRwxC4cRkysJ7gl6zU3XUKKievIdv7fEER8IQheNsrrVKQ0GBfNtXTs18acDWnkR8eM1f8_RH3512tgvinHkqzQynZ3ZT0DScMlbTFxGYY7V_SHjOhx-i0pOQyMVLvMEAC_My7mlC892RVtMT9qhgb1wy5eJ3z_Is_ohqs"/>
</div>
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-3 mb-2">
<h3 className="text-xl font-bold text-[#111812] dark:text-white">About Haobi</h3>
<a aria-label="LinkedIn Profile" className="text-gray-400 hover:text-[#0077b5] transition-colors" href="#">
{/*  LinkedIn styled icon via Material Symbols approximation or SVG placeholder since font icons requested  */}
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
</a>
</div>
<p className="text-gray-600 dark:text-gray-300 font-sans mb-4 max-w-lg">
                    Data storyteller, Bazi enthusiast, and father. Bridging the gap between cold hard numbers and the warm rhythms of life.
                </p>
<button className="text-sm font-bold text-article-primary hover:text-article-primary/80 transition-colors uppercase tracking-wider">
                    View full profile
                </button>
</div>
</div>
{/*  Related Posts  */}
<section className="mt-20">
<div className="flex items-center gap-2 mb-8">
<span className="material-symbols-outlined text-article-primary">auto_awesome</span>
<h3 className="text-lg font-bold font-sans uppercase tracking-widest text-gray-500">You might also like</h3>
</div>
<div className="grid md:grid-cols-3 gap-8">
{/*  Related Post 1  */}
<a className="group block" href="#">
<div className="mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
<div className="h-48 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" data-alt="Minimalist desk setup with open notebook and pen" style={{ backgroundImage: "url('" + "https://lh3.googleusercontent.com/aida-public/AB6AXuCnoWW6G9uxDAzB9TlX9hTvvYGPsAWVN6eE35pw1Ftok3qNdmY0RsEZaa_ZAh0x5447iJwr1hx82bVGHz8qee3fCgZoK4rYoXPgxRBBXzJzliyS4uJG_fCl6S0VWwx5xNoDoP3NiJMPOjtaCNBKxS9J50ingrAXkkutHWjzT546Iyz-yHOcG_fXmSa0z7vh58-uWXFKR2ZXHdKNHKCIeaBdDIADzpQCIqAEJXlVQZTVSQe4AFhi7mipYFBd7NTxhYGyHwXh4AXYwXo" + "')" }}></div>
</div>
<h4 className="text-xl font-bold mb-2 group-hover:text-article-primary transition-colors text-[#111812] dark:text-white">Calculating Your Luck Cycle</h4>
<p className="text-sm text-gray-500 font-sans">Understanding the 10-year pillars of destiny.</p>
</a>
{/*  Related Post 2  */}
<a className="group block" href="#">
<div className="mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
<div className="h-48 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" data-alt="Digital dashboard showing complex data visualization graphs" style={{ backgroundImage: "url('" + "https://lh3.googleusercontent.com/aida-public/AB6AXuAgr1QstUPJ-6JHFG2l0aZixy_c0GtaknPiVIE9ctwjk00RljFHeEbsV_0_qR-yiF7MyEKj_EyLGtO4tC-yBZDOAlE6KaLHGpsmSu5if6UhqeB9cpZGI6MvOZHG1SPdMvRO_2uR43nrnf-OMPbm2M-Aed2FQilIJOmJ5XNUyiORcCBsK1OJZU2Z49E1e4muHjV5by8093E_ETOOKMO5Q3zIRhrkj4ZbSL_g-QOBc4hyaAs0X3XYKoSgCRoEghOTybrvqXmM5zVgAD4" + "')" }}></div>
</div>
<h4 className="text-xl font-bold mb-2 group-hover:text-article-primary transition-colors text-[#111812] dark:text-white">The Ethics of Predictive AI</h4>
<p className="text-sm text-gray-500 font-sans">Where does algorithm end and fate begin?</p>
</a>
{/*  Related Post 3  */}
<a className="group block" href="#">
<div className="mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
<div className="h-48 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" data-alt="Morning mist over a traditional Asian temple roof" style={{ backgroundImage: "url('" + "https://lh3.googleusercontent.com/aida-public/AB6AXuARgj8-12QJC9VKhmTlZEs-_tms4Is8SrmywyvJXU4VikZ6LDqJkRqsUM--F6oQ54EG80HwyNDwFXzeNvm-IuxTfc5qnL-QdS5nH-mk8j7kO6SAd9QiB4u88VDboAOk8osl5jvsbnFGC2vnry7bco9NP3CIDnNcKcVY8-N6V9LWkmwlFv4DRYo_gcf3WoM7m0rM5pTjigHqL1YLCcF--5KCUOZE7MSPJQgX8YpM__ML9clDM77tI2MDTSuMKoDYfDepJIXYI3w6ZJ8" + "')" }}></div>
</div>
<h4 className="text-xl font-bold mb-2 group-hover:text-article-primary transition-colors text-[#111812] dark:text-white">Five Elements in Modern Design</h4>
<p className="text-sm text-gray-500 font-sans">Applying Wood, Fire, Earth, Metal, Water to UX.</p>
</a>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="mt-auto border-t border-gray-100 dark:border-gray-800 py-12 bg-white dark:bg-[#1a2c1d]">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-gray-400 font-sans">© 2023 Haobi's Stories. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-article-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
<a className="text-gray-400 hover:text-article-primary transition-colors" href="#"><span className="material-symbols-outlined">rss_feed</span></a>
</div>
</div>
</footer>

      </div>
    </div>
  );
}
