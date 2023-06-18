import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';


export const DEFAULT_PAGE_SIZE = 10;

export interface PaginationEvent {
  pageIndex: number;
  pageSize: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() length: number;
  @Input() pageSize = DEFAULT_PAGE_SIZE;
  @Input() pageIndex = 0;
  @Output() changed = new EventEmitter<PaginationEvent>();

  disabled = false;

  handlePageEvent(e: any) {
    this.changed.emit({ pageIndex: e.first, pageSize: this.pageSize });
  }
}
