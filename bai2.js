function elecBill() {
    // Dau vao
    var hoTen = document.getElementById("hoTen").value;
    var kw = document.getElementById("kw").value;
    kw = parseInt(kw);

    // Xu ly
    var tienDien = 0;
    
    if ((kw > 0) && (kw <= 50)) {
        tienDien = 500;
    }
    else if ((kw > 50) && (kw <= 100)) {
        tienDien = 650;
    }
    else if ((kw > 100) && (kw <= 200)) {
        tienDien = 850;
    }
    else if ((kw > 200) && (kw <= 350)) {
        tienDien = 1100;
    }
    else if (kw > 350) {
        tienDien = 1300;
    }

    var tongTien = kw * tienDien;
    var result = "Ho va ten:" + " " + hoTen + ". So tien:" + " " + tongTien + "VND";
    document.getElementById("footer2").innerHTML = result;
}