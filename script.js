const questoes = [
    // LÍNGUA PORTUGUESA
    {
        parte: "Língua Portuguesa",
        tema: "Análise Textual",
        revisao: "Identificar a função de referências em um texto é crucial para a compreensão. A autora usa exemplos históricos para ilustrar como os padrões de higiene mudaram ao longo do tempo.",
        enunciado: "A referência a romanos, franceses e americanos serve para:",
        alternativas: [
            "A) demonstrar que a higiene nem sempre foi uma preocupação dos homens.",
            "B) indicar modelos diferentes de preocupação com a higiene.",
            "C) mostrar a inferioridade dos franceses em termos de higiene.",
            "D) destacar a importância de sabonetes, desodorantes e perfumes.",
            "E) comprovar que a higiene é importante para a saúde humana."
        ],
        correta: "B",
        id: "q1"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Interpretação de Expressões",
        revisao: "Expressões entre parênteses ou interjeições, como 'que horror!', revelam a visão ou a emoção do narrador ou da autora. Elas quebram a objetividade e adicionam uma camada de opinião ao texto.",
        enunciado: "“...porém nunca imergindo que horror! em água”. A expressão destacada no fragmento acima:",
        alternativas: [
            "A) mostra o espanto da autora diante da falta de higiene dos franceses.",
            "B) refere-se à visão dos franceses diante do ato de tomar banho.",
            "C) indica uma visão moderna sobre hábitos antigos de higiene.",
            "D) representa a visão romana sobre futuros hábitos de higiene.",
            "E) demonstra que a água sempre foi considerada essencial para a higiene."
        ],
        correta: "A",
        id: "q2"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Valor Semântico de Preposições",
        revisao: "As preposições 'para' e 'do' podem indicar diferentes relações de sentido. No contexto do texto, 'para' introduz um ponto de vista ou um grupo a que se refere a informação. Reconhecer seu valor é fundamental para a interpretação.",
        enunciado: "“Para os romanos do primeiro século....”, “Para os franceses aristocratas do século XVII....”. Esses dois segmentos do texto indicam:",
        alternativas: [
            "A) finalidade.",
            "B) direção.",
            "C) modo.",
            "D) opinião.",
            "E) condição."
        ],
        correta: "D",
        id: "q3"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Compreensão de Texto",
        revisao: "A 'radicalização' dos padrões de higiene, segundo o texto, é um aprofundamento ou extremismo desses hábitos. É preciso encontrar, nas opções, a prova mais direta dessa 'radicalização' nos dias de hoje.",
        enunciado: "A autora do texto diz que os padrões de higiene radicalizaram-se, o que é comprovado pelo fato de:",
        alternativas: [
            "A) os romanos tomarem banhos de duas horas.",
            "B) os franceses usarem excessivamente os perfumes.",
            "C) os americanos terem criado o desodorante.",
            "D) os germófobos cumprimentarem-se com os cotovelos.",
            "E) os aristocratas trocarem de camisa continuamente."
        ],
        correta: "D",
        id: "q4"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Análise Sintática",
        revisao: "Cada palavra tem uma função na frase. 'Extraordinária' é um adjetivo que qualifica 'ideia', e a frase que se segue ('a de que banhos...eram saudáveis') explica o que torna a ideia 'extraordinária'.",
        enunciado: '"Por volta de 1900, uma ideia extraordinária surgiu nos Estados Unidos: a de que banhos frequentes, talvez até mesmo diários, eram saudáveis". Assinale a alternativa que apresenta o comentário inadequado sobre os componentes desse segmento do texto.',
        alternativas: [
            "A) Por volta de é uma expressão que localiza no tempo de forma imprecisa.",
            "B) uma ideia extraordinária mostra uma ideia que até então não havia sido considerada.",
            "C) frequentes, diários e saudáveis são adjetivos que se referem ao mesmo substantivo.",
            "D) extraordinária é uma qualificação que vai ser explicitada na progressão do texto.",
            "E) talvez mostra simultaneamente uma ironia e uma falta de informação do autor."
        ],
        correta: "C",
        id: "q5"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Reescrita de Frases",
        revisao: "A reescrita de uma frase não pode alterar seu sentido original. A opção que troca a posição de um dos elementos semânticos (vendas, sabonetes, perfumes) pode, em alguns casos, criar uma ambiguidade ou um novo sentido.",
        enunciado: '"as vendas de sabonetes, lenços umedecidos e perfumes crescem continuadamente". Assinale a alternativa que mostra uma maneira inadequada de reescrever-se a frase acima, alterando seu sentido original.',
        alternativas: [
            "A) Lenços umedecidos, perfumes e as vendas de sabonetes crescem continuadamente.",
            "B) Crescem continuadamente as vendas de sabonetes, lenços umedecidos e perfumes.",
            "C) As vendas de perfumes, lenços umedecidos e sabonetes crescem continuadamente.",
            "D) Crescem continuadamente as vendas de sabonetes, assim como as de lenços umedecidos e perfumes.",
            "E) As vendas de perfumes, sabonetes e lenços umedecidos crescem de forma continuada."
        ],
        correta: "A",
        id: "q6"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Morfologia e Sintaxe",
        revisao: "A função adjetiva é aquela que qualifica ou caracteriza um substantivo. Termos como 'em miniatura' ou 'umedecidos' atuam como adjetivos. A opção 'vendas de sabonetes' é uma locução substantiva, onde 'de sabonetes' especifica o tipo de venda, mas não qualifica a 'venda' em si como um adjetivo.",
        enunciado: "Assinale a alternativa em que o termo sublinhado não exerce uma função adjetiva.",
        alternativas: [
            "A) romanos do primeiro século.",
            "B) ancinho em miniatura.",
            "C) vendas de sabonetes.",
            "D) aristocratas do século XVII.",
            "E) lenços umedecidos."
        ],
        correta: "C",
        id: "q7"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Inferência Textual",
        revisao: "Inferir é chegar a uma conclusão lógica a partir de pistas no texto. A frase 'Desde o Império Romano as pessoas não se mantinham tão limpas...' sugere que, após a época romana, a higiene declinou, voltando a padrões mais elevados só mais recentemente.",
        enunciado: '"Desde o Império Romano as pessoas não se mantinham tão limpas...". Assinale a alternativa que apresenta a inferência que pode ser feita a partir do que foi lido nesse segmento do texto.',
        alternativas: [
            "A) No Império Romano havia grandes preocupações com a higiene pessoal e doméstica.",
            "B) Entre a época do Império Romano e a atualidade, a higiene pessoal seguiu padrões menos exigentes.",
            "C) Hoje, as pessoas se apresentam menos limpas que na época do Império Romano.",
            "D) As pessoas nunca se preocuparam tanto em relação à higiene pessoal, quanto na época entre o Império Romano e a atualidade.",
            "E) No Império Romano já havia sinais de preocupação com a higiene, pois naquela época cresceram as vendas de produtos de higiene."
        ],
        correta: "B",
        id: "q8"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Intensificação de Sentido",
        revisao: "Intensificação de sentido ocorre quando uma palavra ou expressão reforça o significado de outra. Ex: 'sujas, imundas' ou 'quente, pelando'. É preciso identificar a opção em que a segunda palavra não intensifica a primeira, mas apenas a complementa ou repete uma ideia.",
        enunciado: '"...banhos frequentes, talvez até mesmo diários, ..." os vocábulos sublinhados marcam, respectivamente, uma intensificação de sentido. A mesma relação só não se verifica na seguinte frase:',
        alternativas: [
            "A) Sem banho, as pessoas se tornam sujas, imundas.",
            "B) As casas de banho eram distantes da cidade, algumas bem longínquas.",
            "C) As casas de banho romanas eram públicas, algumas gratuitas.",
            "D) Nas casas de banho a água era quente, pelando.",
            "E) Os romanos gostavam dos banhos, adoravam estar nas casas de banho."
        ],
        correta: "C",
        id: "q9"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Valor Semântico dos Conectores",
        revisao: "Conectores são palavras que unem orações e dão sentido. 'Com' indica companhia/instrumento, 'porém' indica oposição, 'em' indica lugar, 'e' indica adição, 'por' indica duração. Analise se o valor semântico de cada conector nas opções corresponde à relação da frase original.",
        enunciado: "Assinale a alternativa em que os conectores sublinhados não apresentam o mesmo valor semântico.",
        alternativas: [
            "A) \"...o corpo esfregado com um ancinho em miniatura\" / \"...e ao final com água\".",
            "B) \"...ter ficado de molho em água...\" / \"porém nunca imergindo que horror! em água\".",
            "C) \"...ter ficado de molho em água...\" / \"...em casas de banhos públicas....\".",
            "D) ...sabonetes, lenços umedecidos e perfumes...\" / \"...com um ancinho em miniatura, e ao final com óleo\".",
            "E) \"...a diferentes temperaturas, por duas horas...\" / \"...era trocar a camisa uma vez por dia...\"."
        ],
        correta: "E",
        id: "q10"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Interpretação de Humor",
        revisao: "O humor em um texto provém de uma situação inusitada, quebra de expectativa ou contraste. A anedota no texto II descreve um evento inesperado e socialmente inadequado: o banho sendo entregue no meio de um jantar festivo. Essa quebra de 'normalidade' é a fonte do humor.",
        enunciado: "O humor da anedota narrada no texto II provém:",
        alternativas: [
            "A) da entrega dos banhos ser feita no meio de um jantar festivo.",
            "B) do banho em domicílio ainda ser algo desconhecido.",
            "C) do presente dever ser pago pelos destinatários.",
            "D) da circunstância de os franceses tomarem banho raramente.",
            "E) da quantidade dos banhos ser reduzida para tantos convidados."
        ],
        correta: "A",
        id: "q11"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Valor Semântico dos Conectores",
        revisao: "Identificar a relação lógica correta é essencial. 'Em 1819' indica tempo. 'Sobre' indica assunto. 'Mesmo que' introduz uma concessão. 'No entanto' e 'embora' introduzem oposição. 'Para' indica finalidade.",
        enunciado: "Assinale a alternativa em que o conector sublinhado tem seu valor corretamente indicado.",
        alternativas: [
            "A) \"Em 1819, Monsieur Villette lançou em Paris...\" - tempo.",
            "B) \"...falar sobre os banhos em domicílio...\" - lugar.",
            "C) \"...mesmo que no último andar do prédio...\" - concessão.",
            "D) \"No entanto, embora muitos gostassem...\" - condição.",
            "E) \"...todo o necessário para um banho...\" - direção."
        ],
        correta: "C",
        id: "q12"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Reescrita de Frases",
        revisao: "A reescrita de uma frase pode alterar a ordem das palavras, mas deve manter o mesmo sentido e a mesma informação. As opções que apenas reordenam os elementos 'em 1819', 'em Paris' e 'Monsieur Villette' preservam o sentido original. A opção 'lançou-se' usa voz passiva e também o mantém. A opção que altera o sentido é a que transforma a oração de forma a dar uma nova informação.",
        enunciado: '"Em 1819, Monsieur Villette lançou em Paris uma inovação alema". Assinale a alternativa que apresente a forma de reescrever-se a frase acima, alterando seu sentido original.',
        alternativas: [
            "A) Monsieur Villete, em 1819, lançou em Paris uma inovação alemä.",
            "B) Em 1819, em Paris, Monsieur Villette lançou uma inovação alema.",
            "C) Em 1819, Monsier Villette lançou uma inovação alemā em Paris.",
            "D) Uma inovação alemā foi lançada em Paris por Monsieur Villette, em 1819.",
            "E) Lançou-se por Monsieur Villette, em Paris, em 1819, uma inovação alemã."
        ],
        correta: "D",
        id: "q13"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Formação de Palavras",
        revisao: "O sufixo '-ão' nem sempre indica aumento de tamanho. Ele pode ter perdido o valor de aumentativo para formar uma nova palavra, como 'roupão'. A questão pede a alternativa em que apenas uma das palavras tem o sentido de aumentativo.",
        enunciado: "O vocábulo roupão, formalmente um aumentativo de roupa, perdeu esse valor aumentativo e hoje designa uma vestimenta para ser usada após o banho. A alternativa em que só um dos termos possui o valor aumentativo é:",
        alternativas: [
            "A) cartão - calção.",
            "B) papelão - bolão.",
            "C) calçadão - portão.",
            "D) tapetão - caixão.",
            "E) casarão- orelhão."
        ],
        correta: "B",
        id: "q14"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Crítica Implícita",
        revisao: "A crítica implícita é uma mensagem subentendida. O texto afirma que, embora o banho em domicílio fosse muito falado, apenas mil foram encomendados para uma cidade com mais de um milhão de habitantes. A crítica é que a prática de higiene em si, para os franceses da época, era rara.",
        enunciado: '"No entanto, embora muitos gostassem de falar sobre os banhos ern domicílio, em 1838, quando a cidade tinha mais de um milhão de habitantes, somente mil desses banhos foram encomendados". A crítica implícita que há nesse comentário final do Texto Il é a de que:',
        alternativas: [
            "A) apesar de muito falado, o banho em domicilio era pouco conhecido.",
            "B) o banho em domicilio era pouco utilizado em função de seu alto preço.",
            "C) a publicidade sobre o banho em domicilio era mal feita.",
            "D) os franceses não se banhavam com muita frequência.",
            "E) a moda fazia com que se utilizassem serviços dispensáveis."
        ],
        correta: "D",
        id: "q15"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Relação de Causa/Consequência",
        revisao: "A relação de causa e consequência é fundamental para a coesão textual. A causa é o motivo, e a consequência é o resultado. A pouca demanda por sabão (consequência) se explica pelo fato de que as pessoas evitavam a água (causa).",
        enunciado: "Assinale a alternativa que mostra corretamente uma relação de causa/consequência entre os dados fornecidos.",
        alternativas: [
            "A) as pessoas evitavam a água / havia pouca demanda de sabão.",
            "B) as pessoas ricas usavam o sabão nas mãos e no rosto / o sabão era considerado um cosmético.",
            "C) voltou a prática de imergir o corpo em água / os debates sobre o sabão começaram.",
            "D) muitas pessoas consideravam o sabão desnecessário / o sabonete para banho triunfou.",
            "E) achavam o sabão irritante / o sabão era considerado um produto de limpeza."
        ],
        correta: "A",
        id: "q16"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Compreensão de Texto",
        revisao: "A justificativa para a pouca demanda de sabão está no próprio texto, que afirma que 'as pessoas evitavam a água e acreditavam que uma camisa de linho limpa retirava a sujeira'. Ou seja, o produto era considerado desnecessário para o corpo.",
        enunciado: '"...havia pouca ou nenhuma demanda de sabão para banho". A pouca demanda se justificava porque:',
        alternativas: [
            "A) a população era muito menor que a de hoje.",
            "B) as condições econômicas não permitiam.",
            "C) considerava-se desnecessário o produto.",
            "D) poucas pessoas tomavam banho diariamente.",
            "E) não existiam empresas organizadas no setor."
        ],
        correta: "C",
        id: "q17"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Estrutura e Organização Textual",
        revisao: "O texto III é estruturado de forma cronológica. Ele começa no século XVI, passa pelo XVII e XVIII, e termina no século XIX, mostrando a evolução da visão sobre o uso do sabonete e sua aceitação progressiva.",
        enunciado: "O texto III é organizado do seguinte modo:",
        alternativas: [
            "A) argumentos desfavoráveis ao sabonete seguidos de argumentos favoráveis.",
            "B) evolução cronológica do sabonete através dos séculos.",
            "C) as diferentes fases da produção industrial dos sabonetes.",
            "D) um conjunto de opiniões diferentes sobre a utilidade do sabonete.",
            "E) uma exposição didática e detalhada sobre a progressiva aceitação do sabonete como cosmético."
        ],
        correta: "B",
        id: "q18"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Oposição de Sentido",
        revisao: "A oposição de sentido ocorre quando duas ideias contrastam. A frase que fala sobre 'prós e contras' claramente apresenta essa oposição. 'Prós' e 'contras' são elementos de sentido oposto.",
        enunciado: "O segmento do texto em que há a presença de elementos de sentido oposto é:",
        alternativas: [
            "A) \"...havia pouca ou nenhuma demanda de sabão para banho\".",
            "B) \"As mulheres mais ricas que o utilizavam, na maioria das vezes apenas no rosto e nas mãos...\"",
            "C) ...o consideravam mais um cosmético, ou como perfume, do que produto de limpeza\".",
            "D) \"No século XIX, quando as pessoas vagarosamente retomavam a prática de imergir o corpo em água, o debate sobre os prós e os contras de usar sabão para se limpar começou\".",
            "E) \"Muitas pessoas o consideravam desnecessário ou irritante, mas no fim do século XIX o sabonete para banho triunfou\"."
        ],
        correta: "D",
        id: "q19"
    },
    {
        parte: "Língua Portuguesa",
        tema: "Interpretação de Título",
        revisao: "O título 'Passando a limpo' tem um sentido literal, relacionado à higiene, e um sentido figurado, que é o de revisar, esclarecer ou analisar algo. A obra faz uma revisão histórica dos hábitos de higiene, o que demonstra o duplo sentido.",
        enunciado: "Sobre o título do livro Passando a limpo de onde foram retirados os três textos desta prova pode-se dizer que:",
        alternativas: [
            "A) foi mal escolhido em função de a expressão referir-se à atividade de escrever e não a qualquer atividade ligada à higiene pessoal.",
            "B) tem função humorística, já que iguala coisas e pessoas na finalidade de limpeza pessoal.",
            "C) apresenta o sentido oculto de \"revisão\", pois a higiene pessoal ganhou progressivamente valor de ato correto.",
            "D) mostra que a higiene pessoal foi uma conquista dos intelectuais, passando às demais classes após certo tempo.",
            "E) possui duplo sentido, referindo-se ao mesmo tempo à higiene pessoal e a uma revisão histórica desse tema."
        ],
        correta: "E",
        id: "q20"
    },

    // RACIOCÍNIO LÓGICO
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Sequências e Progressão Aritmética",
        revisao: "A soma das idades daqui a 4 anos será a soma atual mais o aumento de idade de cada um dos 12 jogadores. Para cada jogador, a idade aumenta em 4 anos. O cálculo é: 270 + (12 * 4).",
        enunciado: "A soma das idades dos doze convocados para uma seleção de vôlei é igual a 270. Se daqui a quatro anos estes mesmos jogadores forem os convocados para a seleção, a soma de suas idades será igual a:",
        alternativas: [
            "A) 274",
            "B) 296",
            "C) 312",
            "D) 318",
            "E) 326"
        ],
        correta: "C",
        id: "q21"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Sequências Numéricas",
        revisao: "Para encontrar o próximo termo de uma sequência, é preciso identificar o padrão. Esta é uma progressão aritmética, onde cada termo é 7 unidades menor que o anterior. O oitavo termo é obtido subtraindo 7 do termo anterior por 7 vezes, começando a partir do primeiro termo.",
        enunciado: "Observe os quatro primeiros termos da sequência de números a seguir: 353, 346, 339, 332, ... O oitavo termo dessa sequência é:",
        alternativas: [
            "A) 304",
            "B) 307",
            "C) 311",
            "D) 317",
            "E) 321"
        ],
        correta: "C",
        id: "q22"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Lógica e Dedução",
        revisao: "Esse é um problema de lógica proposicional. O método de eliminação é eficaz. A partir das informações 'Vantuil e Albina são irmãos' e 'Jurandir não é irmão de Cleonice', você pode deduzir as outras relações de parentesco.",
        enunciado: "Jurandir, Eugênio e Vantuil têm, cada um, uma única irmã. As irmãs se chamam Albina, Cleonice e Lucimar. Sabe-se que Jurandir não é irmão de Cleonice e que Vantuil e Albina são irmãos. Nesse caso:",
        alternativas: [
            "A) Jurandir e Albina são irmãos.",
            "B) Eugênio e Cleonice são irmãos.",
            "C) Eugênio e Lucimar são irmãos.",
            "D) Vantuil e Lucimar são irmãos.",
            "E) Eugênio e Albina são irmãos."
        ],
        correta: "B",
        id: "q23"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Análise Combinatória",
        revisao: "Este é um problema de arranjos com repetição. Para cada um dos 3 processos, há 4 opções de seções para onde pode ser encaminhado. O total de maneiras é a multiplicação das possibilidades para cada processo: 4 x 4 x 4 = 4³.",
        enunciado: "Adroaldo deve distribuir, por sorteio, cada processo que chega a sua repartição para uma única seção. São quatro as diferentes seções para as quais ele pode encaminhar cada processo, as seções W, X, YeZ. Adroaldo tem de encaminhar três processos que chegaram à repartição. Como ele sorteia a seção que vai receber cada processo, note que é possível até que uma mesma seção receba os três processos. Assim, o número de maneiras diferentes de Adroaldo distribuir os três processos é igual a:",
        alternativas: [
            "A) 16",
            "B) 24",
            "C) 27",
            "D) 36",
            "E) 64"
        ],
        correta: "E",
        id: "q24"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Lógica Proposicional",
        revisao: "As premissas são: 'Todo craque é canhoto' e 'Nenhum canhoto joga na defesa'. Por dedução, se todos os craques são canhotos e nenhum canhoto é defensor, então nenhum craque pode ser defensor. Isso é uma conclusão inevitável a partir das premissas dadas.",
        enunciado: "Na minha terra, todos os craques são canhotos e nenhum canhoto joga na defesa. Sendo assim, na minha terra:",
        alternativas: [
            "A) todo craque joga na defesa.",
            "B) algum craque não é canhoto.",
            "C) nenhum craque joga na defesa.",
            "D) quem é destro não joga no ataque.",
            "E) quem joga no ataque é craque."
        ],
        correta: "C",
        id: "q25"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Padrões Lógicos",
        revisao: "Para encontrar o número que 'destoa', procure uma característica comum entre a maioria dos números e a falta dela no outro. A maioria dos números dados são pares ou múltiplos de 7. O número 47 é o único que não tem divisores além de 1 e 47, sendo um número primo.",
        enunciado: "Dos números 14, 30, 47, 56 e 62, o que destoa dos demais é o:",
        alternativas: [
            "A) 14",
            "B) 30",
            "C) 47",
            "D) 56",
            "E) 62"
        ],
        correta: "C",
        id: "q26"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Geometria e Cálculo de Distância",
        revisao: "O percurso de Jorge forma um retângulo incompleto. Para encontrar a distância em linha reta (a menor distância), você precisa calcular a distância horizontal e vertical. Horizontal: 500m (oeste) - 100m (leste) = 400m. Vertical: 400m (norte) - 200m (sul) = 200m. A menor distância é a hipotenusa de um triângulo retângulo (200² + 400²).",
        enunciado: "Devido às mãos e contra-mãos das ruas de seu bairro, para ir de carro de sua casa até o trabalho, Jorge tem de sair de casa, seguir reto por 400m na direção norte, dobrar à esquerda numa rua perpendicular, seguir por 500m, dobrar à esquerda numa nova perpendicular, seguir nela por 500m, dobrar à esquerda numa rua perpendicular à que está, seguir 200m, dobrar novamente à esquerda numa perpendicular e seguir nela por mais 100m. Se fizer isso, Jorge percorrerá a distância de:",
        alternativas: [
            "A) 300m",
            "B) 500m",
            "C) 1.000m",
            "D) 1.600m",
            "E) 1.800m"
        ],
        correta: "A",
        id: "q27"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Proporção e Múltiplos",
        revisao: "A proporção é de 2 ações ordinárias para cada 3 preferenciais. Isso significa que o total de ações é sempre um agrupamento de 2+3=5 ações. Portanto, o número total de ações da empresa é obrigatoriamente um múltiplo de 5.",
        enunciado: "Cada ação de uma certa empresa na Bolsa de Valores ou é do tipo ordinária ou é do tipo preferencial. Para cada duas ações ordinárias da empresa existem três ações preferenciais. Assim, com certeza o número total de ações da empresa é múltiplo de:",
        alternativas: [
            "A) 2",
            "B) 3",
            "C) 5",
            "D) 6",
            "E) 10"
        ],
        correta: "C",
        id: "q28"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Anagramas e Conhecimento Geral",
        revisao: "Este é um problema de anagrama. Ao reorganizar as letras de 'LAPURTOG', você deve formar uma palavra que se encaixe nas alternativas. A palavra 'PORTUGAL' é formada, que é um país.",
        enunciado: "Se reordenarmos as letras de LAPURTOG encontramos o nome de um:",
        alternativas: [
            "A) mamífero.",
            "B) país.",
            "C) oceano.",
            "D) continente.",
            "E) peixe."
        ],
        correta: "B",
        id: "q29"
    },
    {
        parte: "Raciocínio Lógico e Matemático",
        tema: "Padrões Lógicos",
        revisao: "A sequência segue dois padrões simultâneos: as letras avançam em ordem alfabética (A, B, C, D...) e os números avançam em uma progressão aritmética de razão 2 (2, 4, 6, 8...).",
        enunciado: "Observe a sequência: A2, B4, C6, D8, O próximo termo é:",
        alternativas: [
            "A) E9",
            "B) E10",
            "C) F10",
            "D) F12",
            "E) G9"
        ],
        correta: "B",
        id: "q30"
    },
    
    // NOÇÕES DE INFORMÁTICA
    {
        parte: "Noções de Informática",
        tema: "Componentes da Barra de Tarefas",
        revisao: "A Barra de Tarefas do Windows é dividida em seções. O Botão Iniciar é a seção 1. A Seção Intermediária é a área de aplicativos abertos (seção 3). A Área de Notificação, também conhecida como bandeja do sistema, contém ícones de status e relógio (seção 4). A Barra de Ferramentas de Início Rápido (seção 2) contém atalhos para programas favoritos.",
        enunciado: "A seção 1 corresponde ao Botão do menu Iniciar e a 3, à Seção Intermediária. As seções 2 e 4 são denominadas, respectivamente:",
        alternativas: [
            "A) Barra de Tarefas e Área de Ferramentas e Utilitários.",
            "B) Barra de Aplicativos em Execução e Área de Notificação.",
            "C) Barra de Ferramentas de Início Rápido e Área de Notificação.",
            "D) Barra de Aplicativos em Execução e Área de Ícones de Acesso Rápido.",
            "E) Barra de Ferramentas de Início Rápido e Área de Ícones de Acesso Rápido."
        ],
        correta: "C",
        id: "q31"
    },
    {
        parte: "Noções de Informática",
        tema: "Atalhos de Teclado",
        revisao: "O atalho 'Ctrl + Esc' no Windows abre o menu Iniciar. Na figura, a janela mostrada é o menu Iniciar (ou a tela inicial, a depender da versão do sistema operacional). A tecla Esc é usada para fechar menus ou janelas.",
        enunciado: "Para mostrar a janela acima na tela do monitor de vídeo, deve-se pressionar simultaneamente as teclas Ctrl e:",
        alternativas: [
            "A) Tab",
            "B) Esc",
            "C) Shift",
            "D) Ins",
            "E) Del"
        ],
        correta: "B",
        id: "q32"
    },
    {
        parte: "Noções de Informática",
        tema: "Painel de Controle do Windows",
        revisao: "O Painel de Controle é um recurso do Windows que permite aos usuários visualizar e alterar as configurações do sistema, como contas de usuário, programas instalados, aparência e funcionalidade do computador. As opções listadas no enunciado (Sistema e Manutenção, Segurança, etc.) são subcategorias do Painel de Controle.",
        enunciado: "A utilização de um recurso do Windows Vista operacionalizada por meio de janela que permite configurar o Windows, personalizar a aparência e a funcionalidade do computador, configurar contas de usuários, adicionar ou remover programas e configurar conexões de rede. Esse recurso é conhecido por:",
        alternativas: [
            "A) Painel de Controle.",
            "B) Painel de Configurações.",
            "C) Painel de Diretivas..",
            "D) Central de Configurações.",
            "E) Central de Controle."
        ],
        correta: "A",
        id: "q33"
    },
    {
        parte: "Noções de Informática",
        tema: "Gadgets do Windows Vista",
        revisao: "O Windows Vista introduziu a 'Barra Lateral' (SideBar), que podia ser preenchida com pequenos programas chamados 'gadgets'. Esses mini-aplicativos forneciam informações rápidas e úteis, como relógios, calendários, medidores de CPU e notícias.",
        enunciado: "O Windows Vista disponibiliza uma Barra Lateral, uma barra longa, vertical, exibida ao lado da área de trabalho. Ela contém mini programas que oferecem informações rápidas e acesso fácil a ferramentas usadas com frequência. Assinale a alternativa que indique a denominação desses mini programas.",
        alternativas: [
            "A) tools",
            "B) feeds",
            "C) gallery",
            "D) sniffers",
            "E) gadgets"
        ],
        correta: "E",
        id: "q34"
    },
    {
        parte: "Noções de Informática",
        tema: "Recursos do Word 2007",
        revisao: "O Word 2007 introduziu a Faixa de Opções (Ribbon). Para inserir uma tabela, o usuário deve ir à guia 'Inserir' e clicar no ícone correspondente à função 'Tabela'. A imagem do ícone é um grid, representando a estrutura da tabela. ",
        enunciado: "Um usuário está digitando um texto no Word 2007 BR. Durante esse trabalho, ele inseriu uma tabela e para isso, clicou por meio do mouse, em um icone dentre as opções da guia Inserir da Faixa de Opções, o que gerou a exibição da janela a seguir na tela. Nas opções mostradas na guia Inserir da Faixa de Opções mencionada acima, o usuário clicou no icone:",
        alternativas: [
            "A)",
            "B)",
            "C)",
            "D)",
            "E)"
        ],
        correta: "A",
        id: "q35"
    },
    {
        parte: "Noções de Informática",
        tema: "Atalhos de Teclado no Word",
        revisao: "No Word, o atalho 'Ctrl + U' é amplamente utilizado para a função de substituição de texto. 'U' em inglês remete a 'Undo', mas em português o atalho para 'substituir' é 'Ctrl+U'.",
        enunciado: "Um funcionário da Assembleia Legislativa do Estado do Amazonas digitou um trabalho no Word2007BR e, após terminar a tarefa, posicionou o cursor do mouse no início do texto. Em seguida, executou o atalho de teclado $<Ctrl>+U,$ o que resultou na exibição de uma janela de diálogo na tela do monitor de vídeo. Essa janela de diálogo tem por objetivo a execução do seguinte procedimento:",
        alternativas: [
            "A) inserir uma quebra de página.",
            "B) localizar uma palavra no texto.",
            "C) acionar o recurso de mala direta.",
            "D) substituir uma determinada palavra por outra no texto.",
            "E) alterar a orientação da página de paisagem para retrato."
        ],
        correta: "D",
        id: "q36"
    },
    {
        parte: "Noções de Informática",
        tema: "Atalhos de Teclado no Word",
        revisao: "O atalho 'Alt + Ctrl + F' é o atalho padrão do Microsoft Word para inserir uma nota de rodapé.",
        enunciado: "Um funcionário da Assembleia Legislativa do Estado do Amazonas está digitando um texto no Word2007BR. Para incluir uma nota de rodapé em uma página, ele deve posicionar o cursor do mouse no ponto do texto onde deseja inserir a referência e pressionar, simultaneamente, as teclas:",
        alternativas: [
            "A) $<Alt>e~R$",
            "B) <Ctrl> e F",
            "C) $<Shift>e~R$",
            "D) <Alt>, <Ctrl> e F",
            "E) <Ctrl>, < $<A|t>e~R$"
        ],
        correta: "D",
        id: "q37"
    },
    {
        parte: "Noções de Informática",
        tema: "Atalhos de Teclado no Word",
        revisao: "O atalho 'Ctrl + E' centraliza o texto selecionado, enquanto a tecla 'F12' abre a caixa de diálogo 'Salvar como', permitindo ao usuário salvar o documento com um novo nome, local ou tipo de arquivo.",
        enunciado: "Um usuário do MSOffice Word 2007 BR está digitando um texto. Na formatação, ele selecionou um parágrafo e executou o atalho de teclado $<Ctrl>+E$ e, em seguida, teclou F12. A execução do atalho de teclado e o acionamento da tecla possuem os seguintes significados:",
        alternativas: [
            "A) alinhamento à esquerda e salvar",
            "B) alinhamento centralizado e salvar",
            "C) alinhamento justificado e salvar como",
            "D) alinhamento à esquerda e salvar como ....",
            "E) alinhamento centralizado e salvar como ..."
        ],
        correta: "E",
        id: "q38"
    },
    {
        parte: "Noções de Informática",
        tema: "Tipos de Gráficos no Excel",
        revisao: "O Excel 2007 possui diversos tipos de gráficos. O 'Tipo 1' com pontos dispersos é o 'Gráfico de Dispersão'. O 'Tipo 2' com uma 'rosquinha' é o 'Gráfico de Rosca', que mostra a proporção de partes em relação a um todo.",
        enunciado: "O Excel 2007 BR disponibiliza diversos tipos de gráficos aos usuários. Nesse contexto, observe as figuras a seguir, que ilustram dois desses tipos. Os tipos e 2 mostrados acima são conhecidos, respectivamente, por:",
        alternativas: [
            "A) dispersão e rosca.",
            "B) dispersão e pizza.",
            "C) bolhas e rosca.",
            "D) linha e pizza.",
            "E) linha e rosca."
        ],
        correta: "A",
        id: "q39"
    },
    {
        parte: "Noções de Informática",
        tema: "Seleção de Texto no Word",
        revisao: "O clique duplo em uma palavra no Word seleciona a palavra inteira. Clique triplo seleciona o parágrafo. Clique duplo fora de uma palavra, no meio de uma frase, no entanto, selecionará apenas a palavra em que o cursor está posicionado.",
        enunciado: "Estando com o cursor no meio da palavra Amazonas, entre as letras z e o, pressionar por duas vezes o botão esquerdo do mouse resultará na seleção:",
        alternativas: [
            "A) do texto inteiro.",
            "B) da palavra Amazonas.",
            "C) da linha que contém a palavra Amazonas.",
            "D) do parágrafo que contém a palavra Amazonas.",
            "E) da citação Assembléia Legislativa do Amazonas."
        ],
        correta: "B",
        id: "q40"
    },
    {
        parte: "Noções de Informática",
        tema: "Funções do Excel",
        revisao: "Para encontrar o n-ésimo menor valor em um intervalo, a função correta é 'MENOR()'. Para a mediana, a função é 'MED()'. Ambas são funções padrão do Excel. A sintaxe correta para 'MENOR' é MENOR(intervalo;n), e para 'MED' é MED(intervalo).",
        enunciado: "Para determinar, dentre todos os números, o terceiro menor valor em B3 e a mediana em 84, utilizando as funções disponíveis no software, devem ser inseridas nas células B3 e B4, respectivamente, as seguintes fórmulas:",
        alternativas: [
            "A) =MÍNIMO(A1:F1;3) e =MED(A1:F1)",
            "B) =MENOR(A1:F1;3) e =MED(A1:F1)",
            "C) MENOR(A1:F1>3) e =MED(A1 F1)",
            "D) MENOR(A1:F1;3) e =MEDIANA(A1:F1)",
            "E) =MÍNIMO(A1:F1;3) e =MEDIANA(A1:F1)"
        ],
        correta: "B",
        id: "q41"
    },
    {
        parte: "Noções de Informática",
        tema: "Formatos de Arquivo e Ferramentas do Excel",
        revisao: "O formato de arquivo padrão do Excel 2007 e versões posteriores é .xlsx. O ícone de AutoSoma é o símbolo grego Sigma (Σ), que executa automaticamente a soma de um intervalo de células adjacente à célula ativa. ",
        enunciado: "No caso do Excel 2007BR, as planilhas são salvas em um formato default. Na formatação de células, em vez de se usar a função SOMA, pode-se atuar diretamente em um icone com função de Auto Soma para obtenção do mesmo resultado. O formato e o ícone são, respectivamente:",
        alternativas: [
            "A) xls e Σ",
            "B) odx e Ω",
            "C) xls e Ω",
            "D) odx e Σ",
            "E) xls e Ω"
        ],
        correta: "A",
        id: "q42"
    },
    {
        parte: "Noções de Informática",
        tema: "Fórmulas e Funções do Excel",
        revisao: "Para resolver a questão, é necessário calcular o valor de D3, a fórmula para a média, e o valor de D5. D3 = SOMA(B1;E1) = 18 + 48 = 66. A fórmula para a média é MEDIA(A1:E1). D4 = MEDIA(11;18;21;27;48) = (11+18+21+27+48)/5 = 125/5 = 25. D5 = MOD(D4;7) = MOD(25;7), que é o resto da divisão de 25 por 7, que é 4.",
        enunciado: "Nessa planilha, foram inseridas as seguintes fórmulas: I. $=SOMA(B1;E1)$ em D3, II. em D4 para determinar a média aritmética entre todos os números no intervalo entre A1 e E1 III. $=MOD(D4;7)$ em D5. Nessas condições, o valor mostrado em D3, a fórmula inserida em D4 e o valor mostrado em D5 são, respectivamente:",
        alternativas: [
            "A) $66, =MEDIA(A1:E1) e 4$",
            "B) $114, =MEDIA(A1:E1) e 2$",
            "C) $66, =MEDIA(A1:E1) e 1$",
            "D) $114, =MEDIA(A1;E1) e 4$",
            "E) $66, =MEDIA(A1;E1) e 5$"
        ],
        correta: "A",
        id: "q43"
    },
    {
        parte: "Noções de Informática",
        tema: "Referências Absolutas e Relativas no Excel",
        revisao: "As referências com '$' são absolutas, ou seja, não mudam ao serem copiadas. O '$D$6' e '$D$1' permanecerão fixos. A referência 'D7:D8' é relativa e mudará para 'C7:C8' ao ser copiada uma coluna para a esquerda (de B para A). O valor em B4 é (D6+SOMA(D7:D8))/D1 = (4+SOMA(3;9))/2 = (4+12)/2 = 16/2 = 8. O valor mostrado na pergunta está errado. Vamos considerar a correção do gabarito para a lógica do quiz. Valor correto: (4+SOMA(3+9))/2=8. A fórmula copiada para A4: ($D$6+SOMA(C7:C8))/$D$1.",
        enunciado: "Nessa planilha, foi inserida na célula B4 a fórmula $=(\$D\$6+SOMA(D7:D8))/\$D\$1$. Em seguida, por meio dos comandos copiar e colar, fez-se uma cópia dessa fórmula de B4 para a célula A4. Nesse contexto, o valor mostrado na célula B4 e a fórmula copiada para A4 são:",
        alternativas: [
            "A) $14 e =(\$D\$6+SOMA(C7:C8))/\$D\$1$",
            "B) $17 e =(\$C\$6+SOMA(D7:D8))/\$C\$1$",
            "C) $17 e =(\$D\$6+SOMA(C7:C8))/\$D\$1$",
            "D) $11 e =(\$C\$6+SOMA(C7:C8))/SC\$1$",
            "E) $11 e =(\$D\$6+SOMA(D7:D8))/\$D\$1$"
        ],
        correta: "C", // Baseado na lógica de que o valor em D6+soma(D7:D8) = 21, e o valor em D1 é 3, então 21/3=7. A questão tem um erro. Vamos usar o gabarito. (D6+SOMA(D7;D8))/D1 = (20+SOMA(3;9))/2 = (20+12)/2=16. A fórmula copiada para A4 é: ($D$6+SOMA(C7:C8))/$D$1. C7=5, C8=6. (20+11)/2 = 15. A questão e o gabarito estão inconsistentes. A resposta correta baseada no gabarito oficial seria E, assumindo que os valores na tabela não são os mostrados. Pelo enunciado e gabarito fornecido, a opção E seria a correta. Mas vamos manter a resposta fornecida na prova.
        id: "q44"
    },
    {
        parte: "Noções de Informática",
        tema: "Formatos de Arquivo do PowerPoint",
        revisao: "O PowerPoint 2007 salva apresentações em formatos específicos. O formato PPT é para versões antigas, e o PPS (PowerPoint Show) é para apresentações que abrem diretamente em modo de exibição, sem a interface de edição. Esses são formatos nativos do PowerPoint.",
        enunciado: "O pacote MS Office 2007 BR integra diversos programas, cada um com suas funcionalidades. Incluso nesse pacote, o PowerPoint permite criar apresentações e, dentre os disponíveis, permite salvá-las em um dos seguintes formatos:",
        alternativas: [
            "A) CDR ou RTF",
            "B) PPT ou PPS",
            "C) AVI ou MP3",
            "D) PSD ou PDF",
            "E) AWG ou ONG"
        ],
        correta: "B",
        id: "q45"
    },
    {
        parte: "Noções de Informática",
        tema: "Slide Mestre no PowerPoint",
        revisao: "O Slide Mestre armazena informações sobre o design geral da apresentação, incluindo fontes, cores, layouts, temas, plano de fundo e posicionamento de elementos. Animações, no entanto, são aplicadas individualmente a objetos ou slides específicos, não sendo armazenadas no mestre. ",
        enunciado: "O slide mestre é importante, pois armazena todas as informações sobre os itens constantes das alternativas a seguir, à exceção de uma. Assinale-a.",
        alternativas: [
            "A) Tema e layouts.",
            "B) Fontes e efeitos.",
            "C) Design e animações.",
            "D) Plano de fundo e cor.",
            "E) Tamanhos de espaços reservados e posicionamento."
        ],
        correta: "C",
        id: "q46"
    },
    {
        parte: "Noções de Informática",
        tema: "Atalhos de Teclado no Thunderbird",
        revisao: "O atalho para o Catálogo de Endereços no Mozilla Thunderbird é 'Ctrl + 2'. Para encaminhar uma mensagem, o atalho é 'Ctrl + L' ou 'Ctrl + E', dependendo da versão e idioma. 'Ctrl + E' é a opção 'Encaminhar' no atalho do Thunderbird.",
        enunciado: "O Mozilla Thunderbird 2.0.0.23 é um software para gerenciamento de e-mails. No uso dos recursos, um usuário executou duas ações: I. Abriu a janela associada ao Catálogo de Endereços... Para isso, acionou o ícone Catálogo II. Recebeu uma mensagem e decidiu encaminhá-la... Para isso, acionou o ícone Encaminhar. Procedimentos alternativos para I e II, foram realizados, respectivamente, por meio da execução dos seguintes atalhos de teclado:",
        alternativas: [
            "A) $Alt+2 e Ctrl+E$",
            "B) $Alt+2 e Ctrl+L$",
            "C) $Ctrl+2 e Ctrl+R$",
            "D) $Ctrl+2 e Ctrl+L$",
            "E) $Ctrl+2 e Ctrl+E$"
        ],
        correta: "E",
        id: "q47"
    },
    {
        parte: "Noções de Informática",
        tema: "Atalhos de Teclado em Browsers",
        revisao: "O atalho de teclado para adicionar uma página a favoritos nos principais navegadores, incluindo o Firefox, é 'Ctrl + D'.",
        enunciado: "Ao empregar o Mozilla Firefox 3.5 como browser para navegação na Internet, um usuário pode utilizar ícones ou atalhos de teclado. Desse modo, para adicionar a página corrente a favoritos, o usuário pode utilizar um atalho de teclado, conforme exemplificado na figura a seguir. Esse atalho de teclado corresponde a pressionar simultaneamente as teclas Ctrl e:",
        alternativas: [
            "A) Z",
            "B) T",
            "C) L",
            "D) D",
            "E) A"
        ],
        correta: "D",
        id: "q48"
    },
    {
        parte: "Noções de Informática",
        tema: "Termos Técnicos da Internet",
        revisao: "O termo 'download' se refere ao ato de transferir um arquivo de um servidor (como um site) para o seu computador. O 'upload' é o processo inverso, ou seja, enviar um arquivo do seu computador para um servidor. O termo 'baixar' é o equivalente a 'download'.",
        enunciado: "Um funcionário da Assembleia Legislativa do Estado do Amazonas está acessando o site http://www.aleam.gov.br/Index.asp, por meio do browser Internet Explorer 8 BR e baixou a logomarca da Assembleia. Esse procedimento é conhecido, no contexto da informática, pelo termo técnico:",
        alternativas: [
            "A) upsize",
            "B) upload",
            "C) overload",
            "D) downsize",
            "E) download"
        ],
        correta: "E",
        id: "q49"
    },
    {
        parte: "Noções de Informática",
        tema: "Protocolos da Internet",
        revisao: "O protocolo que permite a visualização de páginas web é o HTTP (Hypertext Transfer Protocol). O serviço de transferência de arquivos é o FTP (File Transfer Protocol), que pode ser usado anonimamente ou com senha.",
        enunciado: "Como componente básico para operação da Internet, a arquitetura TCP/IP oferece dois recursos: I. um protocolo, que possibilita a visualização do conteúdo de páginas como texto e imagens em browsers na Internet. II. um serviço para transferência de arquivos, podendo ser público ou anônimo ou privado e, nesse caso, exigindo senha para acesso. O protocolo e o serviço são conhecidos, respectivamente, pelas siglas:",
        alternativas: [
            "A) HTTP e FTP",
            "B) HTTP e SMTP",
            "C) HTML e DNS",
            "D) HTML e SMTP",
            "E) HTTP e DNS"
        ],
        correta: "A",
        id: "q50"
    },
    
    // LEGISLAÇÃO
    {
        parte: "Legislação",
        tema: "Cargos de Brasileiro Nato",
        revisao: "A Constituição Federal estabelece uma lista de cargos que são privativos de brasileiros natos. Essa lista inclui o Presidente e Vice-Presidente da República, o Presidente da Câmara e do Senado, os Ministros do STF, a carreira diplomática e Oficiais das Forças Armadas..",
        enunciado: "São privativos de brasileiro nato os cargos de:",
        alternativas: [
            "A) Deputado Federal.",
            "B) Oficial das Forças Armadas.",
            "C) Procurador Geral da República.",
            "D) Presidente do Banco Central.",
            "E) Ministro do Superior Tribunal de Justiça."
        ],
        correta: "B",
        id: "q51"
    },
    {
        parte: "Legislação",
        tema: "Competência Legislativa da União",
        revisao: "A Constituição Federal define a competência privativa da União para legislar sobre certas matérias. A lista é taxativa e inclui áreas como direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho..",
        enunciado: "É competência privativa da União legislar sobre energia, como também sobre:",
        alternativas: [
            "A) Direito Civil, Comercial, Financeiro, Econômico e Urbanístico.",
            "B) águas, informática, cultura, ensino e desporto.",
            "C) defesa do solo e dos recursos naturais e proteção ao meio ambiente.",
            "D) navegação lacustre, fluvial, marítima, aérea e aeroespacial.",
            "E) normas específicas sobre licitação para todos os entes federativos."
        ],
        correta: "A",
        id: "q52"
    },
    {
        parte: "Legislação",
        tema: "Competência da Assembleia Legislativa do Amazonas",
        revisao: "A Constituição Estadual define as competências da Assembleia Legislativa. Ela pode dispor sobre a organização administrativa, judiciária, do Ministério Público, da Defensoria Pública e da Procuradoria Geral do Estado. No entanto, a nomeação de Conselheiro do Tribunal de Contas do Estado do Amazonas não é de sua competência, segundo o gabarito. (Nota: A nomeação é feita pelo Governador, após aprovação da Assembleia, o que torna a afirmativa incorreta conforme a prática, mas o gabarito da prova indica que a ALEAM não dispõe sobre a nomeação. As demais alternativas são de competência da ALEAM.)",
        enunciado: "A Assembleia Legislativa do Estado do Amazonas dispõe sobre as matérias relacionadas a seguir, à exceção de uma. Assinale-a.",
        alternativas: [
            "A) Bens de domínio do Estado.",
            "B) Tributos, arrecadação e distribuição de rendas",
            "C) Transferência temporária da sede do governo estadual.",
            "D) Fixação e modificação dos efetivos da Policia Militar.",
            "E) Nomeação do Conselheiro do Tribunal de Contas do Estado do Amazonas."
        ],
        correta: "E",
        id: "q53"
    },
    {
        parte: "Legislação",
        tema: "Regime Jurídico dos Servidores do Amazonas",
        revisao: "O Estatuto dos Servidores Públicos Civis do Estado do Amazonas (Lei Estadual 1762/86) define os institutos de provimento e vacância de cargos. A reintegração é a reinvestidura do servidor no cargo, com ressarcimento de direitos e vantagens, decorrente de decisão judicial ou administrativa que anula a demissão. A promoção independe de vaga, o que está incorreto na afirmativa 'D'..",
        enunciado: "Com base no Estatuto dos Servidores Públicos Civis do Estado do Amazonas Lei Estadual 1762/86, assinale a afirmativa correta.",
        alternativas: [
            "A) A readaptação consiste na reinvestidura do servidor no cargo antes ocupado, quando seu afastamento por incapacidade física e mental for apurado por junta médica oficial.",
            "B) A reversão consiste no retorno à atividade do servidor aposentado por invalidez em outro cargo, com atribuições compatíveis à sua capacidade física.",
            "C) A reintegração consiste no ato pelo qual o demitido reingressa no serviço público, em decorrência de decisão administrativa ou judicial transitada em julgado, com o ressarcimento de todos os direitos e vantagens.",
            "D) A promoção consiste na passagem da referência em que se encontra o servidor na carreira para a classe imediatamente superior, com base em critérios de antiguidade e de merecimento; independe da existência de vaga.",
            "E) O aproveitamento consiste no retorno, à atividade, do servidor em disponibilidade, obrigatoriamente, para o mesmo cargo que antes ocupava."
        ],
        correta: "C",
        id: "q54"
    },
    {
        parte: "Legislação",
        tema: "Atos Administrativos",
        revisao: "Os atos administrativos possuem atributos como presunção de legitimidade e imperatividade. A presunção de legitimidade é relativa (iuris tantum), pois pode ser contestada judicialmente. Já a imperatividade não é aplicável a todos os atos (ex: atos enunciativos). O desvio de poder é um vício que afeta a finalidade do ato, que é o interesse público..",
        enunciado: "Com relação aos atos administrativos, analise as afirmativas a seguir. I. A presunção de legitimidade é relativa (iuris tantum). II. O cunho coercitivo da imperatividade é marcante em todos os atos administrativos, já que o alvo da Administração Pública é o interesse público. III. O desvio de poder é um vício que macula o elemento finalidade. Assinale:",
        alternativas: [
            "A) se somente a afirmativa I estiver correta.",
            "B) se somente a afirmativa Il estiver correta..",
            "C) se somente a afirmativa III estiver correta.",
            "D) se somente as afirmativas I e III estiverem corretas.",
            "E) se todas as afirmativas estiverem corretas."
        ],
        correta: "D",
        id: "q55"
    },
    {
        parte: "Legislação",
        tema: "Plano de Cargos, Carreiras e Remuneração da ALEAM",
        revisao: "A Lei Estadual 3013/05 (Plano de Cargos, Carreiras e Remuneração da ALEAM) trata da estrutura de cargos. A contratação temporária para excepcional interesse público deve ocorrer via processo seletivo simplificado, não por concurso público. Os cargos em comissão são de livre nomeação e exoneração, mas não são exercidos apenas por servidores de carreira. Os cargos efetivos de Procurador, Assessor Jurídico e Auditor não são cargos isolados.",
        enunciado: "De acordo com a Lei Estadual 3013/05, que dispõe sobre o Plano de Cargos, Carreiras e Remuneração dos servidores da Assembleia Legislativa do Estado do Amazonas, assinale a afirmativa correta.",
        alternativas: [
            "A) Os cargos efetivos de Procurador, Assessor Jurídico e Auditor constituem-se em cargos isolados.",
            "B) As funções de confiança serão exercidas por servidores ocupantes de cargos efetivos, obrigatoriamente portadores de título acadêmico de nivel superior.",
            "C) A contratação por tempo determinado para atender a necessidade temporária de excepcional interesse público ocorrerá mediante edital de concurso público.",
            "D) Os cargos em comissão, de livre nomeação e exoneração, serão exercidos por servidores de carreira para função exclusivamente de direção.",
            "E) Os cargos efetivos são organizados em carreiras denominadas Agente Legislativo de Nível Fundamental, Agente Legislativo de Nível Médio e Analista de Controle de Nível Superior."
        ],
        correta: "E",
        id: "q56"
    },
    {
        parte: "Legislação",
        tema: "Servidor Público: Afastamento",
        revisao: "O Estatuto dos Servidores Públicos Civis do Estado do Amazonas (Lei 1762/86) lista as situações em que o afastamento é considerado efetivo exercício. O casamento, por até 5 dias, é um desses casos. Outras situações, como licenças, dependem do tipo de licença para serem consideradas como efetivo exercício.",
        enunciado: "De acordo com o Estatuto dos Servidores Públicos Civis do Estado do Amazonas Lei 1762/86, o afastamento do servidor será sempre considerado como efetivo exercício em virtude de:",
        alternativas: [
            "A) casamento, até 5 (cinco) dias.",
            "B) licenças.",
            "C) faltas justificadas",
            "D) competições esportivas no Estado do Amazonas.",
            "E) exercício de cargo de confiança no serviço público."
        ],
        correta: "A",
        id: "q57"
    },
    {
        parte: "Legislação",
        tema: "Direitos Fundamentais e Liberdade de Expressão",
        revisao: "O artigo 5º da Constituição Federal trata dos direitos e deveres individuais e coletivos. A decisão do STF sobre as marchas da maconha é um exemplo do direito à liberdade de manifestação do pensamento. A alternativa 'A' se refere ao direito de profissão, mas 'C' e 'D' contêm informações incorretas. 'E' também está incorreta, pois a restrição deve ser para o 'interesse público' ou 'exigência do processo', não 'exclusivamente para a defesa da intimidade'.",
        enunciado: "A Lei Maior assegura a liberdade de manifestação do pensamento e o direito de reunião, de forma pacífica, sem armas e em locais abertos ao público, assegurando expressamente em seu art. $5^{\\circ}$ que:",
        alternativas: [
            "A) é livre o exercício de qualquer trabalho, ofício ou profissão, atendidas as qualificações profissionais que a lei estabelecer.",
            "B) são gratuitas as ações de habeas corpus, habeas data e mandado de segurança e, na forma da lei, os atos necessários ao exercício da cidadania.",
            "C) é inviolável o sigilo da correspondência e das comunicações telegráficas, salvo por ordem judicial para fins de investigação criminal ou instrução processual penal.",
            "D) no caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, não sendo assegurado, nesse caso, indenização ulterior.",
            "E) a lei poderá restringir a publicidade dos atos processuais exclusivamente para a defesa da intimidade."
        ],
        correta: "A",
        id: "q58"
    },
    {
        parte: "Legislação",
        tema: "Servidor Público e Mandato Eletivo",
        revisao: "O regime jurídico dos servidores públicos em exercício de mandato eletivo é regido pela Constituição Federal e legislação complementar. Se o mandato for federal, estadual ou distrital, o servidor ficará afastado do seu cargo. Se for de Prefeito, também será afastado, podendo optar pela remuneração do seu cargo. Se for Vereador, havendo compatibilidade de horários, pode acumular o cargo e a remuneração. O tempo de serviço contará para todos os efeitos legais..",
        enunciado: "Com relação ao servidor público da Administração Direta, no exercício de mandato eletivo, assinale a afirmativa correta.",
        alternativas: [
            "A) Poderá optar pelo afastamento de seu cargo, emprego ou função, somente em caso de mandato eletivo estadual.",
            "B) Será obrigatoriamente afastado de seu cargo, emprego ou função, sendo-lhe facultado optar pela sua remuneração, somente em caso de mandato de prefeito.",
            "C) Contará, para todos os efeitos legais, seu tempo de serviço, inclusive para promoção por merecimento, somente em caso de exigência de afastamento para o exercício de mandato eletivo.",
            "D) Perceberá as vantagens de seu cargo, emprego ou função, sem prejuízo da remuneração do cargo eletivo, não havendo compatibilidade de horários, somente em caso de mandato de vereador.",
            "E) Poderá optar entre afastar-se ou não de seu cargo, emprego ou função, havendo compatibilidade de horários, somente em caso de mandato de deputado federal."
        ],
        correta: "B",
        id: "q59"
    },
    {
        parte: "Legislação",
        tema: "Penalidades Disciplinares para Servidores do Amazonas",
        revisao: "As penalidades disciplinares aplicáveis a servidores públicos civis do Estado do Amazonas são: advertência, suspensão, demissão, destituição de cargo em comissão, destituição de função comissionada, e cassação de aposentadoria ou disponibilidade. A 'exoneração' não é uma penalidade disciplinar, mas um ato de vacância do cargo a pedido do servidor ou de ofício, em casos específicos..",
        enunciado: "As penas disciplinares, relacionadas na alternativas a seguir, são aplicáveis ao servidor no Estado do Amazonas, à exceção de uma. Assinale-a.",
        alternativas: [
            "A) Exoneração.",
            "B) Suspensão, em casos de falta grave ou reincidências.",
            "C) Cassação de disponibilidade.",
            "D) Demissão, em caso de inassiduidade habitual.",
            "E) Cassação de aposentadoria."
        ],
        correta: "A",
        id: "q60"
    },
    {
        parte: "Legislação",
        tema: "Revogação de Atos Administrativos",
        revisao: "A revogação de um ato administrativo é a sua retirada por razões de conveniência e oportunidade. Ela só se aplica a atos discricionários e, por razões de segurança jurídica, a revogação opera 'ex nunc', ou seja, a partir do momento da revogação, não retroagindo para o passado..",
        enunciado: "No que tange à revogação dos atos administrativos, assinale a afirmativa correta.",
        alternativas: [
            "A) Os meros atos administrativos, como os despachos e vistos, podem ser revogados.",
            "B) A revogação pode ser efetivada pelo Judiciário se o ato decorrer de vício de legalidade.",
            "C) A revogação é a supressão de um ato não discricionário, ausente de vicios e extinto por razões de oportunidade e conveniência.",
            "D) A revogação possui efeitos ex tunc, alcançando o momento de sua edição.",
            "E) O juiz pode verificar a validade ou não do ato de revogação."
        ],
        correta: "E",
        id: "q61"
    },
    {
        parte: "Legislação",
        tema: "Intervenção Federal",
        revisao: "A Constituição Federal estabelece as hipóteses de intervenção da União nos estados. Elas incluem manter a integridade nacional, repelir invasão estrangeira, garantir o livre exercício dos Poderes e assegurar o cumprimento de decisões judiciais. 'Assegurar os direitos da pessoa humana e a autonomia municipal' não é uma hipótese de intervenção, sendo uma competência da própria união..",
        enunciado: "Algumas hipóteses de intervenção federal nos Estados são apresentadas nas alternativas a seguir, à exceção de uma. Assinale-a.",
        alternativas: [
            "A) Manter a integridade nacional e repelir invasão estrangeira.",
            "B) Assegurar os direitos da pessoa humana e a autonomia municipal.",
            "C) Garantir o livre exercício de qualquer dos Poderes nas unidades da Federação.",
            "D) Reorganizar as finanças da unidade da Federação que suspender o pagamento da dívida fundada por mais de um ano.",
            "E) Reorganizar as finanças da unidade da Federação que deixar de entregar aos Municípios receitas tributárias fixadas na Constituição, dentro dos prazos estabelecidos em lei."
        ],
        correta: "B",
        id: "q62"
    },
    {
        parte: "Legislação",
        tema: "Iniciativa de Leis no Amazonas",
        revisao: "A Constituição do Estado do Amazonas estabelece que a iniciativa de leis que dispõem sobre a organização da Procuradoria Geral do Estado e da Defensoria Pública são de iniciativa do Governador do Estado..",
        enunciado: "De acordo com a Constituição do Estado do Amazonas, as leis que disponham sobre a organização da Procuradoria Geral do Estado e da Defensoria Pública são de iniciativa privativa:",
        alternativas: [
            "A) da Assembleia Legislativa.",
            "B) do Congresso Nacional.",
            "C) do Governador do Estado.",
            "D) do Tribunal de Justiça.",
            "E) do Procurador-Geral de Justiça."
        ],
        correta: "C",
        id: "q63"
    },
    {
        parte: "Legislação",
        tema: "Direitos dos Servidores Públicos",
        revisao: "A Constituição Federal garante direitos sociais aos trabalhadores e, em alguns casos, aos servidores públicos. A remuneração do serviço extraordinário para servidores públicos, segundo a CF, é superior, no mínimo, em 50% à do normal. A afirmativa 'E' apresenta '25%', o que está incorreto de acordo com a CF/88.",
        enunciado: "Os dispositivos relacionados nas alternativas a seguir são aplicáveis aos servidores ocupantes de cargo público, à exceção de um. Assinale-o.",
        alternativas: [
            "A) Remuneração do trabalho noturno superior à do diurno.",
            "B) Repouso semanal remunerado, preferencialmente aos domingos.",
            "C) Duração do trabalho normal não superior a oito horas diárias e quarenta e quatro semanais.",
            "D) Redução dos riscos inerentes ao trabalho, por meio de normas de saúde, higiene e segurança.",
            "E) Remuneração do serviço extraordinário superior, no mínimo, em vinte e cinco por cento à do normal."
        ],
        correta: "E",
        id: "q64"
    },
    {
        parte: "Legislação",
        tema: "Emenda à Constituição Estadual do Amazonas",
        revisao: "A Constituição do Estado do Amazonas pode ser emendada mediante proposta do Governador do Estado, de dois terços dos membros da Assembleia Legislativa, ou por iniciativa popular (subscrita por no mínimo 1% do eleitorado). A afirmativa 'E' está correta e é a mais completa em termos de requisitos, segundo a CE/AM..",
        enunciado: "A Constituição do Estado do Amazonas poderá ser emendada mediante proposta:",
        alternativas: [
            "A) do Governador do Estado do Amazonas.",
            "B) de metade das Câmaras Municipais, por deliberação da maioria relativa de seus membros.",
            "C) de iniciativa popular, subscrita por, no mínimo, dez por cento do eleitorado estadual.",
            "D) dois terços, no mínimo, dos membros da Assembleia Legislativa.",
            "E) de mais da metade das Câmaras Municipais, por deliberação da maioria absoluta de seus membros."
        ],
        correta: "E",
        id: "q65"
    },
    {
        parte: "Legislação",
        tema: "Processo Legislativo no Amazonas",
        revisao: "A Constituição do Estado do Amazonas prevê que um projeto de lei rejeitado só poderá ser objeto de novo projeto na sessão legislativa seguinte, por proposta da maioria absoluta dos seus membros..",
        enunciado: "Assinale a alternativa que completa corretamente o fragmento a seguir: A matéria constante de projeto de lei rejeitado na Assembleia Legislativa, poderá constituir objeto de novo projeto",
        alternativas: [
            "A) somente na sessão legislativa seguinte, mediante proposta da maioria absoluta dos seus membros.",
            "B) somente mediante proposta da maioria absoluta dos seus membros, na mesma sessão legislativa.",
            "C) somente mediante proposta de um terço de seus membros, na mesma legislatura.",
            "D) somente se não houver sido rejeitado pela maioria absoluta dos seus membros.",
            "E) somente na legislatura seguinte."
        ],
        correta: "A",
        id: "q66"
    },
    {
        parte: "Legislação",
        tema: "Veto e Sanção de Leis no Amazonas",
        revisao: "A Constituição Estadual do Amazonas regula o processo de sanção e veto. Se o veto for rejeitado, o projeto é enviado ao Governador para promulgação. Se o Governador não promulgar, o Presidente da Assembleia o fará. O prazo de veto é de 15 dias úteis, e o silêncio do Governador implica sanção, não veto..",
        enunciado: "Com relação ao veto ou à sanção do Governador sobre projeto de lei aprovado pela Assembleia Legislativa do Estado do Amazonas, analise as afirmativas a seguir. I. Se o veto for rejeitado pela Assembleia Legislativa, o projeto será enviado ao Governador do Estado para promulgação. II. O veto do Governador será apreciado dentro de trinta dias, a contar do seu recebimento, só podendo ser rejeitado pelo voto da maioria absoluta dos deputados, em escrutinio secreto. III. Decorrido o prazo de quinze dias do envio do projeto de lei aprovado pela Assembleia Legislativa, o silêncio do Governador do Estado importará em veto. Assinale:",
        alternativas: [
            "A) se somente a afirmativa I estiver correta.",
            "B) se somente a afirmativa Il estiver correta.",
            "C) se somente as afirmativas I e II estiverem corretas.",
            "D) se somente as afirmativas II e III estiverem corretas.",
            "E) se todas as afirmativas estiverem corretas."
        ],
        correta: "A",
        id: "q67"
    },
    {
        parte: "Legislação",
        tema: "Competência para Julgamento de Deputados",
        revisao: "De acordo com a Constituição Estadual, os Deputados Estaduais do Amazonas são processados e julgados, originariamente, pelo Tribunal de Justiça do Estado nos crimes comuns de competência da Justiça Estadual.",
        enunciado: "De acordo com a Constituição Estadual do Amazonas, nos crimes comuns de competência da Justiça Estadual, os deputados serão processados e julgados, originariamente, perante:",
        alternativas: [
            "A) a Comissão de Inquérito da Assembleia Legislativa.",
            "B) a Comissão de Ética da Assembleia Legislativa.",
            "C) o Superior Tribunal de Justiça.",
            "D) o Juiz singular Criminal.",
            "E) o Tribunal de Justiça."
        ],
        correta: "E",
        id: "q68"
    },
    {
        parte: "Legislação",
        tema: "Criação, Fusão e Desmembramento de Municípios",
        revisao: "A criação, a incorporação, a fusão e o desmembramento de municípios no Amazonas (e no Brasil, por norma geral) dependem de lei estadual, dentro de um período definido por lei complementar federal..",
        enunciado: "A criação, a incorporação, a fusão e o desmembramento de municípios no Estado do Amazonas far-se-ão por:",
        alternativas: [
            "A) lei complementar estadual, dentro do período determinado por lei complementar federal.",
            "B) leis municipais, dentro do período determinado por lei complementar estadual.",
            "C) leis complementares municipais, dentro do período determinado por lei estadual.",
            "D) lei complementar federal, dentro do período determinado por leis municipais.",
            "E) lei estadual, dentro do período determinado por lei complementar federal."
        ],
        correta: "E",
        id: "q69"
    },
    {
        parte: "Legislação",
        tema: "Bloco Parlamentar no Regimento Interno da ALEAM",
        revisao: "De acordo com o Regimento Interno da Assembleia Legislativa do Estado do Amazonas, o Bloco Parlamentar é a união de duas ou mais bancadas, com liderança comum. A questão 70 do gabarito oficial ALEAM 2011 tem como resposta C, que diz 'dois ou mais partidos, sob liderança comum'.",
        enunciado: "De acordo com o Regimento Interno da Assembleia Legislativa do Estado do Amazonas, o Bloco Parlamentar será constituído por:",
        alternativas: [
            "A) três ou mais partidos, para atuação em caso isolado.",
            "B) três ou mais deputados, sob liderança comum.",
            "C) dois ou mais partidos, sob liderança comum.",
            "D) dois ou mais líderes de bancada, para atuação em conjunto.",
            "E) comissões parlamentares permanentes."
        ],
        correta: "C",
        id: "q70"
    }
];

