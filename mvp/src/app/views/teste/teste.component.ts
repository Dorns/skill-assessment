import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { Router, Params } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})


export class TesteComponent implements OnInit{

  curruser: string = '';
  junior: Element[];
  pleno: Element[];
  senior: Element[];

  constructor(
    private http: HttpClient,
    private router: Router,
    public db: AngularFirestore,
    private route: ActivatedRoute,
    private location : Location,
    public authService: AuthService,
    private _firebaseAuth: AngularFireAuth
  ) {

    this._firebaseAuth.authState.subscribe(user=>{
      if(user)
        this.curruser = user.email;
    })
  }

  perguntas = 
  [
    {
      id: '1',
      pergunta: 'Qual é a importância do Blog Institucional dentro do SEO?',
      alternativas : [
        { resposta: 'Criar autoridade em motores de busca com conteúdo relevante para o usuário.', value: 3, class:'sr'},
        { resposta: 'Melhorar a visibilidade da empresa frente a parceiros.', value: 1, class:'jr'},
        { resposta: 'Criar conteúdo relevante com links externos.', value: 2, class:'pl'}

      ]
    },
    {
      id: '2',
      pergunta: 'Qual você considera a melhor forma de utilização de keywords dentro de um blogpost?',
      alternativas : [
        { resposta: 'Utilizar no título da página e apenas uma vez no corpo do texto.', value: 2, class:'pl'},
        { resposta: 'Aplicar em todas as seções localizáveis pelos mecanismos de buscas e com volume relevante no corpo do texto.', value: 3, class:'sr'},
        { resposta: 'Repetir a palavra-chave o maior número de vezes possível para ter recorrência na página.', value: 1, class:'jr'}
      ]
    },
    {
      id: '3',
      pergunta: 'Para que servem o SEO e SEM, respectivamente?',
      alternativas : [
        { resposta: 'Melhorar desempenho em redes sociais e Melhorar rankeamento nos mecanismos de busca.', value: 1, class:'jr'},
        { resposta: 'Melhorar rankeamento nos mecanismos de busca e Melhorar desempenho em redes sociais.', value: 2, class:'pl'},
        { resposta: 'Melhorar desempenho em mecanismos de busca e boas práticas para buscas pagas.', value: 3, class:'sr'}
      ]
    },
    {
      id: '4',
      pergunta: 'Dentre as opções abaixo quais são os canais de aquisições?',
      alternativas : [
        { resposta: 'SEO, SEM e Social Ads.', value: 3, class:'sr'},
        { resposta: 'SEO, Outbound e Inbound.', value: 2, class:'pl'},
        { resposta: 'Social Ads, SEM, Outbound.', value: 1, class:'jr'}
      ]
    },
    {
      id: '5',
      pergunta: 'Quais são os objetivos sugeridos pelo Facebook na tela de criação de campanha?',
      alternativas : [
        { resposta: 'Alcance, Consideração e Conversão.', value: 2, class:'pl'},
        { resposta: 'Reconhecimento, Consideração e Conversão.', value: 3, class:'sr'},
        { resposta: 'Alcance, Conversão e Credibilidade.', value: 1, class:'jr'}
      ]
    },
    {
      id: '6',
      pergunta: 'Se o CPC de uma campanha no google Adwords está alta, quais métricas você avaliaria?',
      alternativas : [
        { resposta: 'CTR, Índice de qualidade, Formato da palavra.', value: 3, class:'sr'},
        { resposta: 'Formato da palavra, Numero de impressões, Pesquisa com o usuário', value: 1, class:'jr'},
        { resposta: 'Índice de qualidade, CTR, Numero de impressões.', value: 2, class:'pl'}
      ]
    },
    {
      id: '7',
      pergunta: 'Qual ferramenta do Google Analitycs permite visualizar o hábito de navegação dos usuários na página?',
      alternativas : [
        { resposta: 'Fluxo de Comportamento.', value: 3, class:'sr'},
        { resposta: 'Fluxo de Navegação.', value: 2, class:'pl'},
        { resposta: 'Perfil de Tráfego.', value: 1, class:'jr'}
      ]
    },
    {
      id: '8',
      pergunta: 'Quais são as etapas principais para o desenvolvimento de um processo de Growth?',
      alternativas : [
        { resposta: 'Ideação, Prototipação, Brainstorming, Testar.', value: 2, class:'pl'},
        { resposta: 'Desenvolver ideias, Brainstorming, Prototipação, testar e analisar a ideia.', value: 1, class:'jr'},
        { resposta: 'Brainstorming, priorização, desenvolver a ideia, testar a ideia e analisar a ideia.', value: 3, class:'sr'}
      ]
    },
    {
      id: '9',
      pergunta: 'Em qual etapa do processo de aquisição e conversão está inserido o Growth Hacker?',
      alternativas : [
        { resposta: 'Planejamento, deixando as etapas de execução para equipes operacionais.', value: 1, class:'jr'},
        { resposta: 'Somente operação, trabalhando com briefing pré-definido por outras equipes.', value: 2, class:'pl'},
        { resposta: 'Em todas as etapas, desempenhando maior controle e participação nos processos.', value: 3, class:'sr'}
      ]
    },
    {
      id: '10',
      pergunta: 'Há quanto tempo você trabalha com Mkt Digital?',
      alternativas : [
        { resposta: 'Até 1 ano.', value: 1, class:'jr'},
        { resposta: '1 a 3 anos.', value: 2, class:'pl'},
        { resposta: 'Acima de 3 anos.', value: 3, class:'sr'}
      ]
    }
  ];

  ngOnInit(): void {
  }

  pontos() {
    this.junior = [].slice.call(document.querySelectorAll(".jr:checked"));
    this.pleno = [].slice.call(document.querySelectorAll(".pl:checked"));
    this.senior = [].slice.call(document.querySelectorAll(".sr:checked"));
    let resultado = this.junior.length + (this.pleno.length * 2) + (this.senior.length * 3);
    const req = this.http.post(`${environment.firebase.databaseURL}/resultado.json`, {
      resultado:resultado,
      user: this.curruser
    })
      .subscribe(
        res => {
          console.log(res);
          if (resultado >= 0 && resultado <= 15){
            this.router.navigate(['/thank-you-jr']);
          }else if (resultado >= 16 && resultado <= 26) {
            this.router.navigate(['/thank-you-pl']);
          }else{
            this.router.navigate(['/thank-you-sr']);
          }
        },
        err => {
          console.log("Error occured");
        }
      );

  }

}
