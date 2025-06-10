// dom elementen
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const courseDiv = document.querySelector("#courses");
const studentDiv = document.querySelector("#students");
const teacherDiv = document.querySelector("#teachers");
const enrollmentDiv = document.querySelector("#enrollments");
const courseListDiv = document.querySelector(".course-list");
const studentListDiv = document.querySelector(".student-list");
const teacherListDiv = document.querySelector(".teacher-list");
const enrollmentListDiv = document.querySelector(".enrollment-list");

// cursussen, studenten, docenten en inschrijvingen arrays
const cursussen = [];
const studenten = [];
const docenten = [];
const inschrijvingen = [];

// Event listeners voor de tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = this.getAttribute("data-tab");

    // 'active' verwijderen van alle tab
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // 'active' toevoegen aan de aangeklikte tab
    this.classList.add("active");

    // 'active' verwijderen van alle tab-content
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    // 'active' toevoegen aan de bijbehorende tab-content
    document.querySelector(`#${target}`).classList.add("active");
  });
});

class Persoon {
  constructor(naam, email, leeftijd) {
    this.naam = naam;
    this.email = email;
    this.leeftijd = leeftijd;
  }
  get naam() {
    return this._naam;
  }
  set naam(naam) {
    if (typeof naam === "string" && naam.trim() !== "") {
      this._naam = naam;
    } else {
      throw new Error("Ongeldige naam");
    }
  }
  get email() {
    return this._email;
  }
  set email(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      this._email = email;
    } else {
      throw new Error("Ongeldig e-mailadres");
    }
  }
  get leeftijd() {
    return this._leeftijd;
  }
  set leeftijd(leeftijd) {
    if (typeof leeftijd === "number" && leeftijd > 0) {
      this._leeftijd = leeftijd;
    } else {
      throw new Error("Ongeldige leeftijd");
    }
  }
}
class Student extends Persoon {
  constructor(naam, email, leeftijd, studentnummer, studiejaar) {
    super(naam, email, leeftijd);
    this.studentnummer = studentnummer;
    this.studiejaar = studiejaar;
  }
  get studentnummer() {
    return this._studentnummer;
  }
  set studentnummer(studentnummer) {
    if (typeof studentnummer === "number" && !isNaN(studentnummer)) {
      this._studentnummer = studentnummer;
    } else {
      throw new Error("Ongeldig studentnummer");
    }
  }
  get studiejaar() {
    return this._studiejaar;
  }
  set studiejaar(studiejaar) {
    if (typeof studiejaar === "number" && studiejaar > 0) {
      this._studiejaar = studiejaar;
    } else {
      throw new Error("Ongeldig studiejaar");
    }
  }
  static zoekOpStudentnummer(studentnummer) {
    // Zoek logica hier
    return `Zoekresultaten voor ${studentnummer}`;
  }
  static zoekOpStudiejaar(studiejaar) {
    // Zoek logica hier
    return `Zoekresultaten voor ${studiejaar}`;
  }
}
class Docent extends Persoon {
  constructor(naam, email, leeftijd, vakgebied, aanstellingsdatum) {
    super(naam, email, leeftijd);
    this.vakgebied = vakgebied;
    this.aanstellingsdatum = aanstellingsdatum;
  }
  get vakgebied() {
    return this._vakgebied;
  }
  set vakgebied(vakgebied) {
    if (typeof vakgebied === "string" && vakgebied.trim() !== "") {
      this._vakgebied = vakgebied;
    } else {
      throw new Error("Ongeldig vakgebied");
    }
  }
  get aanstellingsdatum() {
    return this._aanstellingsdatum;
  }
  set aanstellingsdatum(aanstellingsdatum) {
    if (aanstellingsdatum instanceof Date) {
      this._aanstellingsdatum = aanstellingsdatum;
    } else {
      throw new Error("Ongeldige aanstellingsdatum");
    }
  }
}
class Cursus {
  constructor(titel, beschrijving, docent, ects, maximumStudenten) {
    this.titel = titel;
    this.beschrijving = beschrijving;
    this.docent = docent;
    this.ects = ects;
    this.maximumStudenten = maximumStudenten;
  }
  get titel() {
    return this._titel;
  }
  set titel(titel) {
    if (typeof titel === "string" && titel.trim() !== "") {
      this._titel = titel;
    } else {
      throw new Error("Ongeldige titel");
    }
  }
  get beschrijving() {
    return this._beschrijving;
  }
  set beschrijving(beschrijving) {
    if (typeof beschrijving === "string" && beschrijving.trim() !== "") {
      this._beschrijving = beschrijving;
    } else {
      throw new Error("Ongeldige beschrijving");
    }
  }
  get docent() {
    return this._docent;
  }
  set docent(docent) {
    if (docent instanceof Docent) {
      this._docent = docent;
    } else {
      throw new Error("Ongeldige docent");
    }
  }
  get ects() {
    return this._ects;
  }
  set ects(ects) {
    if (typeof ects === "number" && ects > 0) {
      this._ects = ects;
    } else {
      throw new Error("Ongeldig aantal ECTS");
    }
  }
  get maximumStudenten() {
    return this._maximumStudenten;
  }
  set maximumStudenten(maximumStudenten) {
    if (typeof maximumStudenten === "number" && maximumStudenten >= 0) {
      this._maximumStudenten = maximumStudenten;
    } else {
      throw new Error("Ongeldig maximum aantal studenten");
    }
  }
  static zoekOpTitel(titel) {
    const cursussen = [];
    return cursussen.filter((cursus) =>
      cursus.titel.toLowerCase().includes(titel.toLowerCase())
    );
  }
}
class Inschrijving {
  constructor(student, cursus, datum, status) {
    this.student = student;
    this.cursus = cursus;
    this.datum = datum;
    this.status = status;
    this.beoordelingen = [];
  }
  get student() {
    return this._student;
  }
  set student(student) {
    if (student instanceof Student) {
      this._student = student;
    } else {
      throw new Error("Ongeldige student");
    }
  }
  get cursus() {
    return this._cursus;
  }
  set cursus(cursus) {
    if (cursus instanceof Cursus) {
      this._cursus = cursus;
    } else {
      throw new Error("Ongeldige cursus");
    }
  }
  get datum() {
    return this._datum;
  }
  set datum(datum) {
    if (datum instanceof Date) {
      this._datum = datum;
    } else {
      throw new Error("Ongeldige datum");
    }
  }
  get status() {
    return this._status;
  }
  static geldigeStatussen = ["actief", "voltooid", "geannuleerd"];

