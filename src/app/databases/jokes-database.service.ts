import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class JokesDatabaseService implements InMemoryDbService  {

  createDb() {
    let jokes = [ {
      "id": "7474274a-e7df-4361-9caa-d6a218761ef4",
      "category": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "content": "Spotyka się dwóch programistów: - Słyszałem, że straciłeś pracę. Jak to jest być bezrobotnym? - To było najgorsze pół godziny mojego życia!"
    },
    {
      "id": "28456933-d56c-4fbe-9a6d-2a6e2549f4c5",
      "category": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "content": "Doktorze, każdej nocy śni mi się jeden i ten sam koszmar. Jestem na Antarktydzie a wokół pełno pingwinów. I ciągle przybywają i przybywają. Zbliżają się do mnie, napierają na mnie, popychają mnie do urwiska i za każdym razem spychają mnie do lodowatej wody. - Normalnie leczymy takie przypadki w jeden dzień. Ale z Panem możemy mieć większe problemy, Panie Gates..."
    },
    {
      "id": "ef652ad3-a817-4384-a891-7f6a706e886b",
      "category": "b99be362-7044-4bca-aed2-e734f7999e5e",
      "content": "Jadą samochodem 3 koledzy i jeden z nich był programistą. Samochód się psuje, pasażerowie siedzą w środku i dywagują: świece, rozrusznik, benzyna, skończył się olej... Nagle programista mówi: a może wyjdźmy z samochodu poczekajmy chwilę i potem wejdźmy :)"
    } 
  ];

  const categories = [
    {
      id: 'b99be362-7044-4bca-aed2-e734f7999e5e',
      code: 'IT',
      name: 'Informatyczne'
    },
    {
      id: 'e451c8bc-667e-4b3a-a38e-c4b782ac3751',
      code: 'ABOUT_JOHNY',
      name: 'O Jasiu'
    },
    {
      id: '8ad0481c-c85c-4b5e-98e0-77711a65f841',
      code: 'ABOUT_FIREFIGHTERS',
      name: 'O strażakach'
    }
  ];

    return { jokes, categories };
  }
}


