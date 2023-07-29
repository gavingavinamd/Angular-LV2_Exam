import { DataService } from './../../shared/service/data.service';
import { Component, OnInit } from '@angular/core';
import { memberModel } from 'src/app/shared/models/member';
import * as _ from 'lodash';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  memberData: memberModel[] = [];
  filterMemberData: memberModel[] = [];
  keyWord: string = '';

  //popup
  showModal = false;
  selectedMember: memberModel = new memberModel();

  nowMemberRouter!: memberModel;

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.memberData = this.dataService.data.sort((a, b) =>  a.first_name.localeCompare(b.first_name));
    this.filterMemberData = _.cloneDeep(this.memberData);
  }

  search(){
    this.filterMemberData = this.memberData.filter(
      (member) =>
        member.first_name.toLowerCase().includes(this.keyWord.toLowerCase()) ||
        member.email.toLowerCase().includes(this.keyWord.toLowerCase())
    );
    this.keyWord = '';
  }

  refresh(){
    this.filterMemberData = this.memberData;
    this.keyWord = '';
  }


  //popup
  closeModal() {
    this.showModal = false;
  }

   // 新增一個處理點擊成員項目的方法
   onMemberItemClick(member: memberModel) {
    this.selectedMember = member;
    this.showModal = true;

    this.nowMemberRouter = member;
  }

  //router
  goRouter(){
    this.router.navigate(['member-detail', this.nowMemberRouter.first_name]);
  }
}
