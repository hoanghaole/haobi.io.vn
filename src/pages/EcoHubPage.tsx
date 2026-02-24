import { useMenuItems } from '../hooks/useMenuItems';
import { Link } from 'react-router-dom';

export default function EcoHubPage() {
  const { menuItems } = useMenuItems();
  return (
    <div className="bg-white text-slate-900 antialiased overflow-x-hidden">

      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        {/*  Header  */}
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-eco-primary text-white">
                <span className="material-symbols-outlined text-xl">hub</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Haobi Ecosystem</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-medium text-slate-600 hover:text-eco-primary dark:text-slate-300 dark:hover:text-eco-primary transition-colors" to="/">Trang chủ</Link>
              {menuItems.map(item => (
                <a
                  key={item.id}
                  className="text-sm font-medium text-slate-600 hover:text-eco-primary dark:text-slate-300 dark:hover:text-eco-primary transition-colors"
                  href={item.url}
                  target={item.open_in_new ? "_blank" : "_self"}
                  rel={item.open_in_new ? "noopener noreferrer" : ""}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex h-9 items-center justify-center rounded-lg bg-slate-100 px-4 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700">
                Log in
              </button>
              <button className="h-9 items-center justify-center rounded-lg bg-eco-primary px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-primary">
                Get Started
              </button>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          {/*  Hero Section  */}
          <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
              <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                Explore the <span className="text-eco-primary">Haobi Ecosystem</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                Smart tools and applications designed to optimize your work, life, and personal growth. Build your perfect workflow with our suite of interconnected micro-products.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a className="rounded-full bg-eco-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eco-primary transition-all" href="#products">
                  Browse Tools
                </a>
                <a className="text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-1 group" href="#">
                  Learn more <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </section>
          {/*  Bento Grid Section  */}
          <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8" id="products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
              {/*  Card 1 (Large)  */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md md:col-span-2 lg:col-span-2 xl:col-span-2 md:row-span-2 ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="absolute right-0 top-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-purple-100 blur-3xl opacity-50 dark:bg-purple-900/30"></div>
                <div className="p-8 flex flex-col h-full z-10">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                    <span className="material-symbols-outlined text-2xl">auto_fix_high</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Visualized Bazi (Tử Vi)</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-md">
                    Unlock ancient wisdom with modern data visualization. Understand your destiny path through interactive star charts and deep analytics.
                  </p>
                  <div className="mt-auto pt-8 flex items-center text-eco-primary font-medium group-hover:underline cursor-pointer">
                    Explore <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50/50 to-transparent dark:from-purple-900/10 pointer-events-none"></div>
                <div className="h-64 w-full bg-cover bg-center mt-4 md:absolute md:bottom-4 md:right-4 md:w-1/2 md:h-2/3 rounded-xl overflow-hidden shadow-sm" data-alt="Abstract purple star chart visualization" style={{ backgroundImage: "url('" + "https://lh3.googleusercontent.com/aida-public/AB6AXuDjRbj3FvO4YxMi1ve-otcnReFuIa0tX8iHyh2tTHiRvR9OqsyuAiGCEQqZ8VkMU2nu91R-1GnXvvTfqsdXLXZQzd--787XD52Hl00XZvVSP-bQMa6AAr9C4EdpzzRh8K_1yNHxH9ailt-yRNBfCPGdBvG2zlZzdPi3dsB_qbsNUCRXTpJpsFA4ric4ptY8XTo4QInp2fNex1S3uCKoq_kgXwPsu5nbZReBQFkBI_X4BkQWkSE_J67RaBOOlNVsKT5gXxJr_ZiCRk8" + "')" }}></div>
              </div>
              {/*  Card 2 (Medium)  */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md md:col-span-1 lg:col-span-1 md:row-span-2 ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="absolute left-0 bottom-0 -mb-8 -ml-8 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-50 dark:bg-emerald-900/30"></div>
                <div className="p-6 flex flex-col h-full z-10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-xl">track_changes</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">OKR Management</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 mb-6">
                    Track goals and key results efficiently with professional progress tracking and team alignment tools.
                  </p>
                  {/*  Mock UI for OKR  */}
                  <div className="mt-auto space-y-3 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Q3 Revenue</span>
                        <span className="text-emerald-600 font-bold">78%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[78%] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300">User Growth</span>
                        <span className="text-emerald-600 font-bold">45%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[45%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-eco-primary text-sm font-medium group-hover:underline cursor-pointer">
                    View Dashboard <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/*  Card 3 (Medium)  */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md md:col-span-1 lg:col-span-1 md:row-span-1 ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400">
                      <span className="material-symbols-outlined text-xl">monitor_heart</span>
                    </div>
                    <div className="h-8 w-16 bg-blue-50 dark:bg-blue-900/20 rounded flex items-center justify-center">
                      <svg className="w-12 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 50 20">
                        <path d="M0 10 H10 L15 2 L20 18 L25 10 H35 L40 5 L45 15 H50" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Elderly Care Monitor</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Real-time health monitoring and alerts for peace of mind.
                  </p>
                  <div className="mt-4 flex items-center text-eco-primary text-sm font-medium group-hover:underline cursor-pointer">
                    Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/*  Card 4 (Small)  */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md md:col-span-1 lg:col-span-1 ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-500 dark:bg-orange-900/20 dark:text-orange-400">
                    <span className="material-symbols-outlined text-xl">bar_chart_4_bars</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Chart Dictionary</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    A comprehensive library of colorful data visualization charts for developers.
                  </p>
                </div>
                {/*  Decorative Mini Charts  */}
                <div className="px-6 pb-6 flex gap-2 overflow-hidden opacity-60">
                  <div className="w-8 h-8 rounded bg-orange-100 dark:bg-orange-900/30"></div>
                  <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/30"></div>
                  <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/30"></div>
                  <div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-900/30"></div>
                </div>
              </div>
              {/*  Card 5 (Small)  */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md md:col-span-1 lg:col-span-1 ring-1 ring-slate-200 dark:ring-slate-700">
                <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full"></div>
                <div className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-500 dark:bg-indigo-900/20 dark:text-indigo-400">
                    <span className="material-symbols-outlined text-xl">lens_blur</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Personalized AI Camera</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                    Smart photography assistance powered by friendly AI algorithms.
                  </p>
                  <div className="mt-4 flex items-center text-eco-primary text-xs font-medium group-hover:underline cursor-pointer">
                    Try Demo <span className="material-symbols-outlined text-xs ml-1">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/*  Call to Action Card  */}
              <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-900 dark:bg-eco-primary shadow-md transition-all hover:shadow-lg md:col-span-2 lg:col-span-2 text-center p-8">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <h3 className="relative text-2xl font-bold text-white mb-2">Have a custom problem?</h3>
                <p className="relative text-slate-300 mb-6 max-w-sm">Let's build a solution together. I specialize in turning complex data into intuitive interfaces.</p>
                <button className="relative bg-white text-slate-900 hover:bg-slate-100 font-semibold py-2 px-6 rounded-lg transition-colors">
                  Contact Me
                </button>
              </div>
            </div>
          </section>
        </main>
        {/*  Footer  */}
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-eco-primary text-white">
                  <span className="material-symbols-outlined text-sm">hub</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  © 2024 Haobi Ecosystem. All rights reserved.
                </p>
              </div>
              <nav aria-label="Footer" className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12">
                <div className="pb-6">
                  <a className="text-sm leading-6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" href="#">Privacy Policy</a>
                </div>
                <div className="pb-6">
                  <a className="text-sm leading-6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" href="#">Terms of Service</a>
                </div>
                <div className="pb-6">
                  <a className="text-sm leading-6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" href="#">Support</a>
                </div>
              </nav>
              <div className="flex gap-4">
                <a className="text-slate-400 hover:text-slate-500" href="#">
                  <span className="sr-only">Twitter</span>
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a className="text-slate-400 hover:text-slate-500" href="#">
                  <span className="sr-only">GitHub</span>
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}
