document.addEventListener('DOMContentLoaded', (event) => {
  function showReminder() {
    const alertBox = document.getElementById('alertBox');
    const gentleMusic = document.getElementById('gentleMusic');

    // 显示提示并播放音乐
    alertBox.classList.remove('hide');
    gentleMusic.play();

    // 设置音乐结束后隐藏提示
    gentleMusic.onended = function() {
      alertBox.classList.add('hide');
    };
  }

  // 每3小时执行一次showReminder函数
  setInterval(showReminder, 10800000); // 10800000毫秒等于3小时
});
