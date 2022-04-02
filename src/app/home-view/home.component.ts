import { Subscription } from 'rxjs';
import { FamilyService } from './../family-view/family/family.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DownloadService } from '../core/download.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  images = ["../assets/hvgn_200.jpeg","../assets/matt_wedding_100.jpeg"];
  loadedCount = 0;
  imagesLoaded = false;

  currentFamilyId!: number;
  subscription: Subscription = new Subscription();

  constructor(private router: Router,
              private familyService: FamilyService,
              private donwloadService: DownloadService) {


  }

  ngOnInit(): void {
    this.preloadImages();
    this.subscription.add(this.familyService.currentFamilyId$.subscribe(
      (familyId: number) => this.currentFamilyId = familyId
    ))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  preloadImages(){
    for(let i = 0; i < this.images.length; i++){
      let img = new Image();
      img.onload = () => {
        this.loaded();
      }
      img.src = this.images[i];
    }
  }

  loaded(){
    this.loadedCount++;
    if(this.images.length == this.loadedCount){
      this.imagesLoaded = true;
    }
  }

  moveToTree(): void {
    this.router.navigate(['/family', this.currentFamilyId])
  }

  download(filePath: string, mime: string): void {
    this.subscription.add(this.donwloadService.download(filePath).subscribe(
      (response: any) => {
        const blob:any = new Blob([response], { type: mime });
        window.URL.createObjectURL(blob);
        const fileParts = filePath.split('/');
        saveAs(blob, fileParts[fileParts.length - 1]);
      }
    ))
  }

}
