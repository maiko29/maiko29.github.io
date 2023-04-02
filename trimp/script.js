let slider = document.getElementById("lohisti").value;
kuup2ev = new Date(slider)

let tekstiv2li = document.getElementById("vastus")

//tekstiv2li.value=kuup2ev;

console.log(kuup2ev)

document.getElementById("kalender").valueAsDate = new Date();


function kopeeri(sisend){
    var cb = navigator.clipboard.writeText(sisend);
}

function kopeeriVahemik(){
    var cb = navigator.clipboard.writeText('test');
}

function valiKuupäev(){
    document.getElementById("lohisti").value = 0;
    document.getElementById("spanvastus").innerText=0;
    värskendPerioodid();
    }

function värskendPerioodid(){
    document.getElementById("180p").innerText=lisaEemaldaPäevi(document.getElementById("kalender").value,180);
    document.getElementById("270p").innerText=lisaEemaldaPäevi(document.getElementById("kalender").value,270);
    document.getElementById("365p").innerText=lisaEemaldaPäevi(document.getElementById("kalender").value,365);
    document.getElementById("455p").innerText=lisaEemaldaPäevi(document.getElementById("kalender").value,455);
}

function suurenda(id){
    console.log("Vajutati + nuppu"); 
    document.getElementById("lohisti").value++; 
}

function vähenda(id){
    console.log("Vajutati - nuppu"); 
    document.getElementById("lohisti").value--; 
}


function onChange(muutjaID,muudetavID){
    //console.log(muutjaID.id);
    //let HRrest =muutjaID.value;
    document.getElementById(muudetavID.id).innerText = muutjaID.value;
    
    //document.getElementById.muudetavID.textContent(muutjaID.value);
    arvuta();
}





function lisaEemaldaPäevi(kp,uuedPäevad){
    var sisendkp = new Date(kp);
    var päevad = parseInt(sisendkp.getDate());
    päevad = päevad +uuedPäevad;
    var vastus = new Date(sisendkp.getFullYear(),sisendkp.getMonth(),päevad);
    //("0" + vastus.getDate()).slice(-2)+'.'+("0" + (vastus.getMonth()+1)).slice(-2)+'.'+vastus.getFullYear();
    console.log(("0" + vastus.getDate()).slice(-2)+'.'+("0" + (vastus.getMonth()+1)).slice(-2)+'.'+vastus.getFullYear());
    return ("0" + vastus.getDate()).slice(-2)+'.'+("0" + (vastus.getMonth()+1)).slice(-2)+'.'+vastus.getFullYear();
}


function arvuta(){
    let HRaverage = parseInt(document.getElementById("HRave").value);
    
    let HRresting = parseInt(document.getElementById("HRrest").value);
    
    let HRmaximal = parseInt(document.getElementById("HRmax").value);
    
    //let sugu = document.getElementById("m").checked;
   
    let HRR = 0;
    HRR = (HRaverage-HRresting)/(HRmaximal-HRresting);

    let factor = 0;

    if (document.getElementById("m").checked) {
        factor = 0.64*Math.exp(1.92*HRR);
        console.log("Valitud on mees");
    } else {
        factor = 0.64*Math.exp(1.67*HRR);
        console.log("Valitud on naine");
    }

    let kestvusväärtus = parseInt(document.getElementById("kestvus").value);
    
    //let factor = 0.64*Math.exp(1.92*HRR)
    
    let TRIMP = kestvusväärtus*HRR*factor;
    
    document.getElementById("spanvastus").innerText= Math.round(TRIMP);    

    document.getElementById("hrrID").innerText= "HRR: "+HRR.toFixed(3);

    let perMin = Math.round(TRIMP)/kestvusväärtus;
    
    document.getElementById("minibillboard").innerText=perMin.toFixed(2);
}

function slideriV22rtus(sisend){
    //document.getElementById("sliderValue").value =sisend.value;
    document.getElementById("spanvastus").innerText=sisend.value;


    let algKP = new Date(document.getElementById("kalender").value);
    console.log(sisend.value);

    let päevad = parseInt(algKP.getDate());
    päevad = päevad +parseInt(sisend.value);
    console.log(typeof päevad+" "+päevad);

    let vastusKP = new Date(algKP.getFullYear(),algKP.getMonth(),päevad);

    console.log("Kombineeri: "+algKP.getFullYear()+"-"+algKP.getMonth()+"-"+algKP.getDate());
    console.log("Test "+new Date(algKP.getFullYear(),algKP.getMonth(),päevad).toLocaleDateString());

    //vastusKP.setDate(algKP.getFullYear(),algKP.getMonth(),päevad);
    //console.log("Algkuupäev: "+algKP.toLocaleDateString()+" + "+sisend.value+" + "+vastusKP.toLocaleDateString());
    //console.log("AlgKP: "+algKP.getDate()+"."+algKP.getMonth()+"."+algKP.getFullYear());
    //console.log("LopKP: "+vastusKP.getDate()+"."+vastusKP.getMonth()+"."+vastusKP.getFullYear());
    console.log(vastusKP.toLocaleDateString());
	
	console.log("Kontrollpäev "+("0" + vastusKP.getDate()).slice(-2)+'.'+("0" + (vastusKP.getMonth()+1)).slice(-2)+'.'+vastusKP.getFullYear());
	console.log("Kontrollkuu "+("0" + (vastusKP.getMonth()+1)).slice(-2));



    //tekstiv2li.value=vastusKP.toLocaleDateString('et-ee');
	
	//tekstiv2li.value=("0" + vastusKP.getDate()).slice(-2)+'.'+("0" + (vastusKP.getMonth()+1)).slice(-2)+'.'+vastusKP.getFullYear();

    //document.getElementById("billboard").innerText=vastusKP.toLocaleDateString();
	
	document.getElementById("billboard").innerText=("0" + vastusKP.getDate()).slice(-2)+'.'+("0" + (vastusKP.getMonth()+1)).slice(-2)+'.'+vastusKP.getFullYear();
	

    document.getElementById("minibillboard").innerText=algKP.toLocaleDateString()+" "+vastusKP.toLocaleDateString()+" | "+sisend.value+" päeva";
	
	document.getElementById("minibillboard").innerText=("0" + algKP.getDate()).slice(-2)+'.'+("0" + (algKP.getMonth()+1)).slice(-2)+'.'+algKP.getFullYear()+" "+("0" + vastusKP.getDate()).slice(-2)+'.'+("0" + (vastusKP.getMonth()+1)).slice(-2)+'.'+vastusKP.getFullYear()+" | "+sisend.value+" päeva";

    //alert(sisend.value);
    
}

