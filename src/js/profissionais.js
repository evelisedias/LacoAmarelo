document.addEventListener("DOMContentLoaded", function (){
    const professionals = [
        {
            nome: "CAPSIJ - Centro de Atendimento Psicossocial Infantojuvenil de Esteio - Divertidamente",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Av. Presidente Vargas, 2413 - Centro",
            telefone:"(51) 98600-8335 | (51) 2700-4364 Ramal 2350",
            modalidade: "presencial"
        },
        {
            nome: "CAPSIJ - Centro de Atendimento Psicossocial Infantojuvenil de Esteio - Divertidamente",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Av. Presidente Vargas, 2413 - Centro",
            telefone:"(51) 98600-8335 | (51) 2700-4364 Ramal 2350",
            modalidade: "presencial"
        },
        {
            nome: "CAPS  II - Centro de Atenção Psicossocial - Aquarela",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Rua dos Ferroviários, 335 - Centro",
            telefone: " (51) 3473-0376 | (51) 2700-4364 Ramal 2367",
            modalidade: "presencial"
        },
        {
            nome: "CAPS  II - Centro de Atenção Psicossocial - Aquarela",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Rua dos Ferroviários, 335 - Centro",
            telefone: " (51) 3473-0376 | (51) 2700-4364 Ramal 2367",
            modalidade: "presencial"
        },
        {
            nome: "CAPS  AD - Centro de Atenção Psicossocial Álcool e outras Drogas - Mãos Dadas",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Rua 24 de Agosto, 500 - Centro",
            telefone: "Telefone: (51) 2700-4370 | (51) 2700-4364 Ramal 2347",
            modalidade: "presencial"
        },
        {
            nome: "CAPS  AD - Centro de Atenção Psicossocial Álcool e outras Drogas - Mãos Dadas",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Rua 24 de Agosto, 500 - Centro",
            telefone: "Telefone: (51) 2700-4370 | (51) 2700-4364 Ramal 2347",
            modalidade: "presencial"
        },
        {
            nome: "Letícia Souza",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "esteio",
            endereco: "Rua Bento Gonçalves, 551",
            telefone: "(51) 9876-5432",
            modalidade: "presencial e remoto"
        },
        {
            nome: "Letícia Souza",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "sapucaia do sul",
            endereco: "Rua Cap. Camboim, 32 - Centro",
            telefone: "(51) 99614-5877",
            modalidade: "presencial e remoto"
        }
    ];

    window.searchProfessionals = function () {
        const atendimento = document.getElementById("atendimento").value;
        const cidade = document.getElementById("cidade").value;
        const profissional = document.getElementById("profissional").value;
        const resultsDiv = document.getElementById("results");

        // Filtrar os profissionais com base nos critérios selecionados
        const filteredProfessionals = professionals.filter(pro => {
            return pro.atendimento === atendimento && pro.cidade === cidade && pro.tipo === profissional;
        });

        // Limpar o conteúdo anterior antes de exibir os novos resultados
        resultsDiv.innerHTML = "";

        // Verificar se foram encontrados profissionais que correspondem aos critérios
        if (filteredProfessionals.length > 0) {
            filteredProfessionals.forEach(pro => {
                const proDiv = document.createElement("div");
                proDiv.className = "professional";
                proDiv.innerHTML = `
                    <h3>${pro.nome}</h3>
                    <p>Tipo de Atendimento: ${pro.atendimento.charAt(0).toUpperCase() + pro.atendimento.slice(1)}</p>
                    <p>Tipo de Profissional: ${pro.tipo.charAt(0).toUpperCase() + pro.tipo.slice(1)}</p>
                    <p>Cidade: ${pro.cidade.charAt(0).toUpperCase() + pro.cidade.slice(1).replace(/-/g, ' ')}</p>
                    ${pro.endereco ? `<p>Endereço: ${pro.endereco}</p>` : ''}
                    ${pro.telefone ? `<p>Telefone: ${pro.telefone}</p>` : ''}
                `;
                resultsDiv.appendChild(proDiv);
            });
        } else {
            resultsDiv.innerHTML = "<p>Nenhum profissional encontrado para os critérios selecionados.</p>";
        }
    };
});
