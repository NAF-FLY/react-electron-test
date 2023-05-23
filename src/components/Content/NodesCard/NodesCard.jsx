import { Box, Card, List, Typography } from '@mui/material'
import Nodes from './Nodes'

const NodesCard = props => {
  return (
    <Card {...props}>
      <Box padding={1}>
        <Typography gutterBottom variant="h5" component="div" align='center'>
          Узлы
        </Typography>
        <List sx={{ bgcolor: 'background.paper' }}>
          <Nodes />
        </List>
      </Box>
    </Card>
  )
}
export default NodesCard
