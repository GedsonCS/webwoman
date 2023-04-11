function renderDash(array) {
    const mainList = document.querySelector('.lista__Cards')
  
  
    array.forEach(job => {
      const card = createCard(job)
  
      mainList.appendChild(card)
    })
  
    localStorage.setItem('@kenziejob:jobs',  JSON . stringify ( array ))
  }

function createCard(job){
        
        const container = document.createElement("li");
        container.classList.add("card")

        const titulocard = document.createElement("h3");
        titulocard.classList.add("Titulo__Card")
        titulocard.innerText = job.title

        const cardIenterprise1 = document.createElement("span");
        cardIenterprise1.classList.add("enterprise")
        cardIenterprise1.innerText = job.enterprise

        const cardenterprise2 = document.createElement("span");
        cardenterprise2.classList.add("enterprise")
        cardenterprise2.innerText = job.location

        const cardDescripition = document.createElement("p");
        cardDescripition.classList.add("descrition")
        cardDescripition.innerText = job.descrition

        const cardDiv = document.createElement("div");

        const cardModalities1 = document.createElement("span");
        cardModalities1.classList.add("modalities")
        cardModalities1.innerText = job.modalities[0]

        const cardModalities2 = document.createElement("span");
        cardModalities2.classList.add("modalities")
        cardModalities2.innerText = job.modalities[1]

        const cardDiv2 = document.createElement("div")

        const cardButton = document.createElement("button")
        
        if(jobAlreadyExists(job) >= 0){
            cardButton.classList.add("Candidatar")
            cardButton.innerText = `Remover Candidatura`
            cardButton.dataset.id = job.id;
            
        }
        else{
            cardButton.classList.add("Candidatar")
            cardButton.innerText = `Candidatar`
            cardButton.dataset.id = job.id;
        }

        cardButton.addEventListener('click', () => {
            selectAndRemove(job, cardButton)
            document.location.reload(true)
        })

        cardDiv2.append(cardButton)

        cardDiv.append(cardModalities1, cardModalities2, cardDiv2)
        
        container.append(titulocard, cardIenterprise1, cardenterprise2, cardDescripition, cardDiv)

    return container
}


renderDash(jobsData)


function renderSelect(array){
    const selectLint = document.querySelector('.Cards__Selecionados')

    array.forEach(job => {
        const cardselected = createCardselect(job)
    
        selectLint.appendChild(cardselected)

        console.log(cardselected)
      })

}

function createCardselect(job){
   
    const containerSelect = document.createElement('li')
    containerSelect.classList.add("Card__Selecionado")

    const divSelect = document.createElement('div')
    divSelect.classList.add('agrupador')

    const tituloSelect = document.createElement('h4')
    tituloSelect.classList.add('Titulo__Card__selecionado')
    tituloSelect.innerText = job.title

    const imgLixeira = document.createElement('img')
    imgLixeira.classList.add('IMG__lixeira')
    imgLixeira.src = "./assets/img/lixeira.webp"
    imgLixeira.dataset.id = job.id
    imgLixeira.dataset.job = JSON.stringify(job)

    const location1 = document.createElement('span')
    location1.classList.add('location')
    location1.innerText = job.enterprise

    const location2 = document.createElement('span')
    location2.classList.add('location')
    location2.innerText = job.location

    imgLixeira.addEventListener('click', () => {
        
        selectAndRemove(job, imgLixeira)
        document.location.reload(true)
    })

    divSelect.append(tituloSelect, imgLixeira)

    containerSelect.append(divSelect, location1, location2)

    return containerSelect
}

renderSelect(getselectArray())

function someP(){
    getP = document.querySelector('.aviso')
    const arraylocalstorage = getselectArray()

    if(arraylocalstorage.length > 0){
        getP.classList.add('some')
    }
    else{
        getP.classList.remove('some')
    }
}

someP()