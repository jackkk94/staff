import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Guid } from 'guid-typescript';
import { New } from 'src/app/pages/new/models/new.model';
import { NewsWidgetFacade } from './news-widget.facade.sevice';
import { Observable } from 'rxjs';

const DEFAULT_NEWS_COUNT = 4;

@Component({
  selector: 'app-news-widget',
  templateUrl: './news-widget.component.html',
  styleUrls: ['./news-widget.component.scss'],
  providers: [NewsWidgetFacade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsWidgetComponent implements OnInit{
  @Input()
  public title = 'Последние новости';

  @Input()
  public count = DEFAULT_NEWS_COUNT;

  public lastNews$: Observable<New[]>;

  constructor(private facade: NewsWidgetFacade) {}

  public ngOnInit(): void {
    this.lastNews$ = this.facade.loadLastNews(this.count);
  }
}
