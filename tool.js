function inputDimensi(){
    var nilaiDimensi = document.getElementById('nilaiDimensi').value;
    return tampilLog(nilaiDimensi);
}

function tampilLog(nilaiDimensi){
    var nilaiDimensiBaru = nilaiDimensi * nilaiDimensi
    buatDimensi_1(nilaiDimensiBaru);
    buatDimensi_2(nilaiDimensiBaru);
    inputNamaTabel();
    buttonTambah(nilaiDimensiBaru);
}

enterKey();
function enterKey(){
    var input_1 = document.getElementById("nilaiDimensi");

    // Execute a function when the user releases a key on the keyboard
    input_1.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
    // Cancel the default action, if needed
        event.preventDefault();
    // Trigger the button element with a click
        document.getElementById("btnAddDimensi").click();
        }
    });
}

function buatDimensi_1(nilaiDimensiBaru){
    var listDimensi_1 = "";
    for(var i=0;i<nilaiDimensiBaru;i++){
        listDimensi_1 = listDimensi_1 +`<td><input type="text" id="tabel_pertama_${i}"/></td>`;
    }
    document.getElementById("tabelMatrix_1").innerHTML = listDimensi_1;
}

function buatDimensi_2(nilaiDimensiBaru){
    var listDimensi_2 = "";
    for(var i=0;i<nilaiDimensiBaru;i++){
        listDimensi_2 = listDimensi_2 +`<th> <input type="text" id="tabel_kedua_${i}"/> </th>`;
    }
    document.getElementById("tabelMatrix_2").innerHTML = listDimensi_2;
}

function inputNamaTabel(){
    var a = 1; b= 2;
    var namaTabel_1 = `<p>Tabel matrix ${a}</p>`;
    var namaTabel_2 = `<p>Tabel matrix ${b}</p>`
    document.getElementById("nama_tabel_1").innerHTML = namaTabel_1;
    document.getElementById("nama_tabel_2").innerHTML = namaTabel_2;
}

function buttonTambah(nilaiDimensiBaru){
    var nilaiInput = nilaiDimensiBaru;
    var tambah = `<button id='btnAddTambah' onclick='klikTambah(${nilaiInput})'> tambah </button>`;
    document.getElementById("hitungTambah").innerHTML = tambah;
}

function klikTambah(nilaiInput){
    return buatDimensi_3(nilaiInput);
}

function buatDimensi_3(nilaiInput){
    var listDimensi_3 = "";
    var tampungNilai = [];

    for(x=0;x<nilaiInput;x++){
        parseInt(nilai_1 = document.getElementById(`tabel_pertama_${x}`).value);
        parseInt(nilai_2 = document.getElementById(`tabel_kedua_${x}`).value);
        tampungNilai.push(parseInt(nilai_1) + parseInt(nilai_2))
    }
    console.log(tampungNilai);
    for(var i=0;i<nilaiInput;i++){
        listDimensi_3 = listDimensi_3 +`<th> <input type="text" id="tabel_ketiga_${i}" value="`+ tampungNilai[i] + `"/> </th>`;
    }
    document.getElementById("tabelMatrix_3").innerHTML = listDimensi_3;
}