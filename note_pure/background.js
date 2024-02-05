let image = [
'https://s2.loli.net/2024/02/05/gK9Q8vbBnILclzH.jpg',
'https://s2.loli.net/2024/02/05/2Bptn8aVJXjyKcL.jpg',
'https://s2.loli.net/2024/02/05/fq7kcRlhsKiaJXy.jpg',
'https://s2.loli.net/2024/02/05/51SzTYcMyZtPibO.jpg',
'https://s2.loli.net/2024/02/05/ir1KHVhE7Z4QPpB.jpg',
'https://s2.loli.net/2024/02/05/XrspQRzjCAM3b2w.jpg',
'https://s2.loli.net/2024/02/05/JWRrwn4puSoBOQ5.png',
'https://s2.loli.net/2024/02/05/Yum94ViaA6wslzc.jpg',
'https://s2.loli.net/2024/02/05/QylfxIik3wJgPc5.jpg',
'https://s2.loli.net/2024/02/05/ZUbnTQyS3fRK8Jj.jpg',
'https://s2.loli.net/2024/02/05/6NlXatY5kWh9dRO.jpg',
'https://s2.loli.net/2024/02/05/Fp7tqsJGofzDxBZ.jpg',
'https://s2.loli.net/2024/02/05/gxAdotcDbvVQqI5.png',
'https://s2.loli.net/2024/02/05/LCJ8MG4AobjIYpT.jpg',
'https://s2.loli.net/2024/02/05/iVSC2wmnMdF3Xyr.png',
'https://s2.loli.net/2024/02/05/GZDXwl7hA8cyWuV.jpg',
'https://s2.loli.net/2024/02/05/ZcY5UOksiSGVpno.jpg',
'https://s2.loli.net/2024/02/05/76LX59Mlnkyqbpe.jpg',
'https://s2.loli.net/2024/02/05/qHacACouGQb45sY.jpg',
'https://s2.loli.net/2024/02/05/Kz9ae2kv3gOnWmM.jpg',
'https://s2.loli.net/2024/02/05/CMbDdl5wxJ4tuOy.jpg',
'https://s2.loli.net/2024/02/05/kzYG4iVvM2pW6NS.jpg',
'https://s2.loli.net/2024/02/05/FpEkc8ltMq4NYTP.jpg',
'https://s2.loli.net/2024/02/05/7ecnIKUCgOuavGj.jpg',
'https://s2.loli.net/2024/02/05/PY9wWKf1Bs47brd.jpg',
'https://s2.loli.net/2024/02/05/snVawcJQ7jomZPI.jpg',
'https://s2.loli.net/2024/02/05/mjcfghVJ6XYCdQs.jpg',
'https://s2.loli.net/2024/02/05/DLjqhzF4G6KJicC.png',
'https://s2.loli.net/2024/02/05/pY65WDVdMKkZQS3.jpg',
'https://s2.loli.net/2024/02/05/ZbcPyp1U2MzmxnF.jpg',
'https://s2.loli.net/2024/02/05/xTp4faX8AqQriOH.webp',
'https://s2.loli.net/2024/02/05/KOblNjvp9fcrYXn.jpg',
]



let i = 0
function changeBackgroundImage() {
  let body = document.getElementsByTagName("body")[0]
  body.style.backgroundImage = "url('"+image[i]+ "')"
  i = (i+1)%image.length
}
setInterval(changeBackgroundImage, 20000)
