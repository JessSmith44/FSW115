document.getElementById("submit").addEventListener("click", getData);

function getData() {
    axios.get("https://rickandmortyapi.com/api/episode")
        .then(response => {
            console.log(response.data)
            console.log(response.data[index].type.episode);
            // console.log(response.data[0].character);
            for (let i = 0; i < response.data.length; i++) {
                const array = response.data[i].episode;
                console.log(array);
                const div = document.createElement("li");
                div.textContent = array;
                div.setAttribute("class", "dataElements")
                document.body.appendChild(div);
                div.addEventListener('click', function() {
                    div.style.textDecoration = "line-through"
                });
            };
        })
        .catch(error => console.log(error));
};