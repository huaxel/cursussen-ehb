/*
M1: Show me the money
Deze oefening bouwt voort op de challenge uit
de oefeningen rond Classes. Indien je deze nog
niet had gemaakt, hieronder de uitleg voor je start:

Op een BankRekening staat een bepaald bedrag.
Voorzie een default constructor die dat bedrag op 0.0 zet,
en een tweede constructor die toelaat om een positieve double
 door te geven. Als er een negatief getal doorgegeven wordt,
 mag je het bedrag van de bankrekening op 0 zetten.

Voorzie een getter en setter voor het bedrag. We laten niet
toe dat de gebruiker de setter zelf mag gebruiken, gebruik de
juiste zichtbaarheid dat de setter enkel binnen deze klasse
zelf gebruikt kan worden.

Voorzie methoden om geld te storten en om geld af te halen.
Bij een afhaling mag je onder 0 gaan, maar niet meer dan
1000 euro. Als dat wel het geval zou zijn, mag je de afhaling
weigeren en voert de functie niets uit. Druk in dat geval een
foutmelding af in de console.

Voorzie nu een exception OntoereikendSaldo. Indien een
gebruiker probeert geld af te halen zonder dat hij hiervoor
voldoende geld op de rekening heeft wordt een exception
doorgegooid.
 */

package M1;

public class BankRekening {

}
