import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import globalEN from '../traduction/en/global-en.json'
import globalFR from '../traduction/fr/global-fr.json'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  protected readonly title = signal('CoA-Angular');
  currentLangage = "FR"
  choices = this.currentLangage == "FR" ? globalFR.choices : globalEN.choices

  
  ngOnInit(): void {
     console.log(this.choices);
  }


 
  


}
