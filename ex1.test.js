let nome = 'Melanina Gomez'
let nome2 = ['Tomas', 'Leila', 'Adri', 'Kaua']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(nome, "Melanina"); 
    assertStringIncludes(nome, "Gomez");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Davi", "Lais", "João"],
        "Opa! Algo deu errado!");
})