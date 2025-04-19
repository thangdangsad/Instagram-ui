// app.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {AuthService} from "./core/service/auth.service";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], // Thêm dòng này
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {}
}
