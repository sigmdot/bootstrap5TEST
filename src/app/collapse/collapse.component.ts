import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
})
export class CollapseComponent implements OnInit, OnChanges {
  @Input() index: number;
  @Input() selecc: number;
  id: string = 'collpase';
  idSelecc: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.index.currentValue !== null){
      this.id = `${this.index}`;
      this.idSelecc ='#'+`${this.id}`;
      console.log(this.id);
      
    }
  }

  ngOnInit(): void {}
}
