"use strict"

var salys=[
    { name:"Latvija",
    plotaskm:64589,
    gyventojai:1907675
    },
    { name:"Ispanija",
    plotaskm:505990,
    gyventojai:47450795
    },
    { name:"Montenegras",
    plotaskm:13812,
    gyventojai:620739
    },
    { name:"Vietnamas",
    plotaskm:331210,
    gyventojai:95414640
    },
    { name:"Filipinai",
    plotaskm:300000,
    gyventojai:103796832
    },
]

function viskas(name,plotaskm,gyventojai){
    var zemeZmoguimetrais=plotaskm *1000000/ gyventojai
zemeZmoguimetrais=zemeZmoguimetrais.toFixed(2)
var zmoniuskaicius=gyventojai/1000000
zmoniuskaicius=zmoniuskaicius.toFixed(2)
    console.log(`Šalis: ${name} joje gyvena ${zmoniuskaicius}mln. gyventoju.
Valstybes plotas: ${plotaskm} km²,plotas tenkantis vienam gyventojui:${zemeZmoguimetrais} m²
    `)
    
}

for(var x of salys){
    viskas(x.name,x.plotaskm,x.gyventojai)
}