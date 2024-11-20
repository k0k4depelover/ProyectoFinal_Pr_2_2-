document.getElementById("submit").addEventListener("click", calcularNota);

function calcularNota(){
    const respCorrectas={
        pregunta1: "correcto",
        pregunta2: "correcto",
        pregunta3: "correcto",
        pregunta4: "correcto",
        pregunta5: "correcto"
    };
    let preguntasRespondidas=0;
    let puntaje=0;
     for(const pregunta in respCorrectas){
        const opciones = document.getElementsByName(pregunta);
        let respondida=false;
        for (const opcion of opciones) {
            if (opcion.checked) {
                respondida = true;
                if (opcion.value === respCorrectas[pregunta]) {
                    puntaje++;
                }
                break; // Salir del loop una vez que se selecciona una respuesta
            }
        }
        if(respondida) preguntasRespondidas++;
     }
     const totalPreguntas= Object.keys(respCorrectas).length;

     if (preguntasRespondidas< totalPreguntas) {
        alert("Por favor, responde todas las preguntas antes de enviar.");
        return;
     }
     const notaAprobatoria= totalPreguntas*0.6;
     const mensaje= puntaje>= notaAprobatoria
     ? `¡Felicidades! Aprobaste con ${puntaje} de ${totalPreguntas}.`
     : `Lo siento, no aprobaste. Tu puntaje es ${puntaje} de ${totalPreguntas}.`;
     alert(mensaje);
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const correctUsername = 'alumno';
    const correctPassword = '2024';

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('exam').style.display = 'block';
        return false;  // Prevent form submission
    } else {
        document.getElementById('error-message').style.display = 'block';
        return false;  // Prevent form submission
    }
}
