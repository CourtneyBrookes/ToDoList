document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target && e.target.tagName === 'circle') {
        const circle = e.target;
        if (circle.getAttribute('fill') === '#FF0000') {
            circle.setAttribute('fill', '#00FF00');
        } else if (circle.getAttribute('fill') === '#00FF00') {
            circle.setAttribute('fill', '#FF0000');
        }
    }
});





