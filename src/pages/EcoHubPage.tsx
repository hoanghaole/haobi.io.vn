import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function EcoHubPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            try {
                const { data: productsData, error: productsError } = await supabase
                    .from('products')
                    .select('*')
                    .order('order', { ascending: true });

                if (productsError) throw productsError;
                if (productsData) {
                    setProducts(productsData);
                }
            } catch (err) {
                console.error("Error fetching products from Supabase:", err);
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    return (
        <div className="bg-white text-slate-900 antialiased">

            <div className="relative flex min-h-screen w-full flex-col group/design-root">
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
                            <a className="text-sm font-medium text-slate-600 hover:text-eco-primary dark:text-slate-300 dark:hover:text-eco-primary transition-colors" href="#">Tools</a>
                            <a className="text-sm font-medium text-slate-600 hover:text-eco-primary dark:text-slate-300 dark:hover:text-eco-primary transition-colors" href="#">About</a>
                            <a className="text-sm font-medium text-slate-600 hover:text-eco-primary dark:text-slate-300 dark:hover:text-eco-primary transition-colors" href="#">Contact</a>
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
                <main className="flex-grow overflow-x-hidden">
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
                    {/*  Products Grid Section  */}
                    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8" id="products">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {loading ? (
                                Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all animate-pulse h-full">
                                        <div className="h-40 w-full rounded-xl bg-slate-200 dark:bg-slate-700 mb-2"></div>
                                        <div className="flex gap-2">
                                            <div className="h-5 w-16 bg-slate-200 dark:bg-slate-700 rounded text-[10px]"></div>
                                            <div className="h-5 w-24 bg-slate-200 dark:bg-slate-700 rounded text-[10px]"></div>
                                        </div>
                                        <div className="h-6 w-3/4 bg-slate-200 dark:bg-slate-700 rounded mt-2"></div>
                                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                                        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
                                        <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                    </div>
                                ))
                            ) : products.length > 0 ? (
                                products.map((product) => (
                                    <div key={product.id} className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-eco-primary/50 hover:shadow-lg transition-all h-full ring-1 ring-transparent hover:ring-eco-primary/20">
                                        {/* Thumnail if image provided */}
                                        <div className="h-48 w-full rounded-xl bg-slate-50 dark:bg-slate-900/50 overflow-hidden mb-2 relative">
                                            {product.image ? (
                                                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-800">
                                                    <span className="material-symbols-outlined text-4xl opacity-50">image</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-2">
                                            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 uppercase tracking-wider">{product.category}</span>
                                            {product.tag && <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-eco-primary/10 text-eco-primary uppercase tracking-wider">{product.tag}</span>}
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{product.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm flex-1">
                                            {product.description}
                                        </p>

                                        <a className="inline-flex items-center text-sm font-bold text-eco-primary hover:text-blue-600 mt-4 group/btn" href={product.link || "#"} target="_blank" rel="noopener noreferrer">
                                            {product.cta || "Khám phá ngay"} <span className="material-symbols-outlined text-sm ml-1 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800">
                                    <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-slate-600 mb-4">apps</span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Chưa có sản phẩm nào</h3>
                                    <p className="text-slate-500 dark:text-slate-400 max-w-sm">Hệ thống đang cập nhật các giải pháp công nghệ và tự động hoá mới nhất. Xin vui lòng quay lại sau.</p>
                                </div>
                            )}
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
