import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  /**
   * @description get users employees list
   */
  getEmployeesList(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiBaseUrl);
  }

  /**
   * @description to add new employee
   * @param payload
   */
  addEmployee(payload: User): Observable<User[]> {
    return this.http.post<User[]>(environment.apiBaseUrl, payload);
  }

  /**
   * @description to add update employee's information
   * @param payload
   */
  updateEmployee(payload: User): Observable<User[]> {
    return this.http.put<User[]>(
      `${environment.apiBaseUrl}/${payload.id}`,
      payload
    );
  }

  /**
   * @description to add delete employee
   * @param payload
   */
  deleteEmployee(id:string): Observable<User[]> {
    return this.http.delete<User[]>(
      `${environment.apiBaseUrl}/${id}`
    );
  }
}