  set status(status) {
    if (Inschrijving.geldigeStatussen.includes(status)) {
      this._status = status;
    } else {
      throw new Error("Ongeldige status");
    }
  }

  beoordelingToevoegen(beoordeling) {
    // Voeg beoordeling toe
    this.beoordeling = beoordeling;
  }
  wijzigStatus(nieuweStatus) {
    this.status = nieuweStatus;
  }
}
function toonAlleCursussen(cursusLijst) {
  courseListDiv.innerHTML = "";
  cursusLijst.forEach((cursus) => {
    const cursusItem = document.createElement("div");
    cursusItem.classList.add("course-item");
    cursusItem.innerHTML = `
        <h3>${cursus.titel}</h3>
        <p>${cursus.beschrijving}</p>
        <p>Docent: ${cursus.docent.naam}</p>
        <p>ECTS: ${cursus.ects}</p>
        <p>Max Studenten: ${cursus.maximumStudenten}</p>
        <i class="fas fa-trash delete-course" data-id="${cursus.titel}"></i>
      `;
    courseListDiv.appendChild(cursusItem);

    // Voeg event listeners toe aan delete-icon
    const deleteIcon = cursusItem.querySelector(".delete-course");
    deleteIcon.addEventListener("click", function () {
      const titel = this.getAttribute("data-id");
      deleteCursus(titel);
    });
  });

  function deleteCursus(titel) {
    const cursusIndex = cursussen.findIndex((cursus) => cursus.titel === titel);
    cursussen.splice(cursusIndex, 1);
    toonAlleCursussen(cursussen);
  }
}

