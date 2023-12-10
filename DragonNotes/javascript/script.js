const inputBoxMon = document.getElementById('input-box-mon')
const inputBoxTue = document.getElementById('input-box-tue')
const inputBoxWed = document.getElementById('input-box-wed')
const inputBoxThu = document.getElementById('input-box-thu')
const inputBoxFri = document.getElementById('input-box-fri')
const inputBoxPast = document.getElementById('input-box-past')
const listContainerMon = document.getElementById('list-container-mon')
const listContainerTue = document.getElementById('list-container-tue')
const listContainerWed = document.getElementById('list-container-wed')
const listContainerThu = document.getElementById('list-container-thu')
const listContainerFri = document.getElementById('list-container-fri')
const listContainerPast = document.getElementById('list-container-past')


//
const addBtnMon = document.getElementById('add-btn-mon')

addBtnMon.addEventListener('click', () => {
  addTaskMon()
})

const addBtnTue = document.getElementById('add-btn-tue')

addBtnTue.addEventListener('click', () => {
  addTaskTue()
})
const addBtnWed = document.getElementById('add-btn-wed')

addBtnWed.addEventListener('click', () => {
  addTaskWed()
})
const addBtnThu = document.getElementById('add-btn-thu')

addBtnThu.addEventListener('click', () => {
  addTaskThu()
})
const addBtnFri = document.getElementById('add-btn-fri')

addBtnFri.addEventListener('click', () => {
  addTaskFri()
})

const addBtnPast = document.getElementById('add-btn-past')

addBtnPast.addEventListener('click', () => {
  addTaskPast()
})
//

//





function addTaskMon(){
  if(inputBoxMon.value === ''){
    alert('Please write something!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBoxMon.value;
    li.classList.add('liDate')
    listContainerMon.appendChild(li);
    
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

  }
  inputBoxMon.value = '';
  saveDataMon();
}
function addTaskTue(){
  if(inputBoxTue.value === ''){
    alert('Please write something!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBoxTue.value;
    li.classList.add('liDate')
    listContainerTue.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

  }
  inputBoxTue.value = '';
  saveDataTue();
}
function addTaskWed(){
  if(inputBoxWed.value === ''){
    alert('Please write something!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBoxWed.value;
    li.classList.add('liDate')
    listContainerWed.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

  }
  inputBoxWed.value = '';
  saveDataWed();
}
function addTaskThu(){
  if(inputBoxThu.value === ''){
    alert('Please write something!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBoxThu.value;
    li.classList.add('liDate')
    listContainerThu.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

  }
  inputBoxThu.value = '';
  saveDataThu();
}
function addTaskFri(){
  if(inputBoxFri.value === ''){
    alert('Please write something!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBoxFri.value;
    li.classList.add('liDate')
    listContainerFri.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

  }
  inputBoxFri.value = '';
  saveDataFri();
}
function addTaskPast(){
  if(inputBoxPast.value === ''){
    alert('Please write something!');
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBoxPast.value;
    li.classList.add('liDate')
    listContainerPast.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

  }
  inputBoxPast.value = '';
  saveDataPast();
}
//

const logo = document.querySelector('.logo')
function rotateLogo(){
  logo.style.animation = 'rotate 0.6s';
  setTimeout(function() {
    logo.style.animation = '';
  }, 600);
}
//
  listContainerMon.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
      e.target.classList.toggle('checked')
      saveDataMon()
      rotateLogo()
    }
    else if (e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveDataMon()
    }
  }, false);

  
  listContainerTue.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
      e.target.classList.toggle('checked')
      saveDataTue()
      rotateLogo()
    }
    else if (e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveDataTue()
    }
  }, false);
  listContainerWed.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
      e.target.classList.toggle('checked')
      saveDataWed()
      rotateLogo()
    }
    else if (e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveDataWed()
    }
  }, false);
  listContainerThu.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
      e.target.classList.toggle('checked')
      saveDataThu() 
      rotateLogo()
    }
    else if (e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveDataThu()
    }
  }, false);
  listContainerFri.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
      e.target.classList.toggle('checked')
      saveDataFri()
      rotateLogo()
    }
    else if (e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveDataFri()
    }
  }, false);
  listContainerPast.addEventListener('click', function(e){
    if (e.target.tagName === 'LI'){
      e.target.classList.toggle('checked')
      saveDataPast()
      rotateLogo()
    }
    else if (e.target.tagName === 'SPAN'){
      e.target.parentElement.remove();
      saveDataPast()
      
    }
  }, false);


