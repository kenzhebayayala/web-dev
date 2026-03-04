import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  loading = true;
  album!: Album;
  editedTitle = '';

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private albumService: AlbumService,
  private cdr: ChangeDetectorRef
) {}

ngOnInit(): void {
  console.log('ALBUM DETAIL INIT - FILE A');

  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.albumService.getAlbum(id).subscribe({
    next: (data) => {
  console.log('ALBUM DETAIL NEXT - DATA', data);
  this.album = data;
  this.editedTitle = data.title;
  this.loading = false;

  this.cdr.detectChanges();  
},
    error: (err) => {
      console.error('ALBUM DETAIL ERROR', err);
      this.loading = false;
    }
  });
}

  save() {
    const updated: Album = { ...this.album, title: this.editedTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: (res) => {
        this.album = res;
        this.editedTitle = res.title;
      },
    });
  }

  back() {
    this.router.navigate(['/albums']);
  }
}