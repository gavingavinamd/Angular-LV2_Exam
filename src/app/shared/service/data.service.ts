import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  data = [
    {
      "id": 7,
      "email": "Michael.Lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg",
      "Description": "I have three years sales experience. I know how to train the staff to increase target audience and deal with difficult consumers."
    },
    {
      "id": 8,
      "email": "Lindsay.Ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg",
      "Description": "I understand that the company is planning on expanding the market. What I can offer is detailed technical knowledge and strong application ability."
    },
    {
      "id": 9,
      "email": "Tobias.Funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg",
      "Description": "I was a leader of debating club and led our team to win the national debate championship last year."
    },
    {
      "id": 10,
      "email": "Byron.Fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg",
      "Description": "During my time leading the school newspaper, its popularity increased significantly, and readership soared 20% in six months."
    },
    {
      "id": 11,
      "email": "George.Edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
      "avatar": "https://reqres.in/img/faces/11-image.jpg",
      "Description": "I have three years sales experience. I know how to train the staff to increase target audience and deal with difficult consumers."
    },
    {
      "id": 12,
      "email": "Rachel.Howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
      "avatar": "https://reqres.in/img/faces/12-image.jpg",
      "Description": "I have three years sales experience. I know how to train the staff to increase target audience and deal with difficult consumers."
    }
  ]
}
