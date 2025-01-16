var eysanres = document.getElementById("eysanres");
var ezelres = document.getElementById("ezelres");
var sagkalp = document.getElementById("sagkalp");
var solkalp = document.getElementById("solkalp");
var body = document.getElementsByTagName("body")[0];
var siir = document.getElementById("siir");
var siirismi = document.getElementById("siirisim");
var gunbuton = document.getElementById("gecegunduz");
var oyun = document.getElementById("oyun");
var arama = document.getElementById("arama");
var oyunekranbk = document.getElementById("oyunekranbk");
var ses = document.getElementById("ses");
var siirler = document.getElementById("siirler");
var buyutbuton = document.getElementById("f11");
var tamekran = document.getElementById("tamekran");
var sorular = document.getElementById("sorular");
var oyunlar = document.getElementById("oyunlar");
var atesvesu = document.getElementById("atesvesu");
var yuklenmeekran = document.getElementById("yuklenmeekran");
var ana_icerik = document.getElementsByClassName("ana_icerik");
var split = document.getElementsByClassName("split");



var today = new Date();
var gun = today.getDate();
var gununsiiri = "siir";
var gununsiiriisim = "siirismi"

gunluksiir();
siir.innerText = gununsiiri;
siirismi.innerText = gununsiiriisim;
// Sayfa kaydırıldıkça opacity değerini değiştir
window.addEventListener('scroll', function () {
    var kaydirma = window.scrollY; // Kaydırma mesafesi
    var sayfaH = document.documentElement.scrollHeight; // Sayfa yüksekliği
    var pencereH = window.innerHeight; // Görünür pencere yüksekliği


    eysanres.style.opacity = 1; // Başlangıçta tamamen opak
    ezelres.style.opacity = 1; // Başlangıçta tamamen opak

    var opakdeg = (kaydirma / (sayfaH - pencereH)); // Opaklık hesaplama
    eysanres.style.opacity = Math.max(opakdeg, 0); // Opaklık 0'dan küçük olmasın
    ezelres.style.opacity = Math.max(opakdeg, 0); // Opaklık 0'dan küçük olmasın
    var gelme = -300 + (300 * opakdeg);
    ezelres.style.left = gelme + "px";
    eysanres.style.right = gelme + "px";

});



