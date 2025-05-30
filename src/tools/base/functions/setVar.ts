
Muad'Dib
muadibatreides
Ausente

Carlos Alberto — 26/05/2025 12:22
vc nao vai pegar de variavel
vai pegar de argumento da lista
Muad'Dib — 26/05/2025 12:22
esse n é na lista
Carlos Alberto — 26/05/2025 12:22
sim
Muad'Dib — 26/05/2025 12:22
n to falando do placar n
pega igual pega da lista?
com arg?
Carlos Alberto — 26/05/2025 12:23
a vc ta falando dos totais ne
Muad'Dib — 26/05/2025 12:23
isso
Carlos Alberto — 26/05/2025 12:23
a blz
dai é com var mesmo
onde esta?
Muad'Dib — 26/05/2025 12:25
preview box
Imagem
Carlos Alberto — 26/05/2025 12:27
é o previewbox?
Muad'Dib — 26/05/2025 12:30
isso
dentro dele coloquei um texto e tava funcionando
coloquei outro pra ler var e n aparece a view
Carlos Alberto — 26/05/2025 12:34
acho que deu problema ao colocar duas strings dentro de um unico Text
isso eu vou ter que arrumar
então coloca cada um num texto
alias
eu ja coloquei
Muad'Dib — 26/05/2025 12:35
deu certo?
Carlos Alberto — 26/05/2025 12:35
Imagem
Muad'Dib — 26/05/2025 12:35
vou recarregar pra ver
Carlos Alberto — 26/05/2025 12:35
coloca os outros
Muad'Dib — 26/05/2025 12:35
blz
Carlos Alberto — 26/05/2025 12:45
eu vou almoçar
eu ajustei os logos dos times
Muad'Dib — 26/05/2025 12:45
blz, até agora td dando certo
Carlos Alberto — 26/05/2025 12:47
legal
daí 2h30 agente entra
pra testar
e definir o rumo da live
Muad'Dib — 26/05/2025 12:48
blz
Muad'Dib — 26/05/2025 13:32
deixei o botão de testes com opacidade 0, mas tá lá no mesmo lugar se precisar
agora indo pro almoço, 14:30 to de volta
Muad'Dib — 26/05/2025 14:30
de volta
Carlos Alberto — 26/05/2025 14:39
Opa
bora la
Carlos Alberto — 26/05/2025 15:16
Título: Bolão da Final da Champions League com Firebase Firestore: Guia Completo!
Prepare-se para a final da Champions League e eleve a sua experiência com um bolão personalizado, construído utilizando o poder do Firebase Firestore! Neste vídeo, vamos guiá-lo passo a passo na criação de um bolão interativo e dinâmico, desde a configuração inicial do Firebase até a implementação das funcionalidades essenciais para seus participantes darem seus palpites e acompanharem a classificação em tempo real.

Não se esqueça de:

Deixar seu like no vídeo.,
Se inscrever no canal para mais tutoriais e dicas.,
Compartilhar o vídeo com seus amigos que também são fãs de futebol.,
Deixar um comentário com suas dúvidas e sugestões.,
#Firebase#Firestore#ChampionsLeague#Bolão#Futebol#DesenvolvimentoWeb#JavaScript#Tutorial#Programação#FinalChampions#GoogleCloud#Database#RealtimeDatabase#WebDev#Coding#Campeões#Apostasonline#Palpites#BolaoOnline#Futbol#UEFAChampionsLeague
caiu ai?
Muad'Dib — 26/05/2025 15:25
o microfone n tá funcionando, tá pegando só do notebook
Carlos Alberto — 26/05/2025 15:42
Bora criar um app para o bolão da final PSG x Inter usando o firebase? Aqui vamos ter contador de placar, nome do user e ranking dos palpites!
Muad'Dib — 26/05/2025 16:34
@Leandro @Carlos Alberto apareceu ja nas recomendações pra mim
https://www.youtube.com/watch?v=UF49EouUuVc
YouTube
Flaxboll Brasil
Bolão da Final da Champions League com Firebase Firestore: Guia Co...
Imagem
Leandro — 26/05/2025 16:35
legal
Carlos Alberto — 26/05/2025 16:35
legal
é bom dar umas curtidas tb
Muad'Dib — 26/05/2025 16:36
fazer uns fakes e deixar uns comentários hehe
ah sim, no momento o youtube tá usando comentários pra difusão, curtida e visualizações tão abaixo nas prioridades
lembrar de sempre pedir por povo comentar, tentar levantar alguma pergunta
Carlos Alberto — 26/05/2025 16:39
legal
Carlos Alberto — 11:39
Imagem
Muad'Dib — 11:41
@Carlos Alberto 

