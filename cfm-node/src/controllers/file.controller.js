const uploadFile = require("../middleware/upload");
const fs = require('fs');

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "请选择要上传的文件" });
    }
    res.status(200).send({
      message: "文件上传成功" + req.file.originalname,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err,
    });
  }
};
const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/uploads/";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: "没有找到文件。",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: directoryPath + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};
const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/uploads/";
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "无法获取文件。" + err,
      });
    }
  });
};
module.exports = {
  upload,
  getListFiles,
  download,
};