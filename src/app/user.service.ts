import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/');
    }

    createUser(user: User) {
        return this.http.post('https://jsonplaceholder.typicode.com/posts/', user);
    }
    deleteUser(id: number) {
        return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
    updateUser(id: number, user: User) {
        return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, user);
    }
}

