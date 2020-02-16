const ntsCtrl = {};

ntsCtrl.renderNoteForm = (req,res)=>{
    res.render('notes/add-page');
};

ntsCtrl.renderAddNote = (req,res)=>{
    console.log(req.body)
    res.send('new note')
};

ntsCtrl.renderAllNotes = (req, res)=>{
    res.send('All notes')
}

ntsCtrl.renderEditNote = (req,res)=>{
    res.send(req.params.id)
};

ntsCtrl.renderUpdateNote = (req, res)=>{
    res.send('updated')
}

ntsCtrl.renderDeleteNote = (req, res) =>{
    res.send('deleted')
}

module.exports = ntsCtrl;