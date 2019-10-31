import { storiesOf } from '@storybook/vue'
import AppLogo from './../components/AppLogo.vue'

storiesOf('AppLogo', module)
  .add('Logo component', () => ({
    components: { AppLogo },
    template: `
      <div>
        <h2>AppLogoコンポーネント</h2>
        <app-logo/>
      </div>
    `
}))

// storiesOf('AppLogo', module)
//   .add('Logo component2', () => ({
//     components: { AppLogo },
//     template: `
//       <div>
//         <h2>AppLogoコンポーネント2</h2>
//         <app-logo/>
//       </div>
//     `
// }))
