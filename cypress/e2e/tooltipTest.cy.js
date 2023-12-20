describe('tooltip practise', ()=> {
    it('test',()=>{
        cy.visit('https://practice.expandtesting.com/tooltips')
        cy.get('#btn3').trigger('mouseover')
        // cy.get('.tooltip-inner').invoke('text').as('textFunction')
        cy.get('.tooltip-inner').invoke('text').then((text1)=> {
            cy.log(text1)
        })
        // cy.log(data)
    })
})