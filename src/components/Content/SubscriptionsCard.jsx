import {
  Box,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

function SubscriptionRow() {
  return (
    <TableRow>
      <TableCell>MyCosVariable</TableCell>
      <TableCell>Double</TableCell>
      <TableCell>-0.67826153</TableCell>
      <TableCell>2023-05-22T22:23:46</TableCell>
    </TableRow>
  )
}

const SubscriptionsCard = () => {
  return (
    <Card>
      <CardContent>
        <Box padding={1}>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            Подписка на изменение
          </Typography>
          {/* <OpenLogDialog /> */}

          <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-lable="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Название</TableCell>
                  <TableCell>Тип</TableCell>
                  <TableCell>Значение</TableCell>
                  <TableCell>Временная метка</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <SubscriptionRow />
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardContent>
    </Card>
  )
}
export default SubscriptionsCard
