const { Router } = require('express');
const router = Router();
const { renderNoteForm, renderAddNote, renderAllNotes, renderEditNote, renderUpdateNote, renderDeleteNote } = require('../controllers/notes.controller');
const { isAuthenticated } = require('../helpers/validateSession');

// Add notes
router.get('/notes/add-note', isAuthenticated, renderNoteForm);
router.post('/notes/new-note', isAuthenticated, renderAddNote);

// All notes
router.get('/notes', isAuthenticated, renderAllNotes);

// Edit notes
router.get('/notes/edit/:id', isAuthenticated, renderEditNote)
router.put('/notes/edit/:id', isAuthenticated, renderUpdateNote)

// Delete note
router.delete('/notes/delete/:id', isAuthenticated, renderDeleteNote)

module.exports = router;