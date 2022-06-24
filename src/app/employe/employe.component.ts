import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  @Input() nameData:any;
  @Input() nameEmail:any;
  @Input() nameAge:any;
  @Input() objData:any;

  @Output() databackOutput = new EventEmitter<string>();

  addItem(value:string){
    debugger
    this.databackOutput.emit(value)

  }
  listEmploye:any=[{
    "name":"Waheed",
    "email":"waheedarshad239@gmail.comm",
    "age":"21",
  }]

  update(obj:any){
    debugger
    this.listEmploye.push(obj);
    return obj.name +" Insert Successfully Data"
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
