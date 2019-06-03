import { Loadable } from 'utils/components'

export default {
  path: ':postId',
  component: Loadable({
    loader: () =>
      import(/* webpackChunkName: 'Project' */ './components/PostPage')
  })
}
