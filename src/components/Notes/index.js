import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  Heading,
  NotesContainer,
  Form,
  FormTitleInput,
  FormNotesTextArea,
  FormAddButton,
  NotesList,
  EmptyNotesViewContainer,
  Image,
  EmptyNotesHeading,
  EmptyNotesDescription,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notesText, setNotesText] = useState('')
  const [notesList, setNotesList] = useState([])
  const heading = 'Notes'
  const notesLength = notesList.length

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotesText = event => {
    setNotesText(event.target.value)
    console.log('hello')
  }

  const renderNotesList = () => (
    <NotesList>
      {notesList.map(eachNotes => (
        <NoteItem key={eachNotes.id} noteDetails={eachNotes} />
      ))}
    </NotesList>
  )

  const renderEmptyNotesView = () => (
    <EmptyNotesViewContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <EmptyNotesDescription>
        Notes you add will appear here
      </EmptyNotesDescription>
    </EmptyNotesViewContainer>
  )

  const onAddNotes = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      notesText,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setTitle('')
    setNotesText('')
  }

  return (
    <AppContainer>
      <NotesContainer>
        <Heading>{heading}</Heading>
        <Form onSubmit={onAddNotes}>
          <FormTitleInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <FormNotesTextArea
            placeholder="Take a Note..."
            value={notesText}
            onChange={onChangeNotesText}
            rows="3"
          />
          <FormAddButton type="submit">Add</FormAddButton>
        </Form>
        {notesLength === 0 ? renderEmptyNotesView() : renderNotesList()}
      </NotesContainer>
    </AppContainer>
  )
}

export default Notes
