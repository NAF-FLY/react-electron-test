import { Container, Grid } from '@mui/material'
import NodesCard from './NodesCard/NodesCard'
import NodesDetailsCard from './NodesDetailsCard'
import SubscriptionsCard from './SubscriptionsCard'

const ContentGrid = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={12} justifyContent="center">
          <Grid container spacing={2} direction="row">
            <Grid item xs={6}>
              <NodesCard
                onSelect={(e, selection) => this.handleSelect(e, selection)}
                sx={{ height: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <NodesDetailsCard
                nodeid={'daslfjladsf'}
                namespace={'daslfjladsf'}
                displayname={'Детальная информация'}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <SubscriptionsCard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
export default ContentGrid
