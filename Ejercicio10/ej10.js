document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('colored-div')) {
        alert('En esa posición ya existe un elemento');
    }
    else{
        const newDiv = document.createElement('div');
        newDiv.className = 'claseDiv';
        newDiv.style.left = `${event.clientX - 25}px`; 
        newDiv.style.top = `${event.clientY - 25}px`; 
        document.body.append(newDiv);
    }
});