// Example JavaScript Code
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Capture form data
    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const image = document.getElementById('image').files[0]; // Assuming image is uploaded and saved separately
    const imageCaption = document.getElementById('imageCaption').value;
    const personalBackground = document.getElementById('personalBackground').value;
    const professionalBackground = document.getElementById('professionalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    const webDevelopmentBackground = document.getElementById('webDevelopmentBackground').value;
    const primaryComputerPlatform = document.getElementById('primaryComputerPlatform').value;
    const funnyThing = document.getElementById('funnyThing').value;
    const anythingElse = document.getElementById('anythingElse').value;
    
    // Assume courses are captured and processed into an array or similar structure
    function addCourse() {
        const coursesDiv = document.getElementById('courses');
        const newCourseInput = document.createElement('input');
        newCourseInput.type = 'text';
        newCourseInput.className = 'course';
        coursesDiv.appendChild(newCourseInput);
    }
    const reader = new FileReader();
    reader.onload = function(e) {
    personalizedContent = personalizedContent.replace('${image.src}', e.target.result);
    document.querySelector('main').innerHTML = personalizedContent;
    };
    reader.readAsDataURL(image);
    

    // Generate the personalized webpage content
    const personalizedContent = `
        <main>
            <h2>Introduction</h2>
            <figure>
                <img src="${image.src}" alt="${image.alt}">
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
                        <!-- Dynamically insert courses here -->
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
