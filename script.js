function start(){
    
    const slike=document.querySelectorAll(".slika");
   
    const tacke = document.querySelectorAll(".tacka");
    const opisDiv = document.querySelector("#opis");
    const opisi = 
		["<br>U našoj firmi, profesionalnost nije samo vrlina, već naša svakodnevna praksa. <br><br>Naš tim posvećenih stručnjaka poseduje ne samo znanje već i iskustvo koje osigurava tačnost i efikasnost u svakom koraku.<br><br> Naš poslovni prostor je mesto gde odgovornost i predanost postaju stvarnost, gde se svaki zadatak obavlja s preciznošću i kvalitetno.<br><br>Zato, kada je u pitanju velikoprodaja kancelarijskog materijala, možete biti sigurni da smo mi Vaša najbolja opcija. ",
        "<br>Uplovite u svet kopiranja sa našim vrhunskim fotokopir papirom! <br><br>Naš papir nije samo list na koji se štampa, već je ključ za postizanje izvanrednih rezultata. <br><br>Sa svojom glatkom površinom i visokim kvalitetom, naš fotokopir papir garantuje jasne i oštre kopije svaki put. <br><br> Sa svakim listom našeg fotokopir papira, Vaše ideje postaju stvarnost, a Vaša komunikacija dobija novu dimenziju kvaliteta. <br><br>Izaberite naš fotokopir papir i podignite svoje kopiranje na viši nivo!",
		"<br>XEROX WorkCentre 3025V_NI je multifunkcionalni uređaj koji će zadovoljiti sve Vaše potrebe za štampom, skeniranjem i kopiranjem. <br><br>Sa procesorom od 600 MHz i memorijom od 128 MB, ovaj uređaj pruža brze i pouzdane rezultate. <br><br>Koristeći XEROX toner for PHASER3020, možete biti sigurni da će Vaša štampa uvek izgledati profesionalno. <br><br>Uz brzinu štampe od 20 stranica u minuti i ugrađenu bežičnu mrežnu vezu, možete lako štampati sa bilo kog uređaja u Vašoj mreži. <br><br>XEROX WorkCentre 3025V_NI je savršeno rešenje za sve Vaše potrebe štampe u domu ili kancelariji. ",
        "<br>U potrazi ste za tonerima i ketridžima koji će Vašem štampaču osigurati vrhunski kvalitet ispisa i pouzdan rad? Nemojte tražiti dalje! Naša široka paleta kvalitetnih proizvoda zadovoljiće sve Vaše potrebe. Bez obzira da li se radi o crno-beloj ili štampi u boji, mi imamo rešenje za Vas.<br><br>Pružamo Vam pouzdane proizvode koje možete koristiti s poverenjem, znajući da će Vaš štampač uvek raditi najbolje što može.<br><br>Osigurajte vrhunski kvalitet po povoljnim cenama danas!<br><br>Kontaktirajte nas kako biste saznali više o našoj ponudi i pronašli proizvod koji najviše odgovara Vašim potrebama.",
       	"<br>Tražite savršen promotivni poklon za svoje poslovne partnere ili klijente? Naša kolekcija kvalitetnih promotivnih proizvoda obuhvata širok spektar artikala, uključujući rokovnike, agende, olovke i još mnogo toga, idealne za različite prilike. <br><br>Naši rokovnici i agende izrađeni su od visokokvalitetnih materijala i dizajnirani s pažnjom prema detaljima. Olovke iz naše kolekcije ističu se svojim elegantnim dizajnom i glatkim pisanjem. Personalizirajte ih sa svojim logotipom ili porukom kako biste ostavili trajan utisak.<br><br> Pogledajte naš katalog promotivnih poklona i javite nam se još danas kako biste saznali više o našoj ponudi i pronašli idealan promotivni poklon za Vašu sledeću priliku."];
    var brojSlike=1;
    var html="";
        
    setInterval(function() { //interval od 3s 
        
        
        slike.forEach(slika => {slika.classList.remove("aktivna-slika");})
        
        tacke.forEach(tacka => {tacka.classList.remove("aktivna-tacka");})
        
        const ovaSlika=document.querySelector(`#slika${brojSlike}`);
        html=`<html><head></head><body><h2>${ovaSlika.title}</h2><p>${opisi[brojSlike-1]}</p></body></html>`;
        
        const ovaTacka=document.querySelector(`#tacka${brojSlike}`);
        
        ovaSlika.classList.add("aktivna-slika");
        ovaTacka.classList.add("aktivna-tacka");
        
        opisDiv.innerHTML=html;
        
        if(brojSlike==5){brojSlike=0;}
        brojSlike++;
    }, 7000); //7000ms = 5s
}





window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
}

document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', function() {
        this.querySelector('.nested-submenu').classList.toggle('active-submenu');
    });
});


function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}


