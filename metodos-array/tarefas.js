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
