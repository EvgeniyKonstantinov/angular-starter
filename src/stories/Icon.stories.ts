// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { UiModule } from '../app/modules/ui/ui.module';
import { IconComponent } from '../app/modules/ui/component/icon/icon.component';

export default {
  title: 'Example/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
    withKnobs,
  ],
} as Meta;

const Template: Story<IconComponent> = (args) => ({
  props: {
    color: args.color,
    iconName: args.iconName,
    width: args.width,
    height: args.height,
  },
  template: '<app-icon [iconName]="iconName" [color]="color" [width]="width" [height]="height"></app-icon>',
});
export const Basic = Template.bind({});
Basic.args = {
  iconName: 'add',
};

export const Big = Template.bind({});
Big.args = {
  iconName: 'add',
  width: '100px',
  height: '100px',
};
