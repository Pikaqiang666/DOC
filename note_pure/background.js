let image = ["./wallhaven-ympdzd.png","./wallhaven-qzm3gq.jpg","./wallhaven-pkpdo9.png","./wallhaven-m3go6m.jpg","./wallhaven-l8m15q.jpg","./wallhaven-l8kwpr.jpg","./wallhaven-kxl1v7.png","./wallhaven-jxyqlw.jpg","./wallhaven-dgv23j.png","./纳西妲.png","./伊蕾娜.png"]
let i = 0
function changeBackgroundImage() {
  let body = document.getElementsByTagName("body")[0]
  body.style.backgroundImage = "url('"+image[i]+ "')"
  i = (i+1)%image.length
}
setInterval(changeBackgroundImage, 3000)





