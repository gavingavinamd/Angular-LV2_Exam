import { Component, Input, OnInit } from '@angular/core';
import { memberModel } from '../../models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input() memberData : memberModel = new memberModel();

  constructor() { }

  ngOnInit(): void {
    console.log(this.memberData)
  }

}
