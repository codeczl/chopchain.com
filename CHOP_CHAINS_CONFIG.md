# Chop Chains 网站配置信息

## 🎮 游戏信息

### 基本信息
- **游戏名称**: Chop Chains
- **游戏类型**: [填写：动作/休闲/益智等]
- **开发商**: [填写开发商名称]
- **游戏链接**: [填写 Chop Chains 游戏的 iframe 链接]

### 游戏描述模板
```
Chop Chains is [游戏类型描述]. Players [核心玩法描述]. 
The game features [特色功能]. Challenge yourself to [游戏目标].
```

### 游戏特色（3-5个）
1. [特色1]
2. [特色2]
3. [特色3]

### 操作说明
```
- [按键1]: [功能1]
- [按键2]: [功能2]
- [按键3]: [功能3]
```

---

## 🌐 网站配置

### 域名信息
- **主域名**: chopchains.com（或你的实际域名）
- **备用域名**: [如果有]

### 网站标题模板
- **首页**: Chop Chains – Play Chop Chains Online | ChopChains.com
- **游戏列表**: More Games Like Chop Chains — ChopChains.com
- **关于页**: About ChopChains.com — Chop Chains Fan Site

### Meta 描述模板
```
Play Chop Chains online for free. Learn how to play Chop Chains, 
discover tips and tricks, and explore more games like Chop Chains 
on ChopChains.com.
```

### 关键词
```
chop chains, chop chains game, chop chains online, play chop chains, 
chop chains unblocked, chop chains guide, chop chains tips
```

---

## 🎨 品牌资源

### Logo 规格
- **主 Logo**: 512x512px (PNG/WebP)
- **小图标**: 40x40px (PNG/WebP)
- **Favicon**: 32x32px, 16x16px
- **社交分享图**: 1200x630px (PNG/JPG)

### 颜色方案（建议根据游戏调整）
```css
--primary-color: #ff0000;    /* 主色调 */
--secondary-color: #ff6b6b;  /* 次要色 */
--accent-color: #ff8e53;     /* 强调色 */
--background: #1d2c13;       /* 背景色 */
```

---

## 📊 第三方服务配置

### Google Analytics
```javascript
// 替换为你的追踪 ID
gtag('config', 'G-XXXXXXXXXX');
```

### Google AdSense
```html
<!-- 替换为你的发布商 ID -->
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
```

### Supabase（如果使用）
```javascript
const supabaseUrl = "https://[你的项目].supabase.co";
const supabaseKey = "[你的 anon key]";
```

---

## 📝 内容创作指南

### 首页内容结构
1. **Hero 区域**
   - 游戏标题
   - 简短描述（1-2句）
   - 游戏 iframe

2. **游戏介绍**
   - 什么是 Chop Chains？
   - 如何玩 Chop Chains？
   - 游戏特色
   - 操作说明

3. **相关游戏**
   - 推荐 6-12 个相似游戏

### 关于页面内容
```markdown
# About ChopChains.com

ChopChains.com is [网站定位]. We provide:
- Comprehensive Chop Chains guides
- Tips and strategies
- [其他服务]

## Our Mission
[网站使命]

## Disclaimer
ChopChains.com is [官方/非官方] [说明与开发商的关系]
```

### FAQ 内容
1. What is Chop Chains?
2. How do I play Chop Chains?
3. Is Chop Chains free to play?
4. What are the controls?
5. [其他常见问题]

---

## 🔍 SEO 优化建议

### 页面标题格式
```
[页面名称] – Chop Chains | ChopChains.com
```

### URL 结构
```
https://chopchains.com/
https://chopchains.com/game.html
https://chopchains.com/about.html
https://chopchains.com/g4m3s/?title=[game-name]
```

### 结构化数据
- VideoGame schema（首页）
- FAQPage schema（首页）
- WebSite schema（全站）
- BreadcrumbList schema（子页面）

---

## 📱 社交媒体

### Open Graph 标签
```html
<meta property="og:title" content="Chop Chains – Play Online" />
<meta property="og:description" content="[描述]" />
<meta property="og:image" content="https://chopchains.com/assets/img/og-image.png" />
<meta property="og:url" content="https://chopchains.com/" />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Chop Chains" />
<meta name="twitter:description" content="[描述]" />
<meta name="twitter:image" content="https://chopchains.com/assets/img/og-image.png" />
```

---

## 🚀 部署配置

### Vercel 配置 (vercel.json)
```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/index.html",
      "destination": "/",
      "permanent": true
    }
  ]
}
```

### Cloudflare Pages 配置
- Build command: (留空)
- Build output directory: /
- Root directory: /

---

## ✅ 上线前检查清单

- [ ] 所有 "Chop Chains" 已替换为 "Chop Chains"
- [ ] 所有域名已更新
- [ ] Logo 和图标已替换
- [ ] 游戏链接已更新
- [ ] Analytics 已配置
- [ ] AdSense 已配置
- [ ] 所有页面可访问
- [ ] 移动端测试通过
- [ ] SEO 标签完整
- [ ] Sitemap 已提交
- [ ] SSL 证书已配置
