// 假设我们有一个固定的密码 "password123"  
const PASSWORD = "password123";  
  
// 保存笔记，并验证密码是否正确  
function saveNote() {  
  const noteInput = document.getElementById('note-input');  
  const noteText = noteInput.value;  
  const passwordInput = document.getElementById('password');  
  const password = passwordInput.value;  
  if (password === PASSWORD) {  
    localStorage.setItem('note', noteText);  
    alert('笔记已保存！');  
  } else {  
    alert('密码错误！');  
  }  
}  
  
// 加载笔记，并验证密码是否正确  
function loadNote() {  
  const noteInput = document.getElementById('note-input');  
  const passwordInput = document.getElementById('password');  
  const password = passwordInput.value;  
  if (password === PASSWORD) {  
    const noteText = localStorage.getItem('note');  
    noteInput.value = noteText;  
    alert('笔记已加载！');  
  } else {  
    alert('密码错误！');  
  }  
}