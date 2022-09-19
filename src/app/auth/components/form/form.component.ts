import { Component, Input, OnInit } from '@angular/core';
import { OptionsForm } from '../../shared/interfaces/auth.interfases';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() options!: OptionsForm;


  constructor() { }

  ngOnInit(): void {
  }

}
