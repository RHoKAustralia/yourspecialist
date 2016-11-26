import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchForm implements OnInit {

  public myForm: FormGroup;
  public clusters: string[];

  constructor(fb: FormBuilder) {
    this.clusters = [
      "Accommodation/Tenancy",
      "Assess-Skill Ability Needs",
      "Assist Access/Maintain Employ",
      "Assist Prod-Pers Care/Safety",
      "Assist-Integrate School/Ed",
      "Assistive Equip-Recreation",
      "Assistive Prod-Household Task",
      "Assist-Life Stage Transition",
      "Assist-Personal Activities",
      "Assist-Travel/Transport",
      "Behaviour Support",
      "Comms & Info Equipment",
      "Community Nursing Care",
      "Daily Tasks/Shared Living",
      "Development-Life Skills",
      "Early Childhood Supports",
      "Equipment Special Assess Setup",
      "Hearing Equipment",
      "Home Modification",
      "Household Tasks",
      "Innov Community Participation",
      "Interpret/Translate",
      "Other Innovative Supports",
      "Participate Community",
      "Personal Mobility Equipment",
      "Physical Wellbeing",
      "Plan Management",
      "Therapeutic Supports",
      "Training-Travel Independence",
      "Vehicle modifications",
      "Vision Equipment"
    ];
    this.myForm = fb.group({
        postcode: new FormControl("", Validators.required),
        cluster: new FormControl("", Validators.required)
    });
  }
  onSubmit() {
      console.log("model-based form submitted");
      console.log(this.myForm);
  }

  reset() {
    this.myForm.reset();
  }

  ngOnInit() {
  }
}
