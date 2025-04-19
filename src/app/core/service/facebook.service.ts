import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FacebookService {
    private apiUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) { }

    getCurrentUser(): Observable<any> {
        return this.http.get(`${this.apiUrl}/user`);
    }

    getFeed(page: number, size: number): Observable<any> {
        return this.http.get(`${this.apiUrl}/feed?page=${page}&size=${size}`);
    }

    getUserGroups(): Observable<any> {
        return this.http.get(`${this.apiUrl}/groups`);
    }
}
