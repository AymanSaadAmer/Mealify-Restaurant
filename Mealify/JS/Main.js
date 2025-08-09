document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});


var link = document.querySelectorAll(".nav-link");
link.forEach(function(item) {
    item.addEventListener("click", function() {
        item.classList.replace("text-secondary", "text-black");
        item.classList.add("text-semibold")
    });
});