import { Component, OnInit } from '@angular/core';
// because we are using id parameters - we need to get the id from the URL
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
        .map(params => params['id'])
        .subscribe((id) => {
          this.spotifyService.getAlbum(id)
              .subscribe(album => {
                this.album = album;
              });
        });
  }

 }
