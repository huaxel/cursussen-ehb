/*
Vereisten:

    Gebruik constanten voor data die niet mag veranderen
    Gebruik arrays en objecten voor het structureren van:
        Cursussen (titel, beschrijving, modules)
        Studenten (naam, ingeschreven cursussen, scores)
        Scores (per module)
    Gebruik de correcte array methods voor:
        Toevoegen/verwijderen van cursussen
        Inschrijven van studenten
        Toekennen van scores
    Gebruik template literals voor het genereren van:
        Cursusoverzichten
        Studentenlijsten
        Rapporten
    Update alle relevante dropdown menu's wanneer data verandert
*/
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("body")
    .insertAdjacentHTML("afterbegin", "<h1>Leerplatform</h1>");
  const courses = [];
  const students = [];

  const elementIds = [
    "courseTitle",
    "courseDesc",
    "addCourse",
    "courseList",
    "studentName",
    "coursePicker",
    "enrollStudent",
    "studentList",
    "studentPicker",
    "modulePicker",
    "courseGrade",
    "addGrade",
    "reportStudent",
    "generateReport",
    "reportOutput",
  ];

  const [
    courseTitleInput,
    courseDescInput,
    addCourseButton,
    courseListElement,
    studentNameInput,
    coursePicker,
    enrollStudentButton,
    studentListElement,
    studentPicker,
    modulePicker,
    courseGradeInput,
    addGradeButton,
    reportStudentPicker,
    generateReportButton,
    reportOutputElement,
  ] = elementIds.map((id) => document.getElementById(id));

  addCourseButton.addEventListener("click", () => {
    const title = courseTitleInput.value.trim();
    const description = courseDescInput.value.trim();

    if (title && description) {
      if (courses.some((course) => course.title === title)) {
        alert("Deze cursus bestaat al.");
        return;
      }

      courses.push({ title, description, modules: [] });
      courseTitleInput.value = "";
      courseDescInput.value = "";
      updateCourseList();
      updateCoursePicker();
    } else {
      alert("Vul alle velden correct in.");
    }
  });

  function updateCourseList() {
    courseListElement.innerHTML = courses
      .map(
        (course) =>
          `<div><strong>${course.title}</strong>: ${course.description}</div>`
      )
      .join("");
  }
  function updateCoursePicker() {
    const options = courses
      .map(
        (course) => `<option value="${course.title}">${course.title}</option>`
      )
      .join("");
    coursePicker.innerHTML = options;
    modulePicker.innerHTML = options;
  }

  enrollStudentButton.addEventListener("click", function () {
    const name = studentNameInput.value.trim();
    const selectedCourseTitle = coursePicker.value;

    if (name && selectedCourseTitle) {
      let student = students.find((s) => s.name === name);
      if (!student) {
        student = { name, enrolledCourses: [], scores: {} };
        students.push(student);
      }
      if (!student.enrolledCourses.includes(selectedCourseTitle)) {
        student.enrolledCourses.push(selectedCourseTitle);
        student.scores[selectedCourseTitle] = [];
      }
      studentNameInput.value = "";
      updateStudentList();
      updateStudentPicker();
    } else {
      alert("Vul alle velden in.");
    }
  });

  function updateStudentList() {
    studentListElement.innerHTML = students
      .map(
        (student) =>
          `<div>${
            student.name
          } - Ingeschreven in: ${student.enrolledCourses.join(", ")}</div>`
      )
      .join("");
  }

  function updateStudentPicker() {
    const options = students
      .map(
        (student) => `<option value="${student.name}">${student.name}</option>`
      )
      .join("");
    studentPicker.innerHTML = options;
    reportStudentPicker.innerHTML = options;
  }

  addGradeButton.addEventListener("click", function () {
    const selectedStudentName = studentPicker.value;
    const selectedCourse = modulePicker.value;
    const grade = parseInt(courseGradeInput.value, 10);

    if (!selectedStudentName || !selectedCourse || isNaN(grade)) {
      alert("Vul alle velden in.");
      return;
    }

    const student = students.find((s) => s.name === selectedStudentName);
    if (student) {
      if (!student.scores[selectedCourse]) {
        student.scores[selectedCourse] = [];
      }
      student.scores[selectedCourse].push(grade);
      courseGradeInput.value = "";
    }
  });

  generateReportButton.addEventListener("click", function () {
    const selectedStudentName = reportStudentPicker.value;
    const student = students.find((s) => s.name === selectedStudentName);

    if (!student) {
      reportOutputElement.innerHTML = "<div>Geen student geselecteerd.</div>";
      return;
    }

    const report =
      Object.entries(student.scores)
        .map(
          ([course, grades]) =>
            `<div><strong>${course}:</strong> ${grades.join(", ")}</div>`
        )
        .join("") || "<div>Geen cijfers beschikbaar.</div>";

    reportOutputElement.innerHTML = `<h3>Rapport van ${student.name}</h3>${report}`;
  });
});
