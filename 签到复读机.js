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


const timmer = setInterval(() => {
  const element = document.querySelector('.s-f-rc-item');
  if (element) {
    console.log(`${new Date()} 答题成功`);
    element.click();
  }
  const element2 = document.querySelector('.s-btn s-btn--primary s-btn--m disabled');
  if (element2) {
    const str = element.innerHTML.replace(/\s/g, '');
    if (str === '确定') {
      console.log(`${new Date()} 答题成功`);
    }
    element2.click();
  }
}, 2000);


// s-f-rc-list list--block
const timer2 = setInterval(() => {
  var arr = document.querySelectorAll('div.member-item.is-self-student.is-teacher')
  var a = arr[arr.length-1].parentElement.nextElementSibling.childNodes[1].innerText
  console.log(a);
  
  document.querySelector('div.ql-editor.ql-blank').firstElementChild.innerHTML = a
  setTimeout(() => {
    document.querySelector('button.im-btn.text-editor-btn.btn-default.btn-s').click()
    console.log(b)
  }, 2000);
}, 3000);


