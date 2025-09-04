import { Component } from '@angular/core';
import { Nav } from '../components/nav/nav';
import { Data } from '../components/data/data';

@Component({
  selector: 'app-root',
  imports: [Nav, Data],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
