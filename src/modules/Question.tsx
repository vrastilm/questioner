import React from 'react'
import {getRandomQuestion} from '../utils/questioner'
import {Typography, Divider, Button, LinearProgress, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    margin: {
      marginTop: '10px',
      marginBottom: '10px'
    },
    center: {
        textAlign: 'center'
    },
    right: {
        position: 'relative',
        right: 0
    }
  })


  
const Question = function () {
    const [question, setQuestion] = React.useState({text: 'How are you?', skill: 0})
    const [metaInfo, setMetaInfo] = React.useState({subject: "Subject", theme: "Theme"})
    const askQuestion = React.useCallback(() => {
        const q = getRandomQuestion()
        setQuestion(q[2])
        setMetaInfo({subject: q[1], theme: q[0]})
        setSeconds(1200)
    }, [])

    const [seconds, setSeconds] = React.useState(1200)
    const classes = useStyles()

    React.useEffect(() => {
        const id = globalThis.setInterval(function () {
            const delta = seconds - 1

            if (delta >= 0) {
                setSeconds(seconds - 1)
            }
        }, 1000)

        return () => {
            globalThis.clearInterval(id)
        }
    })

    return <div>
        <Typography variant='h5'>{`${metaInfo.theme} - ${metaInfo.subject}`}</Typography>
        <Divider />
        <Typography className={classes.margin} variant='h6'>{`${question.text}`}</Typography>
        <Box className={classes.margin}>
        <LinearProgress variant="determinate" value={seconds/12} />
        <Typography className={classes.center} variant='subtitle2'>{`${seconds} seconds left!`}</Typography>
        </Box>
        <Button className={classes.right} variant="contained" color="primary" onClick={askQuestion}>Ask me!</Button>
    </div>
}

export default Question