
// Define the addCourse function
function addCourse() {
    const coursesContainer = document.getElementById('courses');
    // Check if the last input is not empty or if there are no inputs yet
    const lastInput = coursesContainer.querySelector('input:last-of-type');
    if (!lastInput || lastInput.value.trim() !== '') {
        const newCourseInput = document.createElement('input');
        newCourseInput.type = 'text';
        newCourseInput.className = 'course';
        coursesContainer.appendChild(newCourseInput);
        coursesContainer.appendChild(document.createElement('br'));
        
        // Optionally, you can focus on the new input for better UX
        newCourseInput.focus();

        // Disable the previous input if necessary
        if (lastInput) {
            lastInput.disabled = true;
        }
    }
}

// Add event listener for form submission
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Capture form data
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').files[0]; // Get the file object
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevelopmentBackground = document.getElementById('webDevelopmentBackground').value;
    const primaryComputerPlatform = document.getElementById('primaryComputerPlatform').value;
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;

    // Capture courses
    const coursesInputs = document.querySelectorAll('.course');
    const courses = [];
    coursesInputs.forEach(input => {
        courses.push(input.value);
    });

    // Generate the personalized webpage content
    const personalizedContent = `
        <main>
            <h2>Introduction</h2>
            <figure>
                <img src="${URL.createObjectURL(image)}" alt="${image.name}">
                <figcaption>${imageCaption}</figcaption>
            </figure>
            <ul>
                <li><b>Personal Background: </b>${personalBackground}</li>
                <li><b>Professional Background: </b>${professionalBackground}</li>
                <li><b>Academic Background: </b>${academicBackground}</li>
                <li><b>Background in Web Development: </b>${webDevelopmentBackground}</li>
                <li><b>Primary Computer Platform: </b>${primaryComputerPlatform}</li>
                <li><b>Courses currently taking:</b>
                    <ul>
                        ${courses.map(course => `<li>${course}</li>`).join('')}
                    </ul>
                </li>
                <li><b>Funny thing? </b>${funnyThing}</li>
                <li><b>Anything else? </b>${anythingElse}</li>
            </ul>
        </main>
    `;

    // Display the personalized content
    // This assumes you have a specific element to replace or insert this content into
    document.querySelector('main').innerHTML = personalizedContent;
});
