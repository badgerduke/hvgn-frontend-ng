import { Subscription } from 'rxjs';
import { FamilyService } from './../family-view/family/family.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadService } from '../core/download.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentFamilyId!: number;
  subscription: Subscription = new Subscription();

  constructor(private router: Router,
              private familyService: FamilyService,
              private donwloadService: DownloadService) { }

  ngOnInit(): void {
    this.subscription.add(this.familyService.currentFamilyId$.subscribe(
      (familyId: number) => this.currentFamilyId = familyId
    ))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  moveToTree(): void {
    this.router.navigate(['/family', this.currentFamilyId])
  }

  download(filePath: string, mime: string): void {
    this.subscription.add(this.donwloadService.download(filePath).subscribe(
      (response: any) => {
        const blob:any = new Blob([response], { type: mime });
        window.URL.createObjectURL(blob);
      }
    ))
  }

}
