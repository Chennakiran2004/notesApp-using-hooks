import {ListItem, Title, Note} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, notesText} = noteDetails

  return (
    <ListItem>
      <Title>{title}</Title>
      <Note>{notesText}</Note>
    </ListItem>
  )
}

export default NoteItem
