import Record from "../models/recordSchema.js";

export const getAllRecords = async (req, res, next) => {
  try {
    const record = await Record.find();
    res.json(record);
  } catch (error) {
    next(error);
  }
};

export const getRecordById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const record = await Record.findById(id);
    if (!record) {
      throw { statusCode: 404, message: "Record not found" };
    }
    res.json(record);
  } catch (error) {}
};

// export const addRecord = async (req, res, next) => {
//   const { artist, title, image_url, genre, year, price } = req.body;
//   try {
//     const newRecord = await Record.create({
//       artist,
//       title,
//       image_url,
//       genre,
//       year,
//       price,
//     });
//     // const newRecord = new Record({
//     //   artist,
//     //   title,
//     //   image_url,
//     //   genre,
//     //   year,
//     //   price,
//     // }); //Wir haben oben eine Instanz newRecord erstellt&übergeben an savedRecord
//     // const savedRecord = await newRecord.save();
//     // res.status(201).json(savedRecord); // man kann hier auch create nutzen,ohne Instanz zu erstellen
//     res.status(201).json(newRecord); //create Methode
//   } catch (error) {
//     next(error);
//   }
// };

//addRecord mit multer
export const addRecord = async (req, res, next) => {
  const { artist, title, genre, year, price } = req.body;
  const image_url = req.file.path;
  console.log(image_url);

  try {
    const newRecord = await Record.create({
      artist,
      title,
      image_url,
      genre,
      year,
      price,
    });
    // const newRecord = new Record({
    //   artist,
    //   title,
    //   image_url,
    //   genre,
    //   year,
    //   price,
    // }); //Wir haben oben eine Instanz newRecord erstellt&übergeben an savedRecord
    // const savedRecord = await newRecord.save();
    // res.status(201).json(savedRecord); // man kann hier auch create nutzen,ohne Instanz zu erstellen
    res.status(201).json(newRecord); //create Methode
  } catch (error) {
    next(error);
  }
};

export const updateRecord = async (req, res, next) => {
  const { id } = req.params;
  const { artist, title, image_url, genre, year, price } = req.body;

  try {
    const updatedRecord = await Record.findByIdAndUpdate(
      id,
      { artist, title, image_url, genre, year, price },
      { new: true }
    );

    if (!updatedRecord) {
      throw { statusCode: 404, message: "Record not found" };
    }
    res.json(updatedRecord);
  } catch (error) {
    next(error);
  }
};

export const addTagToRecord = async (req, res, next) => {
  const { id } = req.params;
  const { tag } = req.body;
  try {
    const record = await Record.findById(id);
    if (!record) {
      throw { statusCode: 404, message: "Record not found" };
    }
    record.tags.push(tag);
    const updatedRecord = await record.save();
    res.json(updatedRecord);
  } catch (error) {}
};

export const deleteRecord = async (req, res, next) => {
  const { id } = req.params;

  try {
    await Record.findByIdAndDelete(id);
    res.json({ message: "Record was deleted" });
  } catch (error) {
    next(error);
  }
};