function toonStudentDetails(studentLijst) {
  studentListDiv.innerHTML = "";

  studentLijst.forEach((student) => {
    const studentItem = document.createElement("div");
    studentItem.classList.add("student-item");
    studentItem.innerHTML = `
    <h3>Details voor${student.naam}</h3>
          <p>E-mail: ${student.email}</p>
          <p>Leeftijd: ${student.leeftijd}</p>
          <p>Studentennummer: ${student.studentnummer}</p>
          <p>Studiejaar: ${student.studiejaar}</p>`;

    const inschrijvingenVanStudent = inschrijvingen.filter(
      (ins) => ins.student.naam === student.naam
    );

    if (inschrijvingenVanStudent.length > 0) {
      inschrijvingenVanStudent.forEach((inschrijving) => {
        const inschrijvingElement = document.createElement("p");
        inschrijvingElement.textContent = `Ingeschreven voor: ${
          inschrijving.cursus.titel
        } op ${inschrijving.datum.toLocaleDateString()} - Status: ${
          inschrijving.status
        }`;
        studentItem.appendChild(inschrijvingElement);
      });
    } else {
      const noInschrijvingenElement = document.createElement("p");
      noInschrijvingenElement.textContent = "Geen inschrijvingen gevonden.";
      studentItem.appendChild(noInschrijvingenElement);
    }

    studentItem.innerHTML += `<i class="fas fa-trash delete-student" data-id="${student.naam}"></i>
    `;
    studentListDiv.appendChild(studentItem);

    // event listener voor delete
    const deleteIcon = studentItem.querySelector(".delete-student");
    deleteIcon.addEventListener("click", function () {
      const naam = this.getAttribute("data-id");
      deleteStudent(naam);
    });
  });

  function deleteStudent(naam) {
    const studentIndex = studenten.findIndex(
      (student) => student.naam === naam
    );
    studenten.splice(studentIndex, 1);
    toonStudentDetails(studenten);
  }
}

function toonDocentenMetCursussen(docenten) {
  teacherListDiv.innerHTML = "";

  docenten.forEach((docent) => {
    const docentItem = document.createElement("div");
    docentItem.classList.add("docent-item");
    docentItem.innerHTML = `
        <h3>Details voor${docent.naam}</h3>
              <p>E-mail: ${docent.email}</p>
              <p>Leeftijd: ${docent.leeftijd}</p>
              <p>Vakgebied: ${docent.vakgebied}</p>
              <p>Aanstellingsdatum: ${docent.aanstellingsdatum.toLocaleDateString()}</p>`;

    // Filter cursussen per docent
    const cursussenVanDocent = cursussen.filter((cur) => cur.docent === docent);
    if (cursussenVanDocent.length > 0) {
      const cursusList = document.createElement("div");
      cursusList.innerHTML = "<strong>Doceert:</strong>";
      cursussenVanDocent.forEach((cursus) => {
        const cursusElement = document.createElement("p");
        cursusElement.textContent = cursus.titel;
        cursusList.appendChild(cursusElement);
      });
      docentItem.appendChild(cursusList);
    } else {
      const noCoursesElement = document.createElement("p");
      noCoursesElement.textContent = "Doceert nog geen cursussen.";
      docentItem.appendChild(noCoursesElement);
    }
    // delete icon
    docentItem.innerHTML += `<i class="fas fa-trash delete-docent" data-id="${docent.naam}"></i>`;
    teacherListDiv.appendChild(docentItem);

    //event listener
    const deleteIcon = docentItem.querySelector(".delete-docent");
    deleteIcon.addEventListener("click", function () {
      const naam = this.getAttribute("data-id");
      deleteTeacher(naam);
    });
  });

  function deleteTeacher(naam) {
    const teacherIndex = docenten.findIndex((docent) => docent.naam === naam);
    if (teacherIndex !== -1) {
      docenten.splice(teacherIndex, 1);
      toonDocentenMetCursussen(docenten); // Refresh the list
    }
  }
}

