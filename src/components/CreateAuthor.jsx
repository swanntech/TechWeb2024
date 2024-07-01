export const CreateAuthor = ({ onCreate }) => (
  <fieldset>
    <form onSubmit={onCreate}>
      <div>
        <label htmlFor="name">ADD A NEW AUTHOR</label>
        <h1> </h1>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input id="surname" name="surname" />
      </div>
      <h1> </h1>
      <button>SUBMIT</button>
    </form>
  </fieldset>
);