function gunluksiir() {
    switch (gun) {
        case 4:
            gununsiiriisim = "Bir Çocuk Sevdim";
            ses.src = "music/bircocuksevdim.mp3";
            gununsiiri = `Bir çocuk gördüm uzaklarda\n Gözleri kederli, hatta korkulu\n Her şeye rağmen, bir an gülümsedi çocuk\n Sıcak, sade ama biraz kuşkulu\n \n Bir çocuk sevdim uzaklarda\n Sanıyordum ki onun özlemi de buydu\n O ise bir bakışta beni örtülerimden\n Yalnızca, yalnızca duygularıyla soydu\n \n Ben böyle yürek görmedim, böyle sevgi\n Şimdi çocuk büyümekte günbegün\n Bütün hüzünleri okşadı birer birer\n Gizli bir ümide sarılarak biraz küskün\n \n Ben böyle yürek görmedim, böyle sevgi\n Şimdi çocuk büyümekte günbegün\n Bütün hüzünleri okşadı birer birer\n Gizli bir ümide sarılarak biraz küskün\n \n Bir çocuk gördüm uzaklarda\n Biraz çocuk, biraz adam, biraz hiçti\n Ellerinde yaşlı zaman demetleri\n Daha önce denenmemiş, yeni bir yol seçti\n \n Bir çocuk sevdim uzaklarda\n Bir elinde yarın, öbür elinde dün\n Erken ihtiyarlamaktan sanki biraz üzgün\n Dünyanın hâline bakıp güldü geçti\n \n Ben böyle yürek görmedim, böyle sevgi\n Şimdi çocuk büyümekte günbegün\n Bütün hüzünleri okşadı birer birer\n Gizli bir ümide sarılarak biraz küskün\n \n Ben böyle yürek görmedim, böyle sevgi\n Şimdi çocuk büyümekte günbegün\n Bütün hüzünleri okşadı birer birer\n Gizli bir ümide sarılarak biraz küskün\n \n Ben böyle yürek görmedim, böyle sevgi\n Şimdi çocuk büyümekte günbegün\n Bütün hüzünleri okşadı birer birer\n Gizli bir ümide sarılıp küstü\n`;
            break;
        case 5:

            gununsiiriisim = "Unuttun Mu Beni";
            ses.src = "music/mp3indirdur-Sezen-Aksu-Unuttun-Mu-Beni.mp3";
            gununsiiri = `Unuttun mu beni?\n Her şeyimi\n Sildin mi bütün\n İzlerimi\n \n Hiç düşmedim mi aklına?\n Hiç çalmadı mı o şarkı?\n O sahil, o ev, o ada\n O kırlangıç da mı küs bana?\n \n Hiç düşmedim mi aklına?\n Hiç çalmadı mı o şarkı?\n O sahil, o ev, o ada\n O kırlangıç da mı küs bana?\n \n Sanırdım ki aşklar ancak\n Filmlerde böyle\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ey aşk, neredesin şimdi?\n Sen de mi terk ettin beni?\n Ne hata ettiysem affet\n Büyüklük sende kalsın, e mi?\n \n Sen de olmazsan eğer\n Batar artık bu gemi\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Unuttun mu beni?\n Her şeyimi\n Sildin mi bütün\n İzlerimi\n`;
            break;
        case 6:
            gununsiiriisim = "Biliyorsun";
            ses.src = "music/mp3indirdur-Sezen-Aksu-Biliyorsun.mp3";
            gununsiiri = `Unuttun mu beni?\n Her şeyimi\n Sildin mi bütün\n İzlerimi\n \n Hiç düşmedim mi aklına?\n Hiç çalmadı mı o şarkı?\n O sahil, o ev, o ada\n O kırlangıç da mı küs bana?\n \n Hiç düşmedim mi aklına?\n Hiç çalmadı mı o şarkı?\n O sahil, o ev, o ada\n O kırlangıç da mı küs bana?\n \n Sanırdım ki aşklar ancak\n Filmlerde böyle\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ey aşk, neredesin şimdi?\n Sen de mi terk ettin beni?\n Ne hata ettiysem affet\n Büyüklük sende kalsın, e mi?\n \n Sen de olmazsan eğer\n Batar artık bu gemi\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Unuttun mu beni?\n Her şeyimi\n Sildin mi bütün\n İzlerimi\n`;
            break;
        case 7:
            gununsiiriisim = "Firuze";
            ses.src = "music/mp3indirdur-Sezen-Aksu-Firuze.mp3";
            gununsiiri = `Unuttun mu beni?\n Her şeyimi\n Sildin mi bütün\n İzlerimi\n \n Hiç düşmedim mi aklına?\n Hiç çalmadı mı o şarkı?\n O sahil, o ev, o ada\n O kırlangıç da mı küs bana?\n \n Hiç düşmedim mi aklına?\n Hiç çalmadı mı o şarkı?\n O sahil, o ev, o ada\n O kırlangıç da mı küs bana?\n \n Sanırdım ki aşklar ancak\n Filmlerde böyle\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ey aşk, neredesin şimdi?\n Sen de mi terk ettin beni?\n Ne hata ettiysem affet\n Büyüklük sende kalsın, e mi?\n \n Sen de olmazsan eğer\n Batar artık bu gemi\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Ben hâlâ dolaşıyorum avare\n Hani görsen, enikonu divane\n Ne yaptıysam olmadı, ne çare\n Unutamadım gitti\n \n Unuttun mu beni?\n Her şeyimi\n Sildin mi bütün\n İzlerimi\n`;
            break;
        case 29:
            gununsiiriisim = "Adı Bende Saklı";
            ses.src = "music/adı-bende-sakli.mp3";
            gununsiiri = `Bölünür sancıyla uykular\nSığınak değil en kuytular\nGökte ay öndört ben dolunay\nSon hatıramı sinene sar\nBu kadarına razıyım yar\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Dalda muhabbette kumrular\nBana ayrılığı sordular\nDedim afet, yangın, dedim kar\nDedim adet aşkı vururlar\nDedim adet aşkı vururlar\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı`;
            break;
        default:
            gununsiiriisim = "Adı Bende Saklı";
            ses.src = "music/adı-bende-sakli.mp3";
            gununsiiri = `Bölünür sancıyla uykular\nSığınak değil en kuytular\nGökte ay öndört ben dolunay\nSon hatıramı sinene sar\nBu kadarına razıyım yar\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Dalda muhabbette kumrular\nBana ayrılığı sordular\nDedim afet, yangın, dedim kar\nDedim adet aşkı vururlar\nDedim adet aşkı vururlar\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı`;
            break;
    }
}


document.getElementById("arama").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll(".card");

    items.forEach(item => {
        if (item.id.toLowerCase().includes(query)) {
            item.style.display = ""; // Göster
            sorular.classList.remove("hidden");
            siirler.classList.remove("hidden");
            setTimeout(() => {
                sorular.style.display = "";
                siirler.style.display = "";
            }, 500);
        } else {
            item.style.display = "none"; // Gizle
            sorular.classList.add("hidden");
            siirler.classList.add("hidden");
            setTimeout(() => {
                sorular.style.display = "none";
                siirler.style.display = "none";
            }, 500);

        }
    });
});






