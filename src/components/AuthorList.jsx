export const AuthorsList = ({ authors = [], onDelete, onEdit }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {authors.map((author) => (
        <tr key={author.id}>
          <td>{author.name}</td>
          <td>{author.surname}</td>
          <td>
            <button onClick={() => onEdit(author)}>Edit</button>
            <a> </a>
            <button_2 onClick={() => onDelete(author.id)}>Delete</button_2>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
