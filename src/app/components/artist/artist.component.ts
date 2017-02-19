import { Component, OnInit } from '@angular/core';
// because we are using id parameters - we need to get the id from the URL
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../../Artist';
import { Album } from '../../../Album';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
        .map(param => param['id'])
        .subscribe((id) => {
          this.spotifyService.getArtist(id)
              .subscribe(artist => {
                this.artist = artist;
              });
        });
  }

 }
