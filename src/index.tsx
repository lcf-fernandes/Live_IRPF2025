

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'home';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"home",

          styles:[`{
backgroundColor: "#000",
alignItems: "center",
justifyContent: "center",
width: "100%",
height: "100%",
}`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
fontSize: "12px",
}`
          ],

          children: [
            `Rendimentos Tributáveis: R$`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
color: "#EEE",
fontSize: "12px",
}`],

          path: [`all.forms.form1.rendTrib`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.forms.form1.rendTrib`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
fontSize: "12px",
}`
          ],

          children: [
            `Despesas Médicas: R$`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
color: "#EEE",
fontSize: "12px",
}`],

          path: [`all.forms.form1.desMed`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.forms.form1.desMed`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
fontSize: "12px",
}`
          ],

          children: [
            `Educação: R$`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
color: "#EEE",
fontSize: "12px",
}`],

          path: [`all.forms.form1.edu`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.forms.form1.edu`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
fontSize: "12px",
}`
          ],

          children: [
            `Previdência Oficial: R$`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
color: "#EEE",
fontSize: "12px",
}`],

          path: [`all.forms.form1.prev`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.forms.form1.prev`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
fontSize: "12px",
}`
          ],

          children: [
            `IR Retido: R$`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
color: "#EEE",
fontSize: "12px",
}`],

          path: [`all.forms.form1.irRet`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.forms.form1.irRet`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
fontSize: "12px",
}`
          ],

          children: [
            `Dependentes:  `
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
color: "#EEE",
fontSize: "12px",
}`],

          path: [`all.forms.form1.dep`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.forms.form1.dep`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '20px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: "center",
justifyContent: "center",
width: "100px",
borderWidth: "1px",
borderColor: "#EEE",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const path1 = "all.forms.form1";
  const path2 = "sc.A1.results";
  const allVal = tools.getCtData(path1);

  const { rendTrib, desMed, irRet, edu, prev, dep } = allVal;
console.log({irRet});

  const toNum = (str) => parseFloat((str || "0").replace(",", "."));

  const totalDep = toNum(dep) * 2400;
  const totalDed = toNum(desMed) + toNum(edu) + toNum(prev) + totalDep;
  const calcBase = Math.max(0, toNum(rendTrib) - totalDed);

  const tabelaIR = tools.getCtData('all.tabelaIR');
  const faixaEncontrada = tabelaIR.find(faixa => calcBase <= faixa.limite);

const irDevido = Math.max(0, (calcBase * (faixaEncontrada.aliquota / 100)) - faixaEncontrada.deducao);

const resultado = toNum(irRet) - irDevido;

let finalResult;
if (resultado >= 0) {
const res1 = "Restituição: R$" + resultado.toFixed(2);
  console.log( res1 );
finalResult = res1;
} else {
  const res2 = "Imposto a pagar: R$" +  Math.abs(resultado).toFixed(2);
  console.log( res2 );
finalResult = res2;
}
console.log({finalResult});

 const pass1 = { keyPath: [path2], value: [finalResult] };
 tools.functions.setVar({ args: '', pass: pass1 });

tools.functions.goTo('scResultados');
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
}`
          ],

          children: [
            `Calcular`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"scResultados",

          styles:[`{
backgroundColor: "#000",
alignItems: "center",
justifyContent: "center",
width: "100%",
height: "100%",
}`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "100%",
flexDirection: "row",
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
fontSize: "12px",
}`
          ],

          children: [
            `Resultado: `
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: "#EEE",
fontSize: "12px",
}`
          ],

          children: [
            `$var_sc.A1.results`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#fff", 'secondary': "#0064fe" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1", check: false},{name: "Task 2", check: false}] } 
, 
'name': "Name:", 
'dataToSet': {name: "Carlos", phone: "1111"}, 
'toggles': { 
'box1': true, 'checkbox1': false } 
, 
'firebaseConfig': {
  apiKey: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI",
  authDomain: "devs-tests-95208.firebaseapp.com",
  projectId: "devs-tests-95208",
  storageBucket: "devs-tests-95208.appspot.com",
  messagingSenderId: "750912250366",
  appId: "1:750912250366:web:4629eac789a718a74220af"
}, 'tabelaIR': [
  { faixa: 1, limite: 2259.20, aliquota: 0, deducao: 0 },
  { faixa: 2, limite: 3393.80, aliquota: 7.5, deducao: 169.44 },
  { faixa: 3, limite: 4500.00, aliquota: 15, deducao: 381.44 },
  { faixa: 4, limite: 5599.99, aliquota: 22.5, deducao: 662.77 },
  { faixa: 5, limite: Infinity, aliquota: 27.5, deducao: 896.00 }
] } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            async (...args) =>
  functions.firebase.fireInit({ args, pass:{
   fbConfig: `all.firebaseConfig`,

        }})
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