//

//
function saveDataMon(){
  localStorage.setItem('dataMon', listContainerMon.innerHTML);
};
function saveDataTue(){
  localStorage.setItem('dataTue', listContainerTue.innerHTML);
};
function saveDataWed(){
  localStorage.setItem('dataWed', listContainerWed.innerHTML);
};
function saveDataThu(){
  localStorage.setItem('dataThu', listContainerThu.innerHTML);
};
function saveDataFri(){
  localStorage.setItem('dataFri', listContainerFri.innerHTML);
};
function saveDataPast(){
  localStorage.setItem('dataPast', listContainerPast.innerHTML);
};

//

//

function showTaskMon(){
  listContainerMon.innerHTML = localStorage.getItem('dataMon');
}

showTaskMon()

function showTaskTue(){
  listContainerTue.innerHTML = localStorage.getItem('dataTue');
}

showTaskTue()

function showTaskWed(){
  listContainerWed.innerHTML = localStorage.getItem('dataWed');
}

showTaskWed()

function showTaskThu(){
  listContainerThu.innerHTML = localStorage.getItem('dataThu');
}

showTaskThu()

function showTaskFri(){
  listContainerFri.innerHTML = localStorage.getItem('dataFri');
}

showTaskFri()

function showTaskPast(){
  listContainerPast.innerHTML = localStorage.getItem('dataPast');
}

showTaskPast()


//



const radios = document.querySelectorAll('.li');
const MonLi = document.getElementById('MonLi');
const TueLi = document.getElementById('TueLi');
const WedLi = document.getElementById('WedLi');
const ThuLi = document.getElementById('ThuLi');
const FriLi = document.getElementById('FriLi');
const PastLi = document.getElementById('PastLi');
const tab_1 = document.getElementById('tab_1');
const tab_2 = document.getElementById('tab_2');
const tab_3 = document.getElementById('tab_3');
const tab_4 = document.getElementById('tab_4');
const tab_5 = document.getElementById('tab_5');
const tab_6 = document.getElementById('tab_6');

radios.forEach(radio => {
  radio.addEventListener('click', (e) => {

    radios.forEach(otherRadio => {
      otherRadio.classList.remove('checked');
    });
    e.currentTarget.classList.add('checked');

    [tab_1, tab_2, tab_3, tab_4, tab_5, tab_6].forEach(tab => {
      tab.classList.remove('block');
    });

   
    if (e.currentTarget === MonLi) {
      tab_1.classList.add('block');
    } else if (e.currentTarget === TueLi) {
      tab_2.classList.add('block');
    } else if (e.currentTarget === WedLi) {
      tab_3.classList.add('block');
    } else if (e.currentTarget === ThuLi) {
      tab_4.classList.add('block');
    } else if (e.currentTarget === FriLi) {
      tab_5.classList.add('block');
    } else if (e.currentTarget === PastLi) {
      tab_6.classList.add('block');
    } else {
      alert("miskake 306");
      console.log(e.currentTarget)
    }

  });
  
});
document.querySelector('.li').click();


function updateProgressBar() {
  const progressBar = document.getElementById('myProgressBar');
  
  // Допустим, у вас есть какой-то процент, который нужно отобразить на шкале.
  const newProgress = Math.min(parseFloat(progressBar.style.width) + 10, 100) + '%';

  progressBar.style.width = newProgress;
}

    
