<!-- markdownlint-disable-file MD033 MD045 -->
# 🚀 Cloudflare 臨時信箱 - 免費架設臨時郵件服務

<p align="center">
  <a href="https://temp-mail-docs.awsl.uk" target="_blank">
    <img alt="docs" src="https://img.shields.io/badge/docs-grey?logo=vitepress">
  </a>
  <a href="https://github.com/dreamhunter2333/cloudflare_temp_email/releases/latest" target="_blank">
    <img src="https://img.shields.io/github/v/release/dreamhunter2333/cloudflare_temp_email">
  </a>
  <a href="https://github.com/dreamhunter2333/cloudflare_temp_email/blob/main/LICENSE" target="_blank">
    <img alt="MIT License" src="https://img.shields.io/github/license/dreamhunter2333/cloudflare_temp_email">
  </a>
  <a href="https://github.com/dreamhunter2333/cloudflare_temp_email/graphs/contributors" target="_blank">
   <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/dreamhunter2333/cloudflare_temp_email">
  </a>
  <a href="">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dreamhunter2333/cloudflare_temp_email">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/dreamhunter2333/cloudflare_temp_email">
  </a>
</p>

<p align="center">
  <a href="https://hellogithub.com/repository/2ccc64bb1ba346b480625f584aa19eb1" target="_blank">
    <img src="https://abroad.hellogithub.com/v1/widgets/recommend.svg?rid=2ccc64bb1ba346b480625f584aa19eb1&claim_uid=FxNypXK7UQ9OECT" alt="Featured｜HelloGitHub" height="30"/>
  </a>
</p>

<p align="center">
  <a href="README.md">🇨🇳 简体中文</a> |
  <a href="README_EN.md">🇺🇸 English</a> |
  <a href="README_ZH_TW.md">🇹🇼 繁體中文</a>
</p>

> 本專案僅供學習和個人用途，請勿將其用於任何違法行為，否則後果自負。

**🎉 一個功能完整的臨時信箱服務！**

- 🆓 **完全免費** - 基於 Cloudflare 免費服務構建，零成本運行
- ⚡ **高效能** - Rust WASM 郵件解析，回應速度極快
- 🎨 **現代化介面** - 響應式設計，支援多語言，操作簡便

## 📚 部署文件 - 快速開始

[📖 部署文件](https://temp-mail-docs.awsl.uk) | [🚀 Github Action 部署文件](https://temp-mail-docs.awsl.uk/zh/guide/actions/github-action.html)

<a href="https://temp-mail-docs.awsl.uk/zh/guide/actions/github-action.html">
  <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" height="32">
</a>

## ✨ 核心功能

### 📧 郵件處理
- **SMTP/IMAP 支援**: 完整的郵件收發功能
- **Rust WASM 解析器**: 高效能郵件內容解析
- **附件支援**: 支援各種格式的檔案附件
- **自動回覆**: 智慧型自動回覆功能
- **垃圾郵件防護**: 內建垃圾郵件過濾機制

### 👥 使用者管理
- **OAuth2 登入**: 支援 GitHub、Google 等第三方登入
- **Passkey 驗證**: 現代化的無密碼驗證
- **角色管理**: 彈性的使用者權限控制
- **JWT 自動登入**: 無縫的登入體驗

### 🌐 管理面板
- **完整管理控制台**: 全面的系統管理功能
- **使用者管理**: 便捷的使用者帳戶管理
- **排程清理**: 自動清理過期郵件
- **系統監控**: 即時系統狀態監控

### 🤖 整合功能
- **Telegram Bot**: 完整的 Telegram 機器人支援
- **Webhook**: 靈活的 Webhook 整合
- **CAPTCHA**: 防濫用驗證機制
- **流量限制**: 智慧型流量控制

### 🎨 現代化使用者介面
- **多語言支援**: 支援英文、简体中文、繁體中文
- **響應式設計**: 完美適配各種裝置
- **暗色模式**: 護眼的暗色主題
- **直觀操作**: 使用者友善的介面設計

## 🏗️ 技術架構

- **前端**: Vue 3 + TypeScript + Vite
- **後端**: Cloudflare Workers + D1 資料庫
- **郵件**: Cloudflare Email Routing + Rust WASM 解析器
- **儲存**: Cloudflare KV + R2（可選 S3）

## 🌟 社群

- [Telegram 群組](https://t.me/cloudflare_temp_email)

## 📄 授權條款

MIT 授權條款 - 詳見 [LICENSE](LICENSE) 檔案。

## 🤝 貢獻

歡迎所有形式的貢獻！請閱讀我們的貢獻指南。

## 🙏 特別感謝

感謝所有為本專案做出貢獻的開發者和社群成員！

---

**如果這個專案對您有幫助，請給我們一個 ⭐ Star！**
