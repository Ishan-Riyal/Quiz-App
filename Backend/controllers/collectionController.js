import Collection from "../models/CollectionModel.js";
import Mcq from "../models/McqModel.js";
import Theory from "../models/TheoryModel.js";
import Coding from "../models/CodingModel.js";

// Create a new collection
export const createCollection = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ message: "Bhai, Name likhna zaroori hai!" });
    }

    const newCollection = new Collection({
      name,
      // baseType will automatically be "all" from the Model default
      createdBy: req.user._id,
    });

    await newCollection.save();
    res.status(201).json(newCollection);
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "Ye naam ka dabba pehle se hai!" });
    }
    res.status(500).json({ message: "Server mein locha hai!" });
  }
};

// Fetch all collections sorted by creation date
export const getAllCollections = async (req, res) => {
  try {
    const collections = await Collection.find().sort({ createdAt: -1 });
    res.status(200).json(collections);
  } catch (err) {
    res.status(500).json({ message: "Data fetch nahi ho raha!" });
  }
};

// Delete a collection and its associated questions
export const deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;

    const collection = await Collection.findByIdAndDelete(id);

    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }

    // Cascade delete related questions across all content types
    await Mcq.deleteMany({ collectionId: id });
    await Theory.deleteMany({ collectionId: id });
    await Coding.deleteMany({ collectionId: id });

    res.json({ message: "Collection and all questions deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
