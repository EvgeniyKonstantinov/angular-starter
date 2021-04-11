import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public color: 'accent' | 'warn' | 'primary' | '' = '';
  @Input() public styleType: 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini_fab' = 'basic';

  @Output() public btnClick = new EventEmitter<void>();

  public onClick(): void {
    this.btnClick.emit();
  }
}
