# Colocar o site no mesmo padrão da clínica

**Requisitos · Substituição do site**

O que o site novo precisa ser, escrito do nosso lado do balcão: por que o antigo precisa sair,
o que entra no lugar e como vamos saber que ficou certo.

Preparado pela Clínica Aurélia, para o estúdio de design.
Versão 1.0, 28 de agosto de 2026.
Substitui o aureliaclinic.com, feito em 2016. Escopo: o site público.

3 idiomas · 6 páginas cada · 18 endereços · 70 requisitos

---

## 1. Por que o site atual precisa sair

Ele foi feito em 2016 para um consultório odontológico de duas salas. Hoje somos três estúdios e
doze profissionais em um prédio restaurado na Avenida Paulista, e cerca de um terço das pessoas
que nos ligam falam em inglês ou espanhol. O site não descreve quem somos e não faz a parte dele
do trabalho — é um cartão de visita desatualizado há seis anos.

Quatro resultados, na ordem em que nos importam:

- A recepção deve deixar de ser o primeiro passo. Os contatos devem chegar por escrito, com
  detalhe suficiente para propormos dois horários já na primeira resposta, em vez daquele vai e
  volta de ligações.
- Um paciente que fala inglês ou espanhol deve conseguir ler todas as páginas — tratamentos,
  preços, horários, como chegar — sem tradutor automático.
- Um paciente ansioso deve conseguir ver as salas, a equipe e como é a primeira consulta antes
  de se comprometer a entrar aqui.
- Quem procura um dentista perto do Trianon-Masp deve nos encontrar, com nosso horário e
  endereço corretos no resultado da busca.

---

## 2. De onde estamos partindo

O site antigo é o ponto de partida, não o modelo. Nada nele precisa ser preservado além do
endereço, do telefone e dos links que apontam para ele.

**Idiomas.** Só português, mais uma página em inglês desatualizada há três anos.
Substituído por três idiomas em paridade total, escolhidos automaticamente e memorizados.

**Estrutura.** Home, "Serviços" como uma lista única e interminável, Contato.
Substituída por uma página por estúdio, com seus próprios tratamentos, preços, percurso e
dúvidas.

**Agendamento.** Um telefone e um link mailto:.
Substituído por uma solicitação estruturada que chega à recepção e responde ao paciente.

**Preços.** "Consulte-nos".
Substituído por duração e preço publicados para cada tratamento que oferecemos.

**Celular.** Layout de desktop, com pinça para dar zoom.
Substituído por um site pensado primeiro para o celular — dois terços do nosso tráfego é mobile.

**Aparência.** Clip-art de banco de imagens, degradês azuis, um estetoscópio sobre um teclado.
Substituída pela nossa paleta de luz natural, nosso prédio, nossa gente.

**Busca.** Um único title para o site inteiro, sem marcação de endereço.
Substituída por metadados por página e por idioma, e dados estruturados de clínica.

**Manutenção.** Uma pilha de plugins que ninguém tinha coragem de atualizar.
Substituída por uma base atual, com suporte e um design system documentado.

---

## 3. Idiomas

Inegociável, e a única razão de estarmos fazendo isso agora. Um site pela metade traduzido é
pior que um site só em português.

**LNG-01 · Três idiomas, com o mesmo peso** — *Obrigatório*
Inglês, português do Brasil e espanhol. Todas as páginas, todas as seções, todos os botões.
*Aceito quando:* alguém consegue percorrer o site inteiro em espanhol sem encontrar uma palavra
em inglês.

**LNG-02 · Acertar sozinho e depois lembrar** — *Obrigatório*
O visitante cai no idioma dele, a partir do navegador. Se escolher outro, essa escolha vale
também na próxima visita.
*Aceito quando:* um navegador em espanhol abre o site em espanhol sem que ninguém peça, e uma
troca para português continua valendo uma semana depois.

**LNG-03 · Trocar de idioma mantém a página** — *Obrigatório*
Trocar o idioma na página de Estética mostra a página de Estética, não a home.

