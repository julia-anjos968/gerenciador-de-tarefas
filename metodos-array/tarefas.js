let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("Tarefas");
console.table(tarefas);

tarefas.push("Lavar a roupa", "Fazer a janta");


console.log("Depois do push");
console.table(tarefas);


let removeUltimaTarefa = tarefas.pop();
console.log("Depois do pop");
console.table(tarefas);

tarefas.unshift("Estender a roupa"); 
console.log("Depois do unshift");
console.table(tarefas);

let removePrimeiraTarefa = tarefas.shift();
console.log("Depois do shift");
console.table(tarefas);

if (tarefas.includes("Ir à academia")) {
    console.log(`A tarefa já existe na lista`);
} else { 
    tarefas.push("Ir à academia");
    console.table(tarefas);
}

console.log("A lista de tarefas como String  ", tarefas.join(" , "));

console.log("A lista de tarefas (Índices 2 a 4: ", tarefas.slice(2, 5));

let tarefaRemovida = tarefas.splice(3, 1,);
console.log(`\Com a tarefa do índice 3 removida:`)
console.table(tarefas);

let alteraTarefa = tarefas.splice(3, 0, "Ir ao médico");
console.log("Com a tarefa do índice 3 substituída:");
console.table(tarefas);

let tarefas2 = ["Ir à escola", "Estudar português", "Assistir série"];

console.log("Tarefas combinada: ", tarefas.concat(tarefas2));

let tarefasTransformadas = tarefas.map(tarefa => "fazer: " + tarefa);
console.table(tarefasTransformadas);

let tarefasFiltradas = tarefas.filter(tarefa => tarefa.length > 15);

console.log(`Tarefas filtradas (tarefas com mais de 15 caracteres): ${tarefasFiltradas}`);

let tarefasOrdenadas = tarefas.sort();

console.log("Tarefas ordenadas em ordem alfabética:", tarefasOrdenadas);

let tarefasInvertidas = tarefas.reverse();

console.log("Tarefas invertidas:", tarefasInvertidas);