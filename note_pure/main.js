//打开save栏
const save = document.getElementById("save")
const save_Show = document.getElementById("save-show")
const save_Close = document.getElementById("save-close")
function showSave() {
  save.style.width="17rem"
  save_Show.style.display="none"
  save_Close.style.display="block"
}
function closeSave() {
  save.style.width="1.3rem"
  save_Show.style.display="block"
  save_Close.style.display="none"
}
// 定义变量
let story = null;
let currentStory = "开头";
let txtEle = document.getElementById("txt");
let optionEles = document.querySelectorAll(".option button");
let titleEle = document.getElementById("title");
let saveInputEle = document.getElementById("save-input");
let saveBtnEle = document.getElementById("save-btn");
let loadInputEle = document.getElementById("load-input");
let loadBtnEle = document.getElementById("load-btn");
let saveListEle = document.getElementById("save-list");
let totalSaves = 0;

// 加载故事内容
fetch("story.json")
  .then(response => response.json())
  .then(data => {
    story = data;
    showStory(currentStory);
  });

// 初始化存档列表
initSaveList();

// 绑定点击事件
optionEles.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    showStory(story[currentStory].options[index].next);
  });
});

// 绑定保存按钮点击事件
saveBtnEle.addEventListener("click", () => {
  // 获取用户输入的存档名
  let saveName = saveInputEle.value.trim();
  if (!saveName) {
    alert("请输入存档名！");
    return;
  }
  // 判断是否超过了最大存储数量
  if (totalSaves >= 5) {
    alert("最多只能保存五个存档！");
    return;
  }
  // 获取当前情节的名称并存储到本地存储中
  let saveData = {
    storyName: currentStory,
    timestamp: new Date().toLocaleString()
  };
  localStorage.setItem(saveName, JSON.stringify(saveData));
  // 更新存档列表
  totalSaves++;
  initSaveList();
  // 清空文本框
  saveInputEle.value = "";
});

// 绑定加载存档按钮点击事件
loadBtnEle.addEventListener("click", () => {
  // 获取用户输入的存档名
  let loadName = loadInputEle.value.trim();
  if (!loadName) {
    alert("请输入存档名！");
    return;
  }
  // 从本地存储中读取存档数据并跳转到对应情节
  let saveData = localStorage.getItem(loadName);
  if (saveData) {
    let data = JSON.parse(saveData);
    showStory(data.storyName);
  } else {
    alert("未找到对应存档！");
  }
});

// 初始化存档列表
function initSaveList() {
  // 清空存档列表
  saveListEle.innerHTML = "";
  // 遍历本地存储并添加存档列表项
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let saveData = JSON.parse(value);
    let liEle = document.createElement("li");
    liEle.textContent = `${key} (${saveData.timestamp})`;
    let delBtnEle = document.createElement("button");
    delBtnEle.textContent = "删除";
    delBtnEle.addEventListener("click", () => {
      // 从本地存储中删除对应的存档
      localStorage.removeItem(key);
      totalSaves--;
      initSaveList();
    });
    liEle.appendChild(delBtnEle);
    saveListEle.appendChild(liEle);
  }
}

// 定义函数
function showStory(storyName) {
  // 根据传入的名称获取当前情节
  let current = story[storyName];
  // 更新标题和文字
  titleEle.textContent = storyName;
  txtEle.textContent = current.text;
  // 显示选项按钮
  optionEles.forEach((ele, index) => {
    if (index < current.options.length) {
      ele.textContent = current.options[index].text;
      ele.hidden = false;
    } else {
      ele.hidden = true;
    }
  });
  // 更新当前情节
  currentStory = storyName;
}
