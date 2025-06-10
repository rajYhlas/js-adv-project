class ContactsController {
    contacts(req, res) {
        console.log('res', req.body)
        res.redirect('/')
      }
}

export const contactsController = new ContactsController();