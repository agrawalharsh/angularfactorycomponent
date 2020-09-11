import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.css']
})
export class GuestCardComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  login() {
    this.profileService.login();
  }

}
