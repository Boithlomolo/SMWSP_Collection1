 function toggleLike(button){
        button.classList.toggle('liked');
        //Toggled the 'liked' class on the button
 }


 function addToCollection(button) {
    // Get the image container (parent div) of the clicked button
    const imageContainer = button.parentElement;

    // Clone the image container to add it to the collection
    const clonedImage = imageContainer.cloneNode(true);

    // Remove the "Add to My Collection" button from the cloned image
    const clonedButton = clonedImage.querySelector('button');
    clonedImage.removeChild(clonedButton);

    // Append the cloned image to the "My Collection" section
    const collection = document.querySelector('.my-collection');
    collection.appendChild(clonedImage);
}