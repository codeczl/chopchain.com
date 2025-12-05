# Chop Chains 快速更新指南

## ✅ 已完成的修改

我已经帮你修改了 `index.html` 的以下内容：

1. ✅ 游戏 iframe 链接（改为 Chop Chains 的实际游戏链接）
2. ✅ 页面标题
3. ✅ Meta 描述和关键词
4. ✅ Open Graph 标签
5. ✅ 主标题和部分介绍文案
6. ✅ 相关游戏加载函数（从 driving 改为 puzzle）

## 🔄 接下来需要你做的

### 第一步：全局查找替换（重要！）

使用 VS Code 的查找替换功能（Ctrl+Shift+H 或 Cmd+Shift+H）：

**在所有文件中替换以下内容：**

1. 查找: `chopchains.com`  
   替换: `chopchains.com`

2. 查找: `ChopChains.com`  
   替换: `ChopChains.com`

3. 查找: `Chop Chains`  
   替换: `Chop Chains`

4. 查找: `chop chains`  
   替换: `chop chains`

5. 查找: `puzzle`  
   替换: `puzzle`

6. 查找: `Alexis Gelin`  
   替换: `Alexis Gelin`

### 第二步：修改导航栏

打开 `assets/js/index.js`，找到第 28 行左右：

```javascript
// 修改前：
<span id="duckmath-header" class="duckmath-header">chop chains</span>

// 修改后：
<span id="duckmath-header" class="duckmath-header">chop chains</span>
```

### 第三步：修改页脚

同样在 `assets/js/index.js`，找到第 60-80 行：

```javascript
// 修改前：
<a href="/" style="...">ChopChains.com — Unofficial Chop Chains fan hub</a>
<div style="...">Chop Chains overview, guides and more kart games.</div>

// 修改后：
<a href="/" style="...">ChopChains.com — Your Chop Chains Hub</a>
<div style="...">Chop Chains guides, tips and more puzzle games.</div>
```

### 第四步：更新 Google Analytics ID

在所有 HTML 文件顶部找到：

```javascript
gtag('config', 'G-WM2FE32PL0');
```

替换为你自己的 Google Analytics ID（如果有的话）

### 第五步：更新 Google AdSense ID

在所有 HTML 文件中找到：

```html
data-ad-client="ca-pub-8919061004428483"
```

替换为你自己的 AdSense ID（如果有的话）

### 第六步：准备图片资源

你需要准备以下图片并放到 `assets/img/` 目录：

1. **chop-chains-logo.webp** (512x512px) - 主 logo
2. **chop-chains-icon.png** (40x40px) - 导航栏小图标
3. **chop-chains-og.png** (1200x630px) - 社交分享图

然后在所有 HTML 文件中替换：

```html
<!-- 修改前 -->
<link rel="icon" type="image/x-icon" href="/assets/img/chop-chains-logo.webp" />
<img src="/assets/img/chop-chains-icon.png" ... />

<!-- 修改后 -->
<link rel="icon" type="image/x-icon" href="/assets/img/chop-chains-logo.webp" />
<img src="/assets/img/chop-chains-icon.png" ... />
```

### 第七步：更新 Sitemap

打开 `sitemap.xml`，替换所有 URL：

```xml
<!-- 修改前 -->
<loc>https://chopchains.com/</loc>

<!-- 修改后 -->
<loc>https://chopchains.com/</loc>
```

### 第八步：更新 Robots.txt

打开 `robots.txt`：

```
Sitemap: https://chopchains.com/sitemap.xml
```

### 第九步：本地测试

1. 打开命令行，在项目目录运行：
   ```bash
   npx serve
   ```

2. 在浏览器打开 `http://localhost:3000`

3. 检查：
   - ✅ 游戏能否正常加载
   - ✅ 所有链接是否正确
   - ✅ 图片是否显示
   - ✅ 移动端显示是否正常

## 📝 关于游戏链接的说明

我使用的游戏链接是：
```
https://v6p9d9t4.ssl.hwcdn.net/html/11976088/index.html
```

这是 Chop Chains 在 itch.io 上的实际游戏文件链接。如果游戏无法加载，你可能需要：

1. 联系游戏开发者 Alexis Gelin 获取授权
2. 或者使用 itch.io 的嵌入方式（但体验可能不如直接链接）

## 🚀 部署到线上

完成所有修改并测试后：

### 使用 Vercel 部署：
```bash
npm i -g vercel
vercel
```

### 使用 Cloudflare Pages：
1. 登录 Cloudflare Pages
2. 连接你的 GitHub 仓库
3. 设置构建配置：
   - Build command: (留空)
   - Build output directory: /
4. 部署

### 绑定域名：
在 Vercel 或 Cloudflare 的设置中添加你的域名 `chopchains.com`

## ❓ 常见问题

**Q: 游戏无法加载怎么办？**
A: 检查浏览器控制台的错误信息。可能是 CORS 问题或游戏链接失效。

**Q: 需要修改游戏数据库吗？**
A: 暂时不需要。`backup_classes.json` 中的游戏列表可以保留，只是相关游戏推荐会显示 puzzle 类型的游戏。

**Q: 如何添加更多 Chop Chains 的介绍内容？**
A: 编辑 `index.html` 中 `<div id="game-description-box">` 里的内容。

## 📞 需要帮助？

如果遇到问题，告诉我具体的错误信息，我会帮你解决！
