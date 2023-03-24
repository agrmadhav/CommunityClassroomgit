const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");
//handling post request 
router.post("/mens",async(req,res) => {
    try {
        // berozgaari wala kaam
        // const addingMensRecords = new MensRanking({
        //     "ranking":1,
        //     "name":"Christian COLEMAN",
        //     "dob":"06 MAR,1996",
        //     "country" : "USA",
        //     "score" : "1477"
        // })
        // mentos treeka
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
    
       const insertMens = await addingMensRecords.save();
       res.status(201).send(insertMens);
    } catch (error) {
        res.status(400).send(error);
    }
    });
    
    // handling get request
    router.get("/mens", async(req,res) => {
        try {
            const getMens = await MensRanking.find({}).sort({"ranking":1});
            res.status(201).send(getMens);
        } catch (error) {
            res.status(400).send(error);
        }
    }),
    
    // handling get request with particular id
    router.get("/mens/:id", async(req,res) => {
        try {
            const _id = req.params.id;
            const getMen = await MensRanking.findById({_id:_id});
            res.status(201).send(getMen);
        } catch (error) {
            res.status(400).send(error);
        }
    }),
    // handling patch request
    router.patch("/mens/:id", async(req,res) => {
        try {
            const _id = req.params.id;
            const getMenUpdate = await MensRanking.findByIdAndUpdate(_id,req.body,{
                new:true
            });
            res.status(201).send(getMenUpdate);
        } catch (error) {
            res.status(500).send(error);
        }
    }),
    
    // handling delete request
    router.delete("/mens/:id", async(req,res) => {
        try {
            const deleteMen = await MensRanking.findByIdAndDelete(req.params.id);
            res.status(201).send(deleteMen);
        } catch (error) {
            res.status(500).send(error);
        }
    });
    module.exports = router;