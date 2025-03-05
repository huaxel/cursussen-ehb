/*
We gaan hier dieper in op overerving,
wat volgt is een complexere hiërarchie waarmee we verschillende dieren gaan voorstellen,
een schema opstellen hoe alles in elkaar past helpt enorm.
Start met een klasse Dier, deze klasse bevat
een geboortedatum,
een toString methode
en een methode maakGeluid,
maakGeluid geeft tekst terug met het geluid dat een dier maakt.
maakGeluid is hier nog te abstract om op te vullen, dit zal in de subklassen moeten gebeuren.
Vervolgens maak je subklassen van de dieren,
we delen Dier op in een klasse Vis, Zoogdier, Vogel, Reptiel en Amfibie.
deze klassen krijgen niet per se extra eigenschappen

Tenslotte maak je dan de laatste subklasses waar je maakGeluid in gaat overschrijven.
voorzie subklassen voor een Tijger, Kikker, Slang, Vleermuis, Eend, Pinguin en een Noordzeezalm.

We willen een mogelijkheid om aan de juiste dieren een functie zwem() en vlieg() toe te voegen.
Denk na over de meest geschikte manier hiervoor als je weet dat bijvoorbeeld een Eend zowel kan vliegen als zwemmen.

Als je hierna nog altijd een uitdaging nodig hebt kan je in je main functie twee arrays toevoegen.
De eerste array stelt een kooi voor en hier mag je enkel dieren aan toevoegen die kunnen vliegen.
De tweede array stelt een vijver voor en hier kan je enkel dieren aan toevoegen die kunnen zwemmen.
Eens je deze hebt aangemaakt loop je over de arrays en print je van elk dier hier in het resultaat van de maakGeluid functie af.
 */
package H1;

public class testH1 {
}
