/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede*/


//MILESTONE 0:
//creo un array di oggetti con i dati forniti

const studentsList = [

    {
        Name: 'Wayne Barnett',
        Role: 'Founder & CEO',
        Image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
        Name: 'Angela Caroll',
        Role: 'Chief Editor',
        Image: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        Name: 'Waleter gordon',
        Role: 'Chief Editor',
        Image: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        Name: 'Angela lopez',
        Role: 'Social Media Manager',
        Image: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        Name: 'Scott Estrada',
        Role: 'Developer',
        Image: './assets/img/scott-estrada-developer.jpg',
    },
    {
        Name: 'Barbara Ramos',
        Role: 'Grafic designer',
        Image: './assets/img/barbara-ramos-graphic-designer.jpg',
    }
]

//MILESTONE 1:
//tampare su console le informazioni di nome, ruolo e la stringa della foto
//utilizzo un ciclo for per scorrere nell'array con gli oggetti
for (let i = 0; i < studentsList.length; i++) {
    //seleziono il singolo studente
    const student = studentsList[i];
    //console.log(student);
    //stampo in concole le informazioni nome, ruolo e stringa foto
    console.log(student.Name);
    console.log(student.Role);
    console.log(student.Image);


    //MILESTONE 2:
    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    //creo gli elementi nella Dom
    const card =
        `<div class="col card  p-0  border-0 p-3 bg_light_gray text-center">
        <img class ="img-fluid" src="${student.Image}">
        </img>
            <h4>
                ${student.Name}
            </h4>
            <p>
                ${student.Role}
            </p>
        </div>`

    const rowEl = document.querySelector('.row');
    rowEl.insertAdjacentHTML('beforeend', card);
}