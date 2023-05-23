import { Collapse, List, ListItemButton, ListItemText } from '@mui/material'
import { useState } from 'react'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

const Nodes = () => {
  const [open, setOpen] = useState(true)
	const [open1, setOpen1] = useState(false)
	const [open2, setOpen2] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

	const handleClick1 = () => {
    setOpen1(!open1)
  }

	const handleClick2 = () => {
    setOpen2(!open2)
  }

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Objects" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Test1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Test2" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick1}>
        <ListItemText primary="Types" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Test1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Test2" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Test3" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClick2}>
        <ListItemText primary="Views" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Test1" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
export default Nodes
