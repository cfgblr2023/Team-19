app.post("/uploadWard", async(req, res)=>{
    const w = await WardSchema.create(req.body)
    res.status(201).json({
        success: true
    })
});

app.get("/viewWards", async(req, res)=>{
    const w = await WardSchema.find()
    console.log(w)
    // res.render("", {w})
    res.status(200).json({
        success: true
    })
})