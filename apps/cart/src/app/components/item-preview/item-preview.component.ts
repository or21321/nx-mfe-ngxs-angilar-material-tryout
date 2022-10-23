import {Component, Input} from '@angular/core';

@Component({
  selector: 'workspace-item-preview',
  templateUrl: './item-preview.html',
  styleUrls: ['./item-preview.scss']
})
export class ItemPreviewComponent {
  @Input() item: any
}
