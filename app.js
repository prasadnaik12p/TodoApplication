
const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const displayArea = document.getElementById('displayArea');


addButton.addEventListener('click', () => {
    const inputValue = userInput.value.trim();


    if (inputValue) {
        
        const newDiv = document.createElement('div');
        newDiv.classList.add('input-item');
        newDiv.textContent = inputValue;

    
        displayArea.appendChild(newDiv);

        
        userInput.value = '';
    }
});
