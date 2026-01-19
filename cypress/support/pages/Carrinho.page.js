const botaoDeletar = '[class="delete"]'
const botaoCheckout = '[data-test="checkout"]'

class Carrinho {
    validarProdutos() {
    cy.get('@listaEsperada').then((listaEsperada) => {
        
        cy.get('ul li.list-item') 
            .should('be.visible')
            .then(($lista) => {
               
                const itensRelevantes = $lista.slice(4);

                cy.wrap(itensRelevantes).each(($el, index) => {
                    const colunas = $el.children('div');
                    const rawNome = colunas.eq(0).text().trim();
                    const rawPreco = colunas.eq(2).text().trim();
                    const nomeLimpo = rawNome.trim();
                    const precoLimpo = rawPreco.split(' x')[0].trim();

                    if (!nomeLimpo || !precoLimpo.includes('$')) {
                        cy.log(` [Index ${index}] Ignorado: "${nomeLimpo}" | "${precoLimpo}"`);
                        return;
                    }
                    const itemMatch = listaEsperada.find(i => i.nome === nomeLimpo && i.preco === precoLimpo);

                    if (!itemMatch) {
                        cy.log(` ERRO: Item não encontrado no gabarito!`);
                        cy.log(`   Tela: ${nomeLimpo} | ${precoLimpo}`);
                    }
                    expect(itemMatch, `O item ${nomeLimpo} (${precoLimpo}) esta no carrinho`).to.not.be.undefined;
                }); 
            });
        });
    }

    deletarItem(){
        const num = Math.floor(Math.random() * 4);
        cy.get(botaoDeletar).should('be.visible').eq(num).click();
    }

    clicarChekout(){
        cy.get(botaoCheckout).should('be.visible').click()
    }

    validar_E_Deletar(){
        this.validarProdutos()
        this.deletarItem()
    }

}
export default new Carrinho