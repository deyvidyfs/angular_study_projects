import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  showDetails = false;
  details = 'Secret Password = tuna';
  buttonLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.showDetails = !this.showDetails;
    this.buttonLog.push('Details shown at ' + new Date().toLocaleString());
  }
}
