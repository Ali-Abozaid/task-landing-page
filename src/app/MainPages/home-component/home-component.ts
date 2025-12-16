import { Component } from '@angular/core';
import { NavbarComponent} from '../../Layouts/navbar-component/navbar-component';
import { FooterComponent } from '../../Layouts/footer-component/footer-component';

@Component({
  selector: 'app-home-component',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

}
