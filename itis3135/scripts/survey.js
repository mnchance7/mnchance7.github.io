function addCourse() {
    const coursesDiv = document.getElementById('courses');
    const courseInput = document.createElement('input');
    courseInput.type = 'text';
    courseInput.classList.add('course');
    courseInput.required = true;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.type = 'button';
    deleteButton.onclick = function() {
        coursesDiv.removeChild(courseInput);
        coursesDiv.removeChild(deleteButton);
    };

    coursesDiv.appendChild(courseInput);
    coursesDiv.appendChild(deleteButton);
}

window.onload = function() {
    const form = document.getElementById('surveyForm');
    form.onsubmit = function(event) {
        event.preventDefault();

        // Gather form data
        const name = document.getElementById('name').value;
        const mascot = document.getElementById('mascot').value;
        // Retrieve image file
        const image = document.getElementById('image').files[0];
        const imageCaption = document.getElementById('imageCaption').value;
        const personalBackground = document.getElementById('personalBackground').value;
        const professionalBackground = document.getElementById('professionalBackground').value;
        const academicBackground = document.getElementById('academicBackground').value;
        const webDevelopmentBackground = document.getElementById('webDevelopmentBackground').value;
        const primaryComputerPlatform = document.getElementById('primaryComputerPlatform').value;
        const courses = Array.from(document.getElementsByClassName('course')).map(input => input.value);
        const funnyThing = document.getElementById('funnyThing').value;
        const anythingElse = document.getElementById('anythingElse').value;
        
        // Create the HTML content
        const main = document.createElement('main');
        const h2 = document.createElement('h2');
        h2.textContent = 'Introduction';
        main.appendChild(h2);

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = URL.createObjectURL(image);
        img.alt = 'Image';
        figure.appendChild(img);
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = imageCaption;
        figure.appendChild(figcaption);
        main.appendChild(figure);

        const ul = document.createElement('ul');
        const li1 = document.createElement('li');
        li1.innerHTML = `<b>Personal Background:</b> ${personalBackground}`;
        ul.appendChild(li1);
        const li2 = document.createElement('li');
        li2.innerHTML = `<b>Professional Background:</b> ${professionalBackground}`;
        ul.appendChild(li2);
        const li3 = document.createElement('li');
        li3.innerHTML = `<b>Academic Background:</b> ${academicBackground}`;
        ul.appendChild(li3);
        const li4 = document.createElement('li');
        li4.innerHTML = `<b>Background in this Subject:</b> ${webDevelopmentBackground}`;
        ul.appendChild(li4);
        const li5 = document.createElement('li');
        li5.innerHTML = `<b>Primary Computer Platform:</b> ${primaryComputerPlatform}`;
        ul.appendChild(li5);
        const li6 = document.createElement('li');
        li6.innerHTML = `<b>Course I am taking and why:</b><ul>${courses.map(course => `<li>${course}</li>`).join('')}</ul>`;
        ul.appendChild(li6);
        const li7 = document.createElement('li');
        li7.innerHTML = `<b>Funny/Interesting Item to Remember me by:</b> ${funnyThing}`;
        ul.appendChild(li7);
        const li8 = document.createElement('li');
        li8.innerHTML = `<b>I'd Also Like to Share:</b><ul>${anythingElse.split('\n').map(item => `<li>${item}</li>`).join('')}</ul>`;
        ul.appendChild(li8);
        main.appendChild(ul);

        // Replace form with generated content
        const formContainer = document.getElementById('surveyForm').parentElement;
        formContainer.innerHTML = '';
        formContainer.appendChild(main);
    };
};

  
  
  