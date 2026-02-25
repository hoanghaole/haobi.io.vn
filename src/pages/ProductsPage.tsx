import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Database, Menu, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMenuItems } from '../hooks/useMenuItems';

export default function ProductsPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { menuItems, loading: menuLoading } = useMenuItems();

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
        <div className="relative flex min-h-screen w-full flex-col group/design-root bg-slate-50">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
                <div className="flex h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                            <Database size={20} />
                        </div>
                        <h2 className="text-slate-900 text-lg font-bold tracking-tight">Data & Automation Co.</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-slate-600 hover:text-primary text-sm font-medium transition-colors shrink-0" to="/">Trang chủ</Link>
                        {menuLoading ? (
                            <>
                                <div className="h-4 w-16 bg-slate-200 animate-pulse rounded"></div>
                                <div className="h-4 w-20 bg-slate-200 animate-pulse rounded"></div>
                                <div className="h-4 w-24 bg-slate-200 animate-pulse rounded"></div>
                            </>
                        ) : menuItems.length > 0 ? (
                            menuItems.map((item) => (
                                <a
                                    key={item.id}
                                    className="text-slate-600 hover:text-primary text-sm font-medium transition-colors flex shrink-0"
                                    href={item.url || "#"}
                                    target={item.open_in_new ? "_blank" : "_self"}
                                    rel={item.open_in_new ? "noopener noreferrer" : ""}
                                >
                                    {item.label}
                                </a>
                            ))
                        ) : null}
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex bg-primary hover:bg-primary-dark text-white text-sm font-bold h-10 px-5 rounded items-center justify-center transition-colors">
                            Nhận tư vấn
                        </button>
                        <button className="md:hidden p-2 text-slate-600" aria-label="Menu">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit mb-4">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">Khám Phá Giải Pháp</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Sản Phẩm & Dịch Vụ</h1>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl">
                        Tổng hợp toàn bộ giải pháp phần mềm, tự động hóa và tư vấn chiến lược mạnh mẽ từ dữ liệu, giúp bạn xây dựng công cụ vượt trội.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {loading ? (
                        Array.from({ length: 8 }).map((_, i) => (
                            <div key={i} className="flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white h-full shadow-sm animate-pulse">
                                <div className="h-40 w-full rounded-lg bg-slate-200 mb-2"></div>
                                <div className="flex gap-2">
                                    <div className="h-5 w-16 bg-slate-200 rounded"></div>
                                    <div className="h-5 w-24 bg-slate-200 rounded"></div>
                                </div>
                                <div className="h-6 w-3/4 bg-slate-200 rounded mt-2"></div>
                                <div className="h-4 w-full bg-slate-200 rounded"></div>
                                <div className="h-4 w-full bg-slate-200 rounded"></div>
                                <div className="h-4 w-2/3 bg-slate-200 rounded"></div>
                                <div className="h-5 w-32 bg-slate-200 rounded mt-4"></div>
                            </div>
                        ))
                    ) : products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="group relative flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all h-full">
                                {/* Thumnail if image provided */}
                                <div className="h-40 w-full rounded-lg bg-blue-50 overflow-hidden mb-2 relative">
                                    {product.image ? (
                                        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-primary bg-primary/10">
                                            <ImageIcon size={32} />
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 uppercase tracking-wider">{product.category}</span>
                                    {product.tag && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-wider">{product.tag}</span>}
                                </div>

                                <h4 className="text-xl font-bold text-slate-900">{product.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm flex-1">
                                    {product.description}
                                </p>

                                <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark mt-4" href={product.link || "#"} target="_blank" rel="noopener noreferrer">
                                    {product.cta || "Khám phá ngay"} <ArrowRight size={16} className="ml-1" />
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-slate-200 rounded-2xl bg-white">
                            <Database size={48} className="text-slate-300 mb-4" />
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Chưa có sản phẩm nào</h3>
                            <p className="text-slate-500 max-w-sm">Hệ thống đang cập nhật các giải pháp công nghệ và tự động hoá mới nhất. Xin vui lòng quay lại sau.</p>
                        </div>
                    )}
                </div>
            </main>

            <footer className="bg-white border-t border-slate-200 py-10 px-5 text-center mt-auto">
                <div className="max-w-7xl mx-auto flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white">
                                <Database size={14} />
                            </div>
                            <span className="text-slate-900 font-bold">Data & Automation Co.</span>
                        </div>
                        <div className="flex gap-6">
                            <a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Chính Sách LHH</a>
                            <a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Tri thức nội bộ</a>
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm">© 2024 Data & Automation. (Powered by Supabase & n8n)</p>
                </div>
            </footer>
        </div>
    );
}
