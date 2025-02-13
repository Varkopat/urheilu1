// Yliluokka Henkilo
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  getKokoNimi() {
    return `${this.etunimet} ${this.sukunimi}`;
  }
}

// Aliluokka Urheilija
class Urheilija extends Henkilo {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    kuvaLinkki,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    this.kuvaLinkki = kuvaLinkki;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  get kuva() {
    return this.kuvaLinkki;
  }

  set kuva(linkki) {
    this.kuvaLinkki = linkki;
  }

  get paino() {
    return this.omapaino;
  }

  set paino(paino) {
    this.omapaino = paino;
  }

  get urheilulaji() {
    return this.laji;
  }

  set urheilulaji(laji) {
    this.laji = laji;
  }

  get saavutuksetLista() {
    return this.saavutukset;
  }

  set saavutuksetLista(saavutukset) {
    this.saavutukset = saavutukset;
  }
}

// Esimerkkejä Urheilija-olioista
const urheilija1 = new Urheilija(
  "Usain",
  "Bolt",
  "Usain",
  1986,
  "Tähän linkki kuvaan",
  94,
  "100 m juoksu",
  ["Olympiakulta 2008", "Olympiakulta 2012"]
);
const urheilija2 = new Urheilija(
  "Michael",
  "Phelps",
  "Michael",
  1985,
  "Tähän linkki kuvaan",
  88,
  "Uinti",
  ["Olympiakulta 2004", "Olympiakulta 2008", "Olympiakulta 2012"]
);

console.log(urheilija1.getKokoNimi()); // Usain Bolt
console.log(urheilija1.syntymavuosi); // 1986
console.log(urheilija1.paino + " kg"); // 94 kg
console.log(urheilija1.urheilulaji); // 100 m juoksu
console.log(urheilija1.saavutuksetLista); // ["Olympiakulta 2008", "Olympiakulta 2012"]
console.log();

console.log(urheilija2.getKokoNimi()); // Michael Phelps
console.log(urheilija2.syntymavuosi); // 1985
console.log(urheilija2.paino + " kg"); // 88 kg
console.log(urheilija2.urheilulaji); // Uinti
console.log(urheilija2.saavutuksetLista); // ["Olympiakulta 2004", "Olympiakulta 2008", "Olympiakulta 2012"]
