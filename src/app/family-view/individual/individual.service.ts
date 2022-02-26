import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Individual } from 'src/app/models/individual';

@Injectable({
  providedIn: 'root'
})
export class IndividualService {

  constructor(private httpClient: HttpClient) { }

  fetchIndividual(id: number): Observable<Individual> {
    return this.httpClient.get<Individual>(`/individual/${id}`);
  }
}