**LNG-04 · Texto sem tradução não chega ao site público** — *Obrigatório*
Não queremos descobrir uma tradução faltando por meio de um paciente.
*Aceito quando:* apagar uma linha do texto em espanhol impede a publicação do site inteiro.

**LNG-05 · Os buscadores entendem que as três versões são uma clínica só** — *Obrigatório*
Alternativas de idioma e endereço canônico em todas as páginas, para não competirmos com nós
mesmos.

**LNG-06 · Espanhol e português soam nativos, não traduzidos** — *Importante*
Revisados por um falante nativo que trabalhe em clínica. Preços, datas e formatos de telefone
locais para cada leitor.

**LNG-07 · A comunicação acompanha o site** — *Obrigatório*
No idioma em que o paciente escrever, chegam a confirmação de recebimento e todas as mensagens
seguintes.

---

## 4. Páginas e conteúdo

**STR-01 · Seis páginas por idioma** — *Obrigatório*
Home, Odontologia, Estética, Medicina, Sobre, Contato — dezoito endereços, cada um com link
próprio e compartilhável.

**STR-02 · A home conta a história inteira em uma rolagem** — *Obrigatório*
A maioria das pessoas nunca passa dela. Ela carrega os três estúdios, como é uma consulta, quem
somos, o que os pacientes dizem, o prédio, as dúvidas frequentes e um caminho para agendar.
*Aceito quando:* alguém que leu só a home consegue dizer nossas três especialidades, nosso
horário e quanto custa a primeira consulta.

**STR-03 · Cada estúdio ganha uma página de verdade** — *Obrigatório*
Não um parágrafo dentro de uma página de serviços compartilhada.
*Aceito quando:* cada página de estúdio traz sua própria lista de tratamentos com duração e
preço, o que diferencia aquele estúdio, as quatro etapas de um tratamento e as dúvidas que
aquele estúdio realmente recebe.

**STR-04 · A página Sobre precisa responder "dá para confiar nessa gente?"** — *Obrigatório*
Nossa história, no que acreditamos, nossos registros e acreditações, e a equipe com rostos e
especialidades.

**STR-05 · A página Contato precisa responder "como falo com vocês agora?"** — *Obrigatório*
O formulário, os horários incluindo a janela de urgência da manhã, recepção, WhatsApp, e-mail e
o telefone de emergência, e como achar a porta.

**STR-06 · Preço publicado para cada tratamento** — *Obrigatório*
Duração e preço, em reais, com a data a partir da qual valem. Foi o "Consulte-nos" que levou
gente a ligar para os concorrentes.

**STR-07 · As dúvidas que respondemos por telefone toda semana, respondidas na página** — *Obrigatório*
Idiomas, tempo de espera, custo da primeira consulta, convênios, medo de dentista, como agendar.
Na home, e de novo por estúdio quando a resposta for diferente.

**STR-08 · A localização leva à nossa portaria de verdade** — *Obrigatório*
Com a observação sobre estacionamento e a saída do metrô, e um link de rota que funcione no
celular, na calçada.

**STR-09 · Páginas de privacidade, termos e cookies** — *Obrigatório*
Páginas de verdade nos três idiomas, acessíveis pelo rodapé de todas as páginas.

**STR-10 · Um link quebrado não pode parecer uma clínica fechada** — *Importante*
A página inexistente aparece no idioma do visitante e o leva de volta para dentro do site.

**STR-11 · Informações sobre convênios e pagamento** — *Importante*
Com quais convênios trabalhamos e como funciona o reembolso — nossa segunda pergunta mais comum
por telefone.

---

## 5. Agendamento e contatos

Esta é a parte do projeto que precisa se pagar. Todo o resto é apresentação.

**BOOK-01 · Pedir exatamente o que a recepção precisa** — *Obrigatório*
Nome, e-mail, telefone ou WhatsApp, qual estúdio, período preferido e um campo livre de
descrição. Nada além disso — cada campo a mais nos custa contatos.

**BOOK-02 · Erros explicados no idioma do paciente, sem perder o que ele digitou** — *Obrigatório*

