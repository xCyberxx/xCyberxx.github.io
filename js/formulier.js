window.onload = () =>
{

    this.setProduct(this.getID());

}

const producten = [
    {"titel": "Peer-Gynt-Suiten No. 1 & 2", "beschrijving": "'Peer-Gynt-Suiten No. 1 & 2' van Berliner Philharmoniker bestaat uit één klassieke orkest cd. Deze klassieke orkest cd is gecomponeerd door Grieg. 'Peer-Gynt-Suiten No. 1 & 2' is mede uitgevoerd door Berliner Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 9.95, "img": "peer.jpg"},
    {"titel": "Vier Letzte Lieder/Metamorphosen/Tod & Verklarung", "beschrijving": "'Vier Letzte Lieder/Metamorphosen/Tod & Verklarung' van Gundula Janowitz bestaat uit één klassieke zang cd. Deze klassieke zang cd is gecomponeerd door Strauss. 'Vier Letzte Lieder/Metamorphosen/Tod & Verklarung' is mede uitgevoerd door Berliner Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 10.99, "img": "vierletztelieder.jpg"},
    {"titel": "Symphony 9/Ma Vlast(Exc)", "beschrijving": "'Symphony 9/Ma Vlast(Exc)' van Wiener Philharmoniker bestaat uit één klassieke orkest cd. Deze klassieke orkest cd is gecomponeerd door Dvorak, Smetana. 'Symphony 9/Ma Vlast(Exc)' is mede uitgevoerd door Wiener Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 31.99, "img": "sym9.jpg"},
    {"titel": "Baroque Favourites", "beschrijving": "'Baroque Favourites' van Berliner Philharmoniker bestaat uit één klassieke orkest cd. Deze klassieke orkest cd is gecomponeerd door Albinoni, Pachelbel, Vivaldi. 'Baroque Favourites' is mede uitgevoerd door Berliner Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 19.99, "img": "baroquefavorites.jpg"},
    {"titel": "Matthaus-Passion (Complete)", "beschrijving": "'Matthaus-Passion (Complete)' van Janowitz, Ludwig, Schreier, Fischer-Dieskau en Berry bestaat uit 3 klassieke koormuziek cd's. Deze klassieke koormuziek cd's zijn gecomponeerd door Bach. 'Matthaus-Passion (Complete)' is mede uitgevoerd door Berliner Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 38.99, "img": "passion.jpg"},
    {"titel": "Beethoven: Die Symphonien", "beschrijving": "8 Vinyl LP Platen van Beethoven zijn 9 symfonieën gedirigeert door Herbert von Karajan", "prijs": 109.00, "img": "beethoven.jpg"}
]

function getID()
{
    let url = window.location.search;
    console.log(url);
    let urlParams = new URLSearchParams(url);

    return urlParams.get('product');
}

function setProduct(index)
{
    console.log(index);
    let product = producten[index];
    document.getElementById("foto").src = "img/products/" + product.img;
    document.getElementById("titel").innerHTML = product.titel;
    document.getElementById("beschrijving").innerHTML = product.beschrijving;
    document.getElementById("prijs").innerHTML = "&euro;" + product.prijs;
}

// REVIEW: niet volgens ES6 standaard (const/let/arrow functies)
