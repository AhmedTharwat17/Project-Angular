import { Component , ViewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project-Lab';
  messageFromChild:any;
  @ViewChild(ProductComponent) child!:ProductComponent;
  Display(){
    this.child.renderValues();
  }
}