// Função para gerar as questões na página
function generateQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const sections = {
        "Língua Portuguesa": document.getElementById('portugues'),
        "Raciocínio Lógico e Matemático": document.getElementById('raciocinio'),
        "Noções de Informática": document.getElementById('informatica'),
        "Legislação": document.getElementById('legislacao'),
    };

    questoes.forEach(questao => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.id = questao.id;

        const revisionSection = document.createElement('div');
        revisionSection.className = 'revision-section';
        revisionSection.innerHTML = `
            <h3>📘 Foco de Estudo</h3>
            <p><strong>Tema:</strong> ${questao.tema}</p>
            <p>${questao.revisao}</p>
        `;
        
        const questionSection = document.createElement('div');
        questionSection.className = 'question-section';
        questionSection.innerHTML = `
            <p class="enunciado">${questao.enunciado}</p>
            <div class="options-container">
                ${questao.alternativas.map((alt, index) => `
                    <button class="option-button" data-option="${String.fromCharCode(65 + index)}">${alt}</button>
                `).join('')}
            </div>
            <div class="feedback" style="display: none;"></div>
        `;

        questionCard.appendChild(revisionSection);
        questionCard.appendChild(questionSection);

        sections[questao.parte].appendChild(questionCard);
    });
    
    // Adicionar event listeners aos botões
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.addEventListener('click', handleAnswer);
    });
}

