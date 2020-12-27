let sections = document.getElementsByClassName('section');
let links = document.getElementsByClassName('link');

function highlight(sectionId) {
    //make all the sections invisible
    for (let i = 0; i < sections.length; i++) {
        sections.item(i).style.display = 'none';
        /* links.item(i).style.filter = 'blur(0.15px)'; */
    }
    //display the highlighted section
    document.getElementById(sectionId).style.display = 'flex';
    /* document.getElementById('link' + sectionId).style.filter = ''; */
}