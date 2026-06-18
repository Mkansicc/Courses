function toggleMenu(){
  document.getElementById("menu").classList.toggle("active");
}

const sections = document.querySelectorAll("section");
function reveal(){
  sections.forEach(section=>{
    if(section.getBoundingClientRect().top < window.innerHeight * 0.85){
      section.classList.add("show");
    }
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
