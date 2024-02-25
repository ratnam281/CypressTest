describe('tooltip practise',
    // {
    // retries: {
    //   runMode: 2,
    //   openMode: 2,
    // },
    // }, 
  ()=> {
    it.skip('test',
    // {
    // retries: {
    //   runMode: 2,
    //   openMode: 2,
    // },
    // },
    ()=>{
        cy.visit('https://practice.expandtesting.com/tooltips')
        cy.get('#btn3').trigger('mouseover')
        // cy.get('.tooltip-inner').invoke('text').as('textFunction')
        cy.get('.tooltip-inner').invoke('text').then((text1)=> {
            cy.log(text1)
            cy.get('#btn3').parent().invoke('attr','class').then((text2)=> 
            {
                    cy.log(text2) 
            })
              cy.title().then((title)=> 
              { cy.log(title)
            })
        })
    })

    it.only('alert',{tags:'smoke'},()=>{
        //tag:smoke
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
         
         cy.on('window:alert',function(AlertText) // for alert type
         
         {expect(AlertText).eql('I am a JS Alert') 
         })
            
         cy.contains('Click for JS Alert').click()
         cy.get('#result').should('contain','You successfully clicked an alert') 
        //  cy.screenshot()
        // cy.log(data)
    })     
        
})