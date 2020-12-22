let sections = document.getElementsByClassName('section');

function highlight(sectionId) {
    //make all the sections invisible
    for (let i = 0; i < sections.length; i++) {
        sections.item(i).style.display = 'none';
    }
    //display the highlighted section
    document.getElementById(sectionId).style.display = 'flex';
}