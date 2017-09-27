const express = require('express')
const router = express.Router()

const Schema = require("../db/schema.js");
const CompanyModel = Schema.CompanyModel;

// INDEX route
router.get('/', (request, response) => {

    // FIND all of the companies in the database
    CompanyModel.find({})
        .then((companies) => {

            // THEN once they come back from the database
            // RENDER them in Handlebars
            response.render('companies/index', {
                companies: companies
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

// SHOW route
router.get('/:companyId', (request, response) => {

    const companyId = request.params.companyId

    CompanyModel.findById(companyId)
        .then((company) => {
            response.render('companies/show', {
                company: company
            })
        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router