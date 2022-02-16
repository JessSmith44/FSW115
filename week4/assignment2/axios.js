document.getElementById("submit").addEventListener("click", getData);

function getData() {
    axios.get("https://www.dnd5eapi.co/api/spells/")
        .then(response => {
            console.log(response.data)
            console.log(response.data.results[0].name);
            for (let i = 0; i < response.data.results.length; i++) {
                const array = response.data.results[i].name;
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