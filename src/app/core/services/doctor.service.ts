import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Doctor } from '../interfaces/doctor';
import { data } from '../../doctors/doctorsLocalData';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  data: Doctor[] = data;
  constructor(private _httpClient: HttpClient) {}

  getDoctors(): Observable<any> {
    return this._httpClient.post(
      `${environment.apiUrl}/api/doctors/doctorFilter`,
      null
    );
  }

  getDoctorsLocalDatat(): Doctor[] {
    return this.data;
  }

  getDoctorDetails(id: string): Doctor[] {
    return this.data.filter((item) => item._id == id);
  }
}
