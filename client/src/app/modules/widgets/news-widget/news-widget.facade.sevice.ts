import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { SearchResponse } from 'src/app/common/models/search.model';
import { New } from 'src/app/pages/new/models/new.model';
import { NewsApi } from 'src/app/pages/news/api/news.api.service';
import { NewsSearchFilter } from 'src/app/pages/news/models/news-search.model';


@Injectable()
export class NewsWidgetFacade {
  constructor(private newsApi: NewsApi) {}

  public loadLastNews(count: number): Observable<New[]> {
    const filter = { take: count } as NewsSearchFilter;
    return this.newsApi.getNews(filter).pipe(
      map((z) => z.result),
      shareReplay()
    );
  }
}