**BOOK-03 · As solicitações chegam à recepção** — *Obrigatório*
Na caixa compartilhada em até um minuto, com o idioma e o estúdio no assunto, e uma confirmação
automática de recebimento para o paciente.
*Aceito quando:* uma solicitação enviada de um celular no 4G aparece na caixa antes de o
paciente guardar o telefone.

**BOOK-04 · Nada se perde se a caixa de e-mail falhar** — *Obrigatório*
Solicitações armazenadas além de enviadas por e-mail, para que uma mensagem devolvida não vire
um paciente do qual nunca mais ouvimos falar.

**BOOK-05 · Consentimento registrado, não apenas exibido** — *Obrigatório*
O texto, a data e hora e a versão guardados junto à solicitação — é isso que teríamos de
apresentar se fôssemos questionados.

**BOOK-06 · Spam não chega à recepção** — *Obrigatório*
Limite de envios e uma armadilha invisível, não um quebra-cabeça para o paciente resolver.

**BOOK-07 · A página promete só o que o formulário faz** — *Obrigatório*
Se é uma solicitação respondida em até um dia útil, é isso que ela diz. Preferimos prometer
menos a ter a recepção pedindo desculpas pelo site.

**BOOK-08 · Um toque para ligar ou mandar mensagem pelo celular** — *Obrigatório*
Recepção, WhatsApp e o telefone de emergência como links ativos no site inteiro.

**BOOK-09 · A recepção vê as solicitações em um lugar só** — *Importante*
Uma lista simples com status, para que duas pessoas não respondam ao mesmo paciente e nenhum se
perca na segunda-feira.

**BOOK-10 · A caixa de newsletter inscreve alguém de verdade** — *Importante*
Confirmação em duas etapas, um e-mail por mês, cancelamento em um clique. Se não der para
construir agora, não aparece agora.

**BOOK-11 · Agendamento real na agenda da clínica** — *Desejável*
Queremos, mas depois. Preferimos um formulário de solicitação que funcione a um calendário
mostrando horários que não conseguimos honrar.

---

## 6. Aparência, sensação e imagens

O briefing em uma linha: o site deve dar a mesma sensação da sala de espera.

**DSN-01 · Luz natural, nunca o escuro de hospital** — *Obrigatório*
Superfícies em marfim quente e um tom de tinta ameixa. Sem fundos pretos, sem neon, nada do
visual de degradê azul hospitalar do site antigo.

**DSN-02 · Um sistema documentado, para que a décima página ainda pareça a primeira** — *Obrigatório*
Cor, tipografia, espaçamento e formas definidos uma vez e reutilizados. Vamos acrescentar
páginas ao longo dos anos e não queremos uma colcha de retalhos.

**DSN-03 · Seções distinguíveis de relance** — *Importante*
Rolar nossa home não pode parecer rolar um modelo de retângulos arredondados idênticos.

**DSN-04 · Nenhum logotipo de terceiros em lugar nenhum** — *Obrigatório*
Um site de clínica carrega o nosso nome e o de mais ninguém. Sem marcas de fornecedores ou de
tecnologia, e sem sugerir endossos que não temos.

**DSN-05 · O movimento é calmo e pode ser dispensado** — *Obrigatório*
Quem pediu movimento reduzido no aparelho recebe uma página parada. Qualquer vídeo pode ser
pausado.

**DSN-06 · Celular primeiro** — *Obrigatório*
Dois terços dos nossos visitantes estão no celular, muitas vezes com uma mão só, numa sala de
espera. Nada quebra até uma tela de 360 px.

**DSN-07 · A identidade também funciona fora da tela** — *Importante*
A marca se sustenta no tamanho de uma placa e a 20 px, e a paleta sobrevive à impressão dos
nossos cartões de encaminhamento.

**MED-01 · Um único registro fotográfico** — *Obrigatório*
Claro, quente, com luz natural. Sem tratamentos de cor misturados, sem foto de banco escura.

**MED-02 · Nosso prédio, nossas salas, nossa equipe** — *Obrigatório*
Fotografia produzida por nós, não de banco de imagens. Uma clínica que mostra a sala de espera
de outra pessoa está dizendo algo sobre si mesma.

