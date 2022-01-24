export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Banane',
    price: 701,
    description: 'A large banana',
  },
  {
    id: 2,
    name: 'Pomme',
    price: 0.9,
    description: 'A great apple',
  },
  {
    id: 3,
    name: 'Fraise',
    price: 299,
    description: 'a great strawberry',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
