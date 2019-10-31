import { storiesOf } from '@storybook/vue'
import AppButton from './../components/AppButton.vue'

storiesOf('AppButton', module)
  .add('Button component', () => ({
    components: { AppButton },
    template: `
      <div>
        <h2>AppButtonコンポーネント</h2>
        <app-button/>
      </div>
    `
}))
