import { useEffect, useState } from 'react';
import {
    Database,
    Menu,
    ArrowRight,
    BookOpen,
    TrendingUp,
    Image as ImageIcon
} from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function WebsiteView() {
    const [hero, setHero] = useState<any>(null);
    const [products, setProducts] = useState<any[]>([]);
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                // Lấy dữ liệu 1 Banner đầu tiên (Order tăng dần)
                const { data: heroData, error: heroError } = await supabase
                    .from('websitehero')
                    .select('*')
                    .order('order', { ascending: true })
                    .limit(1);

                if (heroError) throw heroError;
                if (heroData && heroData.length > 0) {
                    setHero(heroData[0]);
                }

                // Lấy 3 Dịch vụ/Sản phẩm (Core Niches)
                const { data: productsData, error: productsError } = await supabase
                    .from('products')
                    .select('*')
                    .order('order', { ascending: true })
                    .limit(3);

                if (productsError) throw productsError;
                if (productsData) {
                    setProducts(productsData);
                }

                // Lấy Menu Items chính (is_active = true, parent_id IS NULL)
                const { data: menuData, error: menuError } = await supabase
                    .from('ui_menu_items')
                    .select('*')
                    .eq('is_active', true)
                    .is('parent_id', null)
                    .order('order', { ascending: true });

                if (menuError) throw menuError;
                if (menuData) {
                    setMenuItems(menuData);
                }
            } catch (err) {
                console.error("Error fetching data from Supabase:", err);
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

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
                        {loading ? (
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
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Giải Pháp Hàng Đầu</span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                                    {loading ? "Đang tải dữ liệu..." : (hero?.title || "Giải quyết bài toán vận hành bằng Dữ liệu")}
                                </h1>

                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    {loading ? "Đang kết nối để tải thông tin..." : (hero?.summary || "Giúp các doanh nghiệp tối ưu năng suất, tự động hóa quy trình, đưa dữ liệu vào chiến lược.")}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-2">
                                    <button className="h-12 px-6 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                                        <span>{hero?.cta || "Xem Giải Pháp"}</span>
                                        <ArrowRight size={20} />
                                    </button>
                                    <button className="h-12 px-6 rounded-lg bg-white border border-slate-200 text-slate-900 font-bold text-base hover:bg-slate-50 transition-all flex items-center gap-2">
                                        <span>Xem Thêm</span>
                                        <BookOpen size={20} />
                                    </button>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-200">
                                    <p className="text-sm font-medium text-slate-500 mb-4">Các giải pháp mạnh mẽ được xây dựng từ thực tiễn</p>
                                    <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                                        <div className="h-8 w-24 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">POWER BI</div>
                                        <div className="h-8 w-24 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">SUPABASE</div>
                                        <div className="h-8 w-24 bg-slate-100 border border-slate-200 rounded flex items-center justify-center text-[10px] font-bold text-slate-500">N8N NODE</div>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-100 group">
                                <img
                                    alt={hero?.title || "Hero banner"}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    src={hero?.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>

                                {/* Floating Card Badge */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 border border-slate-100 flex items-start gap-4 max-w-sm">
                                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Chiến Lược Được Thẩm Định</p>
                                        <p className="text-xs text-slate-500 mt-1">Gia tăng hiệu suất rõ rệt lên đến +34% qua báo cáo từ các doanh nghiệp đổi mới.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features / Niches Section (Mapped to Products) */}
                <section id="services" className="py-20 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row gap-4 justify-between items-end mb-12">
                            <div className="max-w-2xl">
                                <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Chuyên Môn Cốt Lõi</h2>
                                <h3 className="text-3xl font-bold text-slate-900">Sản Phẩm & Dịch Vụ</h3>
                                <p className="text-slate-600 mt-4 text-lg">Tạo đột phá thông qua các giải pháp phần mềm, tự động hóa và tư vấn chiến lược.</p>
                            </div>
                            <a className="text-primary hover:text-primary-dark font-semibold flex items-center gap-1 group" href="#">
                                Xem tất cả
                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {loading ? (
                                <div className="col-span-3 text-center py-10 text-slate-500">Đang tải biểu mẫu...</div>
                            ) : products.length > 0 ? (
                                products.map((product) => (
                                    <div key={product.id} className="group relative flex flex-col gap-4 p-6 rounded-xl border border-slate-200 bg-white hover:border-primary/50 hover:shadow-lg transition-all h-full">
                                        {/* Thumnail if image provided */}
                                        <div className="h-40 w-full rounded-lg bg-blue-50 overflow-hidden mb-2">
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

                                        <h4 className="text-xl font-bold text-slate-900 line-clamp-1">{product.title}</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm flex-1 line-clamp-3">
                                            {product.description}
                                        </p>

                                        <a className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark mt-4" href={product.link || "#"}>
                                            {product.cta || "Khám phá ngay"} <ArrowRight size={16} className="ml-1" />
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-3 text-center py-10 text-slate-500">Không tìm thấy sản phẩm / dịch vụ.</div>
                            )}
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
                            <a className="text-slate-500 hover:text-primary text-sm" href="#">Chính Sách LHH</a>
                            <a className="text-slate-500 hover:text-primary text-sm" href="#">Tri thức nội bộ</a>
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm">© 2024 Data & Automation. (Powered by Supabase & n8n)</p>
                </div>
            </footer>
        </div>
    );
}
