const ntsCtrl = {};

ntsCtrl.renderNoteForm = (req,res)=>{
    res.send('add notes')
};

ntsCtrl.renderAddNote = (req,res)=>{
    res.send('add notes')
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