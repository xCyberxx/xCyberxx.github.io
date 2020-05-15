window.onload = () =>
{
    this.console.log("Loaded!");
    this.laadProducten();
}

const producten = [
    {"titel": "Peer-Gynt-Suiten No. 1 & 2", "beschrijving": "'Peer-Gynt-Suiten No. 1 & 2' van Berliner Philharmoniker bestaat uit één klassieke orkest cd. Deze klassieke orkest cd is gecomponeerd door Grieg. 'Peer-Gynt-Suiten No. 1 & 2' is mede uitgevoerd door Berliner Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 9.95, "img": "peer.jpg"},
    {"titel": "Vier Letzte Lieder, Metamorphosen, Tod & Verklarung", "beschrijving": "'Vier Letzte Lieder/Metamorphosen/Tod & Verklarung' van Gundula Janowitz bestaat uit één klassieke zang cd. Deze klassieke zang cd is gecomponeerd door Strauss. 'Vier Letzte Lieder/Metamorphosen/Tod & Verklarung' is mede uitgevoerd door Berliner Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 10.99, "img": "vierletztelieder.jpg"},
    {"titel": "Symphony 9/Ma Vlast(Exc)", "beschrijving": "'Symphony 9/Ma Vlast(Exc)' van Wiener Philharmoniker bestaat uit één klassieke orkest cd. Deze klassieke orkest cd is gecomponeerd door Dvorak, Smetana. 'Symphony 9/Ma Vlast(Exc)' is mede uitgevoerd door Wiener Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 31.99, "img": "sym9.jpg"},
    {"titel": "Baroque Favourites", "beschrijving": "'Baroque Favourites' van Berliner Philharmoniker bestaat uit één klassieke orkest cd. Deze klassieke orkest cd is gecomponeerd door Albinoni, Pachelbel, Vivaldi. 'Baroque Favourites' is mede uitgevoerd door Berliner Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 19.99, "img": "baroquefavorites.jpg"},
    {"titel": "Matthaus-Passion (Complete)", "beschrijving": "'Matthaus-Passion (Complete)' van Janowitz, Ludwig, Schreier, Fischer-Dieskau en Berry bestaat uit 3 klassieke koormuziek cd's. Deze klassieke koormuziek cd's zijn gecomponeerd door Bach. 'Matthaus-Passion (Complete)' is mede uitgevoerd door Berliner Philharmoniker en gedirigeerd door Herbert Von Karajan.", "prijs": 38.99, "img": "passion.jpg"},
    {"titel": "Beethoven: Die Symphonien", "beschrijving": "8 Vinyl LP Platen van Beethoven zijn 9 symfonieën gedirigeert door Herbert von Karajan", "prijs": 109.00, "img": "beethoven.jpg"}
]

function laadProducten()
{
    for(let i = 0; i < producten.length; i++)
    {
        //AANPASSEN H3 H4 EN STRONG ETC
        let img = "<img src='img/products/" + producten[i].img + "' alt='Foto van het album \"" + producten[i].titel +  "\"' ;>";
        let titel = "<h1>" + producten[i].titel + "</h1>";
        let prijs = "<p class='productPrijs'>&euro;" + producten[i].prijs + "</p>";
        let beschrijving = "<p class='productBeschrijving'>" + producten[i].beschrijving + "</p>";
        let finalElement = "<article class='product' onclick='openOverlay(" + i + ")'>" + img + titel + prijs + beschrijving + "</article>";
        document.getElementsByTagName("main")[0].innerHTML += finalElement;
    }
}

function setProduct(index)
{
    let product = producten[index];
    document.getElementById("titel").innerHTML = product.titel;
    document.getElementById("beschrijving").innerHTML = product.beschrijving;
    //zet bestel knop functie
    //updateBestel(index);
    document.getElementById("bestelknop").innerHTML = "Kopen &euro;" + product.prijs;
    document.getElementById("bestelknop").onclick = () => {
        //producten[index].isBesteld = !producten[index].isBesteld;
        //updateBestel(index)
        console.log("formulier.html?product=" + index);
        location.href = "formulier.html?product=" + index;
    };

}

function openOverlay(index)
{
    //Set overlay display: block ofzo
    //document.getElementById("idoverlay").style.display = "block";
    //document.getElementById("idpopup").style.display = "block";
    //Visibility
    document.getElementById("idoverlay").style.visibility = "visible";
    document.getElementById("idoverlay").style.opacity = "0.5";
    document.getElementById("idpopup").style.visibility = "visible";
    document.getElementById("idpopup").style.opacity = "1.0";
    setProduct(index);
}

function sluitOverlay()
{
    //document.getElementById("idoverlay").style.display = "none";
    //document.getElementById("idpopup").style.display = "none";

    //Visibility
    document.getElementById("idoverlay").style.visibility = "hidden";
    document.getElementById("idoverlay").style.opacity = "0.0";
    document.getElementById("idpopup").style.visibility = "hidden";
    document.getElementById("idpopup").style.opacity = "0.0";
    

}