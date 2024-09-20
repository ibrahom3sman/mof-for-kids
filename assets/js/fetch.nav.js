
fetch("../partials/header.html")
.then(res => res.text())
.then((data) => {
    document.getElementById('navbar-container').innerHTML = data;
})
.catch((err) => console.log(err))