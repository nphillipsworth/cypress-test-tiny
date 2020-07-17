/// <reference types="cypress" />
describe('page', () => {
	it('empty test case defaults main test to closed', () => {
		// try deleting this test and see how much slow the lower test runs
	})

	it('works', () => {
		cy.visit('https://example.cypress.io/commands/actions')
		// takes about a minute
		for (let i = 0; i < 200; i++) {
				cy.get('.action-email')
					.type(`input${i}`).should('have.value', 'input' + i).clear()
		}
	})
})
