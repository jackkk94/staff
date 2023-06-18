import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoaderService } from 'src/app/modules/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  public isLoading$: Observable<boolean>;
  constructor(loaderService: LoaderService) {
    this.isLoading$ = loaderService.isLoading;
  }
}