function toonAlleInschrijvingen() {
    enrollmentListDiv.innerHTML = ""; 
  
    inschrijvingen.forEach((inschrijving, index) => { 
      const inschrijvingElement = document.createElement("div"); 
      inschrijvingElement.classList.add("inschrijving-item");
    
      inschrijvingElement.innerHTML = `
      <p>Student: ${inschrijving.student.naam}, Cursus: ${inschrijving.cursus.naam}, Datum: ${inschrijving.datum.toLocaleDateString()}, Status: ${inschrijving.status}</p>
      <button class='beoordeling-toevoegen'> Voeg beoordeling toe </button>
      <div class="rating-section" style="display: none;">
        <h2>Voeg Beoordeling Toe</h2>
        <form class="beoordeling-form">
          <label>
            <input type="radio" name="beoordeling-${index}" value="1"> 1
          </label>
          <label>
            <input type="radio" name="beoordeling-${index}" value="2"> 2
          </label>
          <label>
            <input type="radio" name="beoordeling-${index}" value="3"> 3
          </label>
          <label>
            <input type="radio" name="beoordeling-${index}" value="4"> 4
          </label>
          <label>
            <input type="radio" name="beoordeling-${index}" value="5"> 5
          </label>
          <br>
          <button type="submit">Verstuur</button>
        </form>
      </div>
    `;
          
    enrollmentListDiv.appendChild(inschrijvingElement);

    const beoordelingButton = inschrijvingElement.querySelector(".beoordeling-toevoegen");
    const ratingSection = inschrijvingElement.querySelector(".rating-section");
    const beoordelingForm = inschrijvingElement.querySelector(".beoordeling-form");
    
    // toon rating tool
    beoordelingButton.addEventListener("click", () => {
      ratingSection.style.display = "block";
    });

    // event listener form
    beoordelingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const selectedRating = ratingSection.querySelector(`input[name="beoordeling-${index}"]:checked`);
      
      if (selectedRating) {
        const beoordeling = selectedRating.value;
        if (inschrijving) {
          inschrijving.beoordelingToevoegen(beoordeling); // Add the rating
          alert("Beoordeling toegevoegd: " + beoordeling);
          ratingSection.style.display = "none"; // Hide the rating section
        } else {
          alert("Geen inschrijving gevonden.");
        }
      } else {
        alert("Selecteer alstublieft een beoordeling.");
      }
    });
  });
}

function schrijfStudentInVoorCursus(
  student,
  cursus,
  datum,
  status,
  inschrijvingen
) {
  if (
    inschrijvingen.filter((ins) => ins.cursus === cursus).length >=
    cursus.maximumStudenten
  ) {
    throw new Error("Cursus heeft het maximum aantal studenten bereikt.");
  }

  if (
    inschrijvingen.some(
      (ins) => ins.student === student && ins.cursus === cursus
    )
  ) {
    throw new Error("Student is al ingeschreven voor deze cursus.");
  }

  const nieuweInschrijving = new Inschrijving(student, cursus, datum, status);
  inschrijvingen.push(nieuweInschrijving);
  return nieuweInschrijving;
}

// form course
const formCourse = document.createElement("form");
formCourse.id = "course-form";

// Titel
const titleInput = document.createElement("input");
titleInput.type = "text";
titleInput.placeholder = "Cursus Titel";
titleInput.id = "course-title";

// Beschrijving
const descriptionInput = document.createElement("textarea");
descriptionInput.placeholder = "Beschrijving";
descriptionInput.maxLength = 200;
descriptionInput.id = "course-description";

// Docent
const docentSelect = document.createElement("select");
docentSelect.id = "course-docent";
docentSelect.required = true;

