/*
Vereisten:

    Gebruik objecten voor het opslaan van student data
    Gebruik for...of loops voor het tonen van resultaten
    Genereer een overzicht met template literals
    Toon per student:
        Alle vakken met scores
        Gemiddelde score
        Hoogste en laagste score
*/
document.addEventListener("DOMContentLoaded", function () {
    const students = {
        Alex: [],
        Sam: [],
        Jo: [],
    };

    const elementIds = [
        "addGradeButton",
        "student",
        "grade",
        "course",
        "studentOverview",
    ];

    const [addGradeButton, student, grade, course, studentOverviewElement] =
        elementIds.map((id) => document.getElementById(id));

    function addGrade(studentName, courseName, gradeValue) {
        if (students[studentName]) {
            students[studentName].push({
                course: courseName,
                grade: gradeValue,
            });
            displayResults();
        }
    }

    function displayResults() {
        studentOverviewElement.innerHTML = "";

        for (const studentName in students) {
            const courses = students[studentName];
            if (courses.length === 0) continue;

            const totalScore = courses.reduce(
                (sum, course) => sum + course.grade,
                0
            );
            const averageScore = (totalScore / courses.length).toFixed(2);
            const highestScore = Math.max(
                ...courses.map((course) => course.grade)
            );
            const lowestScore = Math.min(
                ...courses.map((course) => course.grade)
            );

            const studentHTML = `
                <div> 
                    <h2>${studentName}</h2>
                    <ul>
                        ${courses
                            .map(
                                (course) =>
                                    `<li>${course.course}: ${course.grade}</li>`
                            )
                            .join("")}
                    </ul>
                    <p>Gemiddelde score: ${averageScore}</p>
                    <p>Hoogste score: ${highestScore}</p>
                    <p>Laagste score: ${lowestScore}</p> 

                </div>
            `;
            studentOverviewElement.innerHTML += studentHTML;
        }
    }

    addGradeButton.addEventListener("click", function () {
        if (
            student.value &&
            course.value &&
            grade.value >= 0 &&
            grade.value <= 20
        ) {
            addGrade(student.value, course.value, parseFloat(grade.value));
            student.value = "";
            course.value = "";
            grade.value = "";
        } else {
            alert("Vul alle velden correct in.");
        }
    });
});
