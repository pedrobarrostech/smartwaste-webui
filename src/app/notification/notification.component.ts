import { Component } from "@angular/core"
import { Router } from "@angular/router"

@Component({
    selector: 'notification',
    templateUrl: './notification.template.html',
    styleUrls: ['./notification.component.css']
})

export class NotificationComponent {
    public notificationAnimation: number = 300;
    public notificationTimeout: number = 5000;
    public showNotification: boolean = false;
    public queue: Notification[] = [];
    public index: number = -1;

    public showingNotification: Notification;

    constructor(private router : Router) {
        this.showingNotification = new Notification("", []);

        var buttons: NotificationButton[] = [];
        buttons.push(new NotificationButton("Ir para rota", function () { router.navigate(["Routes", "123"]); }));
        var n: Notification = new Notification("Notificação (3s)", buttons, 3000);
        var n1: Notification = new Notification("Exemplo de notificação (5s)", buttons, 5000);
        var n2: Notification = new Notification("Carregando... (fixa)", [], 0);

        this.Notify(n);
        this.Notify(n1);
        var result: NotificationResult = this.Notify(n2);

        setTimeout(function () { result.Cancel(); }.bind(this), 10000);
        //setInterval(function () { this.showNotification = !this.showNotification; }.bind(this), 2000);
    }

    private CheckQueue(): void {
        if (this.showNotification)
            return;

        if (this.queue.length > 0 && (this.queue.length - 1 > this.index || this.index == -1))
            this.NextNotification();
    }

    private NextNotification() {
        this.index++;        

        if (this.queue[this.index].status == NotificationStatusEnum.Canceled) {
            this.CheckQueue();
            return;
        }

        this.showingNotification = this.queue[this.index];
        this.showNotification = true;

        setTimeout(function () {
            if (this.showingNotification.GetTimeout() != 0)
                setTimeout(this.HideNotification.bind(this), this.showingNotification.GetTimeout());
        }.bind(this), this.notificationAnimation);
    }

    private HideNotification() {
        this.showNotification = false;
        setTimeout(function () {
            this.showingNotification = new Notification("", []);            
            this.CheckQueue();
        }.bind(this), this.notificationAnimation);
    }

    public Notify(notification: Notification): NotificationResult {
        notification.SetOnButtonClickCallback(this.onButtonNotificationClickCallback.bind(this));
        this.queue.push(notification);
        this.CheckQueue();

        return new NotificationResult(this.queue.length - 1, this.OnNotificationCancel.bind(this));
    }

    private OnNotificationCancel(index: number): void {
        this.queue[index].Cancel();

        if (this.index == index && this.showingNotification.GetTimeout() == 0)
            this.HideNotification();
    }

    public onButtonNotificationClickCallback(): void {
        this.HideNotification();
    }
}

export class NotificationResult {
    private index: number;
    private onNotificationCancel: Function;

    constructor(index: number, onNotificationCancel: Function) {
        this.index = index;
        this.onNotificationCancel = onNotificationCancel;
    }

    public Cancel(): void {
        this.onNotificationCancel(this.index);
    }
}

export class Notification {
    public status : NotificationStatusEnum;
    public title: String;
    public buttons: NotificationButton[];
    public onClickCallback: Function;
    private timeout: number;

    constructor(title: String, buttons: NotificationButton[] = [], timeout: number = 5000) {
        this.title = title;
        this.buttons = buttons || [];
        this.timeout = timeout || 0;
        this.status = NotificationStatusEnum.Active;

        for (let i = 0; i < buttons.length; i++)
            this.buttons[i].setOnClickCallback(this.OnButtonClickCallback.bind(this));
    }

    public GetTimeout(): number {
        return this.timeout;
    }

    public OnButtonClickCallback(): void {
        if (this.onClickCallback) this.onClickCallback();
    }

    public SetOnButtonClickCallback(onButtonClickCallback: Function): void {
        this.onClickCallback = onButtonClickCallback;
    }

    public Cancel(): void {
        this.status = NotificationStatusEnum.Canceled;
    }
}

export class NotificationButton {
    public text: String;
    private onClickCallback: Function;
    private onUserClickEvent: Function;

    constructor(text, onClickEvent) {
        this.text = text;
        this.onUserClickEvent = onClickEvent;
    }

    public setOnClickCallback(onClickCallback: Function) {
        this.onClickCallback = onClickCallback;
    }

    public onClick() {
        if (this.onClickCallback) this.onClickCallback();
        if (this.onUserClickEvent) this.onUserClickEvent();
    }
}

enum NotificationStatusEnum {
    Active = 1,
    Canceled = 2
}