function updateDocentSelect() {
  // Reset eerst
  docentSelect.innerHTML = "";

  // Voeg default optie toe
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "-- Kies een docent --";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  docentSelect.appendChild(defaultOption);

  // Voeg elke docent toe als optie
  docenten.forEach((docent, index) => {
    const option = document.createElement("option");
    option.value = index; // index als key
    option.textContent = docent.naam;
    docentSelect.appendChild(option);
  });
}
updateDocentSelect();

// ECTS
const ectsInput = document.createElement("input");
ectsInput.type = "number";
ectsInput.min = 1;
ectsInput.max = 10;
ectsInput.placeholder = "Aantal ECTS";
ectsInput.id = "course-ects";

// Max studenten
const maxStudentsInput = document.createElement("input");
maxStudentsInput.type = "number";
maxStudentsInput.min = 1;
maxStudentsInput.placeholder = "Max aantal studenten";
maxStudentsInput.id = "course-max-students";

// Submit knop
const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.id = "course-submit";
submitBtn.value = "Voeg cursus toe";

// Character Counter
const charCounter = document.createElement("div");
charCounter.id = "description-counter";
charCounter.textContent = "0 / 200";

descriptionInput.addEventListener("input", function () {
  const charCount = this.value.length;
  charCounter.textContent = `${charCount} / 200`;
});

// Voeg alles toe aan het formulier
formCourse.appendChild(titleInput);
formCourse.appendChild(descriptionInput);
formCourse.appendChild(charCounter);
formCourse.appendChild(docentSelect);
formCourse.appendChild(ectsInput);
formCourse.appendChild(maxStudentsInput);
formCourse.appendChild(submitBtn);

// Voeg formulier toe aan de DOM
courseDiv.insertBefore(formCourse, courseListDiv);

// Event listener voor het formulier
formCourse.addEventListener("submit", function (e) {
  e.preventDefault();

  // Haal de waarden op
  const titel = titleInput.value.trim();
  const beschrijving = descriptionInput.value.trim();
  const geselecteerdeIndex = parseInt(docentSelect.value);
  const docent = docenten[geselecteerdeIndex];
  const ects = parseInt(ectsInput.value.trim());
  const maxStudenten = parseInt(maxStudentsInput.value.trim());

  try {
    const nieuweCursus = new Cursus(
      titel,
      beschrijving,
      docent,
      ects,
      maxStudenten
    );
    // Voeg de cursus toe aan de cursuslijst
    cursussen.push(nieuweCursus);
    // Toon de cursus in de cursuslijst
    toonAlleCursussen(cursussen);
    toonDocentenMetCursussen(docenten);
    updateCourseSelect();
    // Reset het formulier
    formCourse.reset();
    charCounter.textContent = "0 / 200";
  } catch (error) {
    alert("Fout bij het toevoegen van de cursus:" + error.message);
  }
});

// form students
const formStudents = document.createElement("form");
formStudents.id = "student-form";

// naam
const studentNameInput = document.createElement("input");
studentNameInput.type = "text";
studentNameInput.placeholder = "Naam van de student";
studentNameInput.id = "student-name";

// e-mail
const studentEmailInput = document.createElement("input");
studentEmailInput.type = "email";
studentEmailInput.placeholder = "E-mail van de student";
studentEmailInput.id = "student-email";

// Leeftijd
const studentAgeInput = document.createElement("input");
studentAgeInput.type = "number";
studentAgeInput.placeholder = "Leeftijd van de student";
studentAgeInput.min = 18;
studentAgeInput.id = "student-age";

// studienummer
const studieNummerInput = document.createElement("input");
studieNummerInput.type = "number";
studieNummerInput.placeholder = "Studentennummer";
studieNummerInput.min = 0;
studieNummerInput.id = "student-number";

// studiejaar
const studieJaarSelect = document.createElement("select");
studieJaarSelect.id = "student-year";

const jaren = [1, 2, 3, 4];
jaren.forEach((jaar) => {
  const option = document.createElement("option");
  option.value = jaar;
  option.textContent = `Jaar ${jaar}`;
  studieJaarSelect.appendChild(option);
});

