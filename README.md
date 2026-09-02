# Yến Ngọc — Communication Portfolio

Portfolio editorial được xây bằng [Astro](https://astro.build). Nội dung cá nhân, dự án và bài viết được tách khỏi giao diện để dễ cập nhật.

## Chạy trên máy

```bash
npm install
npm run dev
```

Mở `http://localhost:4321`. Kiểm tra bản production bằng `npm run build`.

## 1. Thay thông tin cá nhân

Mở `src/data/site.ts` và thay toàn bộ dữ liệu mẫu: tên, email, location, hero, bio, dịch vụ và link mạng xã hội.

Ảnh chân dung hiện là placeholder CSS. Đặt ảnh thật vào `public/images/portrait.jpg`, sau đó thay hai khối `portrait-placeholder`/`about-photo` trong `src/pages/index.astro` và `src/pages/about.astro` bằng:

```astro
<img class="portrait-placeholder" src="/images/portrait.jpg" alt="Chân dung Yến Ngọc" />
```

## 2. Thêm một dự án

Tạo file mới tại `src/content/projects/ten-du-an.md`. Không dùng dấu hoặc khoảng trắng trong tên file vì tên file cũng là URL.

```md
---
title: "Tên dự án"
summary: "Một câu mô tả ngắn, khoảng 20–35 chữ."
year: 2026
category: "Cộng đồng"
role: "Content Lead · Copywriter"
cover: "/images/ten-du-an/cover.jpg"
color: "#e7a875"
featured: true
order: 1
client: "Tên tổ chức hoặc thương hiệu"
duration: "03 tháng"
impact:
  - value: "1.2M"
    label: "Lượt tiếp cận"
  - value: "2.4K"
    label: "Người tham gia"
---

## Bối cảnh

Vấn đề và lý do dự án ra đời.

## Mục tiêu & insight

Mục tiêu truyền thông, nhóm đối tượng và insight chính.

## Vai trò của mình

Những việc Ngọc trực tiếp chịu trách nhiệm và các quyết định quan trọng.

![Mô tả ảnh](/images/ten-du-an/anh-01.jpg)

## Kết quả & bài học

Số liệu, phản hồi và những điều học được.
```

`category` chỉ nhận `Công việc`, `Cộng đồng` hoặc `Cá nhân`. `featured: true` đưa dự án lên homepage. Số `order` càng nhỏ thì dự án xuất hiện càng sớm.

Đặt ảnh trong `public/images/ten-du-an/`. Nên dùng JPG/WebP, ảnh cover tỉ lệ 16:9 hoặc 4:3, rộng khoảng 1600–2400px và cố gắng dưới 500 KB.

## 3. Thêm bài viết Facebook

Tạo file `src/content/writing/ten-bai-viet.md`:

```md
---
title: "Tiêu đề bài viết"
excerpt: "Một đoạn giới thiệu ngắn."
date: 2026-09-02
topic: "Góc nhìn"
cover: "/images/writing/ten-bai.jpg"
facebookUrl: "https://www.facebook.com/link-bai-goc"
---

Dán nội dung bài viết vào đây. Mỗi đoạn cách nhau một dòng trống.

## Tiêu đề phụ nếu có

Có thể dùng **chữ đậm**, *chữ nghiêng* và chèn ảnh như bình thường.
```

## 4. Metadata và ảnh share Facebook

- Sửa `site` trong `astro.config.mjs` nếu đổi domain.
- Thay `public/images/og-cover.svg` bằng ảnh 1200×630px.
- Thay `public/favicon.svg` nếu muốn dùng logo riêng.

## 5. Đăng lên GitHub Pages

Workflow `.github/workflows/deploy.yml` tự build và deploy khi push lên `main`. Trong GitHub, vào **Settings → Pages → Build and deployment → Source** và chọn **GitHub Actions**.

## Checklist nội dung

- 01 ảnh chân dung dọc và 01 ảnh ngang
- Bio ngắn 40–60 chữ và bio dài 120–180 chữ
- 4–6 dự án mạnh nhất, mỗi dự án có cover và 5–12 ảnh
- Vai trò, thời gian, đơn vị và kết quả đo lường của từng dự án
- 5–8 bài viết tiêu biểu
- Email, Facebook, LinkedIn và file CV
