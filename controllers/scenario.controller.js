import mongoose from "mongoose"
import Scenario from "../models/Scenario.model.js"

const scenarioController = {

    createScenario: async(req, res, next) => {
        const session = await mongoose.startSession()
        session.startTransaction()
        try {
            const { name, difficulty, timeLimit, devices, metadata } = await req.body

            const newScenario = Scenario.create([{
                name,
                difficulty,
                timeLimit,
                devices,
                metadata

            }], { session })

            res.status(201).json({
                success: true,
                message: "Scenario created successfully",
                data: newScenario
            })

            await session.commitTransaction()
        } catch (error) {
            session.abortTransaction()
            session.endSession()
            console.log(`Error Saving Scenario: ${error}`)
        }
    },


    loadScenario: async(req, res, next) => {
        try {
            const id = req.params.id

            const scenario = await Scenario.findById(id)

            if(!scenario){
                const error = new Error("Scenario Not Found")
                error.statusCode = 404
                throw error

            }
            res.status(200).json({
                success: true,
                data: scenario
            })
        } catch (error) {
            console.log(`Error Loading Scenario: ${error}`)
        }
    }
}

export default scenarioController
