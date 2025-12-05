// Chop Chains 批量替换脚本
// 使用方法: node batch-replace.js

const fs = require('fs');
const path = require('path');

// 替换规则
const replacements = [
  { from: /glitchkarts\.org/g, to: 'chopchains.com' },
  { from: /GlitchKarts\.org/g, to: 'ChopChains.com' },
  { from: /Chop Chains/g, to: 'Chop Chains' },
  { from: /chop chains/g, to: 'chop chains' },
  { from: /CHOP CHAINS/g, to: 'CHOP CHAINS' },
  { from: /puzzle/g, to: 'puzzle' },
  { from: /Puzzle/g, to: 'Puzzle' },
  { from: /Alexis Gelin/g, to: 'Alexis Gelin' },
  { from: /glitch-karts-og\.png/g, to: 'chop-chains-og.png' },
  { from: /duck\.webp/g, to: 'chop-chains-logo.webp' },
  { from: /scaled_goose_pixel\.png/g, to: 'chop-chains-icon.png' },
];

// 需要处理的文件扩展名
const extensions = ['.html', '.js', '.css', '.md', '.txt', '.xml'];

// 排除的目录
const excludeDirs = ['node_modules', '.git', 'assets/img'];

// 递归读取目录
function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 检查是否在排除列表中
      const shouldExclude = excludeDirs.some(excludeDir => 
        filePath.includes(excludeDir)
      );
      
      if (!shouldExclude) {
        walkDir(filePath, callback);
      }
    } else {
      callback(filePath);
    }
  });
}

// 处理单个文件
function processFile(filePath) {
  const ext = path.extname(filePath);
  
  // 只处理指定扩展名的文件
  if (!extensions.includes(ext)) {
    return;
  }
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 应用所有替换规则
    replacements.forEach(({ from, to }) => {
      if (from.test(content)) {
        content = content.replace(from, to);
        modified = true;
      }
    });
    
    // 如果文件被修改，写回文件
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ 已更新: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ 处理失败: ${filePath}`, error.message);
  }
}

// 主函数
function main() {
  console.log('🚀 开始批量替换...\n');
  
  const startTime = Date.now();
  let fileCount = 0;
  
  walkDir('.', (filePath) => {
    processFile(filePath);
    fileCount++;
  });
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log(`\n✨ 完成！处理了 ${fileCount} 个文件，耗时 ${duration} 秒`);
  console.log('\n⚠️  请检查以下内容：');
  console.log('1. 游戏 iframe 链接是否正确');
  console.log('2. 图片文件是否已准备好');
  console.log('3. Google Analytics 和 AdSense ID');
  console.log('4. 运行 "npx serve" 进行本地测试');
}

// 运行
main();
