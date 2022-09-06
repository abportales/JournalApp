import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { active, isSaving } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {
        (!!active)
        ? <NoteView />
        : <NothingSelectedView />
      }


      <IconButton
        onClick={onClickNewNote}
        size='large'
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          position: 'fixed',
          right: 50,
          bottom: 50,
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 }
        }}
      >
        <AddOutlined fontSize="30" />
      </IconButton>
    </JournalLayout>
  )
}
