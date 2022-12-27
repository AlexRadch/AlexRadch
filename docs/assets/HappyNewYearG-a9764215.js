import{V as r}from"./vue3-lottie.es-c3e7eb67.js";import{H as f,S as _,F as u,a as m,R as y,W as h,D as c,C as D,b as B,A as S,L as H,M as g,c as b,B as d,d as O}from"./Disco_Crash--New Year-1090425c.js";import{_ as A,M as w,p as J,q as E,N as t,V as n,Z as i,$ as s,T as l,w as v}from"./framework-96b046e1.js";var o;const C={name:"HappyNewYearG",components:{Vue3Lottie:r},data(){return{HeartFlyPartical_Json:f,SnowFlakes_Json:_,FirePlace_Json:u,SantaSleigh_Json:m,RocketLaunches_Json:y,WebDev_Json:h,DrawingWoman_Json:c,ChristmasTree_Json:D,CatLoader_Json:B,AnimationSuccessBack_Json:S,Lights_Json:H,MerryChristmas_Json:g,RabbitRunning_Json:b,BellOfHappiness_Json:d,BellOfHappiness_playState:!1,DayEntered:!0,NightEntered:!1}},methods:{bellOfHappiness_OnClick(){this.BellOfHappiness_playState=!this.BellOfHappiness_playState,this.BellOfHappiness_playState?o.play():o.pause()},night_BeforeEnter(){this.NightEntered=!1,this.DayEntered=!1},night_AfterEnter(){this.NightEntered=!0},night_BeforeLeave(){this.NightEntered=!1,this.DayEntered=!1},night_AfterLeave(){this.DayEntered=!0}},mounted(){o=new Audio(O),o.loop=!0,this.BellOfHappiness_playState&&o.play()},unmounted(){o.pause(),o=null}};function L(k,N,F,R,e,p){const a=w("Vue3Lottie");return J(),E("div",{ref:"scene",style:{position:"relative","box-sizing":"border-box",margin:"0px",width:"calc(100% * 1.2)",padding:"calc(33% * 1.2)",overflow:"hidden"},class:v({night:e.BellOfHappiness_playState,day:!e.BellOfHappiness_playState})},[t(l,{persisted:""},{default:n(()=>[i(t(a,{ref:"HeartFlyPartical",animationData:e.HeartFlyPartical_Json,style:{position:"absolute",width:"100%",left:"0%",top:"0%"},speed:.2,pauseAnimation:e.BellOfHappiness_playState&&e.NightEntered},null,8,["animationData","speed","pauseAnimation"]),[[s,!e.BellOfHappiness_playState]])]),_:1}),t(l,{persisted:""},{default:n(()=>[i(t(a,{ref:"SnowFlakes",animationData:e.SnowFlakes_Json,style:{position:"absolute",width:"125%",left:"0%",top:"0%"},pauseAnimation:!e.BellOfHappiness_playState&&e.DayEntered},null,8,["animationData","pauseAnimation"]),[[s,e.BellOfHappiness_playState]])]),_:1}),t(a,{ref:"FirePlace",animationData:e.FirePlace_Json,style:{position:"absolute",width:"40%",left:"-3%",top:"-10%"}},null,8,["animationData"]),t(a,{ref:"SantaSleigh",animationData:e.SantaSleigh_Json,style:{position:"absolute",width:"200%",left:"0%",top:"-55%"},speed:.5},null,8,["animationData","speed"]),t(l,{persisted:""},{default:n(()=>[i(t(a,{ref:"RocketLaunches",animationData:e.RocketLaunches_Json,style:{position:"absolute",width:"50%",right:"-14%",top:"0%"},pauseAnimation:!e.BellOfHappiness_playState&&e.DayEntered},null,8,["animationData","pauseAnimation"]),[[s,e.BellOfHappiness_playState]])]),_:1}),t(l,{persisted:""},{default:n(()=>[i(t(a,{ref:"WebDev",animationData:e.WebDev_Json,style:{position:"absolute",width:"50%",left:"0%",bottom:"0%"},direction:"alternate",pauseAnimation:e.BellOfHappiness_playState&&e.NightEntered},null,8,["animationData","pauseAnimation"]),[[s,!e.BellOfHappiness_playState]])]),_:1}),t(l,{persisted:""},{default:n(()=>[i(t(a,{ref:"DrawingWoman",animationData:e.DrawingWoman_Json,style:{position:"absolute",width:"40%",left:"40%",top:"0%"},pauseAnimation:e.BellOfHappiness_playState&&e.NightEntered},null,8,["animationData","pauseAnimation"]),[[s,!e.BellOfHappiness_playState]])]),_:1}),t(a,{ref:"ChristmasTree",animationData:e.ChristmasTree_Json,style:{position:"absolute",width:"60%",right:"-7%",bottom:"-8%"},direction:"alternate"},null,8,["animationData"]),t(l,{persisted:""},{default:n(()=>[i(t(a,{ref:"CatLoader",animationData:e.CatLoader_Json,style:{position:"absolute",width:"20%",right:"-3%",bottom:"-6%"},pauseAnimation:e.BellOfHappiness_playState&&e.NightEntered},null,8,["animationData","pauseAnimation"]),[[s,!e.BellOfHappiness_playState]])]),_:1}),t(l,{persisted:""},{default:n(()=>[i(t(a,{ref:"AnimationSuccessBack",animationData:e.AnimationSuccessBack_Json,style:{position:"absolute",width:"70%",left:"0%",bottom:"-5%"},pauseAnimation:!e.BellOfHappiness_playState&&e.DayEntered},null,8,["animationData","pauseAnimation"]),[[s,e.BellOfHappiness_playState]])]),_:1}),t(a,{ref:"Lights",animationData:e.Lights_Json,style:{position:"absolute",width:"50%",left:"-2%",top:"-30%"}},null,8,["animationData"]),t(l,{persisted:""},{default:n(()=>[i(t(a,{ref:"MerryChristmas",animationData:e.MerryChristmas_Json,style:{position:"absolute",width:"60%",left:"40%",top:"-30%"},pauseAnimation:!e.BellOfHappiness_playState&&e.DayEntered},null,8,["animationData","pauseAnimation"]),[[s,e.BellOfHappiness_playState]])]),_:1}),t(l,{onBeforeEnter:p.night_BeforeEnter,onAfterEnter:p.night_AfterEnter,onAfterLeave:p.night_AfterLeave,persisted:""},{default:n(()=>[i(t(a,{ref:"RabbitRunning",animationData:e.RabbitRunning_Json,style:{position:"absolute",width:"30%",left:"-6%",bottom:"-10%"},pauseAnimation:!e.BellOfHappiness_playState&&e.DayEntered},null,8,["animationData","pauseAnimation"]),[[s,e.BellOfHappiness_playState]])]),_:1},8,["onBeforeEnter","onAfterEnter","onAfterLeave"]),t(a,{ref:"BellOfHappiness",animationData:e.BellOfHappiness_Json,style:{position:"absolute",width:"20%",top:"-5%",right:"-3%"},autoPlay:e.BellOfHappiness_playState,pauseAnimation:!e.BellOfHappiness_playState,onClick:p.bellOfHappiness_OnClick},null,8,["animationData","autoPlay","pauseAnimation","onClick"])],2)}const V=A(C,[["render",L],["__file","HappyNewYearG.vue"]]);export{V as default};
