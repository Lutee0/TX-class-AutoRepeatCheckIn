//我是自动签到
const timmer = setInterval(() => {
  const element = document.querySelector('.s-btn.s-btn--primary.s-btn--m');
  if (element) {
    const str = element.innerHTML.replace(/\s/g, '');
    if (str === '签到') {
      console.log(`${new Date()} 签到成功`);
    }
    element.click();
  }
}, 2000);
//我是复读机
var len = 0
const timer2 = setInterval(() => {
  var arr = document.querySelectorAll('div.member-item.is-self-student.is-teacher')
  if (len != arr.length) {
    var a = arr[arr.length - 2].parentElement.nextElementSibling.childNodes[1].innerText
    document.querySelector('div.ql-editor.ql-blank').firstElementChild.innerHTML = a
    setTimeout(() => {
      document.querySelector('button.im-btn.text-editor-btn.btn-default.btn-s').click()
    }, 2000);
    console.log('复读完毕');
    len = arr.length
  }
}, 3000);


