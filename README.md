# Assignment3
# Links de acesso:
Pagina Principal - <a href="http://hrtechrecruta.com.br/"> HRTech Recruta - Landing Page </a><br/>
Pagina Principal - <a href="http://hrtechrecruta.com.br/mvp/"> HRTech Recruta - MVP </a>
<br/>
Exportar arquivos `.csv` e monitorar leads - <a href="http://hrtechrecruta.com.br/export-data.html">Exportar Leads</a>

# Instruções de Build do Projeto
Baixar o repositório e ter o Angular Cli instalado, abrir o repositorio baixado e utilizar o comando ng serve com o seu console preferido.
<br/>
O Deploy foi feito no <a href="https://github.com/Dorns/skill-assessment/tree/gh-pages">GitHub Pages<a/> e o dominio utilizado foi comprado no Registro.br.

# Persistencia de dados
A persistencia de dados do formulário foi feita através do firebase, criando um JSON para armazenamento no banco, com um campo de id para tornar os campos únicos.
<br/>
A persistencia do resultado do teste também é gravado no firebase, gravando os dados do email do usuário logado e sua pontuação do teste.

# Frameworks
Utilizamos o Angular para o desenvolvimento do MVP, juntamente com o Bootstrap para o layout.
<br/>
Para a Landing Page utilizamos apenas o JavaScript para uma apresentação visual, fora isso, utilizamos HTML, CSS e JavaScript "Vanilla".

# Estratégia de Desenvolvimento
# <a href="https://github.com/Dorns/">Felipe</a>
Ajustes da Landing page para a nova identidade visual e desenvolvimento do MVP.

# Teste Skill Assessment
O teste consiste em 10 questões de multipla escolha, cada resposta contendo um peso de 1, 2 ou 3, podendo chegar ao máximo de 30 pontos.
<br/>
O cáculo de proeficiencia do candidato foi feito da seguinte forma:
<br/>
Como mencionado, cada questão contém um peso, sendo, 1, 2 ou 3. Esses pontos são somados ao final do teste de acordo com o peso da resposta.
<br/>
Para o nivelamento, utilizamos:
<br/>
<ul>
<li>0-20: Nível Rookie (Júnior);</li>
<li>21-26: Nível Brave (Pleno);</li>
<li>27-30: Nível Handy (Sênior).</li>
</ul>
