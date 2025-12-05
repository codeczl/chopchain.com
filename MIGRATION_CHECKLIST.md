# Chop Chains 网站迁移清单

## 🎯 第一阶段：品牌替换（必须）

### 1. 全局文本替换
在所有文件中查找并替换：
- [ ] `Chop Chains` → `Chop Chains`
- [ ] `chop chains` → `chop chains`
- [ ] `ChopChains.com` → `ChopChains.com`（或你的域名）
- [ ] `chopchains.com` → `chopchains.com`
- [ ] `Alexis Gelin` → `[Chop Chains 开发商名称]`

### 2. 主页 (index.html)
- [ ] 第 18 行：`<title>` 标签
- [ ] 第 24-27 行：meta description 和 keywords
- [ ] 第 42-48 行：og:title, og:description
- [ ] 第 60-80 行：VideoGame schema 结构化数据
- [ ] 第 82-110 行：FAQ schema
- [ ] 第 186 行：游戏标题 `<h1 id="game-title">`
- [ ] 第 193-202 行：iframe src（替换为 Chop Chains 游戏链接）
- [ ] 第 210-350 行：游戏介绍文案（完全重写）

### 3. 关于页面 (about.html)
- [ ] 第 18 行：title
- [ ] 第 22-26 行：meta 标签
- [ ] 第 68-95 行：整个页面内容（重写为 Chop Chains 介绍）

### 4. 游戏列表页 (game.html)
- [ ] 第 18 行：title
- [ ] 第 22-30 行：meta description 和 keywords
- [ ] 第 32-60 行：og 和 twitter 标签
- [ ] 第 250-280 行：hero 区域文案
- [ ] 第 290-320 行：features 区域描述

### 5. 导航栏 (assets/js/index.js)
- [ ] 第 28 行：网站名称显示
```javascript
<span id="duckmath-header" class="duckmath-header">chop chains</span>
```

### 6. 页脚 (assets/js/index.js)
- [ ] 第 60-80 行：页脚文案
```javascript
<a href="/">ChopChains.com — Your Chop Chains Hub</a>
<div>Chop Chains guides, tips and more games.</div>
```

## 🎨 第二阶段：视觉资源（必须）

### 图片文件替换
在 `assets/img/` 目录：
- [ ] `chop-chains-logo.webp` → Chop Chains logo (512x512)
- [ ] `chop-chains-icon.png` → Chop Chains 小图标 (40x40)
- [ ] `og-image.png` → 社交分享图 (1200x630)
- [ ] `chop-chains-og.png` → 删除或替换

### Favicon
- [ ] 所有 HTML 文件中的 favicon 引用
```html
<link rel="icon" type="image/x-icon" href="/assets/img/[新logo].webp" />
```

## 🎮 第三阶段：游戏内容（重要）

### 主游戏链接
- [ ] `index.html` 第 193 行：iframe src
```html
<iframe src="[你的 Chop Chains 游戏链接]" ...>
```

### 游戏数据库
- [ ] `backup_classes.json` - 更新游戏列表
  - 保留相关的动作/休闲游戏
  - 移除不相关的游戏
  - 添加 Chop Chains 作为特色游戏

- [ ] `backup_categories.json` - 更新分类描述
  - 重写分类介绍，突出 Chop Chains 相关类型

### 相关游戏推荐
- [ ] `index.html` 第 420-450 行：loadDrivingGames() 函数
  - 改为加载与 Chop Chains 相似的游戏类型

## 📝 第四阶段：SEO 优化（重要）

### Sitemap
- [ ] `sitemap.xml` - 更新所有 URL
```xml
<loc>https://chopchains.com/</loc>
```

### Robots.txt
- [ ] `robots.txt` - 更新 sitemap URL
```
Sitemap: https://chopchains.com/sitemap.xml
```

### 结构化数据
- [ ] `index.html` - VideoGame schema（第 60-80 行）
- [ ] `index.html` - FAQ schema（第 82-110 行）
- [ ] `game.html` - ItemList schema（第 120-250 行）

## 🔧 第五阶段：配置文件（必须）

### Google Analytics
- [ ] 所有 HTML 文件顶部的 GA 代码
```javascript
gtag('config', 'G-[你的新追踪ID]');
```

### Google AdSense
- [ ] 所有广告代码中的 `data-ad-client`
```html
data-ad-client="ca-pub-[你的新发布商ID]"
```

### Supabase
- [ ] `assets/js/app_functions.js` 第 1-3 行
```javascript
const supabaseUrl = "[你的 Supabase URL]";
const supabaseKey = "[你的 Supabase Key]";
```

### ads.txt
- [ ] `ads.txt` - 更新发布商 ID
```
google.com, pub-[你的ID], DIRECT, f08c47fec0942fa0
```

## 📄 第六阶段：文档更新（建议）

### README.md
- [ ] 项目标题和描述
- [ ] 功能列表
- [ ] 部署说明
- [ ] 联系方式

### CONTRIBUTING.md
- [ ] 贡献指南中的项目名称
- [ ] Discord 链接（如果有）

### CONTRIBUTORS.md
- [ ] 清空或保留原贡献者（根据你的选择）

## 🎯 第七阶段：内容创作（核心）

### 游戏介绍文案
需要重写 `index.html` 中的所有介绍内容：

1. **游戏概述**（第 210-230 行）
   - Chop Chains 是什么游戏？
   - 核心玩法是什么？
   - 为什么玩家会喜欢？

2. **玩法指南**（第 232-250 行）
   - 如何开始游戏
   - 基本操作说明
   - 游戏目标

3. **游戏特色**（第 252-280 行）
   - 独特的游戏机制
   - 关卡设计
   - 挑战模式

4. **FAQ 部分**（第 282-320 行）
   - 常见问题解答
   - 技巧和策略

### 关于页面内容
重写 `about.html`：
- 网站使命
- 提供的服务
- 免责声明

## ✅ 验证清单

完成后检查：
- [ ] 所有页面标题正确
- [ ] 所有链接可点击
- [ ] 图片正常显示
- [ ] 游戏可以加载
- [ ] 搜索功能正常
- [ ] 移动端显示正常
- [ ] SEO 标签完整
- [ ] 无控制台错误
- [ ] Google Analytics 工作
- [ ] 广告正常显示

## 🚀 部署前最后检查

- [ ] 测试所有页面
- [ ] 检查拼写错误
- [ ] 验证所有外部链接
- [ ] 测试不同浏览器
- [ ] 测试不同设备尺寸
- [ ] 运行 Lighthouse 测试
- [ ] 提交 sitemap 到 Google Search Console

---

## 📌 优先级建议

**立即完成（P0）：**
1. 品牌文本替换
2. Logo 和图标
3. 主游戏链接
4. 域名更新

**尽快完成（P1）：**
5. 游戏介绍文案
6. SEO 优化
7. Analytics 配置

**可以稍后（P2）：**
8. 游戏数据库更新
9. 相关游戏推荐
10. 文档更新
