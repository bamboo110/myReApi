const connect = require('../connect');

exports.getNotes = (req, res) => {
    const query = 'SELECT * FROM notes';


    connect.query(query, (err, result) => {
        if (err) {
        return res
            .status(500)
            .json({
            message: 'terjadi kesalahan pada sistem!',
            });
        }

        res
        .status(200)
        .json({
            message: 'berhasil',
            result,
        });
    })

};


exports.getNotesById = (req, res) => {
	const params = req.params.id;
	const id = `SELECT * FROM notes WHERE notes.id=?`;

	connect.query(id,[params], (err, result) => {
		if (err) {
		return res
			.status(500)
			.json({
			message: 'terjadi kesalahan pada sistem!',
			});
		}

		res
		.status(200)
		.json({
			message: 'menampilkan data yang diminta',
			result: result[0],
		});
	})
};

exports.postNotes = (req, res) => {
	let title = req.body.title || '';
	let category = req.body.category || '';
	let note = req.body.note || '';

	const insert = `INSERT INTO notes SET title=?, category=?, note=?`;

	connect.query(insert,[title,category,note], (err, result) => {
		if (err) {
			console.log(err);
			return res
				.status(500)
				.json({
				message: 'terjadi kesalahan pada sistem!',
				});
			}
	
			res
			.status(200)
			.json({
				message: 'berhasil menambahkan data',
				result,
			});
	})
};

exports.patchNotes = (req, res) => {
	let title = req.body.title || '';
	let category = req.body.category || '';
	let note = req.body.note || '';
	const params = req.params.id;

	const update = `UPDATE notes SET title=?, category=?, note=? WHERE notes.id=?`;

	connect.query(update,[title,category,note,params], (err, result) => {
		if (err) {
			console.log(err);
			return res
				.status(500)
				.json({
				message: 'terjadi kesalahan pada sistem!',
				});
			}
	
			res
			.status(200)
			.json({
				message: 'berhasil mengubah data',
				result,
			});
	})
};

exports.deleteNotes = (req, res) => {
	const params = req.params.id;

	const del = `DELETE FROM notes WHERE notes.id=?`;

	connect.query(del,[params], (err, result) => {
		if (err) {
			console.log(err);
			return res
				.status(500)
				.json({
				message: 'terjadi kesalahan pada sistem!',
				});
			}
	
			res
			.status(200)
			.json({
				message: 'berhasil menghapus data',
				result,
			});
	})
}