import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { BottomNavigationButton } from "./_shared/_models/BottomNavigationButton.model";

@Component({
    selector: 'app-root',
    templateUrl: "./app.template.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    public showMenu: boolean = true;

    constructor(private router: Router) {
        router.events.subscribe((val) => {
            this.VerifyMenuForUrl(val.url);
        });
    }

    private VerifyMenuForUrl(url: string) {
        if (url == "/")
            this.showMenu = false;
        else
            this.showMenu = true;
    }

    public onNavigationClick2(button: BottomNavigationButton) : void {
        this.showMenu = button.showMenu;
    };
}