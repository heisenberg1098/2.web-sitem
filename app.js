var eysanres = document.getElementById("eysanres");
var ezelres = document.getElementById("ezelres");
var sagkalp = document.getElementById("sagkalp");
var solkalp = document.getElementById("solkalp");
var siir = document.getElementById("siir");
var siirismi = document.getElementById("siirisim");
var gunbuton = document.getElementById("gecegunduz");
var arama = document.getElementById("arama");
var ses = document.getElementById("ses");
var siirler = document.getElementById("siirler");
var sorular = document.getElementById("sorular");

var today = new Date();
var gun = today.getDate();
var gununsiiri = "siir";
var gununsiiriisim="siirismi"

gunluksiir();
siir.innerText = gununsiiri;
siirismi.innerText=gununsiiriisim;
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
        case 28:
            gununsiiriisim="Bir Çocuk Sevdim";
            ses.src="music/bircocuksevdim.mp3";
            gununsiiri = `Uzanıp Kanlıca’nın orta yerinde bi taşa\nGözümün yaşını yüzdürdüm Hisar’a doğru\nYapacak hiçbir şey yok gitmek istedi gitti\nHem anlıyorum hem çok acı tek taraflı bitti\n\nBi lodos lazım şimdi bana bi kürek\nZulada birkaç şişe yakut yer gök kırmızı\nSöverim gelmişine geçmişine ayıpsa ayıp\nDüşer üstüme akşamdan kalma sabah yıldızı\n\nAh İstanbul İstanbul olalı\nHiç görmedi böyle keder\nGeberiyorum aşkından\nKalmadı bende gururdan eser\n\nNe acı ne acı insan kendine ne kadar yenik\nBulunmadı ihanetin ilacı yürek koca bir karadelik\nYapacak hiçbir şey yok gönül bu sevdi\nYeni bir ten yeni bir heyecan bilirim üstelik`;
            break;
        case 29:
            gununsiiriisim="Adı Bende Saklı";
            ses.src="music/mp3indirdur-Sezen-Aksu-Unuttun-Mu-Beni.mp3";
            gununsiiri = `Bölünür sancıyla uykular\nSığınak değil en kuytular\nGökte ay öndört ben dolunay\nSon hatıramı sinene sar\nBu kadarına razıyım yar\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Dalda muhabbette kumrular\nBana ayrılığı sordular\nDedim afet, yangın, dedim kar\nDedim adet aşkı vururlar\nDedim adet aşkı vururlar\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı\n Uzak diyarlarda evli barklı\nMutluluk en çok onun hakkı\nBu yorgun kırık dökük hikayenin de\nAdı bende saklı`;
            break;
        case 30:
            gununsiiriisim="Unuttun Mu Beni";
            ses.src="music/mp3indirdur-Sezen-Aksu-Unuttun-Mu-Beni.mp3";
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
                    sorular.style.display="";
                    siirler.style.display="";
                }, 500);
            } else {
                item.style.display = "none"; // Gizle
                sorular.classList.add("hidden");
                siirler.classList.add("hidden");
                setTimeout(() => {
                    sorular.style.display="none";
                    siirler.style.display="none";
                }, 500);
                
            }
        });
    });






var sayi=1;
gecegunduz.addEventListener('click',()=>{
    if(sayi==0){
        sayi++;
        gunbuton.src="gunes.png";
        document.documentElement.style.setProperty('--imgbg', '#fbb6b6');
        document.documentElement.style.setProperty('--nav-a-color', '#b10303');
        document.documentElement.style.setProperty('--nav-a-color-hov', '#ff2323');
        document.documentElement.style.setProperty('--inp-border-c', '#ff9494');
        document.documentElement.style.setProperty('--inp-border-c-focus', '#b10303');
        document.documentElement.style.setProperty('--bg-color', '#ffc0c0');
        document.documentElement.style.setProperty('--icerik-c', '#b10303');
        document.documentElement.style.setProperty('--inp-place', '#ff5757');
    }
    else{
        sayi=0;
        gunbuton.src="gece.png";
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

