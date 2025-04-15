// #1 - Sort 10 schools around your house by distance: Insertion Sort, visto que a quantidade de dados é pequena, provando esse algoritmo ser bem eficiente nessas situações com uma notação de O(n)

// #2 - eBay sorts listings by the current Bid amount: Radix or Counting Sort, já que só trabalharemos com números e, por ser uma volumetria grande dados, usar tais algoritmos vai acelerar muito o processo, algo necessário para e-commerce

// #3 - Sport scores on ESPN: Quick Sort, visto que a quantidade dados pode ser grande, mas improvável que teremos um pior cenário, fora que temos um ganho na parte da memória

// #4 - Massive database (can't fit all into memory) needs to sort through past year's user data: Merge Sort, visto que a quantidade de dados é enorme e não será me memória, perfomance para ser o ponto chave daqui, logo o Merge parece ser o mais ideal

// #5 - Almost sorted Udemy review data needs to update and add 2 new reviews: Insertion Sort, dado que a lista está praticamente ordenada, sendo um algoritmo bem eficiente para tais situações

// #6 - Temperature Records for the past 50 years in Canada: Radix or Counting Sort se forem apenas com números inteiros, caso contrário usaria Quick Sort, para poder trabalhar com ordenação em memória

// #7 - Large user name database needs to be sorted. Data is very random: Merge Sort, dado a volumetria de dados e não sabermos a quantidade exata, no pior dos cenários ainda teremos um O(nlogn), evitando situações adversas mais a frente

// #8 - You want to teach sorting for the first time: Bubble Sort, por ser um algoritmo simples e que da um contexto geral de algoritmos de ordenação