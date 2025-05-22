class MyInfoPage {

    selectorList() {
        const selector = {
                sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
                fristNameFied: "[name='firstName']",
                lastNameField: "[name='lastName']",
                genericField: ".oxd-input--active",
                dateField: "[placeholder='yyyy-dd-mm']",
                dateCloseButton: ",--close",
                submitButton: "[type='submit']"
            
        }

        return selector
    }

        fillPersonalDetails(firstName, lastName, nickname ){
            cy.get(this.selectorList().fristNameFied).clear().type(firstName)
            cy.get(this.selectorList().lastNameField).clear().type(lastName)
            cy.get(this.selectorList().genericField).eq(3).clear().type(nickname)

        }

        fillEmployeeDetails(employeId, otherId, driverLicenseDate, ssNumber){
                cy.get(this.selectorList().genericField).eq(4).clear().type(employeId)
                cy.get(this.selectorList().genericField).eq(5).clear().type(otherId)
                //cy.get(selectorList.genericField).eq(6).clear().type('DrivresTest')
                cy.get(this.selectorList().genericField).eq(6).clear().type(driverLicenseDate)
                cy.get(this.selectorList().genericField).eq(8).clear().type(ssNumber)
        }

        saveForm(){
            cy.get(this.selectorList().submitButton).eq(0).click()
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
            cy.get('.oxd-select-dropdown > :nth-child(2)').click() 
        }

    
    
}

export default MyInfoPage