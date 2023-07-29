import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { memberModel } from 'src/app/shared/models/member';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() selectedMember: memberModel | null = null;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  // 在 "關閉" 按鈕的點擊事件處理程序中，發射 closeModal 事件，通知 SearchComponent 關閉彈出視窗
  onCloseModal() {
    this.closeModal.emit();
  }
}