studieJaarSelect.required = true;

// Submit knop
const studentSubmitBtn = document.createElement("input");
studentSubmitBtn.type = "submit";
studentSubmitBtn.id = "student-submit";
studentSubmitBtn.value = "Voeg student toe";

// Voeg alles toe aan het formulier
formStudents.appendChild(studentNameInput);
formStudents.appendChild(studentEmailInput);
formStudents.appendChild(studentAgeInput);
formStudents.appendChild(studieNummerInput);
formStudents.appendChild(studieJaarSelect);
formStudents.appendChild(studentSubmitBtn);

// Voeg formulier toe aan de DOM
studentDiv.insertBefore(formStudents, studentListDiv);

// Event listener voor het formulier
formStudents.addEventListener("submit", function (e) {
  e.preventDefault();

  // Haal de waarden op
  const naam = studentNameInput.value.trim();
  const email = studentEmailInput.value.trim();
  const leeftijd = parseInt(studentAgeInput.value.trim());
  const studentnummer = parseInt(studieNummerInput.value.trim());
  const studiejaar = parseInt(studieJaarSelect.value);

  try {
    const nieuweStudent = new Student(
      naam,
      email,
      leeftijd,
      studentnummer,
      studiejaar
    );
    // Voeg de student toe aan de studententlijst
    studenten.push(nieuweStudent);
    toonStudentDetails(studenten);
    updateStudentSelect();
    // Reset het formulier
    formStudents.reset();
  } catch (error) {
    alert("Fout bij het toevoegen van de student:" + error.message);
  }
});

// form teachers
const formTeachers = document.createElement("form");
formTeachers.id = "teacher-form";

// naam
const teacherNameInput = document.createElement("input");
teacherNameInput.type = "text";
teacherNameInput.placeholder = "Naam van de docent";
teacherNameInput.id = "teacher-name";

// e-mail
const teacherEmailInput = document.createElement("input");
teacherEmailInput.type = "email";
teacherEmailInput.placeholder = "E-mail van de docent";
teacherEmailInput.id = "teacher-email";
// Leeftijd
const teacherAgeInput = document.createElement("input");
teacherAgeInput.type = "number";
teacherAgeInput.placeholder = "Leeftijd van de docent";
teacherAgeInput.min = 18;
teacherAgeInput.id = "teacher-age";
// Vakgebied
const teacherSubjectInput = document.createElement("input");
teacherSubjectInput.type = "text";
teacherSubjectInput.placeholder = "Vakgebied van de docent";
teacherSubjectInput.id = "teacher-subject";
// Aanstellingsdatum
const teacherStartDateInput = document.createElement("input");
teacherStartDateInput.type = "date";
teacherStartDateInput.placeholder = "Aanstellingsdatum van de docent";
teacherStartDateInput.id = "teacher-start-date";

// Submit knop
const teacherSubmitBtn = document.createElement("input");
teacherSubmitBtn.type = "submit";
teacherSubmitBtn.id = "teacher-submit";
teacherSubmitBtn.value = "Voeg docent toe";

// Voeg alles toe aan het formulier
formTeachers.appendChild(teacherNameInput);
formTeachers.appendChild(teacherEmailInput);
formTeachers.appendChild(teacherAgeInput);
formTeachers.appendChild(teacherSubjectInput);
formTeachers.appendChild(teacherStartDateInput);
formTeachers.appendChild(teacherSubmitBtn);

// Voeg formulier toe aan de DOM
teacherDiv.appendChild(formTeachers);

