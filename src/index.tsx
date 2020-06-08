import React from 'react'
import { render } from 'react-dom'
import Question from './modules/Question'
import {Container} from '@material-ui/core'

const Application: React.SFC<{}> = () => {
  return <Container maxWidth="md">
    <Question />
  </Container>
}

render(<Application />, document.getElementById('root'))