**MED-03 · Nenhum rosto aparece duas vezes** — *Obrigatório*
Um mesmo retrato não pode servir a dois profissionais, nem a um profissional e a um paciente.
Isso derruba tudo o mais que está na página.

**MED-04 · Ninguém é fotografado sem autorização assinada** — *Obrigatório*
Equipe e pacientes igualmente. Nenhum paciente é identificável — em fotografia, em imagens de
antes e depois ou em um depoimento que cite um tratamento — sem consentimento por escrito.

**MED-05 · As imagens não fazem a página pular** — *Obrigatório*
As imagens seguram o próprio espaço e entram suavemente, tanto no wi-fi de hotel quanto na
fibra.

**MED-06 · Licenças em nome da clínica** — *Importante*
Cada fotografia, vídeo e fonte tipográfica, com a documentação entregue a nós.

---

## 7. Acessibilidade, velocidade e ser encontrado

**ACC-01 · WCAG 2.2 AA, verificado por quem não construiu o site** — *Obrigatório*
Se vamos afirmar o padrão na nossa própria página Sobre, precisa haver um laudo de auditoria por
trás.

**ACC-02 · Tudo operável pelo teclado** — *Obrigatório*
Menus, a lista de idiomas, as perguntas, o formulário — com um indicador de foco que dê para
enxergar.

**ACC-03 · Pular a navegação** — *Obrigatório*
Quem usa leitor de tela não deve ouvir o menu inteiro em cada página antes de chegar ao
conteúdo.

**ACC-04 · Todo controle que é só ícone se anuncia** — *Obrigatório*

**ACC-05 · Legível com zoom de 200 %** — *Importante*
Uma parcela grande dos nossos pacientes de medicina tem mais de sessenta anos.

**ACC-06 · Uma declaração de acessibilidade e um canal para relatar barreiras** — *Importante*
Exigido pelo padrão que afirmamos seguir, e é o certo a fazer de qualquer forma.

**PRF-01 · Utilizável no celular com dados móveis** — *Obrigatório*
Core Web Vitals no verde em um Android intermediário no 4G, medido no site publicado e não no
notebook de quem desenvolve.

**PRF-02 · Toda nota que publicamos é uma nota real** — *Obrigatório*
Se um número de desempenho ou de acessibilidade aparece no site, o relatório por trás dele é
gerado a cada versão.

**SEO-01 · Cada página e cada idioma com seu próprio título e descrição** — *Obrigatório*

**SEO-02 · Um sitemap cobrindo os dezoito endereços** — *Obrigatório*

**SEO-03 · Nosso endereço, telefone e horários legíveis pelos buscadores** — *Obrigatório*
Incluindo o horário de sábado, que o site antigo exibiu errado por dois anos.

**SEO-04 · Avaliações em estrelas somente a partir de avaliações verificadas** — *Obrigatório*
Se uma nota aparece nos resultados de busca, ela vem da nossa fonte de avaliações, ao vivo. Não
vamos publicar um número que não conseguimos rastrear até pacientes reais.

**SEO-05 · Redirecionamentos dos endereços antigos** — *Obrigatório*
As URLs antigas em português têm links apontando para elas e estão em material impresso. Elas
caem na página nova correspondente, não na página de erro.

**SEO-06 · Uma prévia decente quando a página é compartilhada** — *Importante*
As páginas dos estúdios merecem imagem própria, não a mesma para o site inteiro.

---

## 8. Veracidade, dados e a lei

Nossa exposição está aqui, não no design. As regras de publicidade médica e odontológica
brasileiras, e a LGPD, valem para cada frase e cada campo de formulário.

**LEG-01 · Toda afirmação factual é comprovável** — *Obrigatório*
Equipe, avaliações, tempos de espera, índices de recomendação, prazos de resultado, acreditações.
Se não conseguimos apresentar o documento por trás de um número, o número não sobe.

**LEG-02 · Os preços publicados batem com a nossa tabela vigente** — *Obrigatório*
Com um único lugar para atualizá-los, para que uma mudança de preço não vire um projeto de site.

