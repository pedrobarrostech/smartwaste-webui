import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bottom-navigation',
    templateUrl: './bottom-navigation.template.html',
    styleUrls: ['./bottom-navigation.component.css']
})

export class BottomNavigationComponent {
    public buttons: BottomNavigationButton[] = [];
    @Output() onNavigationClick: EventEmitter<BottomNavigationButton> = new EventEmitter();

    constructor() {
        this.AddButton(new BottomNavigationButton('map', 'Map', this.onClick, "/", false));
        this.AddButton(new BottomNavigationButton('directions', 'Routes', this.onClick, "/Routes", true));
        this.AddButton(new BottomNavigationButton('history', 'History', this.onClick, "", true));
        this.AddButton(new BottomNavigationButton('account_circle', 'Account', this.onClick, "", true));
    }

    public AddButton(button: BottomNavigationButton): void {
        this.buttons.push(button);
    }

    onClick = function (button: BottomNavigationButton) {
        for (var i: number = 0; i < this.buttons.length; i++) {
            this.buttons[i].setActive(false);
        }

        this.onNavigationClick.emit(button);
        button.setActive(true);
    }.bind(this);
}

export class BottomNavigationButton {
    public icon: String;
    public text: String;
    public link: String;
    public showMenu: boolean;
    public onClick: any;
    public active: boolean;

    constructor(_icon: String, _text: String, onClick: Function, _link: String, _showMenu: boolean) {
        this.icon = _icon;
        this.text = _text;
        this.link = _link;
        this.onClick = onClick;
        this.showMenu = _showMenu;
    }

    setActive = function (active: boolean) {
        this.active = active;
    }
}