import { Component, OnInit, Input } from '@angular/core';
import { Poem } from '../poem';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() 
  position;

  poems:Poem[] = [];
  presentPoem:Poem;

  constructor() { }

  ngOnInit(): void {
    this.position = 0;
    this.poems = [
      {
        title: "The Road Not Taken",
        author:"Robert frost",
        fewLines:[
          "Two roads diverged in a yellow wood,",
          "And sorry I could not travel both",
          "And be one traveler, long I stood",
          "And looked down one as far as I could",
          "To where it bent in the undergrowth;",
          "Then took the other, as just as fair,",
          "And having perhaps the better claim,",
          "Because it was grassy and wanted wear;",
          "Though as for that the passing there",
          "Had worn them really about the same," ,       
          "And both that morning equally lay",
          "In leaves no step had trodden black.",
          "Oh, I kept the first for another day!",
          "Yet knowing how way leads on to way,",
          "I doubted if I should ever come back.",         
          "I shall be telling this with a sigh",
          "Somewhere ages and ages hence:",
          "Two roads diverged in a wood, and, I—",
          "I took the one less traveled by,",
          "And that has made all the difference.",
                ]
      },
      {
        title: "O me! O life!",
        author:"Walt Whitman",
        fewLines:[
          "That you are here—that life exists and identity,",
          "That the powerful play goes on, and you may contribute a verse."
                ]
      },
      {
        title: "Open A Book",
        author:"Jane Baskwill",
        fewLines:[
          "Open a book",
          "And you will find",
          "People and places of every kind;",
          "Open a book",
          "And you can be",
          "Anything that you want to be;",
          "Open a book",
          "And you can share",
          "Wondrous worlds you find in there;",
          "Open a book",
          "And I will too",
          "You read to me",
          "And I’ll read to you.",
                ]
      },
      {
        title: "No Man is an island",
        author:"John Donne",
        fewLines:[
          "No man is an island,",
          "Entire of itself,",
          "Every man is a piece of the continent,",
          "A part of the main.",
          "If a clod be washed away by the sea,",
          "Europe is the less.",
          "As well as if a promontory were.",
          "As well as if a manor of thy friend’s",
          "Or of thine own were:",
          "Any man’s death diminishes me,",
          "Because I am involved in mankind,",
          "And therefore never send to know for whom the bell tolls;",
          "It tolls for thee.",
                ]
      },
      {
        title: "A Love is a Place",
        author:"E.E. Cummings",
        fewLines:[
          "Love is a place",
          "& through this place of",
          "love move",
          "(with brightness of peace)",
          "all places",
          "yes is a world",
          "& in this world of",
          "yes live",
          "(skilfully curled)",
          "all worlds",
                ]
      },
      {
        title: "I met a dragon face to face",
        author:"Jack Prelutsky",
        fewLines:[
          "I met a dragon face to face",
          "the year when I was ten,",
          "I took a trip to outer space,",
          "I braved a pirate’s den,",
          "I wrestled with a wicked troll,",
          "and fought a great white shark,",
          "I trailed a rabbit down a hole,",
          "I hunted for a snark.",
          "I stowed aboard a submarine,",
          "I opened magic doors,",
          "I traveled in a time machine,",
          "and searched for dinosaurs,",
          "I climbed atop a giant’s head,",
          "I found a pot of gold,",
          "I did all this in books I read",
          "when I was ten years old.",
                ]
      } 
    ];
    this.presentPoem = this.poems[this.position];
  }

  ngOnChanges() {
    var presentPos = this.position;
    var poemsLenght = this.poems.length;
    var dividend = Math.floor(presentPos / poemsLenght);
    if(this.position > (poemsLenght * dividend)) {
      this.position = this.position - (poemsLenght * dividend);
    } else {
      this.position = (poemsLenght * dividend) - this.position;
    }
    this.presentPoem = this.poems[this.position];
  }


}
