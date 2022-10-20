/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede*/


//MILESTONE 0:
//creo un array di oggetti con i dati forniti

const teamList = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Waleter gordon',
        role: 'Chief Editor',
        image: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela lopez',
        role: 'Social Media Manager',
        image: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: './assets/img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg',
    }
]

//MILESTONE 1:
//tampare su console le informazioni di nome, ruolo e la stringa della foto
//utilizzo un ciclo for per scorrere nell'array con gli oggetti
for (let i = 0; i < teamList.length; i++) {
    //seleziono il singolo worker
    let worker = teamList[i];
    //console.log(worker);
    //stampo in concole le informazioni nome, ruolo e stringa foto
    //console.log(worker.name);
    //console.log(worker.role);
    //console.log(worker.image);

    for (let key in worker) {
        let workerInfo = worker[key];
        console.log(key + ': ' + workerInfo);
    }



    //MILESTONE 2:
    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    //creo gli elementi nella Dom
    const card =
        `<div class="col card  p-0  border-0 p-3 bg_light_gray text-center">
        <img class ="img-fluid" src="${worker.image}">
        </img>
            <h4>
                ${worker.name}
            </h4>
            <p>
                ${worker.role}
            </p>
        </div>`

    const rowEl = document.querySelector('.row');
    rowEl.insertAdjacentHTML('beforeend', card);
}