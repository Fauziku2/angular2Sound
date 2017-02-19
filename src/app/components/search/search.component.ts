import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchStr: string;
  searchRes: Artist[];

  constructor(private spotifyService: SpotifyService) {

  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr).subscribe(response => {
      this.searchRes = response.artists.items;
    });
  }
 }
