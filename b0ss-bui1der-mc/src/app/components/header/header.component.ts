import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'b0b1-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private route: ActivatedRoute, public headerSvc: HeaderService) {}
  
  navigateBack() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}