import { useState } from "react";
const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        type="text"
        className="input"
        autoFocus
        value={title}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
