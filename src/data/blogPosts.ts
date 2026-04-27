export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  readingTime: string;
  tags: string[];
  author: string;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'geo-cho-haobi',
    title: 'GEO cho Haobi: tối ưu để AI hiểu và trích dẫn',
    description:
      'Ghi chú nền tảng về cách Haobi chuyển từ SEO truyền thống sang Generative Engine Optimization.',
    date: '2026-04-27',
    category: 'GEO',
    readingTime: '5 phút đọc',
    tags: ['GEO', 'AI Search', 'Haobi', 'Career OS'],
    author: 'Hao & Bơ',
    content: `
## GEO là gì?

GEO — Generative Engine Optimization — là cách tối ưu nội dung để các công cụ AI như ChatGPT Search, Gemini, Perplexity và Google AI Overview hiểu, tin, trích dẫn và giới thiệu một website.

Với Haobi, mục tiêu không chỉ là lên top Google. Mục tiêu là khi ai đó hỏi về Power BI, automation, AI agent hoặc chuyển nghề sang Data/AI, các hệ thống AI có thể nhận ra Haobi là một nguồn có ngữ cảnh rõ ràng.

## Haobi cần được AI hiểu như thế nào?

Haobi là career lab và career OS của Hao và Bơ. Đây là nơi ghi lại hành trình biến kinh nghiệm vận hành thực tế thành năng lực dữ liệu, tự động hóa và AI agent.

Các entity quan trọng:

- Hao: người vận hành, tự học Data/AI, có nền tảng HEAD Honda.
- Bơ: AI assistant/digital operator đồng hành trong hệ thống làm việc.
- Haobi: không gian nghề nghiệp, portfolio, case study và phòng thí nghiệm AI.

## Nguyên tắc nội dung

Mỗi bài viết nên trả lời rõ một câu hỏi. Phần đầu bài cần có câu trả lời ngắn, sau đó mới giải thích sâu hơn bằng ví dụ thật.

Cấu trúc nên dùng:

1. Câu hỏi hoặc vấn đề.
2. Câu trả lời ngắn.
3. Bối cảnh thực tế.
4. Quy trình hoặc framework.
5. Bài học rút ra.
6. FAQ nếu phù hợp.

## Việc cần làm tiếp theo

Haobi cần có các trang nền như About Hao, About Haobi, Power BI for Operations và AI Agent Operating System. Sau đó mỗi trụ cột sẽ được nuôi bằng case study thật.
`,
  },
  {
    slug: 'tu-van-hanh-den-data-ai',
    title: 'Từ vận hành truyền thống đến Data & AI',
    description:
      'Một bản nháp định vị hành trình nghề nghiệp: từ kinh nghiệm vận hành Honda đến Power BI, n8n và AI agent.',
    date: '2026-04-27',
    category: 'Career',
    readingTime: '4 phút đọc',
    tags: ['Career', 'Data', 'Automation', 'AI'],
    author: 'Hao & Bơ',
    content: `
## Điểm xuất phát

Không phải ai bước vào Data và AI cũng bắt đầu từ code. Có người bắt đầu từ vận hành thật: quy trình, con người, doanh số, tồn kho, chỉ tiêu, báo cáo và những vấn đề lặp lại mỗi ngày.

Đó là lợi thế của Hao.

## Năng lực cần chuyển hóa

Kinh nghiệm vận hành có thể chuyển hóa thành năng lực công nghệ nếu biết đóng gói thành hệ thống:

- Power BI để nhìn dữ liệu rõ hơn.
- n8n để tự động hóa việc lặp lại.
- AI assistant để theo dõi, nhắc việc, tổng hợp và hỗ trợ quyết định.
- Obsidian để lưu giữ tri thức và bài học.

## Định vị

Hao không cần trở thành một lập trình viên truyền thống ngay từ đầu. Định vị phù hợp hơn là Data & Automation Operator: người hiểu vận hành, biết dùng công cụ hiện đại để làm hệ thống nhẹ hơn và hiệu quả hơn.

## Bài học

AI không thay thế trải nghiệm thực tế. AI khuếch đại trải nghiệm thực tế nếu mình biết biến trải nghiệm đó thành quy trình, dữ liệu và nội dung có cấu trúc.
`,
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
