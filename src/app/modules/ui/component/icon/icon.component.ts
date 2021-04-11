import { Component, ChangeDetectionStrategy, Input, HostBinding, OnChanges } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
  @Input() public color: 'primary' | 'accent' | 'warn' | '' = '';
  @Input() public iconName = '';

  @HostBinding('style.width') @Input() public width: string | undefined;
  @HostBinding('style.height') @Input() public height: string | undefined;

  @HostBinding('class.primary') private colorPrimary: boolean | undefined;
  @HostBinding('class.accent') private colorAccent: boolean | undefined;
  @HostBinding('class.warn') private colorWarn: boolean | undefined;

  public ngOnChanges(): void {
    this.applyHostClasses();
  }

  private applyHostClasses(): void {
    this.colorPrimary = this.color === 'primary';
    this.colorAccent = this.color === 'accent';
    this.colorWarn = this.color === 'warn';
  }
}
