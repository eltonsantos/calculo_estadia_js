// Calcular o quanto tempo passou desde que a pessoa fez o check-in até o check-out

// pegar dia e hora de entrada
const checkIn = "22/02/2022 22:00:00";
// pegar dia e hora de saída
const checkOut = "23/03/2023 23:23:03";

// Criar uma função para não repetir o código do check-in e check-out
function convertDateHourInMs(dateHour) {
  // Pegando o check-in como exemplo e desestruturando-o para pegar a data e hora separado
  const [date, hours] = dateHour.split(" ");
  // Desestruturando a data para pegar dia, mês e ano
  const [day, month, year] = date.split("/");
  // Desestruturando as horas para obter a hora, minutos e segundos
  const [hour, minutes, seconds] = hours.split(":");
  // Transformou em um objeto do tipo Data
  const newDate = new Date(year, month - 1, day, hour, minutes, seconds);
  // Retornar o valor em milisegundos para utilzar quando a função for executada
  return newDate.getTime();
}

// Pegar a quando saiu - quando entrou em segundos
const stayedTimeInSeconds = (convertDateHourInMs(checkOut) - convertDateHourInMs(checkIn)) / 1000;

// Atribuindo à variáveis as conversões para reutilizar caso necessário
const dayInSeconds = 24 * 60 * 60;
const hourInSeconds = 60 * 60;
const minutesInSeconds = 60;

// Pegando a quantidade de dias
const days = Math.floor(stayedTimeInSeconds / dayInSeconds);
// Pegando a quantidade de horas
const hours = Math.floor(stayedTimeInSeconds / hourInSeconds) % 24;
// Pegando a quantidade de minutos
const minutes = Math.floor(stayedTimeInSeconds / minutesInSeconds) % 60;
// Pegando a quantidade de segundos
const seconds = stayedTimeInSeconds % 60;

// Executando a função para ver o resultado no console
console.log(`Dias: ${days}, Horas: ${hours}, Minutos: ${minutes}, Segundos: ${seconds}`);
