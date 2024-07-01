const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 5000;

// 创建数据目录
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// 写入数据到共享目录
app.get("/write", (req, res) => {
  const filePath = path.join(dataDir, "index.html");
  fs.writeFileSync(filePath, "<h1>Hello from 1backend!</h1>");
  res.send("Data written to shared volume.");
});

// 读取共享目录中的数据
app.get("/read", (req, res) => {
  const filePath = path.join(dataDir, "index.html");
  const data = fs.readFileSync(filePath, "utf8");
  res.send(`Data from shared volume: ${data}`);
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
