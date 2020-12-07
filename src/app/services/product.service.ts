import { Injectable } from "@angular/core";
import { IProduct } from "../models/IProduct";
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: IProduct[] = [
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
  private productAPI = "api/products";
  constructor(private loggerService: LoggerService, private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productAPI).pipe(
      tap(_ => this.log("GET: Products")),
      catchError(this.handleError<IProduct[]>('getProducts', []))
    );
  }

  public getProduct(id: number): Observable<IProduct> {
    const url = `${this.productAPI}/${id}}`;
    return this.http.get<IProduct>(url).pipe(
      tap(_ => this.log(`GET: Product - ${id}`)),
      catchError(this.handleError<IProduct>(`getProduct(${id})`))
    );
  }

  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.loggerService.log(message);
  }
}
