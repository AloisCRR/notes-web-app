const { Router } = require('express');
const router = Router();
const { renderNoteForm, renderAddNote, renderAllNotes, renderEditNote, renderUpdateNote, renderDeleteNote } = require('../controllers/notes.controller')

// Add notes
router.get('/notes/add', renderNoteForm);
router.post('/notes/add', renderAddNote);

// All notes
router.get('/notes', renderAllNotes);

// Edit notes
router.get('/notes/edit/:id', renderEditNote)
router.put('/notes/edit/:id', renderUpdateNote)

// Delete note
router.delete('/notes/edit/:id', renderDeleteNote)

module.exports = router;