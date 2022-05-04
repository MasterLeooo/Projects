function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';

}


function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none'; 
    formElement.firstElementChild.classList.remove('error');
    errorsOuputElement.textContent = '';

}


function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('playername').trim();
    console.log(enteredPlayerName);
    
    if (!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        errorsOuputElement.textContent = 'Вставьте корректное значение';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
  

}