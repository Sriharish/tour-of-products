import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
    const products: IProduct[] = [
      { id: 11, name: "Dr Nice" },
      { id: 12, name: "Narco" },
      { id: 13, name: "Bombasto" },
      { id: 14, name: "Celeritas" },
      { id: 15, name: "Magneta" },
      { id: 16, name: "RubberMan" },
      { id: 17, name: "Dynama" },
      { id: 18, name: "Dr IQ" },
      { id: 19, name: "Magma" },
      { id: 20, name: "Tornado" }
    ];

    return { products };
  }

  genId(products: IProduct[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}