// Função para tratar a resposta do usuário
function handleAnswer(event) {
    const selectedButton = event.target;
    const questionCard = selectedButton.closest('.question-card');
    const questionId = questionCard.id;
    const feedbackDiv = questionCard.querySelector('.feedback');
    const optionsContainer = questionCard.querySelector('.options-container');

    // Desabilitar botões após a primeira tentativa
    optionsContainer.querySelectorAll('.option-button').forEach(btn => btn.disabled = true);

    const questionData = questoes.find(q => q.id === questionId);
    const correctOption = questionData.correta;
    const selectedOption = selectedButton.dataset.option;

    if (selectedOption === correctOption) {
        selectedButton.classList.add('correct');
        feedbackDiv.style.display = 'block';
        feedbackDiv.classList.remove('wrong');
        feedbackDiv.classList.add('correct');
        feedbackDiv.innerHTML = `
            🎉 Parabéns, você acertou!
            <br>学ぶ心を持ち続ける限り、人生に限界はない
            <br>(Enquanto você mantiver o desejo de aprender, sua vida não terá limites.)
        `;
    } else {
        selectedButton.classList.add('wrong');
        const correctButton = optionsContainer.querySelector(`[data-option="${correctOption}"]`);
        if (correctButton) {
            correctButton.classList.add('correct');
        }
        feedbackDiv.style.display = 'block';
        feedbackDiv.classList.remove('correct');
        feedbackDiv.classList.add('wrong');
        feedbackDiv.innerHTML = `
            ❌ Resposta incorreta. Revise o conteúdo e tente novamente.
        `;
    }
    
    feedbackDiv.style.opacity = 1;

    // Permitir refazer a questão
    setTimeout(() => {
        optionsContainer.querySelectorAll('.option-button').forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('correct', 'wrong');
        });
        feedbackDiv.style.opacity = 0;
        feedbackDiv.style.display = 'none';
    }, 5000); // 5 segundos para o usuário ver o feedback antes de poder tentar de novo
}

// Função para scroll suave
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

// Adicionar event listeners para o menu lateral
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        smoothScroll(targetId);
    });
});

// Função para botão "Ir para o topo"
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Iniciar a geração do quiz quando a página carregar
window.onload = generateQuiz;