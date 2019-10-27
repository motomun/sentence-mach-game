import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sentence-much',
  templateUrl: './sentence-much.component.html',
  styleUrls: ['./sentence-much.component.css']
})
export class SentenceMuchComponent implements OnInit {
  title: string;
  myControl: FormGroup;
  nameList: string[];
  placeList: string[];
  whatList: string[];
  name1: string;
  name2: string;
  place: string;
  what: string;

  constructor() { }

  ngOnInit() {
    this.myControl = new FormGroup({
      name1: new FormControl(''),
      name2: new FormControl(''),
      name3: new FormControl(''),
      place1: new FormControl(''),
      place2: new FormControl(''),
      place3: new FormControl(''),
      what1: new FormControl(''),
      what2: new FormControl(''),
      what3: new FormControl('')
    });
    this.title = '文章繋げゲーム';
    this.nameList = new Array();
    this.placeList = new Array();
    this.whatList = new Array();
  }

  onSubmit() {
    let value = this.myControl.value;
    this.nameList.push(value.name1, value.name2, value.name3);
    this.placeList.push(value.place1, value.place2, value.place3);
    this.whatList.push(value.what1, value.what2, value.what3);

    this.name1 = this.nameList[Math.floor(Math.random() * this.nameList.length)];
    this.name2 = this.nameList[Math.floor(Math.random() * this.nameList.length)];
    this.place = this.placeList[Math.floor(Math.random() * this.placeList.length)];
    this.what = this.whatList[Math.floor(Math.random() * this.whatList.length)]
  }
}
