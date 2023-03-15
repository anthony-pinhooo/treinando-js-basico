function addCard(){

    const area = document.getElementById('card-area')
    
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const hobbie = document.getElementById('hobbie').value
    const description = document.getElementById('lDescription').value

    const card = document.createElement('div')
    card.className = "item-card"

    const nameInput = document.createElement('h3')
    nameInput.innerText = name

    const ageInput = document.createElement('h3')
    ageInput.innerText = age

    const hInput = document.createElement('p')
    hInput.innerText = hobbie

    const dInput = document.createElement('p')
    dInput.innerText = description

    card.append(nameInput,ageInput, hInput,dInput)
    area.append(card)
    
    document.getElementById('name').value = ''
    document.getElementById('age').value = ''
    document.getElementById('hobbie').value = ''
    document.getElementById('lDescription').value = ''

    console.log('Foi fdpppppppppp !')
}

function addMsg(){
    console.log('O cara clicou no bagulho')
}