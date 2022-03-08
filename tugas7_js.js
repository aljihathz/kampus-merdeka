
//create class
    class gempa {
        constructor(lokasi, skala) {
            this.lokasi = lokasi;
            this.skala = skala;
        }
        dampak() {
            let efek;
            if (this.skala >= 0 && this.skala <= 2) efek = " Tidak terasa";
            else if (this.skala > 2 && this.skala <= 4) efek = " Bangunan retak-retak";
            else if (this.skala > 4 && this.skala <= 6) efek = " Bangunan roboh";
            else if (this.skala > 6) efek = " Bangunan roboh dan berpotensi tsunami";
            else efek = " ";
            
            document.getElementById('data').innerHTML +=
            `
            <td>${this.lokasi}</td>
            <td>${this.skala}</td>
            <td class='kiri'>${efek}</td>`;
        }
    }
//create object
    let g1 = new gempa('Maluku', '5.9')
    let g2 = new gempa('TAIWAN', '7.4')
    let g3 = new gempa('CHINA', '3.2')
    let g4 = new gempa('JEPANG', '2')
    let g5 = new gempa('KOREA', '4.3')
    let g6 = new gempa('THAILAND', '1.4')
    let g7 = new gempa('SINGAPORE', '5.6')
    let g8 = new gempa('RUSSIA', '10')
    let g9 = new gempa('JERMAN', '0.4')
    let g10 = new gempa('VIETNAM', '3.5')

    
 // print result
    g1.dampak();
    g2.dampak();
    g3.dampak();
    g4.dampak();
    g5.dampak();
    g6.dampak();
    g7.dampak();
    g8.dampak();
    g9.dampak();
    g10.dampak();
