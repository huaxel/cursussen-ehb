# Use Case Specification voor "Student schrijft zich in voor een vak"

## 1. Algemene informatie

### Naam

SStudent schrijft zich in op een vak

### Doel

De student registreert zich voor een vak binnen het studentenportaal

### Actoren

- Student – Wil zich inschrijven voor een vak.
- Studentenportaal – Controleert de inschrijving en verwerkt deze.
- Studieloopbaancoördinator – Kan inschrijving uitzonderlijk goedkeuren (bv. als de
  limiet overschreden wordt).

## 2. Precondities

- De student is ingelogd in het portaal.
- Het academiejaar en de vakken zijn geconfigureerd in het systeem.
- De student heeft nog beschikbare studiepunten.

## 3. Basic flow

1. Student selecteert de optie "Vakken inschrijven".
2. Het systeem toont een lijst van beschikbare vakken.
3. Student selecteert een vak en klikt op "Inschrijven".
4. Het systeem controleert of er voldoende plaatsen zijn.
5. Het systeem controleert of de student voldoende studiepunten heeft.
6. Het systeem registreert de student voor het vak.
7. De student ontvangt een bevestiging en het vak wordt aan zijn/haar rooster toege-
   voegd.
8. Inschrijving geslaagd!

## 4. Alternatieve flow

## A1: Het vak is volzet

- Het systeem geeft de melding: "Dit vak is volzet. Wil je je op de wachtlijst
  plaatsen?”
- De student kan ja kiezen om op de wachtlijst te komen of nee om een ander
  vak te kiezen.

## A2: De student heeft onvoldoende studiepunten

- Het systeem geeft de melding: "Je hebt niet genoeg studiepunten over om dit
  vak te volgen."
- De student moet een ander vak kiezen of contact opnemen met de studieloop-
  baancoördinator.

## A3: Technische fout of systeem onbeschikbaar

- Het systeem geeft een foutmelding: "Het studentenportaal is tijdelijk onbe-
  reikbaar. Probeer later opnieuw."
- De student moet later terugkomen en kan de status van de inschrijving con-
  troleren.

## 5. Postcondities

- De student is succesvol ingeschreven.
- Het vak wordt toegevoegd aan zijn/haar persoonlijk rooster.
- De studiepunten van de student worden aangepast in het systeem
