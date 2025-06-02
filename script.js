document.getElementById("interact-btn").addEventListener("click", () => {
    alert("桌寵：嗨嗨～你想跟我做什麼呢？ヽ(・∀・)ﾉ");

 // 下載桌寵檔案
const link = document.createElement("a");
link.href = ".idea.zip"; // 替換成你的檔案路徑
link.download = "my-desktop-pet.zip";   // 下載後的檔名
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
    // 打開新網址
    window.open("https://drive.google.com/file/d/1sllTV_VxOg_jqWG2F4G0seN4OvPnFy0e/view?usp=sharing", "_blank");
});
