/*
 Je krijgt een stuk JavaScript code met meerdere bugs. Maak gebruik van de geleerde debug-technieken (try/catch, console tools, debugger) om de fouten te vinden en op te lossen.
 Opdracht

    Voer de code uit en observeer het gedrag
    Gebruik de geleerde debug-technieken om alle 5 bugs te vinden
    Los elke bug op en leg uit wat er mis was
    Verbeter de error handling zodat de toepassing graceful faalt met nuttige foutmeldingen

Tips

    Gebruik try/catch blokken om crashes te voorkomen
    Voeg debugger statements toe op strategische plekken
    Gebruik console.log, console.error en console.table om meer inzicht te krijgen
    Test elke functie individueel voordat je ze samen gebruikt

 */

// Data simulatie - gebruikers database
const users = [
  { id: 1, name: "Sara", email: "sara@example.com", isAdmin: false },
  { id: 2, name: "Alex", email: "alex@example.com", isAdmin: true },
  { id: 3, name: "Kim", email: "kim@example.com", isAdmin: false },
];
//
console.table(users);

// Functie om een gebruiker op te halen
const getUser = (userId) => {
  // Bug 1: Probeer te vinden waarom dit soms crasht
  try {
    const user = users.find((u) => u.id === userId);
    if (!user) {
      throw new Error(`Geen gebruiker gevonden met ID ${userId}`);
    }
    console.log(`Gebruiker gevonden: ${user.name}`);
    return user.name;
  } catch (error) {
    console.error(`Fout bij het ophalen van de gebruiker:${error.message}`);
    return "Onbekende gebruiker";
  }
};
// Functie om admin-rechten te controleren
const checkAdminRights = (userId) => {
  // Bug 2: Deze functie werkt niet zoals verwacht
  try {
    const user = users.find((u) => u.id === userId);
    if (!user) {
      throw new Error(
        `Geen gebruiker gevonden voor admin check (ID: ${userId})`
      );
    }
    console.log(`Adminrechten voor ${user.name} : ${user.isAdmin}`);
    return user.isAdmin;
  } catch (error) {
    console.error(
      `Fout bij het controleren van adminrechten: ${error.message}`
    );
    return false; // Standaardwaarde als er een fout optreedt
  }
};
// Functie om e-mail te formatteren
const formatEmail = (email) => {
  // Bug 3: Probleem met de regex
 try{
    const match = email.match(/^(.+)@/);
    if (!match) {
      throw new Error(`Ongeldig e-mailadres: ${email}`);
    }
    const username = match[1];
    const formatted = username.toUpperCase() + "@" + email.split("@")[1];
    return formatted;
 } catch (error) {
    console.error(`Fout bij het formatteren van e-mailadres: ${error.message}`);
    return 'Ongeldige email';
  }
};

// Functie om gebruikers te verwerken
const processUsers = () => {
  // Bug 4: Loop probleem
  console.log("Verwerken van gebruikers...");
  for (let i = 0; i < users.length; i++) {
    try {
        const currentUser = users[i];
        console.log(`\nVerwerken gebruiker: #${i + 1} (ID: ${currentUser.id})`);
      const user = getUser(currentUser.id);
      const isAdmin = checkAdminRights(currentUser.id);
      const formattedEmail = formatEmail(currentUser.email);
      console.log(`Verwerkt: ${user} (Admin: ${isAdmin}) - ${formattedEmail}`);
    } catch (error) {
      console.error(`Fout bij het verwerken van gebruiker # ${i + 1}: ${error.message}`);
    }
  }
  console.log("Alle gebruikers verwerkt.");
};

// Start het proces
processUsers();
