// import * as cowsay from "cowsay"

// const cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

// or cowsay.think()

// const fs = require('fs');

// 同步讀取檔案
// try {
//   const data = fs.readFileSync('test.txt', 'utf8');
//   console.log('檔案內容:', data);
// } catch (err) {
//   console.error('讀取檔案錯誤:', err);
// }

// 非同步讀取檔案
// fs.readFile('test.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error('讀取檔案錯誤:', err);
//       return;
//     }
//     console.log('檔案內容:', data);
//   });

  // 使用 Promise 版本 (推薦)
const fsPromises = require('fs').promises;

async function readAndWriteFile() {
  try {
    // 讀取檔案
    const content = await fsPromises.readFile('test.txt', 'utf8');
    // 寫入檔案
    await fsPromises.writeFile('testB.txt', content + '\n新增的內容');
    console.log('檔案處理完成');
  } catch (err) {
    console.error('檔案處理錯誤:', err);
  }
}

readAndWriteFile();