coloca pra Morfos por favor, assim n precisa exportar capsulas depois
Imagem
Carlos Alberto — 11:47
Faz ai como usuário Fernandes mesmo
agente vai fazer no mesmo esquema do ultimo video
vai usar o mesmo projeto na live
Muad'Dib — 11:47
blz
Carlos Alberto — 11:48
eu vou criar o custom pra colocar no botão e calcular
Carlos Alberto — 12:00
O Juan deu ideia mas eu vou ter q entender como fazer esse calculo
não sei se vou conseguir fazer a tempo mas vou tentar
se eu nao conseguir vamos pro plano B pra LIVE segunda
mas de qq forma deixa os formularios prontos q vai ser usado
Muad'Dib — 12:00
blz
Muad'Dib — 12:23
tem aí as variáveis especificas pra usar ou crio aqui? pros inputs
Carlos Alberto — 12:38
vc ja colocou?
se sim me passa
Muad'Dib — 12:38
ainda não, to fazendo os outros campos
deixei variavel pra depois
Carlos Alberto — 12:39
Eu usei assim aqui

all.forms.form1.rendTrib
all.forms.form1.desMed
all.forms.form1.edu
all.forms.form1.prev
all.forms.form1.irRet
all.forms.form1.dep
Muad'Dib — 12:39
blz
vou seguir esses
Muad'Dib — 13:06
tá dando um problema com os inputs
Quando digito em um sai nos outros tbm, embora a setVar pareça estar funcionando certinho
Imagem
Carlos Alberto — 13:33
precisa colocar o path
no TextInput
nao to falando do setVar
esse
Imagem
Fernandes.. cria tb uma variavel com esse valor por favor:

const tabelaIR = [
  { faixa: 1, limite: 2259.20, aliquota: 0, deducao: 0 },
  { faixa: 2, limite: 3393.80, aliquota: 7.5, deducao: 169.44 },
  { faixa: 3, limite: 4500.00, aliquota: 15, deducao: 381.44 },
  { faixa: 4, limite: 5599.99, aliquota: 22.5, deducao: 662.77 },
  { faixa: 5, limite: Infinity, aliquota: 27.5, deducao: 896.00 }
];
Carlos Alberto — 14:22
Eu ja tenho calculo
| Campo                | Valor       |
| -------------------- | ----------- |
| Rendimentos      | R$ 100.000 |
| Despesas Médicas | R$ 5.000   |
| Educação         | R$ 3.500   |
| Previdência      | R$ 7.000   |
| IR Retido        | R$ 2.000   |
| Dependentes      | 2           |
--------------------------------------------------------------------
| Campo                | Valor      |
| -------------------- | ---------- |
| Rendimentos      | R$ 60.000 |
| Despesas Médicas | R$ 2.000  |
| Educação         | R$ 1.000  |
| Previdência      | R$ 5.000  |
| IR Retido        | R$ 10.000 |
| Dependentes      | 1          |
Quando chegar do almoço me avisa por favor 
Muad'Dib — 14:26
voltando
Carlos Alberto — 14:27
opa
Muad'Dib — 14:27
vou ver aqui o path
Carlos Alberto — 14:27
como ta ai
Muad'Dib — 14:29
na primeira letra que digito dá isso
Imagem
Carlos Alberto — 14:30
então.. acho que o setVar do codigo modelo ta com bug pra campos de texto.. vou te passar o codigo:
Muad'Dib — 14:30
blz
Carlos Alberto — 14:30
acha esse cara
Imagem
e coloca esse codigo:
// ---------- import Local Tools
import { setData, getVarValue } from '../project';

export const css1 =
  'color: yellow; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
