import {Component, OnInit, ViewChild} from "@angular/core";
import {ClrWizard} from "@clr/angular";

@Component({
  selector: 'app-wizardsample',
  templateUrl: './wizardsample.component.html',
  styleUrls: ['./wizardsample.component.css']
})
export class WizardsampleComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium: ClrWizard;
  @ViewChild("wizardlg") wizardLarge: ClrWizard;
  @ViewChild("wizardxl") wizardExtraLarge: ClrWizard;

  mdOpen: boolean = false;
  lgOpen: boolean = false;
  xlOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
