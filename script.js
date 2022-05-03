"use strict"

// var salys=[
//     { name:"Latvija",
//     plotaskm:64589,
//     gyventojai:1907675
//     },
//     { name:"Ispanija",
//     plotaskm:505990,
//     gyventojai:47450795
//     },
//     { name:"Montenegras",
//     plotaskm:13812,
//     gyventojai:620739
//     },
//     { name:"Vietnamas",
//     plotaskm:331210,
//     gyventojai:95414640
//     },
//     { name:"Filipinai",
//     plotaskm:300000,
//     gyventojai:103796832
//     },
// ]

// function viskas(name,plotaskm,gyventojai){
//     var zemeZmoguimetrais=plotaskm *1000000/ gyventojai
// zemeZmoguimetrais=zemeZmoguimetrais.toFixed(2)
// var zmoniuskaicius=gyventojai/1000000
// zmoniuskaicius=zmoniuskaicius.toFixed(2)
//     console.log(`Šalis: ${name} joje gyvena ${zmoniuskaicius}mln. gyventoju.
// Valstybes plotas: ${plotaskm} km²,plotas tenkantis vienam gyventojui:${zemeZmoguimetrais} m²
//     `)
    
// }

// for(var x of salys){
//     viskas(x.name,x.plotaskm,x.gyventojai)
// }


var salys2=[]

function info(name,plotaskm,gyventojai){
    this.name=name
    this.plotaskm=plotaskm
    this.gyventojai=gyventojai
    this.print=function(){
        
         salys2.push(this)
    }
}

var salis1= new info("Latvija",64589,1907675)
var salis2= new info("Ispanija",505990,47450795)
var salis3= new info("Montengras",13812,620739)
var salis4= new info("Vietnamas",331210,95414640)
var salis5= new info("Filipinai",300000,103796832)
salis1.print()
salis2.print()
salis3.print()
salis4.print()
salis5.print()

function viskas(name,plotaskm,gyventojai){
    var zemeZmoguimetrais=plotaskm *1000000/ gyventojai
zemeZmoguimetrais=zemeZmoguimetrais.toFixed(2)
var zmoniuskaicius=gyventojai/1000000
zmoniuskaicius=zmoniuskaicius.toFixed(2)
    console.log(`Šalis: ${name} joje gyvena ${zmoniuskaicius}mln. gyventoju.
Valstybes plotas: ${plotaskm} km²,plotas tenkantis vienam gyventojui:${zemeZmoguimetrais} m²
    `)
    
}
for(var x of salys2){
    viskas(x.name,x.plotaskm,x.gyventojai)
}


