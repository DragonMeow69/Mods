// Amounds and sum










// var retrievedPup_am1 = localStorage.getItem("pup_am1");
// var retrievedPup_am2 = localStorage.getItem("pup_am2");
// var retrievedPup_am3 = localStorage.getItem("pup_am3");

// var am1 = parseFloat(retrievedPup_am1);
// var am2 = parseFloat(retrievedPup_am2);
// var am3 = parseFloat(retrievedPup_am3);

// const result1 = document.querySelector(".result-exercise-li1")
// const result2 = document.querySelector(".result-exercise-li2")
// const result3 = document.querySelector(".result-exercise-li3")
// const sum = document.querySelector(".result-exercise-li-sum")

// result1.textContent = `Round 1: ${retrievedPup_am1}`
// result2.textContent = `Round 2: ${retrievedPup_am2}`
// result3.textContent = `Raound 3: ${retrievedPup_am3}`
// sum.textContent = `Sum: ${am1 + am2 + am3}`

// Amounds and sum


// Date 1 and Date2

// const date = document.querySelector(".date1")
// const date2 = document.querySelector(".date2")

// var retrievedNow= localStorage.getItem("now");
// var retrievedHours = localStorage.getItem("hours");
// var retrievedMinutes = localStorage.getItem("minutes");
// var retrievedPSeconds = localStorage.getItem("seconds");


// var retrievedToday= localStorage.getItem("today");
// var retrievedDay = localStorage.getItem("day");
// var retrievedMonth = localStorage.getItem("month");
// var retrievedYear = localStorage.getItem("year");


// jei = `${retrievedHours}:${retrievedMinutes}:${retrievedPSeconds}`
// date.textContent = `${jei}`


// date2.textContent = `${jei2}`

// Date 1 and Date2

const classW = document.querySelector('.classWT');


resultH1Content = classW.textContent




const notesContainer = document.getElementById('app');
const addNoteButton = notesContainer.querySelector('.add-note');
const finishBtn = document.querySelector('.finish-up')


