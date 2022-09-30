import { Component, Input, OnInit } from '@angular/core';
import { Evento, JsonCorreios } from '../../interfaces/correios.interface';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent implements OnInit {
  @Input()
  steps: JsonCorreios;

  stepsHandled: Array<{
    description: string;
  }>;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    this.stepsHandled = this.steps.objetos[0].eventos.map((event: Evento) => {
      return {
        description: event.descricao,
      };
    });
  }
}
