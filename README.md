# Figma 字体库

现有字体库网站的 GitHub Pages 部署版本，保留原山景横幅、文字导航、字体卡片、搜索、分类、复制、两排免费预览、激活码解锁和二维码获取入口。

## 发布

1. 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
2. 推送 main 分支后自动构建发布；也可在 Actions 手动运行 Deploy font library to GitHub Pages。
3. 网站地址：https://bingyansong60-cmyk.github.io/font-library/

## 本地运行

需要 Node.js 24。运行 `npm ci`，再运行 `npm run dev`。`npm run build` 生成 dist。

## 激活码与数据

GitHub Pages 只部署前端。完整字体数据、激活码哈希、兑换记录与有效期由现有服务器管理，仓库不包含完整字体数据、1000 个激活码明文、数据库或服务器密钥。两个网站共用同一个核验后台，已兑换码不会重新开放；浏览器授权按访问域名分别保存，当前无账号跨域同步。

微信与支付宝在线支付尚未开通。本版本通过激活码解锁。请勿将本地发码 CSV、备份设计文件或后台 private-data 目录上传至仓库。
