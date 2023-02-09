import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Audit } from './audit';

@Injectable({
  providedIn: 'root'
})
export class AuditServiceService {
  auditid: any;
  address: string;
  mobno: number;

  constructor(private http:HttpClient) { }
   au:Audit={
  auditid: 0,
  name: '',
  address: '',
  mobno: 0
}
url:string="http://localhost:9092"
save()
{
 return this.http.post<Audit>(this.url+"/save",this.au)
}
update()
{
  return this.http.put<Audit>(this.url+"/update",this.au)
}
delete(id:number)
{
  return this.http.delete<Audit>(this.url+"/delete/"+id)
}
getAll():any
{
  return this.http.get<Audit>(this.url+"/get")
}
}
