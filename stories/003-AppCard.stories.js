import { storiesOf } from '@storybook/vue'
import AppCard from './../components/AppCard.vue'

storiesOf('AppCard', module)
  .add('Card component', () => ({
    components: { AppCard },
    template: `
      <div>
        <h2>AppCardコンポーネント</h2>
        <app-card/>
      </div>
    `
}))
