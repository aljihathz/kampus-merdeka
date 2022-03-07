function k1(){
    let form = document.getElementById("formulir");
    form.a1.value = "";

}
function k2(){
    let form = document.getElementById("formulir");
    form.a2.value = "";

}
function k0(){
    let form = document.getElementById("formulir");
    form.a1.value = "";
    form.a2.value = "";
    form.hasil.value = "";
}
function tambah1(){
    let form = document.getElementById("formulir");
    let angka1 = form.a1.value;
    let angka2 = form.a2.value;
    if (isNaN(angka1) || angka1 == ''){
        alert("Harap isi data berupa angka");
    }else if (isNaN(angka2) || angka2== ''){
        alert("Harap isi datv berupa angka");
    }
    else{
        let hsil= parseFloat(angka1) + parseFloat(angka2);
        form.hasil.value = hsil;
    }

}
function kurang1(){
    let form = document.getElementById("formulir");
    let angka1 = form.a1.value;
    let angka2 = form.a2.value;
    if (isNaN(angka1) || angka1 == ''){
        alert("Harap isi data berupa angka");
    }else if (isNaN(angka2) || angka2== ''){
        alert("Harap isi datv berupa angka");
    }
    else{
        let hsil= angka1 - angka2;
        form.hasil.value = hsil; 
    }
    
}
function kali1(){
    let form = document.getElementById("formulir");
    let angka1 = form.a1.value;
    let angka2 = form.a2.value;
    if (isNaN(angka1) || angka2 == ''){
        alert("Harap isi data berupa angka");
    }else if (isNaN(angka2) || angka2== ''){
        alert("Harap isi datv berupa angka");
    }
    else{
        let hsil= angka1 * angka2;
        form.hasil.value = hsil;
    }

}
function bagi1(){
    let form = document.getElementById("formulir");
    let angka1 = form.a1.value;
    let angka2 = form.a2.value;
    if (isNaN(angka1) || angka2 == ''){
        alert("Harap isi data berupa angka");
    }else if (isNaN(angka2) || angka2== ''){
        alert("Harap isi datv berupa angka");
    }
    else{
       
        let hsil= angka1 / angka2;
        form.hasil.value = hsil;
    }

}
function pangkat1(){
    let form = document.getElementById("formulir");
    let angka1 = form.a1.value;
    let angka2 = form.a2.value;
    if (isNaN(angka1) || angka2 == ''){
        alert("Harap isi data berupa angka");
    }else if (isNaN(angka2) || angka2== ''){
        alert("Harap isi datv berupa angka");
    }
    else{
        let hsil= angka1 ** angka2;
        form.hasil.value = hsil;
        
    }
 
}



