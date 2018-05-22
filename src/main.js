import React from 'react'

import Sidebar from './Sidebar.'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
            <Sidebar />
            <Notelist />
            <NoteForm />
            Main!
            </div>
        )
    }
}
export default Main