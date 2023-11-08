      // Contact constructor function
      function Contact(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    // Application state
    const state = {
        contacts: [],
    };

    // Function to render the contact list
    function render() {
        const contactList = document.getElementById('contact-list');
        contactList.innerHTML = ''; // Clear the previous content

        state.contacts.forEach((contact, index) => {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';

            // Display the contact information
            contactItem.innerHTML = `
                <strong>Name:</strong> ${contact.name} 
                <strong>Phone:</strong> ${contact.phone}
                <button data-index="${index}" class="delete-button">Delete</button>
            `;

            // Add a click event listener for the delete button
            const deleteButton = contactItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => {
                state.contacts.splice(index, 1); // Remove the contact
                render(); // Render the updated list
            });

            contactList.appendChild(contactItem);
        });
    }

    // Function to add a new contact
    function addContact(name, phone) {
        const contact = new Contact(name, phone);
        state.contacts.push(contact);
        render(); // Render the updated list
    }

    // Add click event listener to the "Add" button
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const name = nameInput.value;
        const phone = phoneInput.value;
        addContact(name, phone);
        nameInput.value = '';
        phoneInput.value = '';
    });

    // Initialize the application
    render();