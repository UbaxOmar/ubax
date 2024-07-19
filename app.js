class Student {
    constructor(firstname, lastname, idnumber, classRoom) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.idnumber = idnumber;
        this.classRoom = classRoom;
    }
}

class Command {
    RegisterNewStudent(student) {
        const allStudents = document.getElementById("all-student");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.firstname}</td>
            <td>${student.lastname}</td>
            <td>${student.idnumber}</td>
            <td>${student.classRoom}</td>
            <td><a href="#" class="remove-student"></a></td>
        `;
        allStudents.appendChild(row);
    }
    clearAllinputs() {
        document.getElementById('firstName').value= "";
        document.getElementById('lastName').value= "";
        document.getElementById('idNumber').value= "";
        document.getElementById('classRoom').value= "";
    }
    displayAlert(message, className) {
        const div = document.createElement("div");
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const form = document.getElementById("student-form");

        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000);
    }
    deletestudent(element) {
        if(element.className === 'remove-student') {
         element.parentElement.parentElement.remove()
        }
    }
}

const handleFormSubmit = (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastName').value;
    const idnumber = document.getElementById('idNumber').value;
    const classRoom = document.getElementById('classRoom').value;

    const student = new Student(firstname, lastname, idnumber, classRoom);
    // Register new student
    const command = new Command();
    if (firstName === "" || lastName === "" || idNumber === "" || classRoom === "") {
        command.displayAlert("please fill out all the inputs" , "alert-worning");
    } else {
        command.RegisterNewStudent(student);
        command.displayAlert("New student addet to the list", "alert-success");
        command.clearAllinputs();
    }
};

// Event listener
document.getElementById("student-form").addEventListener("submit", handleFormSubmit);

document.getElementById("all-student").addEventListener('click',function(e) {

    const command = new command();

   command.deletestudent(e.target);

   command.displayAlert('student deleted successfully','alert-success');
    e.preventDefault();
});
