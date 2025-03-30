document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const newWishInput = document.getElementById('new-wish');
    const wishlist = document.querySelector('.wishlist');

    addButton.addEventListener('click', () => {
        const newWishText = newWishInput.value.trim();
        if (newWishText !== '') {
            const newLi = document.createElement('li');
            newLi.classList.add('wish-item');
            newLi.innerHTML = `
                <span class="wish-text">${newWishText}</span>
                <button class="delete-button">
                    <img src="assets/icon/trash.png" alt="Eliminar" width="24">
                </button>
            `;
            wishlist.appendChild(newLi);
            newWishInput.value = '';
            // Añadir event listener para el nuevo botón de eliminar
            const deleteButton = newLi.querySelector('.delete-button');
            deleteButton.addEventListener('click', removeWishItem);
        }
    });

    function removeWishItem(event) {
        const listItem = event.target.closest('.wish-item');
        if (listItem) {
            listItem.classList.add('slide-out-left');
            setTimeout(() => {
                listItem.remove();
            }, 300); // Espera la duración de la animación
        }
    }

    // Añadir event listeners iniciales para los botones de eliminar
    const initialDeleteButtons = document.querySelectorAll('.delete-button');
    initialDeleteButtons.forEach(button => {
        button.addEventListener('click', removeWishItem);
    });
});