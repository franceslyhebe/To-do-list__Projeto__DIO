// data do header
const dateElement = document.getElementById("data");

//Mostrar data
const options = {weekday:"long", month:"short", day:"numeric"}; 
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("pt-BR", options);


//selecionar a tarefa, selecionar o botão de add tarefa e lista
const input_tarefa = document.querySelector('.input-tarefa');
const btn_tarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.lista');

//capturar click do btn que add tarefa
btn_tarefa.addEventListener('click', function(e){
    if(!input_tarefa.value)return;
    criatarefa(input_tarefa.value)
} )

//Cria uma lista
function criaLi(){
    const li = document.createElement('li');
    return li;
}

//função para pegar o valor apos click no btn e colocar na lista criada acima
function criatarefa(textoInput){
   const li = criaLi();
   li.innerHTML = ` <input type="checkbox">
                    <p class="texto">${textoInput}</p>
                  `; 

    tarefas.appendChild(li);
    limparInput();
    criaBotaoApagar(li);
    salvarTarefas();

}

//Tecla Enter para add tarefa se houver algo escrito
input_tarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!input_tarefa.value)return;
        criatarefa(input_tarefa.value)
    }
});

// função de limpar o input apos add tarefa
function limparInput(){
    input_tarefa.value = '';
    input_tarefa.focus();
};

// Botao para deletar uma tarefa adicionada
function criaBotaoApagar(li){
    const btnApagar = document.createElement('button');
    btnApagar.innerHTML = `Apagar`;
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild(btnApagar);
}

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
    }
});

