document.getElementById("interact-btn").addEventListener("click", () => {
    alert("桌寵：嗨嗨～你想跟我做什麼呢？ヽ(・∀・)ﾉ");

    // 開啟 Google Drive 分享連結
    window.open(
        "https://drive.google.com/file/d/1sllTV_VxOg_jqWG2F4G0seN4OvPnFy0e/view?usp=sharing",
        "_blank"
    );
});

window.onload = function () {
    const bgm = document.getElementById("bgm");
    bgm.play().catch(() => {
        console.log("請點擊頁面以啟動音樂");
    });
};
