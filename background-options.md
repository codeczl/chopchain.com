# Chop Chains 背景方案

我已经为你添加了一个紫色渐变背景。如果你想换其他风格，可以替换 body 的样式：

## 🎨 当前方案（紫色渐变 + 动态光效）

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 142, 83, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(102, 126, 234, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}
```

---

## 🌈 方案 2：彩虹渐变

```css
body {
  background: linear-gradient(135deg, 
    #667eea 0%, 
    #764ba2 25%, 
    #f093fb 50%, 
    #4facfe 75%, 
    #00f2fe 100%);
  background-attachment: fixed;
  min-height: 100vh;
}
```

---

## 🌊 方案 3：海洋蓝

```css
body {
  background: linear-gradient(135deg, #0093E9 0%, #80D0C7 100%);
  background-attachment: fixed;
  min-height: 100vh;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(0, 147, 233, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}
```

---

## 🔥 方案 4：火焰橙红

```css
body {
  background: linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
  background-attachment: fixed;
  min-height: 100vh;
}
```

---

## 🌙 方案 5：深色模式（暗黑）

```css
body {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  background-attachment: fixed;
  min-height: 100vh;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(42, 82, 152, 0.3) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}
```

---

## 🍃 方案 6：清新绿

```css
body {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  background-attachment: fixed;
  min-height: 100vh;
}
```

---

## 🎮 方案 7：游戏风格（像素化）

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
    repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px);
  pointer-events: none;
  z-index: -1;
}
```

---

## 🌟 方案 8：星空背景

```css
body {
  background: #0f0c29;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  background-attachment: fixed;
  min-height: 100vh;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20px 30px, white, transparent),
    radial-gradient(2px 2px at 60px 70px, white, transparent),
    radial-gradient(1px 1px at 50px 50px, white, transparent),
    radial-gradient(1px 1px at 130px 80px, white, transparent),
    radial-gradient(2px 2px at 90px 10px, white, transparent);
  background-size: 200px 200px;
  pointer-events: none;
  z-index: -1;
  opacity: 0.5;
}
```

---

## 🎨 方案 9：简约白色

```css
body {
  background: #f5f7fa;
  min-height: 100vh;
}
```

---

## 🌈 方案 10：动态渐变（会动的！）

```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  background-attachment: fixed;
  min-height: 100vh;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

## 📝 如何更换背景

1. 打开 `index.html`
2. 找到 `<style>` 标签中的 `body` 样式（大约在第 127-150 行）
3. 复制上面任意方案的代码
4. 替换现有的 `body` 和 `body::before` 样式
5. 保存并刷新页面

---

## 💡 自定义建议

你也可以使用在线工具生成渐变：
- https://cssgradient.io/
- https://www.gradient-animator.com/
- https://uigradients.com/

生成后复制 CSS 代码到 `body` 样式中即可！
