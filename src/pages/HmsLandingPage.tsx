import { Link } from 'react-router-dom';

export default function HmsLandingPage() {
    return (
        <div className="bg-white text-hms-text-main antialiased">

            {/*  Navbar  */}
            <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-hms-primary text-white">
                            <span className="material-symbols-outlined text-xl">analytics</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-hms-secondary">HMS Analytics</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium text-hms-text-main hover:text-hms-primary transition-colors" to="/">Trang chủ</Link>
                        <a className="text-sm font-medium text-hms-text-main hover:text-hms-primary transition-colors" href="#features">Tính năng</a>
                        <a className="text-sm font-medium text-hms-text-main hover:text-hms-primary transition-colors" href="#benefits">Lợi ích</a>
                        <a className="text-sm font-medium text-hms-text-main hover:text-hms-primary transition-colors" href="#solutions">Giải pháp</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <a className="hidden sm:inline-flex items-center justify-center rounded-lg bg-hms-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-hms-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hms-secondary transition-all" href="#contact">
                            Nhận Tư Vấn
                        </a>
                    </div>
                </div>
            </header>
            <main className="overflow-x-hidden">
                {/*  Hero Section  */}
                <section className="relative overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                            <div className="flex flex-col gap-6 max-w-2xl">
                                <div className="inline-flex items-center rounded-full border border-hms-primary/10 bg-hms-primary/5 px-3 py-1 text-sm font-medium text-hms-primary w-fit">
                                    <span className="flex h-2 w-2 rounded-full bg-hms-primary mr-2 animate-pulse"></span>
                                    Dành riêng cho chủ HEAD Honda
                                </div>
                                <h1 className="text-4xl font-extrabold tracking-tight text-hms-secondary sm:text-5xl lg:text-6xl leading-[1.15]">
                                    Biến Dữ Liệu HMS Thành <br className="hidden lg:block" />
                                    <span className="text-hms-primary">Báo Cáo Tài Chính</span> Tự Động
                                </h1>
                                <p className="text-lg text-hms-text-muted leading-relaxed max-w-lg">
                                    Không còn nhập liệu thủ công. Tối ưu hóa lợi nhuận và quản trị vận hành toàn diện với dashboard Power BI chuyên sâu.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                                    <button className="inline-flex items-center justify-center rounded-lg bg-hms-primary px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-hms-primary/25 hover:bg-hms-primary-dark transition-all duration-200">
                                        <span className="material-symbols-outlined mr-2 text-[20px]">play_circle</span>
                                        Xem Demo Trực Tiếp
                                    </button>
                                    <button className="inline-flex items-center justify-center rounded-lg border-2 border-hms-secondary bg-transparent px-6 py-3.5 text-base font-bold text-hms-secondary hover:bg-hms-secondary hover:text-white transition-all duration-200">
                                        Nhận Tư Vấn Miễn Phí
                                    </button>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-hms-text-muted mt-4">
                                    <div className="flex -space-x-2 overflow-hidden">
                                        <img alt="User avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" data-alt="Female avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDokLt57xzsZk0aVVDPipVMSBbExXP4kz_xbQVvOZiIiyNJUwIiNFYDftzVqO5J6UWRp6xqR3snjiQ2I177BeKnwgkp8Y9czOFDZI_EwXj4-fskB14rucc1pP2B5rOZLX4bXtrWk-T1YNHfuKMFcpd_bwtpiFUb5CM_Db-35aYsqBPhgQA8PkvOgxlBtZ7fNVbkIidX_Rcmg06i33qO-XOc-IbsRPv4o1V-bBJsX9pvd2GDz3-uirOxGdOBuy_pFbVoSJoteFh4qQY" />
                                        <img alt="User avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" data-alt="Male avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCTZGb_H49q9pqPycFNAlsvWkj4-tD3R5cd4lmdanCInrxf1UGav0uHcCYl1SiXAR2tivBDiPLWyLuGDF6vnMVyImxxmqyO4Hw998XjXFhvWtMPtW9_iyjBkKaB8ExznZY19HLBuyJoSLtH9d-9o72OTVCbLj2s9T8Sqbw1hKbEjAVkHHWOk66M2hl74QRMXY5eLQ8kAd4myPRLaqextAV2M-GGBPFvTQKXkI8_fLWt44f5mGzdTccQKeiGv51uaD_Av1Z4EeDe0k" />
                                        <img alt="User avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" data-alt="Male avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqf9p1Mf2lrkF-nhlhz6dDIpS5Ob8BuDfQxn-x_IPucxcT8v6cWdz-f-aLrI5Zu6aAsdr7ja_a9-d6TXOho8rvLsxtPBC76lG3VJ5fptmNtlEvKI7cSYivVWjC6z5orCXwZq-jL8Naqi6yZ6Xg2by3O4JxfdnTrDmAk6O3LSkW751RIQ7NHwZkUBy_JkJZpj3qLUNQ6SHE6cLnyyOXFX41sF7C4vMNWJb5bOdS1kr9idMGQMYEl9ifB54fco5eWqnB4FFBmtk8pEs" />
                                    </div>
                                    <p>Được tin dùng bởi 50+ chủ HEAD</p>
                                </div>
                            </div>
                            <div className="relative lg:ml-auto w-full">
                                <div className="relative rounded-2xl bg-hms-secondary p-2 shadow-2xl shadow-gray-400/50 ring-1 ring-gray-900/10">
                                    {/*  Abstract Dashboard UI representation  */}
                                    <div className="rounded-xl bg-gray-900 overflow-hidden aspect-[4/3] relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-90"></div>
                                        <img alt="Dashboard analytics on screen" className="object-cover w-full h-full opacity-80 mix-blend-overlay" data-alt="Glowing modern data dashboard charts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBleRCQ8iayJpCHUR6jrUZDaTaxRXV2xieR3ex6oeGtQ6UeiZM7rb1kYVmRliN8o7UBCpkuVSvvJWq-Yi8p8llc_0DXXByuOsFBWXe5p2cdZkwR_35IHpA7tpZ-ZTxT1GhhFxTBWVMRn2Ci0e4oRxUDsaNq-RX5vDyempA7VGvcEvxT1glfggxyurPx0i6Zz05qSByiiHnx204NuTLWGjI6dDWcuQzRc2-UMn1BtK2gfHXKnndyEwiFWhvunqz2QKO08oTEL83L_sQ" />
                                        {/*  Overlay UI Elements to simulate PowerBI  */}
                                        <div className="absolute top-4 left-4 right-4 bottom-4 flex flex-col gap-4">
                                            <div className="h-8 w-1/3 bg-gray-700/50 rounded animate-pulse"></div>
                                            <div className="grid grid-cols-2 gap-4 h-1/3">
                                                <div className="bg-gray-700/30 rounded border border-gray-600/30 backdrop-blur-sm p-4">
                                                    <div className="h-4 w-1/2 bg-gray-600/50 rounded mb-2"></div>
                                                    <div className="h-8 w-3/4 bg-hms-primary/80 rounded"></div>
                                                </div>
                                                <div className="bg-gray-700/30 rounded border border-gray-600/30 backdrop-blur-sm p-4">
                                                    <div className="h-4 w-1/2 bg-gray-600/50 rounded mb-2"></div>
                                                    <div className="h-8 w-3/4 bg-blue-500/80 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="flex-1 bg-gray-700/30 rounded border border-gray-600/30 backdrop-blur-sm p-4 flex items-end gap-2">
                                                <div className="w-1/6 h-[40%] bg-hms-primary/60 rounded-t"></div>
                                                <div className="w-1/6 h-[60%] bg-hms-primary/60 rounded-t"></div>
                                                <div className="w-1/6 h-[30%] bg-hms-primary/60 rounded-t"></div>
                                                <div className="w-1/6 h-[80%] bg-hms-primary/60 rounded-t"></div>
                                                <div className="w-1/6 h-[50%] bg-hms-primary/60 rounded-t"></div>
                                                <div className="w-1/6 h-[70%] bg-hms-primary/80 rounded-t shadow-[0_0_15px_rgba(234,42,51,0.5)]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  Floating decoration  */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                            <span className="material-symbols-outlined">trending_up</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium">Tăng trưởng</p>
                                            <p className="text-lg font-bold text-gray-900">+24.5%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Pain Point Section  */}
                <section className="py-20 bg-hms-bg-subtle" id="problems">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-hms-secondary sm:text-4xl">Tại sao báo cáo HMS thông thường là chưa đủ?</h2>
                            <p className="mt-4 text-lg text-hms-text-muted">Các vấn đề phổ biến mà 90% chủ HEAD đang gặp phải khi sử dụng hệ thống báo cáo mặc định.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/*  Card 1  */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-shadow duration-300 group">
                                <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-hms-primary mb-6 group-hover:bg-hms-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">table_view</span>
                                </div>
                                <h3 className="text-xl font-bold text-hms-secondary mb-3">Xuất dữ liệu thủ công</h3>
                                <p className="text-hms-text-muted leading-relaxed">
                                    Tốn hàng giờ mỗi ngày để export Excel, gộp file. Dễ xảy ra sai sót khi nhập liệu, dẫn đến báo cáo không chính xác.
                                </p>
                            </div>
                            {/*  Card 2  */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-shadow duration-300 group">
                                <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-hms-primary mb-6 group-hover:bg-hms-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">visibility_off</span>
                                </div>
                                <h3 className="text-xl font-bold text-hms-secondary mb-3">Góc khuất Tồn kho &amp; Dịch vụ</h3>
                                <p className="text-hms-text-muted leading-relaxed">
                                    Không nhìn thấy "điểm mù" gây thất thoát phụ tùng hoặc gian lận trong xưởng dịch vụ do thiếu data đối soát.
                                </p>
                            </div>
                            {/*  Card 3  */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-lg transition-shadow duration-300 group">
                                <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center text-hms-primary mb-6 group-hover:bg-hms-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">schedule</span>
                                </div>
                                <h3 className="text-xl font-bold text-hms-secondary mb-3">Quyết định quản trị bị trì hoãn</h3>
                                <p className="text-hms-text-muted leading-relaxed">
                                    Dữ liệu luôn chậm hơn thực tế 1-2 ngày. Chủ HEAD thiếu thông tin tức thời (Real-time) để ra quyết định nóng.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Features Section  */}
                <section className="py-20 lg:py-32 overflow-hidden" id="features">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
                        {/*  Feature 1  */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="order-2 lg:order-1 relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-hms-primary/20 to-hms-secondary/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                                    <img alt="Realtime Revenue Dashboard" className="w-full h-auto object-cover" data-alt="Financial charts showing revenue growth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHW4CH0wm0qzYL9XGYxXxKkskgM_g-jDVe9qJCwABe70cYuWGnUDIVTbsu2dknmxHAVcCJb-GwHHafhhQTnIzj_NDHU4AQtHHL0gP5pKi-A_dHRTwQpTjd361DBYq-5GAcV5kc1Kwjp82XPgIgTNWq5VX_ZU8ThqZ9PPVJG1h0wLnHlqXxkRJuqDnLANWfN5qQCFcYVzx53a89srrTjzQRsAzOrgtLXlaIB-SB-T6hZE4DHwZLpAxbhzKdkiMrJdsnSrTDD3O-tfo" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur p-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-semibold text-gray-600">Doanh thu hôm nay</div>
                                            <div className="text-lg font-bold text-hms-primary">1,245,000,000 đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 mb-6">
                                    <span className="material-symbols-outlined text-base mr-1">monitoring</span>
                                    Tài chính &amp; Kế toán
                                </div>
                                <h3 className="text-3xl font-bold text-hms-secondary mb-4 leading-tight">Theo dõi Doanh thu &amp; Lợi nhuận Real-time</h3>
                                <p className="text-lg text-hms-text-muted mb-6">
                                    Cập nhật chỉ số P&amp;L tự động từ hệ thống HMS ngay khi giao dịch phát sinh. Giúp chủ doanh nghiệp nắm bắt tình hình dòng tiền tức thì mà không cần chờ kế toán tổng hợp.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">Tự động đồng bộ 15 phút/lần</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">So sánh cùng kỳ năm trước (YoY)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">Phân tích biên lợi nhuận từng dòng xe</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*  Feature 2  */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div>
                                <div className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 mb-6">
                                    <span className="material-symbols-outlined text-base mr-1">engineering</span>
                                    Vận hành Xưởng
                                </div>
                                <h3 className="text-3xl font-bold text-hms-secondary mb-4 leading-tight">Hiệu suất Xưởng Dịch vụ (KPI Tracking)</h3>
                                <p className="text-lg text-hms-text-muted mb-6">
                                    Đo lường năng suất của từng kỹ thuật viên, tỷ lệ quay lại của khách hàng và doanh thu trung bình trên mỗi lệnh sửa chữa (JSC). Tối ưu quy trình tiếp nhận xe.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">Báo cáo năng suất thợ (Man-hours)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">Cảnh báo xe tồn tại xưởng quá lâu</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">Phân tích tỷ lệ phụ tùng/công thợ</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-l from-orange-500/20 to-hms-primary/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                                    <img alt="Service workshop efficiency chart" className="w-full h-auto object-cover" data-alt="Mechanic working on motorcycle with overlay chart" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOZetFVADt-yr7s_CC5JS0JBsVvAT7jjjMoKJOXv-Ocx8tzsxRKdp7rTlMiz18kBD4PUgs1Z2e1AAD1d2h_isdafk-9TCCIEw6RPm6HDvsmc_psm-RpejJARfQCXzEgfKhwURwPXOxVOtYi47aTOarv4x81bC5Xe2MetBDOvDFc121lgSxAV4uUv2Vm1LBlgsMS5ZQhpXrgn6UIg7XutUnfjdeUz46NJLiLyvEwONaxpLvpagIzGpx0dtoKA3xiabpbCTOIPvp9cA" />
                                    {/*  Overlay stats  */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-lg p-3 shadow-lg border border-gray-100">
                                        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Hiệu suất</div>
                                        <div className="text-2xl font-bold text-hms-secondary">94.8%</div>
                                        <div className="text-xs text-green-600 flex items-center mt-1">
                                            <span className="material-symbols-outlined text-sm">arrow_upward</span>
                                            2.1% vs tháng trước
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Feature 3  */}
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="order-2 lg:order-1 relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                                    <img alt="Inventory management system" className="w-full h-auto object-cover" data-alt="Warehouse shelves with overlay inventory alerts" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJqippK8pPefsV3UekmnY9A6btJlmwgSVExQd8zqig3YFHynD_oqEz5EfJ1ybKO_V5iwTr_K_Zdi8iDwTi9PdFJR8w7SaGUpT7EyVR883_7vt1Vd6MrJtZtHtapeH-zkyGLBAGQLQqqAizWbiKH64AAYPuX3Q0CeImPyM3R3xO7YcWIonhEQxov83GdDU4N25fWA_4zjM93ylat5YdTAsz7RHpDtjpemU6PPcbRapBzamrTdXARCLq6Qvhb01lZtRT7CZOsG4Puvs" />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 mb-6">
                                    <span className="material-symbols-outlined text-base mr-1">inventory_2</span>
                                    Quản lý Kho
                                </div>
                                <h3 className="text-3xl font-bold text-hms-secondary mb-4 leading-tight">Cảnh báo Tồn kho thông minh</h3>
                                <p className="text-lg text-hms-text-muted mb-6">
                                    Hệ thống tự động phân tích tuổi kho và gợi ý đặt hàng dựa trên sức mua thực tế. Loại bỏ tình trạng đọng vốn vào phụ tùng chậm luân chuyển (Slow Moving).
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">Cảnh báo phụ tùng tồn &gt; 180 ngày</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">Dự báo nhu cầu đặt hàng tự động</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-hms-primary mr-2 mt-0.5">check_circle</span>
                                        <span className="text-hms-text-main">Kiểm soát thất thoát kho</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Authority Badge  */}
                <section className="py-12 bg-hms-secondary text-white border-y border-gray-800">
                    <div className="mx-auto max-w-7xl px-4 text-center">
                        <div className="inline-flex items-center gap-3 rounded-full border border-gray-600 bg-gray-800/50 px-5 py-2">
                            <span className="material-symbols-outlined text-yellow-500">verified</span>
                            <span className="text-sm font-medium tracking-wide">Được xây dựng bởi chuyên gia vận hành HEAD thực thụ</span>
                        </div>
                    </div>
                </section>
                {/*  Final CTA / Contact Form  */}
                <section className="py-20 lg:py-28 bg-white relative" id="contact">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="rounded-3xl bg-hms-secondary overflow-hidden shadow-2xl grid lg:grid-cols-5">
                            <div className="lg:col-span-2 bg-hms-primary p-10 lg:p-12 flex flex-col justify-between text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold mb-4">Dừng báo cáo thủ công ngay hôm nay</h3>
                                    <p className="text-white/90 mb-8">
                                        Nhận bản demo miễn phí và tư vấn 1:1 về cách tối ưu hóa dữ liệu HEAD của bạn.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">phone_in_talk</span>
                                            <span className="font-medium">+84 909 123 456</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined bg-white/20 p-2 rounded-lg">mail</span>
                                            <span className="font-medium">contact@hms-analytics.com</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-24 -right-24 h-64 w-64 bg-white/10 rounded-full blur-3xl"></div>
                                <div className="absolute -top-24 -left-24 h-64 w-64 bg-black/10 rounded-full blur-3xl"></div>
                            </div>
                            <div className="lg:col-span-3 p-10 lg:p-12 bg-white">
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-hms-secondary mb-1" htmlFor="name">Họ và tên</label>
                                        <input className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-hms-primary focus:ring-hms-primary sm:text-sm py-3 px-4 bg-gray-50" id="name" name="name" placeholder="Nguyễn Văn A" type="text" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-hms-secondary mb-1" htmlFor="dealership">Tên HEAD / Đại lý</label>
                                            <input className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-hms-primary focus:ring-hms-primary sm:text-sm py-3 px-4 bg-gray-50" id="dealership" name="dealership" placeholder="Honda HEAD Phát Tiến" type="text" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-hms-secondary mb-1" htmlFor="phone">Số điện thoại</label>
                                            <input className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-hms-primary focus:ring-hms-primary sm:text-sm py-3 px-4 bg-gray-50" id="phone" name="phone" placeholder="0909 xxx xxx" type="tel" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-hms-secondary mb-1" htmlFor="role">Vai trò</label>
                                        <select className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-hms-primary focus:ring-hms-primary sm:text-sm py-3 px-4 bg-gray-50" id="role" name="role">
                                            <option>Chủ doanh nghiệp</option>
                                            <option>Quản lý Cửa hàng trưởng</option>
                                            <option>Kế toán trưởng</option>
                                            <option>Khác</option>
                                        </select>
                                    </div>
                                    <div className="pt-2">
                                        <button className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-hms-primary hover:bg-hms-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hms-primary transition-colors" type="submit">
                                            Đăng ký tư vấn miễn phí
                                        </button>
                                        <p className="mt-3 text-center text-sm text-gray-500">Chúng tôi cam kết bảo mật thông tin của bạn.</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-white py-8 border-t border-gray-100">
                    <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">© 2024 HMS Analytics. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a className="text-sm text-gray-500 hover:text-hms-secondary" href="#">Chính sách bảo mật</a>
                            <a className="text-sm text-gray-500 hover:text-hms-secondary" href="#">Điều khoản sử dụng</a>
                        </div>
                    </div>
                </footer>
            </main>

        </div>
    );
}
