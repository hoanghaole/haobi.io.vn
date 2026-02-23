import {
    Database,
    Menu,
    ArrowRight,
    BookOpen,
    TrendingUp,
    BarChart2,
    Settings,
    Activity
} from 'lucide-react';

export default function WebsiteView() {
    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root">
            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
                <div className="flex h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                            <Database size={20} />
                        </div>
                        <h2 className="text-slate-900 text-lg font-bold tracking-tight">Data & Automation Co.</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Services</a>
                        <a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Industries</a>
                        <a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">Case Studies</a>
                        <a className="text-slate-600 hover:text-primary text-sm font-medium transition-colors" href="#">About</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex bg-primary hover:bg-primary-dark text-white text-sm font-bold h-10 px-5 rounded items-center justify-center transition-colors">
                            Get a Consultation
                        </button>
                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2 text-slate-600" aria-label="Menu">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
                    {/* Abstract Background Elements */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Hero Content */}
                            <div className="flex flex-col gap-6 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit">
                                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Leading B2B Solutions</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                                    Expertise in solving operational challenges through <span className="text-primary">Data and Automation</span>
                                </h1>

                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Empowering healthcare and enterprise organizations to achieve operational excellence. We turn complex data into actionable efficiency.
                                </p>

                                <div className="flex flex-wrap gap-4 mt-2">
                                    <button className="h-12 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                                        <span>View Our Solutions</span>
                                        <ArrowRight size={20} />
                                    </button>
                                    <button className="h-12 px-6 rounded-lg bg-white border border-slate-200 text-slate-900 font-bold text-base hover:bg-slate-50 transition-all flex items-center gap-2">
                                        <span>Read Case Studies</span>
                                        <BookOpen size={20} />
                                    </button>
                                </div>

                                {/* Trust Signals (Small) */}
                                <div className="mt-8 pt-8 border-t border-slate-200">
                                    <p className="text-sm font-medium text-slate-500 mb-4">Trusted by innovative leaders in healthcare & tech</p>
                                    <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                                        <div className="h-8 w-24 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">ACME CORP</div>
                                        <div className="h-8 w-24 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">MEDITECH</div>
                                        <div className="h-8 w-24 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">GLOBAL DATA</div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 group">
                                <img
                                    alt="Abstract data visualization dashboard"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>

                                {/* Floating Card Badge */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 border border-slate-100 flex items-start gap-4 max-w-sm">
                                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Efficiency Increased</p>
                                        <p className="text-xs text-slate-500 mt-1">+34% operational output reported in Q3 by our healthcare partners.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-end mb-12">
                            <div className="max-w-2xl">
                                <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
                                <h3 className="text-3xl font-bold text-slate-900">Core Niches</h3>
                                <p className="text-slate-600 mt-4 text-lg">Driving efficiency through specialized pillars of technology and strategy.</p>
                            </div>
                            <a className="text-primary hover:text-primary-dark font-semibold flex items-center gap-1 group" href="#">
                                Explore all services
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="group relative flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all">
                                <div className="h-12 w-12 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <BarChart2 size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">Data Analytics</h4>
                                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                                    Unlock the hidden value in your data with advanced predictive modeling and visualization strategies designed for decision makers.
                                </p>
                                <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark mt-2" href="#">
                                    Learn more <ArrowRight size={16} className="ml-1" />
                                </a>
                            </div>

                            {/* Feature 2 */}
                            <div className="group relative flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all">
                                <div className="h-12 w-12 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Settings size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">Business Process Automation</h4>
                                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                                    Streamline workflows and reduce manual errors with custom RPA and AI-driven automation tailored to enterprise needs.
                                </p>
                                <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark mt-2" href="#">
                                    Learn more <ArrowRight size={16} className="ml-1" />
                                </a>
                            </div>

                            {/* Feature 3 */}
                            <div className="group relative flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all">
                                <div className="h-12 w-12 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Activity size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">Operational Excellence</h4>
                                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                                    Strategic consulting to optimize resource allocation and improve healthcare delivery outcomes through data-backed insights.
                                </p>
                                <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark mt-2" href="#">
                                    Learn more <ArrowRight size={16} className="ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white border-t border-slate-200 py-10 px-5 text-center">
                <div className="max-w-7xl mx-auto flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white">
                                <Database size={14} />
                            </div>
                            <span className="text-slate-900 font-bold">Data & Automation Co.</span>
                        </div>
                        <div className="flex gap-6">
                            <a className="text-slate-500 hover:text-primary text-sm" href="#">Privacy Policy</a>
                            <a className="text-slate-500 hover:text-primary text-sm" href="#">Terms of Service</a>
                            <a className="text-slate-500 hover:text-primary text-sm" href="#">LinkedIn</a>
                            <a className="text-slate-500 hover:text-primary text-sm" href="#">Twitter</a>
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm">© 2024 Data & Automation Consultancy. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
