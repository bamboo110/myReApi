module.exports = (app) => {
    const notes = require('./controllers/notes');
  
    app.get('/notes', notes.getNotes);
    app.get('/notes/:id', notes.getNotesById);
    app.post('/notes', notes.postNotes);
    app.patch('/notes/:id', notes.patchNotes);
    app.delete('/notes/:id', notes.deleteNotes);
  };