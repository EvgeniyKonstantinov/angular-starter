// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ButtonComponent } from '../app/modules/ui/component/button/button.component';
import { UiModule } from '../app/modules/ui/ui.module';

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
    withKnobs,
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
  props: {
    content: text('Text', 'Test'),
    styleType: args.styleType,
    color: args.color,
  },
  template: '<app-button [color]="color" [styleType]="styleType">{{content}}</app-button>',
});
export const Basic = Template.bind({});

const iconsTemplate: Story<ButtonComponent> = (args) => ({
  props: {
    content: text('Text', 'Test'),
    styleType: args.styleType,
    color: args.color,
  },
  template: '<app-button [color]="color" [styleType]="styleType"><app-icon iconName="add"></app-icon></app-button>',
});
export const Icons = iconsTemplate.bind({});
