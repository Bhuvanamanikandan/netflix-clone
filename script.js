function setupModalInteractions() {
    document.querySelectorAll('.item img').forEach(item => {
        item.addEventListener('click', function() {
            const modal = document.getElementById("myModal");
            const modalImg = document.querySelector(".modal-image");
            const details = document.querySelector(".details");
            const cast = document.querySelector(".cast");
            const genre = document.querySelector(".genre");

            modal.style.display = "block";
            modalImg.src = this.src; // Set the source for the modal image

            details.textContent = "Details of the movie go here.";
            cast.textContent = "Cast of the movie go here.";
            genre.textContent = "Genre of the movie go here.";
        });
    });

    
    const span = document.querySelector(".close");

    
    span.onclick = function() {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    };


    window.onclick = function(event) {
        const modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}


document.addEventListener('DOMContentLoaded', setupModalInteractions);
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('infinite-scroll-container');
    container.addEventListener('scroll', function() {
        
        if (container.scrollWidth - container.scrollLeft <= container.clientWidth + 100) {
        
            for (let i = 0; i < 10; i++) {
                const newItem = document.createElement('div');
                newItem.className = 'item';
                newItem.innerHTML = `<img src="placeholder.jpg" alt="New Item"><p>New Item ${i}</p>`;
                container.querySelector('.grid').appendChild(newItem);
            }
        }
    });
});

document.querySelectorAll('.item').forEach(item => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.overlay');

    img.addEventListener('click', function() {
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
    });
});
