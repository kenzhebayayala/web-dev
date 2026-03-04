import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  loading = true;
  albumId = 0;
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }
  setFallback(event: Event) {
  const img = event.target as HTMLImageElement;
  img.src = 'https://picsum.photos/150';
}

  back() {
    this.router.navigate(['/albums', this.albumId]);
  }
}