```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user write a note in the input and click on save
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    activate server
    Note left of server: Server receives the new note and saved it, then send the message: note created
    server-->>browser: 201 Created
    deactivate server

    Note right of browser: Updates the notes locally and re-renders the list

