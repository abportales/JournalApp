import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView/>
      {/* <NoteView/> */}
      
      <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          position: 'fixed',
          right: 50,
          bottom: 50,
          ':hover': { backgroundColor: 'error.main', opacity:0.8 }
        }}
      >
        <AddOutlined fontSize="30"/>
      </IconButton>
    </JournalLayout>
  )
}
