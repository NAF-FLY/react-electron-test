import { Container, Grid } from '@mui/material'
import Search from '../Search/Search'

const Header = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={12} justifyContent="center">
          <Grid container spacing={2} direction="row" alignItems="center">
            <Grid item xs={6}>
              <img
                src={require('../../assets/img/logo_ru.svg').default}
                alt="logo"
                width={152}
              />
            </Grid>
            <Grid item xs={6}>
              <Search />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Header
