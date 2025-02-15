const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/pranto/", (req, res) => {
    res.send("PLAYER GOT 22 VISIT..OWNER @ASIBHASANPRANTOO");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
