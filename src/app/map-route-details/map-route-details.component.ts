import { Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
    selector: "map-route-details",
    templateUrl: "./map-route-details.template.html",
    styleUrls: ["./map-route-details.component.css"]
})

export class MapRouteDetailsComponent {
    public title: String;
    public subtitle: String;
    public author: String;
    public createdOn: Date;

    private routeID: String;

    constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.routeID = params["routeID"]
        });

        this.title = "Rota 1";
        this.author = "Juca Pirama";
        this.createdOn = new Date();        
    }
    
}