async function API() {
    let image;
    const data = await fetch("https://random.dog/woof.json");
    const json = await data.json();
    image = json.url;

    if (image) {
        document.getElementById("image").src = image ;
    }
}

API();