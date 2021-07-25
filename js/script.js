

let boton = document.querySelector(".container__input--button");

let label = document.querySelectorAll(".container__label");
let input = document.querySelectorAll(".input-radio");
let boton2 = document.querySelector('.continuartrue');
let boton3 = document.querySelector('.continuarNottrue');
let ver = document.querySelector(".mostrar");

/**SELECIONAR EL VALOR DEL INPUT/LABEL */

for (let i = 0; i < input.length; i++) {
            
    input[i].addEventListener('click', () => {
                cambiar();

                x= label[i].innerText;

                if (document.querySelector('.questionsOne')) {//si la clase es preguntas uno
                    console.log('question one')
                        console.log(label[i].innerText);
                    if(x === 'main')
                    {
                        console.log('verdad');              //hace esto
                        redirigirTrue();
                    
                    }else{
                        console.log('no verdad');
                        redirigirNotTrue(x.innerHTML = 'main');
                    }
                }else if (document.querySelector('.questionsTwo')) {//si la clase es preguntas 2 
                    console.log('question DOS');
                    // console.log(label[i].innerText);
                    let data = window.getComputedStyle(label[i].children[0], ':after').getPropertyValue('content');
                    // x= data;
                    console.log(data);
                    if(data === '"<script>"')
                    {
                        console.log('verdad');              //hace esto
                        redirigirTrue();
                    
                    }else{
                        console.log('no verdad');
                        redirigirNotTrue(`<p class="answer">`);
                        let root =document.documentElement;
                        root.style.setProperty('--answer','"<script>"')
                    }
                }else if (document.querySelector('.questionsThree')) {//si la clase es preguntas 3 
                    console.log('question three');
                    
                    if(x === 'Don’t repeat yourself')
                    {
                        console.log('verdad');              //hace esto
                        redirigirTrue();
                    
                    }else{
                        console.log('no verdad');
                        redirigirNotTrue('Don’t repeat yourself');
                    }
                }else if (document.querySelector('.questionsFour')) {//si la clase es preguntas 3 
                    console.log('question four');
                    
                }
    });
            

}//fin for





/*SI LA RESPUESTA ES VERDADERA , CREA EL ALERT*/
function isTrue(v) {
        const alert_True = document.createElement('div');
        const p = document.createElement('p');
        const a = document.createElement('a');

        a.classList.add("continuartrue");
        a.style.background="#2CB67D"
        a.addEventListener("click",link);
        a.innerText="Continuar"
        p.innerText="¡Buen trabajo!";

        alert_True.classList.add('alert','alert-success');
        alert_True.appendChild(p);
        alert_True.appendChild(a);

        //     alert_True.innerHTML = `
        //    <div class="alert alert-success" role="alert">
        //         <p>¡Buen trabajo!</p>
        //         <a class="continuartrue" style="Background:#2CB67D" onclick="link()">Continuar</a>
        //     </div>
        //         `;
        //insertamos un nuevo dono para el documento 
        ver.innerHTML="";
        ver.appendChild(alert_True);
        
        
        
}
/*SI LA RESPUESTA ES FALSA , CREA EL ALERT*/
function isNotTrue(v){ 
    const alert_True = document.createElement('div');

    alert_True.innerHTML = `
    <div class="alert alert-danger" role="alert">
        <p>La respuesta correcta es </br> ${v}</p>
        <a href="#" class="continuarNottrue" style="Background:#EF4565" onclick="link()">Continuar</a>
    </div>
        `;
    //insertamos un nuevo dono para el documento 
    
    ver.innerHTML="";
    ver.appendChild(alert_True);
    
}


/*CAMBIA EL BOTON A MORADO*/
function cambiar() {
    boton.style.backgroundColor = "#6B47DC";
}

/*PASAMOS LA FUNCION ISTRUE Y REDIRIGE, Y OCULTA EL BOTON MORADO*/

function redirigirTrue() {
        boton.disabled = false;

        boton.addEventListener("click",function(){
            isTrue();
            boton.style.display = "none";
        });
    
}
/*PASAMOS LA FUNCION ISNOTTRUE Y REDIRIGE, Y OCULTA EL BOTON MORADO*/
function redirigirNotTrue(v){

        boton.disabled = false;

        boton.addEventListener("click",function(){
            isNotTrue(v);
           
            boton.style.display = "none";
        });
    
}
/*LE PASO EL LINK */
function link(){
    if (document.querySelector('.questionsOne'))
    {
        window.location.href ="../PreguntasHtml/pregunta2.html"; 
    }else if(document.querySelector('.questionsTwo'))
    {
        window.location.href ="../PreguntasHtml/pregunta3.html"; 
    }else if(document.querySelector('.questionsThree'))
    {
        window.location.href ="../PreguntasHtml/pregunta4.html"; 
    }

}





















function agregar(element) {
    console.log(element);
    let data = window.getComputedStyle(element, ':after').getPropertyValue('content');
    data = data.replace('"', '');
    data = data.replace('"', '');
    console.log('entre en agregar');
    console.log(data);

    const row = document.createElement('div'); //creo un elemento para pasarle un html con los datos ya guardados
    row.setAttribute("class", "col organizar-Respuestas");
    const pregunta4 = document.createElement("code");
    //pregunta4.classList.add('col','sectionOrganizar');

    pregunta4.innerText = data;
    row.appendChild(pregunta4);
    // row.innerHTML = `
    // <div class="row">
    // <div class="col pregunta4 ">
    //                 ${opc}
    // </div>
    // </div>
    // `;
    //insertamos un nuevo dono para el documento 
    organizar.appendChild(row);
}

let organizar = document.querySelector(".organizar");

let col_Pregunta4 = document.querySelectorAll(".col.pregunta4");

for (let i = 0; i < col_Pregunta4.length; i++) {

    console.log('Entre al ciclo preguntas4, cambiar');
    col_Pregunta4[i].addEventListener('click', cambiar);
    col_Pregunta4[i].addEventListener('click', () => {
        agregar(col_Pregunta4[i].children[0].children[0]);
        cambiarColor(col_Pregunta4[i])
        // console.log(col_Pregunta4[i].innerText);
    })

}


function cambiarColor(elem,) {
    console.log("entre en cambiar")
    elem.style.backgroundColor = '#72757E';
    elem.style.fontSize = '0px';
    elem.style.height = '30px';
    elem.style.border = '0px';
}

