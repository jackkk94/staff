import { ModuleWithProviders, NgModule } from "@angular/core";
import { LoaderService } from "./services/loader.service";

@NgModule({
    imports: [],
    declarations: [],
    providers: [],
  })
  export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
      return {
        ngModule: CoreModule,
        providers: [
            LoaderService
        ],
      }
    }
  }