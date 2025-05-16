class DashboardPage {

    selectorList() {
        const selector = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }

        return selector
    }

    cheackDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage