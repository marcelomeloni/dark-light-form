const mode = document.getElementById('mode_icon');

mode.addEventListener('click',()=>{
    const form = document.getElementById('login_form');
    const autor = document.getElementById('autor');
    var image = document.getElementById("github");
    image.src = "github.png";

    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        autor.classList.add('dark')
        form.classList.add('dark');
        return;
    }
    
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    autor.classList.remove('dark')
    form.classList.remove('dark');
    image.src = "githublight.png";

});