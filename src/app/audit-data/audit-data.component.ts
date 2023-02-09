import { Component, OnInit } from '@angular/core';
import { Audit } from '../audit';
import { AuditServiceService } from '../audit-service.service';

@Component({
  selector: 'app-audit-data',
  templateUrl: './audit-data.component.html',
  styleUrls: ['./audit-data.component.css']
})
export class AuditDataComponent  implements OnInit {
  constructor(public cs:AuditServiceService){
  }
  ngOnInit(): void {  
    
    this.cs.getAll().subscribe((data:Audit[])=>
    {
      this.auditlist=data;
    })
  }
  
  auditlist:Audit[]


save()
{
 this.cs.save().subscribe()
}
update(){
  
}

}
