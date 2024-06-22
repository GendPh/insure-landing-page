import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-container',
  standalone: true,
  imports: [],
  templateUrl: './details-container.component.html',
  styles: ``
})
export class DetailsContainerComponent {
  @Input("Detail") detail: string = "";
  @Input("Description") description: string = "";
  @Input("Image") image: string = "";
}
