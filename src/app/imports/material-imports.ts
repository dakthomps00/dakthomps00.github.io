import { NgModule } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from "@angular/material/sidenav";


@NgModule({
    imports: [
        MatSidenavModule,
        MatDrawerContainer,
        MatDrawer,
        MatButton,
    ],
    exports: [
        MatSidenavModule,
        MatDrawerContainer,
        MatDrawer,
        MatButton,
    ]
})
export class MaterialModule { }