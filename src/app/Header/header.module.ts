import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";

@NgModule({
    declarations : [HeaderComponent],
    imports : [],
    bootstrap:[HeaderComponent],
    exports : [HeaderComponent]
})

export class HeaderModule{}