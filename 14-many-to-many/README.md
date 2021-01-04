# Agenda

- kanban board
- 3 questions (from backend review session)
- backend project overview
- Review: Update and Delete
- Linking Tables (aka "Junction Tables")
  - for many-to-many relationships


---

# crUD!

- Create
    - Sign up
    - Show form: GET `/users/new`
    - Process form: POST `/users/new`
    - `User.create()`
- Retrieve
    - Log in
    - Show list: GET `/users`
    - Show one: GET `/users/12345`
    - `User.findAll()`
        - returns an Array
    - `User.findOne({ where: id })`
        - returns an Object (or null)
    - `User.findByPk(1)`
- Update
    - Edit your profile picture
    - Show form: GET `/users/12345/edit`
    - Process form: POST `/users/12345/edit`    
    - `User.update({ where: id })`
- Delete
    - Delete account
    - Show form: GET `/users/12345/delete`
    - Process form: POST `/users/12345/delete`       
    - `User.destroy({ where: id })`