Expandir
message.txt
5 KB
﻿
// ---------- import Local Tools
import { setData, getVarValue } from '../project';

export const css1 =
  'color: yellow; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: green; background-color: black; font-size: 10px; padding: 2px 6px; border-radius: 3px';

export const css3 =
  'color: yellow; background-color: red; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css4 =
  'color: yellow; background-color: darkred; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops_setVar = { args: any; pass: { keyPath: string[]; value: any } };

export const setVar = (props: Tprops_setVar) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { keyPath, value } = pass;
  console.log({ value });

  // ---------- join String
  const url = keyPath.reduce((prev, curr) => prev + curr, '');

  const typeValue = testArgsVars(value);

  // -------------------------------
  // ------------- IF is FREE VALUE
  // -------------------------------
  if (typeValue === 'free') {
    // --------- set Consoles System
    console.log('%csetVar', css1);
    console.log('path:', url);
    console.log('type:', typeValue);
    console.table('value:', value[0]);

    const isFunction = typeof value[0];
    if (isFunction) {
      return setData({ path: url, value: value[0](args) });
    };

    return setData({ path: url, value: value[0] });
  }

  // -----------------------------------
  // ------------ IF is ARG or VAR VALUE
  // -----------------------------------
  value = getCondValue(typeValue, value, args);
  // value = updatedValue;

  // --------- DEPURAR ERRO
  if (value === undefined) {
    // --------- set Consoles System
    console.log('%csetVar', css3);
    console.log('%csetVar path', css4, url);
    console.log('%csetVar type', css4, typeValue);
    console.log('%csetVar value', css4, 'o valor de value Ã© ' + value);
  }

  // --------- DEPURAR OK
  if (value !== undefined) {
    // --------- set Consoles System
    console.log('%csetVar', css1);
    console.log('path:', url);
    console.log('type:', typeValue);
    console.table('value:', value);

    return setData({ path: url, value: value });
  }
};

const findFlatItem = obj => {
  if (typeof obj !== 'object' || obj === null) return null;

  if ('item' in obj) return obj.item;

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      for (const element of obj[key]) {
        const found = findFlatItem(element);
        if (found) return found;
      }
    } else if (typeof obj[key] === 'object') {
      const found = findFlatItem(obj[key]);
      if (found) return found;
    }
  }

  return null;
};

const testArgsVars = (value: string[]) => {
  let typeValue: 'free' | 'var' | 'arg' = 'free';

  const joinedChild = value.join();
  if (joinedChild.includes('$var_')) typeValue = 'var';
  if (joinedChild.includes('$arg_')) typeValue = 'arg';

  return typeValue;
};

const getCondValue = (typeValue, value, args) => {
  let updatedValue = undefined;
  console.log({ value });

  const joinedChild = value.join();
  if (joinedChild.includes('$var_')) typeValue = 'var';
  if (joinedChild.includes('$arg_')) typeValue = 'arg';

  // --------------------------
  // ------- Tratamento de ARGs
  // --------------------------
  if (typeValue === 'arg') {
    const key = joinedChild.split('_')[1];

    // ---- Para Callback Functions
    // ---- Ex. onChangeText do TextInput
    const condInput = key === 'callback';
    if (condInput) {
      updatedValue = args[0];
    }

    // ---- Para Listas
    // ---- Passa todo objeto 'item'
    const condFull = key === 'full';
    if (condFull) {
      updatedValue = findFlatItem(args);
    }

    // ---- Para Listas
    // ---- Seleciona um campo dentro de 'item'
    const foundItem = findFlatItem(args);
    if (foundItem && foundItem[key]) {
      updatedValue = foundItem[key];
    }

    if (updatedValue === undefined) console.log('ARG ERROR', { updatedValue });
  }

  // --------------------------
  // ------- Tratamento de VARs
  // --------------------------
  if (typeValue === 'var') {
    console.log({ joinedChild });
    const [condVar, varValue] = getVarValue(joinedChild, 'noComponent');
    if (condVar) updatedValue = varValue;
    if (!condVar) console.log('VAR ERROR', { updatedValue });
  }

  return updatedValue;
};
message.txt
5 KB
