interface Paciente {
  id: number;
  nome: string;
  idade: number;
  cidade: string;
}

export const Pacientes: Paciente[] = [
  { id: 1, nome: "João Silva", idade: 32, cidade: "São Paulo" },
  { id: 2, nome: "Maria Santos", idade: 28, cidade: "Rio de Janeiro" },
  { id: 3, nome: "Carlos Oliveira", idade: 45, cidade: "Belo Horizonte" },
  { id: 4, nome: "Ana Souza", idade: 55, cidade: "Porto Alegre" },
  { id: 5, nome: "Pedro Costa", idade: 40, cidade: "Salvador" },
  { id: 6, nome: "Mariana Lima", idade: 35, cidade: "Brasília" },
  { id: 7, nome: "Rafael Santos", idade: 29, cidade: "Recife" },
  { id: 8, nome: "Julia Pereira", idade: 22, cidade: "Fortaleza" },
];