// Event listener voor het formulier
formTeachers.addEventListener("submit", function (e) {
  e.preventDefault();

  // Haal de waarden op
  const naam = teacherNameInput.value.trim();
  const email = teacherEmailInput.value.trim();
  const leeftijd = parseInt(teacherAgeInput.value.trim());
  const vakgebied = teacherSubjectInput.value.trim();
  const aanstellingsdatum = new Date(teacherStartDateInput.value);

  try {
    const nieuweDocent = new Docent(
      naam,
      email,
      leeftijd,
      vakgebied,
      aanstellingsdatum
    );
    // Voeg de docent toe aan de docentlijst
    docenten.push(nieuweDocent);
    toonDocentenMetCursussen(docenten);
    updateDocentSelect();
    // Reset het formulier
    formTeachers.reset();
  } catch (error) {
    alert("Fout bij het toevoegen van de docent:" + error.message);
  }
  // Update de docent select in het cursusformulier
  updateDocentSelect();
});

// form enrollment
const formEnrollments = document.createElement("form");
formEnrollments.id = "enrollment-form";

// student
const studentSelect = document.createElement("select");
studentSelect.id = "enrollment-student";
studentSelect.required = true;

function updateStudentSelect() {
  // Reset eerst
  studentSelect.innerHTML = "";

  // Voeg default optie toe
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "-- Kies een student --";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  studentSelect.appendChild(defaultOption);

  // Voeg elke docent toe als optie
  studenten.forEach((student, index) => {
    const option = document.createElement("option");
    option.value = index; // index als key
    option.textContent = student.naam;
    studentSelect.appendChild(option);
  });
}
updateStudentSelect();

// cursus
const courseSelect = document.createElement("select");
courseSelect.id = "enrollment-course";
courseSelect.required = true;

function updateCourseSelect() {
  // Reset eerst
  courseSelect.innerHTML = "";

  // Voeg default optie toe
  const defaultOption = document.createElement("option");
  defaultOption.textContent = "-- Kies een cursus --";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  courseSelect.appendChild(defaultOption);

  // Voeg elke docent toe als optie
  cursussen.forEach((cursus, index) => {
    const option = document.createElement("option");
    option.value = index; // index als key
    option.textContent = cursus.titel;
    courseSelect.appendChild(option);
  });
}
updateCourseSelect();

// date
const enrollmentDateInput = document.createElement("input");
enrollmentDateInput.type = "date";
enrollmentDateInput.placeholder = "Inschrijving";
enrollmentDateInput.id = "enrollment-date";

// status
const statusInput = document.createElement("select");
statusInput.id = "enrollment-status";
statusInput.required = true;

Inschrijving.geldigeStatussen.forEach((status) => {
  const option = document.createElement("option");
  option.value = status;
  option.textContent = `Status: ${status}`;
  statusInput.appendChild(option);
});

// Submit knop
const enrollmentSubmitBtn = document.createElement("input");
enrollmentSubmitBtn.type = "submit";
enrollmentSubmitBtn.id = "enrollment-submit";
enrollmentSubmitBtn.value = "Verwerk de inschrijving";

// Voeg alles toe aan het formulier
formEnrollments.appendChild(studentSelect);
formEnrollments.appendChild(courseSelect);
formEnrollments.appendChild(enrollmentDateInput);
formEnrollments.appendChild(statusInput);
formEnrollments.appendChild(enrollmentSubmitBtn);

// Voeg formulier toe aan de DOM
enrollmentDiv.appendChild(formEnrollments);

// Event listener voor het formulier
formEnrollments.addEventListener("submit", function (e) {
  e.preventDefault();

  // Haal de waarden op
  const studentIndex = studentSelect.value;
  const cursusIndex = courseSelect.value;
  const datum = new Date(enrollmentDateInput.value);
  const status = statusInput.value;

  const student = studenten[studentIndex];
  const cursus = cursussen[cursusIndex];

  try {
    const nieuweInschrijving = schrijfStudentInVoorCursus(
      student,
      cursus,
      datum,
      status,
      inschrijvingen
    );
    alert(
      `Student ${student.naam} is succesvol ingeschreven voor ${cursus.titel}.`
    );

    // Reset het formulier
    formEnrollments.reset();
    updateStudentSelect();
    updateCourseSelect();
    toonStudentDetails(studenten);
    toonAlleInschrijvingen();
  } catch (error) {
    alert("Fout bij het verwerken van de inschrijving:" + error.message);
  }
});
