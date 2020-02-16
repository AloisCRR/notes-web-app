const ntsCtrl = {};
const Note = require('../models/note');

ntsCtrl.renderNoteForm = (req, res) => {
    res.render('notes/add-note');
};

ntsCtrl.renderAddNote = async (req, res) => {
    const { noteDescription, noteTitle } = req.body;
    const newNote = new Note({ title: noteTitle, description: noteDescription });
    await newNote.save();
    res.redirect('/notes');
};

ntsCtrl.renderAllNotes = async (req, res) => {
    const note = await Note.find();
    res.render('notes/all-notes', { note });
}

ntsCtrl.renderEditNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note', { note })
};

ntsCtrl.renderUpdateNote = async (req, res) => {
    const { noteTitle, noteDescription } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title: noteTitle, description: noteDescription})
    res.redirect('/notes');
}

ntsCtrl.renderDeleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('back');
}

module.exports = ntsCtrl;