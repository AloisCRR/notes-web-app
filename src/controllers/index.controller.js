const idxCtrl = {};

idxCtrl.renderIndex = (req,res)=>{
    res.render('index')
};

idxCtrl.renderAbout = (req,res)=>{
    res.render('about')
};

module.exports = idxCtrl;