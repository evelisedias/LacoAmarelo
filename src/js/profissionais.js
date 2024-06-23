document.addEventListener("DOMContentLoaded", function (){
    const professionals = [

        //Esteio - Gratuito
        {
            nome: "CAPSIJ - Centro de Atendimento Psicossocial Infantojuvenil de Esteio - Divertidamente",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Av. Presidente Vargas, 2413 - Centro",
            telefone:"(51) 98600-8335 | (51) 2700-4364 Ramal 2350",
            modalidade: "Presencial"
        },
        {
            nome: "CAPSIJ - Centro de Atendimento Psicossocial Infantojuvenil de Esteio - Divertidamente",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Av. Presidente Vargas, 2413 - Centro",
            telefone:"(51) 98600-8335 | (51) 2700-4364 Ramal 2350",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS  II - Centro de Atenção Psicossocial - Aquarela",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Rua dos Ferroviários, 335 - Centro",
            telefone: " (51) 3473-0376 | (51) 2700-4364 Ramal 2367",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS  II - Centro de Atenção Psicossocial - Aquarela",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Rua dos Ferroviários, 335 - Centro",
            telefone: " (51) 3473-0376 | (51) 2700-4364 Ramal 2367",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS  AD - Centro de Atenção Psicossocial Álcool e outras Drogas - Mãos Dadas",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Rua 24 de Agosto, 500 - Centro",
            telefone: "Telefone: (51) 2700-4370 | (51) 2700-4364 Ramal 2347",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS  AD - Centro de Atenção Psicossocial Álcool e outras Drogas - Mãos Dadas",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "esteio",
            endereco: "Rua 24 de Agosto, 500 - Centro",
            telefone: "Telefone: (51) 2700-4370 | (51) 2700-4364 Ramal 2347",
            modalidade: "Presencial"
        },


        // Esteio - Particular
        {
            nome: "Letícia Souza",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "esteio",
            endereco: "Rua Bento Gonçalves, 551",
            telefone: "(51) 9876-5432",
            modalidade: "Presencial"
        },
        {
            nome: "Fernando Cooper",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "esteio",
            endereco: "Av. Getúlio Vargas, 2806 ",
            telefone: "(51) 98474-9300",
            modalidade: "Presencial"
        },
        {
            nome: "Fernanda Longaray",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "esteio",
            endereco: "Av. Padre Claret, 121  ",
            telefone: "(51) 99953-2160",
            modalidade: "Presencial"
        },


        //Canoas - gratuito

        {
            nome: "CAPS Arco Íris",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "canoas",
            endereco: " R. Maj. Ernesto Witrock, 51",
            telefone: "(51) 99953-2160",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS II Novos Tempos",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "canoas",
            endereco: " R. São Caetano, 102",
            telefone: "(51) 3076-9741",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS AD III - Travessia",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "canoas",
            endereco: "Av. Guilherme Schell, 6250 ",
            telefone: "(51) 3076-9742",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS Arco Íris",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "canoas",
            endereco: " R. Maj. Ernesto Witrock, 51",
            telefone: "(51) 99953-2160",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS II Novos Tempos",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "canoas",
            endereco: " R. São Caetano, 102",
            telefone: "(51) 3076-9741",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS AD III - Travessia",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "canoas",
            endereco: "Av. Guilherme Schell, 6250 ",
            telefone: "(51) 3076-9742",
            modalidade: "Presencial"
        },

        //Canoas Particular

        {
            nome: "Bruna Rüchert",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "canoas",
            endereco: " R. Gen. Salustiano, 670",
            telefone: "(51) 99539-1097",
            modalidade: "Presencial"
        },
        {
            nome: "Carina Fermindo",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "canoas",
            endereco: " R. Gonçalves Dias, 66",
            telefone: "(51) 99394-3739",
            modalidade: "Remoto"
        },
        {
            nome: "Meury",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "canoas",
            endereco: " Av. Boqueirão, 3166  ",
            telefone: " (51) 99805-1721",
            modalidade: "Presencial"
        },
        {
            nome: "Dr. Alceu Valentino Panini",
            tipo: "psiquiatra",
            atendimento: "particular",
            cidade: "canoas",
            endereco: " R. Quinze de Janeiro, 193",
            telefone: "(51) 3785-3016",
            modalidade: "Presencial"
        },
        {
            nome: "Dra. Márcia Schmidt",
            tipo: "psiquiatra",
            atendimento: "particular",
            cidade: "canoas",
            endereco: "Torre Medical, Av. Getúlio Vargas, 4831",
            telefone: "(51) 3051-5807",
            modalidade: "Presencial"
        },
        {
            nome: "Raudi Fagundes",
            tipo: "psiquiatra",
            atendimento: "particular",
            cidade: "canoas",
            endereco: "R. Liberdade, 33 ",
            telefone: " ",
            modalidade: "Presencial"
        },

        //Sapucaia
        {
            nome: "Centro de Atenção Psicossocial (CAPS) II",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "sapucaia do sul",
            endereco: " Rua General Osório, s/n ",
            telefone: "(51) 3474-1833",
            modalidade: "Presencial"
        },
        {
            nome: "Centro de Atenção Psicossocial (CAPS) II",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "sapucaia do sul",
            endereco: " Rua General Osório, s/n ",
            telefone: "(51) 3474-1833",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS Álcool e outras Drogas (AD)",
            tipo: "psicologo",
            atendimento: "gratuito",
            cidade: "sapucaia do sul",
            endereco: "R. Alfredo Juliano, 560",
            telefone: " (51) 3474-4470",
            modalidade: "Presencial"
        },
        {
            nome: "CAPS Álcool e outras Drogas (AD)",
            tipo: "psiquiatra",
            atendimento: "gratuito",
            cidade: "sapucaia do sul",
            endereco: "R. Alfredo Juliano, 560",
            telefone: " (51) 3474-4470",
            modalidade: "Presencial"
        },
                {
            nome: "Letícia Souza",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "sapucaia do sul",
            endereco: "Rua Cap. Camboim, 32 - Centro",
            telefone: "(51) 99614-5877",
            modalidade: "Presencial"
        },
        {
            nome: "Letícia Souza",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "sapucaia do sul",
            endereco: "Rua Cap. Camboim, 32 - Centro",
            telefone: "(51) 99614-5877",
            modalidade: "Remoto"
        },
        {
            nome: "Bianca Biques",
            tipo: "psicologo",
            atendimento: "particular",
            cidade: "sapucaia do sul",
            endereco: " ",
            telefone: "(51) 98314-5870",
            modalidade: "Remoto"
        },

        {
            nome: "Yali - Espaço de Saúde Mental",
            tipo: "psiquiatra",
            atendimento: "particular",
            cidade: "sapucaia do sul",
            endereco: "R. Cap. Camboim, 32",
            telefone: "(51) 99158-8787",
            modalidade: "Presencial"
        },
    ];


    window.searchProfessionals = function () {
        const atendimento = document.getElementById("atendimento").value;
        const cidade = document.getElementById("cidade").value;
        const profissional = document.getElementById("profissional").value;
        const modalidade = document.getElementById("modalidade").value;
        const resultsDiv = document.getElementById("results");

        // Filtrar os profissionais com base nos critérios selecionados
        const filteredProfessionals = professionals.filter(pro => {
            return pro.atendimento === atendimento && pro.cidade === cidade && pro.tipo === profissional && pro.modalidade === modalidade;
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
                    <p>Modalidade: ${pro.modalidade.charAt(0).toUpperCase() + pro.modalidade.slice(1)}</p>
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