**LEG-03 · Aprovação clínica e jurídica do texto dos tratamentos** — *Obrigatório*
Nossa diretora clínica e nosso advogado leem cada descrição de tratamento, preço e promessa de
resultado à luz das regras de publicidade do CFM e do CFO antes de ir ao ar.

**LEG-04 · Um aviso de privacidade cobrindo o formulário** — *Obrigatório*
O que coletamos, por quê, por quanto tempo guardamos, quem vê e como pedir a exclusão. Nos três
idiomas, com link em todas as páginas.

**LEG-05 · Consentimento antes de qualquer rastreamento** — *Obrigatório*
Nenhuma analytics, nenhum mapa incorporado, nenhum script de terceiros roda antes de o visitante
concordar — e recusar precisa funcionar de verdade.

**LEG-06 · Dados de contato em um lugar só, com prazo de retenção** — *Obrigatório*
Criptografados em trânsito e em repouso, acesso limitado à recepção e à diretora clínica,
excluídos em um prazo definido.

**LEG-07 · O site descreve apenas serviços que realmente existem** — *Obrigatório*
Sem portal, sem prontuário permanente, sem canal de mensagens na página até que exista por trás
da página.

---

## 9. Manter o site depois

**OPS-01 · Uma base que ainda consigamos atualizar daqui a três anos** — *Obrigatório*
O site anterior morreu de plugin. Poucas dependências, todas atuais, todas mantidas.

**OPS-02 · A recepção altera horários, preços, equipe e dúvidas sem um desenvolvedor** — *Obrigatório*
Corrigir o horário de fechamento de sábado não pode ser uma tarefa de desenvolvimento com
publicação.

**OPS-03 · Um endereço de prévia que revisamos antes de qualquer coisa ir ao ar** — *Obrigatório*

**OPS-04 · Tudo é nosso** — *Obrigatório*
Domínio, conta de hospedagem, repositório, licenças de fotografia e fontes em nome da clínica,
com repasse formal por escrito. Backups restauráveis em até um dia.

**OPS-05 · Alguém para chamar quando quebrar** — *Obrigatório*
Um contato nomeado, um prazo de resposta e o que está coberto — acordado por escrito antes do
lançamento.

**OPS-06 · Verificações automáticas a cada alteração** — *Importante*
No mínimo o build e a verificação de completude das traduções, rodando antes da publicação e não
depois.

**OPS-07 · Um número mensal que diga se isso funcionou** — *Importante*
Contatos por idioma, por estúdio e por página, para avaliarmos o investimento. Sujeito ao
LEG-05.

---

## 10. O que não estamos pedindo

- Prontuário, prescrição ou qualquer coisa que toque em sistemas clínicos.
- Pagamento ou sinal on-line — recebemos na recepção.
- Teleconsulta ou atendimento por vídeo.
- Loja, nem blog com uma frequência de publicação que não conseguimos manter.
- Uma segunda unidade. Se isso mudar, procuramos vocês.
- Aplicativo. Se o site funciona bem no celular, não precisamos de um.

---

## 11. O que "pronto" significa para nós

- Uma pessoa da recepção, com um celular na mão, encontra a página de Estética em espanhol, lê o
  preço de um tratamento, envia uma solicitação e vê ela chegar na caixa compartilhada.
- Toda afirmação do site público pode ser rastreada até um documento que temos em mãos.
- Existe um laudo de acessibilidade e um relatório de Core Web Vitals, ambos tirados do site
  publicado.
- As três versões de idioma estão completas, e a publicação falha se isso deixar de ser verdade.
- A diretora clínica leu e aprovou cada descrição de tratamento e cada preço.
- Os endereços antigos redirecionam, e nada que era encontrável antes se perdeu.
- Temos o domínio, a hospedagem, o repositório e as licenças de fotografia, e sabemos para quem
  ligar se o site sair do ar.

---

Os requisitos estão escritos na voz da clínica e numerados para referência na revisão.
**Obrigatório** — o site não é lançado sem isso. **Importante** — esperado, com prazo
negociável. **Desejável** — queremos, mais adiante.

Versão 1.0, 28 de agosto de 2026. A descrição do site antigo na seção 2 é contexto, não um
requisito.
