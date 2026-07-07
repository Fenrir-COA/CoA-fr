import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = input("");
  choices = input([{ valeur: "DEFAULT", redirect: "" }]);

  test = [
    { valeur: "Sets Armure lv 70", redirect: "./SetsArmurelv79.html" },
    { valeur: "Accessoires lvl 70", redirect: "./SetsArmurelv79.html" },
    { valeur: "Insignes lvl 70", redirect: "./SetsArmurelv79.html" },
    { valeur: "Vidéo Raids lvl 70", redirect: "./SetsArmurelv79.html" },
    { valeur: "Inscriptions", redirect: "./SetsArmurelv79.html" },
    { valeur: "NOUVEAU GUIDE !!!", redirect: "./SetsArmurelv79.html" }
  ]

}