describe('Acessar o site', () => {
  it('Deve ver o site corretamente',() => {
    cy.visit('/')
    cy.wait(10000)
  })

  it('Realize a busca de um produto', () =>{
    cy.visit('/')
    cy.xpath('//div[@class="laptopImg categoryCell"]').should('be.visible')
    cy.xpath('(//button[@class="ng-scope"])[1]').click()
  })

  it('Incluir produto no carrinho', () =>{
    cy.visit('/')
    cy.xpath('//div[@class="laptopImg categoryCell"]').should('be.visible')
    cy.xpath('(//button[@class="ng-scope"])[1]').click()
    cy.xpath('//button[@class="roboto-medium ng-scope"][1]').click()
    cy.xpath('(//button[@class="roboto-medium ng-binding"])[1]').click()
    cy.xpath('(//a[@class="img"])[4]').click()
  })

  it('Validar os produtos incluídos no carrinho na tela de pagamento', () =>{
    cy.visit('/')
    cy.xpath('//div[@class="laptopImg categoryCell"]').should('be.visible')
    cy.xpath('(//button[@class="ng-scope"])[1]').click()
    cy.xpath('//div[@class="laptopImg categoryCell"]').should('be.visible')
    cy.xpath('(//button[@class="ng-scope"])[1]').click()
    cy.xpath('//button[@class="roboto-medium ng-scope"][1]').click()
    cy.xpath('(//button[@class="roboto-medium ng-binding"])[1]').click()
    cy.xpath('(//a[@class="img"])[4]').click()
    cy.xpath('//button[@class="roboto-medium tami uft-class ng-binding"][1]').click()

})

})