finishBtn.addEventListener('click', function(){
    
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const day = now.getDate(); 
  const month = now.getMonth() + 1 ; 
  const year = now.getFullYear();

  const pup_am1 = document.querySelector(".pull-up-amount1").value;
  const pup_am2 = document.querySelector(".pull-up-amount2").value;
  const pup_am3 = document.querySelector(".pull-up-amount3").value;



  localStorage.setItem("now", now);
  localStorage.setItem("hours", hours);
  localStorage.setItem("minutes", minutes);
  localStorage.setItem("seconds", seconds);

  localStorage.setItem("day", day);
  localStorage.setItem("month", month);
  localStorage.setItem("year", year);

  localStorage.setItem("pup_am1", pup_am1);
  localStorage.setItem("pup_am2", pup_am2);
  localStorage.setItem("pup_am3", pup_am3);


  var retrievedNow= localStorage.getItem("now");
  var retrievedHours = localStorage.getItem("hours");
  var retrievedMinutes = localStorage.getItem("minutes");
  var retrievedPSeconds = localStorage.getItem("seconds");

  var retrievedToday= localStorage.getItem("today");
  var retrievedDay = localStorage.getItem("day");
  var retrievedMonth = localStorage.getItem("month");
  var retrievedYear = localStorage.getItem("year");

  retrievedPup_am1 = localStorage.getItem("pup_am1");
  retrievedPup_am2 = localStorage.getItem("pup_am2");
  retrievedPup_am3 = localStorage.getItem("pup_am3");


  
  if (retrievedPup_am1 === "") {
    retrievedPup_am1 = 0; 
    console.log(retrievedPup_am1);
  }
  if (retrievedPup_am2 === "") {
    retrievedPup_am2 = 0; 
    console.log(retrievedPup_am2);
  }
  if (retrievedPup_am3 === "") {
    retrievedPup_am3 = 0; 
    console.log(retrievedPup_am3);
  }
  timeManeger = `${retrievedHours}:${retrievedMinutes}:${retrievedPSeconds}`
  console.log(timeManeger)

  dateManeger = `${retrievedDay}:${retrievedMonth}:${retrievedYear}`
  console.log(dateManeger)

  am1 = parseFloat(retrievedPup_am1);
  am2 = parseFloat(retrievedPup_am2);
  am3 = parseFloat(retrievedPup_am3);

  sumAms = `${am1 + am2 + am3}`

  





  console.log(retrievedPup_am1)
  console.log(retrievedPup_am2)
  console.log(retrievedPup_am3)



  });

      getNotes().forEach(note => {
        const NoteElement = createNoteElement(note.id, note.content, note.date, note.retrieved1, note.retrieved2, note.retrieved3, note.sumErcises);
        notesContainer.insertBefore(NoteElement, addNoteButton);
      });

      finishBtn.addEventListener('click', () => addNote());

      function getNotes() {
        if (resultH1Content === 'PUSH UP'){
          return JSON.parse(localStorage.getItem('stickynotes-notes-pushup') || '[]');
        }
        if (resultH1Content === 'PULL UP'){
          return JSON.parse(localStorage.getItem('stickynotes-notes-pullup') || '[]');
        }
        if (resultH1Content === 'ABS'){
          return JSON.parse(localStorage.getItem('stickynotes-notes-abs') || '[]');
        }
        if (resultH1Content === 'PLANK'){
          return JSON.parse(localStorage.getItem('stickynotes-notes-plank') || '[]');
        } 
        else {
          return JSON.parse(localStorage.getItem('stickynotes-notes') || '[]');
        }
        
      } 

      function saveNotes(notes) {
        if (resultH1Content === 'PUSH UP'){
          localStorage.setItem('stickynotes-notes-pushup', JSON.stringify(notes));
        }
        if (resultH1Content === 'PULL UP'){
          localStorage.setItem('stickynotes-notes-pullup', JSON.stringify(notes));
        }
        if (resultH1Content === 'ABS'){
          localStorage.setItem('stickynotes-notes-abs', JSON.stringify(notes));
        }
        if (resultH1Content === 'PLANK'){
          localStorage.setItem('stickynotes-notes-plank', JSON.stringify(notes));
        } 
        else {
          localStorage.setItem('stickynotes-notes', JSON.stringify(notes));
        }
        
      }

      function createNoteElement(id, content, date, retrieved1, retrieved2, retrieved3, sumErcises) {
        const element = document.createElement('div');
        const date1 = document.createElement('p');
        const date2 = document.createElement('p');
        const resultH1 = document.createElement('h1')
        const excUl = document.createElement('ul')

        const exc1 = document.createElement('li')
        const exc2 = document.createElement('li')
        const exc3 = document.createElement('li')
        const excSummy = document.createElement('li')

        const pdelete = document.createElement('p')


        date1.classList.add('date');
        date1.classList.add('date1');
        date2.classList.add('date');
        date2.classList.add('date2');
        excUl.classList.add('result-exercise-ul')

        exc1.classList.add('result-exercise-li')
        exc1.classList.add('result-exercise-li1')
        exc2.classList.add('result-exercise-li')
        exc2.classList.add('result-exercise-li2')
        exc3.classList.add('result-exercise-li')
        exc3.classList.add('result-exercise-li3')
        excSummy.classList.add('result-exercise-li')
        excSummy.classList.add('result-exercise-li-sum')

        pdelete.classList.add('dblclick-p')

        

        exc1.textContent = `Round1: ${retrieved1}`
        exc2.textContent = `Round2:  ${retrieved2}`
        exc3.textContent = `Round3:  ${retrieved3}`
       
        

        excSummy.textContent = `Sum:  ${sumErcises}`


        date1.textContent = `Time: ${content}`
        date2.textContent = `Date: ${date}`

        pdelete.textContent = `Double click to delete`
 

  

        resultH1.classList.add('result-exercise-h1')
        resultH1.textContent = `${resultH1Content}`

        element.classList.add('result');

        element.appendChild(resultH1)
        element.appendChild(date1)
        element.appendChild(date2)
        element.appendChild(excUl)

        excUl.append(exc1)
        excUl.append(exc2)
        excUl.append(exc3)
        excUl.append(excSummy)
        element.append(pdelete)
        

        element.addEventListener('change', () => {
          updateNote(id,  date1.textContent);
        });

        element.addEventListener('dblclick', () => {
          const doDelete = confirm("Are you suru to delete this note?");

          if (doDelete) {
            deleteNote(id, element);
          }
        });

        return element;
      }

      function addNote() {
        const notes = getNotes();

        const noteObject = {
          id: Math.floor(Math.random() * 100000),
          content: `${timeManeger}`,
          date: `${dateManeger}`,
          retrieved1: `${retrievedPup_am1}`,
          retrieved2: `${retrievedPup_am2}`,
          retrieved3: `${retrievedPup_am3}`,
          sumErcises: `${sumAms}`
        };

        const NoteElement = createNoteElement(noteObject.id, noteObject.content, noteObject.date, noteObject.retrieved1, noteObject.retrieved2, noteObject.retrieved3, noteObject.sumErcises);
        notesContainer.insertBefore(NoteElement, addNoteButton);

      notes.push(noteObject);
      saveNotes(notes);
      }

      function updateNote(id, newContent) {
        const notes = getNotes();
        const targetNote = notes.filter(note => note.id == id)[0];

        targetNote.content = newContent;
        targetNote.date = newContent;
        targetNote.retrieved1 = newContent;
        targetNote.retrieved2 = newContent;
        targetNote.retrieved3 = newContent;
        targetNote.sumErcises = newContent;
        saveNotes(notes);
      }

      function deleteNote(id, element) {
       const notes = getNotes(). filter(note => note.id != id);

       saveNotes(notes);
       notesContainer.removeChild(element);
      }






      
