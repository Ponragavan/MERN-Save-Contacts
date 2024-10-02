const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

//get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts) {
      res.status(404).json({
        success: false,
        message: "No contacts found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//get contact by id
router.get("/contact/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if (!contact) {
      res.status(404).json({
        success: false,
        message: "No contacts found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//add new contact
router.post("/new", async (req, res) => {
  try {
    const { name, email, phone, description } = req.body;
    if (!name || !email || !phone || !description) {
      res.status(400).json({
        success: false,
        message: "Please fill in all necessary fields",
      });
      return;
    }
    const contact = await Contact.create({ name, email, phone, description });
    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//update contact
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let contact = await Contact.findById(id);
    if (!contact) {
      res.status(404).json({
        success: false,
        message: "No contacts found",
      });
      return;
    }
    contact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//delete contact
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if (!contact) {
      res.status(404).json({
        success: false,
        message: "No contacts found",
      });
      return;
    }
    await Contact.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//search contacts
router.get('/search', async (req, res) => {
  try {
    const keywords = req.query.keywords;
    
    if (!keywords) {
      return res.status(400).json({
        success: false,
        message: "Please enter keywords to search"
      });
    }

    const contacts = await Contact.find({
      $or: [
        { name: { $regex: keywords, $options: 'i' } },
        { phone: { $regex: keywords, $options: 'i' } },
        { email: { $regex: keywords, $options: 'i' } }
      ]
    });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts: contacts
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
