import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
});

export default mongoose.models.Book || mongoose.model('Book', bookSchema);
