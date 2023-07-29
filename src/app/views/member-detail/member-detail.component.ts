import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { memberModel } from 'src/app/shared/models/member';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  member: memberModel = new memberModel();


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const memberName = params['name'];

      this.member = this.dataService.data.find(member => member.first_name === memberName) || new memberModel();
    });
  }

  back(){
    this.router.navigate(['search']);
  }

}