var sayi = 1;
gecegunduz.addEventListener('click', () => {
    if (sayi == 0) {
        sayi++;
        gunbuton.src = "gunes.png";
        document.documentElement.style.setProperty('--imgbg', '#fbb6b6');
        document.documentElement.style.setProperty('--nav-a-color', '#b10303');
        document.documentElement.style.setProperty('--nav-a-color-hov', '#ff2323');
        document.documentElement.style.setProperty('--inp-border-c', '#ff9494');
        document.documentElement.style.setProperty('--inp-border-c-focus', '#b10303');
        document.documentElement.style.setProperty('--bg-color', '#ffc0c0');
        document.documentElement.style.setProperty('--icerik-c', '#b10303');
        document.documentElement.style.setProperty('--inp-place', '#ff5757');
    }
    else {
        sayi = 0;
        gunbuton.src = "gece.png";
        document.documentElement.style.setProperty('--imgbg', '#d70000');
        document.documentElement.style.setProperty('--nav-a-color', '#ffc0c0');//
        document.documentElement.style.setProperty('--nav-a-color-hov', '#ff2323');
        document.documentElement.style.setProperty('--inp-border-c', '#d70000');//
        document.documentElement.style.setProperty('--inp-border-c-focus', '#ffc0c0');//
        document.documentElement.style.setProperty('--bg-color', '#b10303');//
        document.documentElement.style.setProperty('--icerik-c', '#ffc0c0'); //  
        document.documentElement.style.setProperty('--inp-place', '#ff5757');
    }
})
var splitresim = document.getElementsByClassName("splitres");
var resimsayisi = splitresim.length;
var d = 0;
function oncesonra(a) {
    for (let i = 0; i < resimsayisi; i++) {
        splitresim[i].style.zIndex = "1";
    }
    if (a == 0) { // sonraki
        d++;
        if (d >= resimsayisi) {
            d = 0;
        }
    }

    if (a == 1) { // onceki
        d--;
        if (d < 0) {
            d = resimsayisi - 1;
        }
    }
    splitresim[d].style.zIndex = "10";
    updateButtonColor();
}

atesvesu.addEventListener('click', () => {
    yuklenme(3000);

}
)
function yuklenme(a) {
    yuklenmeekran.style.display = "block";
    setTimeout(() => {
        atesvesuoyna(); // Yüklenme süresi sonunda oyunu başlat
        yuklenmeekran.style.display = "none"; // Yüklenme ekranını gizle
    }, a);
}
function atesvesuoyna() {
    tamekran.style.display = "block";
    buyutbuton.style.display = "block";
    ana_icerik[0].style.display = "none";
    split[0].style.display = "none";
    oyun.style.display = "block";
    buyutbuton.style.display = "block";
    oyun.innerHTML = "<iframe id='atesvesuiframe' src='ateş ve su/index.html' frameborder='0'></iframe>";

}
var e = 0;
function ekranbuykuc() {
    if (e % 2 == 0) {
        oyunekranbk.src = "res/kucuk.png";
        tamEkranYap();
    }
    if (e % 2 == 1) {
        oyunekranbk.src = "res/buyuk.png";
        tamEkrandanCik();
    }
    e++;

}

function tamEkranYap() {
    var avsiframe = document.getElementById("atesvesuiframe");
    var elem = tamekran; // Tam ekran yapmak için tüm belgeyi seçiyoruz (body de olabilir)
    oyun.style.height = "100%";
    avsiframe.style.height = "100%";

    if (elem.requestFullscreen) {
        elem.requestFullscreen(); // Modern tarayıcılar için
    } else if (elem.mozRequestFullScreen) { // Firefox için
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Safari ve Chrome için
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // Internet Explorer için
        elem.msRequestFullscreen();
    }
} function tamEkrandanCik() {
    var avsiframe = document.getElementById("atesvesuiframe");
    oyun.style.height = "90%";
    avsiframe.style.height = "90%";
    if (document.exitFullscreen) {
        document.exitFullscreen(); // Modern tarayıcılar için
    } else if (document.mozCancelFullScreen) { // Firefox için
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Safari ve Chrome için
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // Internet Explorer için
        document.msExitFullscreen();
    }
}

function anasayfa() {
    document.getElementById("yuklenmeresim").src = "res/Home.png";
    yuklenmeekran.style.display = "block";

    setTimeout(() => {
        yuklenmeekran.style.display = "none"; // Yüklenme ekranını gizle
        tamekran.style.display = "none"; // Tam ekran butonunu gizle
        buyutbuton.style.display = "none"; // Büyüt butonunu gizle
        ana_icerik[0].style.display = "flex"; // Ana içeriği görünür yap
        split[0].style.display = "flex"; // Split görünümünü görünür yap
        oyun.style.display = "none"; // Oyun ekranını gizle
    }, 3200);
}




