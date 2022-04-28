const articles = [
    {
        nom:"naruto",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.80
    },{
        nom:"dragonball Z",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.50
    },{
        nom:"death note",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.50
    },{
        nom:"SAO",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.70
    },{
        nom:"one piece",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.50
    },{
        nom:"HXH",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.50
    },{
        nom:"bleach",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.50
    },{
        nom:"Fullmetal Alchemist",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.50
    },{
        nom:"L'Attaque des Titans",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.50
    },{
        nom:"Fullmetal Alchemist",
        tom:[1,2,3,4,5,6,7,8,9,10],
        prix:6.50
    },
]
const tva = 20
const fTransport = 2
let panier  = [{titre:4,tom:3},{titre:9,tom:2},{titre:3,tom:1},{titre:4,tom:4},{titre:5,tom:8},{titre:1,tom:1},{titre:7,tom:7}]

// console.log(panier);

class Panier {
    constructor(articleChoisis){
        this.articleChoisis = articleChoisis
        this.panier = []
        this.totalHT = 0
        this.totalTTC = 0
        this.totalFrais = 0
    }
    creePanier(){
        this.articleChoisis.forEach(article => {
            const {titre,tom}= article
            let produit = articles[titre]
            this.panier.push({nom:produit.nom,tom,prix:produit.prix})
        });
        return this.panier
    }
    TotalProduitPrix(){
        
        this.creePanier().forEach(articles=>{
            this.totalHT += articles.prix
        })
        this.totalTTC = this.totalHT * 1.2
        return this.totalTTC
    }
    fraisTransport(){
        this.totalFrais = fTransport * this.articleChoisis.length
        return this.totalFrais
    }
    TotalPrix(){
        return this.totalTTC + this.totalFrais
    }
}
let currentPanier = new Panier(panier)
console.log("TTC",currentPanier.TotalProduitPrix());
console.log("frais de transports",currentPanier.fraisTransport());
console.log("total a payer",currentPanier.TotalPrix());

