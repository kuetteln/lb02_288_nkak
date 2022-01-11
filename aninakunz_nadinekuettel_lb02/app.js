//Formular-Werte z.B. mit document.getElementById auslesen
let locAm=document.getElementById("localAmount");
let locEx=document.getElementById("localExchange");
let forAm=document.getElementById("foreignAmount");
let forEx=document.getElementById("foreignExchange");
//usw.

/* Multipliziert den Betrag mit dem Umwandlungskurs resp. Währungskurs */
function convert(betrag, kurs) {
    return Math.fround(betrag * kurs).toFixed(4);
}

/**
 *  von CHF nach Fremdwährung
 */
function localToForeign() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === "chf") {
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === "eur") {
            /* ... rufe die Funktion auf zur Berechnung des CHF->EUR-Kurses  */
            /* forAm.value= convert(locAm.value, chf_eur);*/
            forAm.value= convert(locAm.value, waehrungsrechner.chf_eur);
        }
        /* ... rufe die Funktion auf zur Berechnung des CHF->USD-Kurses  */
        if (forEx.value === "usd") {
            /* ... und die Zielwährung USD dann ... */
            forAm.value= convert(locAm.value, waehrungsrechner.chf_usd);
        }
    }
}

/**
 *  von Fremdwährung nach CHF
 */

function foreignToLocal() {
    /* Ist Zielwährung CHF dann ... */
    if (locEx.value === "chf") {
        /* ... und die Ausgangswährung EUR dann ... */
        if (forEx.value === "eur") {
            /* ... rufe die Funktion auf zur Berechnung des EUR->CHF-Kurses  */
            locAm.value= convert(forAm.value, waehrungsrechner.eur_chf) ;
        }

        /* ... und die Zielwährung USD dann ... */
        if (forEx.value === "usd") {
            /* ... rufe die Funktion auf zur Berechnung des USD->CHF-Kurses  */
            locAm.value= convert(forAm.value, waehrungsrechner.usd_chf);
        }
    }

}