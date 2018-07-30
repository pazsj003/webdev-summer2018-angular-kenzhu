import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WidgetServiceClient} from "../services/widget.service.client";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setContext(params));
  }

  context;
  widgets = null;
  map = [];
  setContext(params) {
    this.context = params;
    this.loadWidgets(params.topicId);
  }
  loadWidgets(TopicId) {
    if ( TopicId !== undefined) {
      this.service.findWidgetsForTopic(TopicId)
        .then(widgets => {
          this.mapWidget(widgets);
        });
    }
  }

  mapWidget(widgets) {
    this.widgets = widgets;
    console.log(' widget ' + JSON.stringify(widgets));
    for (const widget of widgets) {
      this.map[widget.orderList - 1] = widget;
    }
    console.log(' map ' + JSON.stringify(this.map));
  }

  ngOnInit() {
  }

}
