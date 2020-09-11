import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProfileHostDirective } from './profile-host.directive';
import { ProfileService } from './profile.service';
import { mergeMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-profile-container',
    template:`<ng-template appProfileHost></ng-template>`
})

export class ProfileComponent implements OnInit, OnDestroy{
    
}