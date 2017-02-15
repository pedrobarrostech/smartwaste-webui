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