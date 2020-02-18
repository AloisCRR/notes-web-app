const ntsCtrl = {};
const Note = require('../models/note');

ntsCtrl.renderNoteForm = (req, res) => {
    res.render('notes/add-note');
};

ntsCtrl.renderAddNote = async (req, res) => {
    const { noteDescription, noteTitle } = req.body;
    const newNote = new Note({ title: noteTitle, description: noteDescription, user: req.user._id });
    await newNote.save();
    req.flash('success_msg', 'Note added');
    res.redirect('/notes');
};

ntsCtrl.renderAllNotes = async (req, res) => {
    const note = await Note.find({ user: req.user._id }).sort({ createdAt: 'desc' });
    res.render('notes/all-notes', { note });
}

ntsCtrl.renderEditNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (note.user != req.user._id) {
        req.flash('err_msg', 'What are you trying to do?');
        return res.redirect('/notes');
    }
    res.render('notes/edit-note', { note })
};

ntsCtrl.renderUpdateNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (note.user != req.user._id) {
        req.flash('err_msg', 'What are you trying to do?');
        return res.redirect('/notes');
    }
    const { noteTitle, noteDescription } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title: noteTitle, description: noteDescription })
    req.flash('success_msg', 'Note edited');
    res.redirect('/notes');
}

ntsCtrl.renderDeleteNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (note.user != req.user._id) {
        req.flash('err_msg', 'What are you trying to do?');
        return res.redirect('/notes');
    }
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note deleted');
    res.redirect('back');
}

module.exports = ntsCtrl;