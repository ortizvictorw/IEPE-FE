import { Component, OnInit } from '@angular/core';
import { ACTIONS, ACTIONS_SUBMIT } from '../../shared/constants';
import { OptionsForm } from '../../shared/interfaces/auth.interfases';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  options: OptionsForm = {
    id: ACTIONS.signIn,
    label: ACTIONS.signIn,
    submitLabel: ACTIONS_SUBMIT.signIn,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
