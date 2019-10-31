import { storiesOf } from '@storybook/vue'
import AppLogo from './../components/AppLogo.vue'

storiesOf('AppLogo', module)
  .add('story as a component', () => ({
    components: { AppLogo },
    template: `
      <div>
        <h2>AppLogoコンポーネント</h2>
        <app-logo/>
      </div>
    `
}))
