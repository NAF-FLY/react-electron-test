import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

import NotificationsIcon from '@mui/icons-material/Notifications'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { useState } from 'react'

const NodesDetailsCard = props => {
  const [attributes, setAttributes] = useState([])
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = event => {
    fetch('/subs/subscribe?id=' + props.nodeid + '&ns=' + props.namespace)
      .then(response => {
        if (!response.ok) {
          throw new Error('http error ' + response.status)
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        setSubscribed(true)
      })
      .catch(err => console.log(err.message))
  }

  const unsubscribe = event => {
    fetch('/subs/unsubscribe?id=' + props.nodeid + '&ns=' + props.namespace)
      .then(response => {
        if (!response.ok) {
          throw new Error('http error ' + response.status)
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        setSubscribed(false)
      })
      .catch(err => console.log(err.message))
  }

  return (
    <Card {...props}>
      <Box
        padding={1}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography gutterBottom variant="h5" component="div" align="center">
          {props.nodeid == -1 ? (
            'No Node Selected'
          ) : (
            <div>{props.displayname}</div>
          )}
        </Typography>
        {subscribed ? (
          <Button onClick={unsubscribe}>
            <NotificationsIcon />
          </Button>
        ) : (
          <Button onClick={subscribe}>
            <NotificationsNoneIcon />
          </Button>
        )}

        <TableContainer>
          <Table sx={{ minWidth: 400 }} aria-lable="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Атрибут</TableCell>
                <TableCell align="right">Значение</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attributes.map(
                attr =>
                  attr[1] != '' && (
                    <TableRow
                      key={attr[0]}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{attr[0]}</TableCell>
                      {/* {attr[0] == 'Value' ? (
                        <ValueCell value={attr[1]} />
                      ) : (
                        <TableCell align="right">{attr[1]}</TableCell>
                      )} */}
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  )
}
export default NodesDetailsCard
