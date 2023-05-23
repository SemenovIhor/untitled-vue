(function(){"use strict";var e={759:function(e,t,i){var a=i(963),r=i(252);const n={id:"app"},o={class:"content"};function s(e,t,i,a,s,u){const m=(0,r.up)("HeaderApp"),l=(0,r.up)("router-view"),c=(0,r.up)("FooterApp");return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",o,[(0,r.Wm)(m),(0,r.Wm)(l)]),(0,r.Wm)(c)])}const u={class:"footer"};function m(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("footer",u)}var l={name:"FooterApp"},c=i(744);const p=(0,c.Z)(l,[["render",m],["__scopeId","data-v-97b73910"]]);var d=p;const g={class:"header"};function v(e,t,i,a,n,o){const s=(0,r.up)("LogoHeader"),u=(0,r.up)("router-link"),m=(0,r.up)("ContainerList");return(0,r.wg)(),(0,r.iD)("header",g,[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{to:"/untitled-vue/"},{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1})])),_:1})])}var f=i.p+"img/logo.60acc668.svg";const h={src:f,alt:"logo"};function w(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("img",h)}var _={name:"LogoHeader"};const b=(0,c.Z)(_,[["render",w]]);var q=b;const y={class:"container"};function D(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("div",y,[(0,r.WI)(e.$slots,"default",{},(()=>[(0,r.Uk)("Default value")]),!0)])}var A={name:"ContainerList"};const I=(0,c.Z)(A,[["render",D],["__scopeId","data-v-448f9c02"]]);var L=I,S={name:"HeaderApp",components:{ContainerList:L,LogoHeader:q}};const C=(0,c.Z)(S,[["render",v],["__scopeId","data-v-3cfe3154"]]);var R=C,j={name:"App",components:{FooterApp:d,HeaderApp:R}};const W=(0,c.Z)(j,[["render",s],["__scopeId","data-v-5cf3ab21"]]);var U=W;const O={class:"homepage"},k={key:0};function x(e,t,i,a,n,o){const s=(0,r.up)("ApartmentFilterForm"),u=(0,r.up)("ContainerList"),m=(0,r.up)("ApartmentsItem"),l=(0,r.up)("ApartmentsList");return(0,r.wg)(),(0,r.iD)("main",O,[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,{class:"apartments-filter",onSubmit:o.filter},null,8,["onSubmit"])])),_:1}),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[o.filteredApartments.length?((0,r.wg)(),(0,r.j4)(l,{key:1,items:o.filteredApartments},{apartment:(0,r.w5)((({apartment:e})=>[((0,r.wg)(),(0,r.j4)(m,{key:e.id,id:e.id,descr:e.descr,rating:e.rating,imgUrl:e.imgUrl,price:e.price},null,8,["id","descr","rating","imgUrl","price"]))])),_:1},8,["items"])):((0,r.wg)(),(0,r.iD)("p",k,"Not found"))])),_:1})])}var Z=i(577);const H={class:"apartments-item"},M={class:"apartments-item__inner"},P=["src"],N={class:"apartments-item__content"},V={class:"apartments-item__description"},F={class:"apartments-item__rating"},E={class:"apartments-item__price"};function K(e,t,i,a,n,o){const s=(0,r.up)("StarRating"),u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",H,[(0,r._)("div",M,[(0,r._)("img",{src:`${n.publicPath}`+i.imgUrl,alt:"",class:"apartments-item__photo"},null,8,P),(0,r._)("div",N,[(0,r._)("p",V,(0,Z.zw)(i.descr),1),(0,r._)("div",F,[(0,r.Wm)(s,{rating:i.rating},null,8,["rating"])]),(0,r._)("div",E,"UAH "+(0,Z.zw)(i.price),1),(0,r.Wm)(u,{to:{name:"apartment",params:{id:i.id}},class:"apartments-item__link"},null,8,["to"])])])])}var B=i(201);const z={class:"star-rating"};function $(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("div",z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.starLimit,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e,class:"star star--outlined"})))),128)),(0,r._)("div",{class:"star-rating__colored",style:(0,Z.j5)(o.ratingWidthStyle)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.starLimit,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e,class:"star star--colored"})))),128))],4)])}var Q={name:"StarRating",props:{rating:{type:Number,default:0},starLimit:{type:Number,default:5}},computed:{ratingWidth(){return this.rating/this.starLimit*100},ratingWidthStyle(){return`width: ${this.ratingWidth}%;`}}};const J=(0,c.Z)(Q,[["render",$],["__scopeId","data-v-5f3ef86c"]]);var T=J,Y={name:"ApartmentsItem",components:{StarRating:T,RouterLink:B.rH},props:{id:{type:String,required:!0},descr:{type:String,default:""},rating:{type:Number,default:0},price:{type:Number,required:!0},imgUrl:{type:String,default:""}},data(){return{publicPath:"/untitled-vue/"}}};const G=(0,c.Z)(Y,[["render",K],["__scopeId","data-v-c35316d8"]]);var X=G;const ee={class:"apartments-list"};function te(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.WI)(e.$slots,"title",{},void 0,!0),(0,r._)("div",ee,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.items,(t=>(0,r.WI)(e.$slots,"apartment",{apartment:t},void 0,!0))),256))])],64)}var ie={name:"ApartmentsList",props:{items:{type:Array,default:()=>[]}}};const ae=(0,c.Z)(ie,[["render",te],["__scopeId","data-v-619db95c"]]);var re=ae;function ne(e,t,i,n,o,s){const u=(0,r.up)("CustomSelect"),m=(0,r.up)("CustomInput"),l=(0,r.up)("SubmitButton");return(0,r.wg)(),(0,r.iD)("form",{class:"form",onSubmit:t[2]||(t[2]=(0,a.iM)(((...e)=>s.handleSubmit&&s.handleSubmit(...e)),["prevent"]))},[(0,r.Wm)(u,{items:s.cities,modelValue:o.city,"onUpdate:modelValue":t[0]||(t[0]=e=>o.city=e),class:"form__select"},null,8,["items","modelValue"]),(0,r.Wm)(m,{modelValue:o.price,"onUpdate:modelValue":t[1]||(t[1]=e=>o.price=e),placeholder:"Ціна, від"},null,8,["modelValue"]),(0,r.Wm)(l,{class:"form__submit",type:"submit"},{default:(0,r.w5)((()=>[(0,r.Uk)(" Подбор жилья ")])),_:1})],32)}const oe=["value"];function se(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("input",{value:i.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value)),class:"custom-input"},null,40,oe)}var ue={name:"CustomInput",props:["modelValue"],emits:["update:modelValue"]};const me=(0,c.Z)(ue,[["render",se],["__scopeId","data-v-9ac5b614"]]);var le=me;const ce=["value"],pe=["value","selected"];function de(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("select",{value:i.modelValue,class:"custom-select",onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.formatedItems,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.value,value:e.value,selected:e.selected},(0,Z.zw)(e.label),9,pe)))),128))],40,ce)}var ge={name:"CustomSelect",props:{items:{type:Array,required:!0},modelValue:String},emits:["update:modelValue"],computed:{formatedItems(){return this.items.map((e=>"object"===typeof e?e:{value:e,label:e}))}}};const ve=(0,c.Z)(ge,[["render",de],["__scopeId","data-v-4f3ae9cb"]]);var fe=ve;const he=["type"];function we(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("button",(0,r.dG)({type:i.type},e.$attrs,{class:{btn:!0,"btn--outlined":i.outlined}}),[(0,r.WI)(e.$slots,"default",{},void 0,!0)],16,he)}var _e={name:"SubmitButton",props:{type:{type:String,default:"button"},outlined:{type:Boolean,default:!1}}};const be=(0,c.Z)(_e,[["render",we],["__scopeId","data-v-438ea662"]]);var qe=be,ye={components:{CustomSelect:fe,CustomInput:le,SubmitButton:qe},name:"ApartmentFilterForm",data(){return{price:"",city:""}},computed:{cities(){return[{value:"",label:"Місто",selected:!0},"Kyiv","Odessa","Poltava","Kharkiv","Dnipro","Lviv","Kherson","Mariupol"]}},methods:{handleSubmit(){this.$emit("submit",{city:this.city,price:this.price})}}};const De=(0,c.Z)(ye,[["render",ne],["__scopeId","data-v-5e1e0c3e"]]);var Ae=De,Ie=[{id:"5f689a2c09b16000e9a2f47b",title:"Delectus et iste.",imgUrl:"/img/apartments/apartment-1.jpg",descr:"Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.",rating:3,price:1667,location:{city:"Dnipro"},owner:{name:"Bobbi",phone:"582-740-2926",email:"Pete_Carter53@hotmail.com"}},{id:"5f689a2c09b16000e9a2f47d",title:"Eaque suscipit incidunt.",imgUrl:"/img/apartments/apartment-2.jpg",descr:"Hic dolorem ab est hic iusto sed fugiat id aut. Eum reprehenderit eius odit perspiciatis illo. Odit repellat praesentium. Ea consequatur vero sed pariatur dolores omnis. Sed omnis vel atque sapiente natus voluptas dolores. Magnam enim consequuntur iure cupiditate voluptatem rerum.",rating:3,price:2740,location:{city:"Poltava"},owner:{name:"Leonor",phone:"565-314-3112",email:"Forest.Prosacco53@gmail.com"}},{id:"5f689a2c09b16000e9a2f48a",title:"Doloremque labore ullam molestiae quis quis eos consequatur.",imgUrl:"/img/apartments/apartment-3.jpg",descr:"Quia cum sed qui. Tempore ab tenetur aut et itaque omnis exercitationem consequatur eum. Hic non ad atque magni error earum aspernatur. Dolores ipsa veniam.",rating:1,price:2153,location:{city:"Kharkiv"},owner:{name:"Fanny",phone:"731-245-4377",email:"Caroline_Nienow61@gmail.com"}},{id:"5f689a2c09b16000e9a2f481",title:"Dolor at inventore et voluptas omnis unde.",imgUrl:"/img/apartments/apartment-4.jpg",descr:"Nihil dolorem in qui et occaecati. Sit qui deleniti. Expedita doloremque fugit culpa sit vel labore.",rating:3,price:3074,location:{city:"Poltava"},owner:{name:"Wyman",phone:"758-660-9577",email:"Jack.Kemmer@yahoo.com"}},{id:"5f689a2c09b16000e9a2f47c",title:"Sapiente sit consequuntur odit reprehenderit earum maxime.",imgUrl:"/img/apartments/apartment-5.jpg",descr:"Voluptatem sed dolor. Voluptatem eos minus nostrum quis facilis voluptas fugiat. Vel voluptas molestiae nesciunt.",rating:2,price:2642,location:{city:"Mariupol"},owner:{name:"Wilma",phone:"327-157-5816",email:"Macy72@gmail.com"}},{id:"5f689a2c09b16000e9a2f47f",title:"Ut accusantium atque at aut aliquid distinctio corporis.",imgUrl:"/img/apartments/apartment-6.jpg",descr:"Odit repudiandae autem hic eos. Fuga omnis laboriosam similique rerum. Delectus exercitationem a quod. Sunt nobis omnis expedita veniam sit minus eos culpa. Aliquid mollitia deserunt sed mollitia.",rating:2,price:768,location:{city:"Mariupol"},owner:{name:"Gabriella",phone:"710-849-3760",email:"Letha22@yahoo.com"}},{id:"5f689a2c09b16000e9a2f48c",title:"Sit similique cumque dolorem ut voluptatibus velit et dicta architecto.",imgUrl:"/img/apartments/apartment-7.jpg",descr:"Soluta quo et rerum vel. Qui earum inventore. Dolores vero facilis ut mollitia nisi iusto a quis. Nesciunt asperiores dolorum magni qui. Omnis autem nulla cupiditate et rerum et iusto rem.",rating:0,price:2642,location:{city:"Odesa"},owner:{name:"Allan",phone:"982-126-1588",email:"Mikel.Carter@hotmail.com"}},{id:"5f689a2c09b16000e9a2f485",title:"Nihil pariatur eum ab a ducimus nam.",imgUrl:"/img/apartments/apartment-8.jpg",descr:"Quae aliquid odit aut quia. Sed aut sed quis repudiandae est consequatur id quo ut. Molestiae nemo maiores quis deleniti sequi et eaque architecto officia. Molestiae incidunt qui quia. Fugiat id eum totam porro autem.",rating:1,price:3959,location:{city:"Kharkiv"},owner:{name:"Estell",phone:"804-325-1372",email:"Alta_Green@hotmail.com"}},{id:"5f689a2c09b16000e9a2f48b",title:"Adipisci voluptates accusamus officia aut id et ut hic.",imgUrl:"/img/apartments/apartment-9.jpg",descr:"Rerum sed voluptas vero ut rerum at ad. Aliquam unde quia earum perspiciatis reiciendis maxime voluptatem. Officiis et est velit placeat adipisci dolores.",rating:0,price:1165,location:{city:"Kyiv"},owner:{name:"Jacklyn",phone:"375-632-7448",email:"Shakira.Collier@gmail.com"}},{id:"5f689a2c09b16000e9a2f47e",title:"Rerum ut consequatur et adipisci.",imgUrl:"/img/apartments/apartment-10.jpg",descr:"Laboriosam ut nam molestiae. Minus est doloremque et aperiam sunt et. Rem earum illum. Dolor consequatur fugiat.",rating:4,price:1568,location:{city:"Kyiv"},owner:{name:"Giovani",phone:"444-741-7494",email:"Lenna12@gmail.com"}},{id:"5f689a2c09b16000e9a2f488",title:"Aut excepturi sed reiciendis.",imgUrl:"/img/apartments/apartment-11.jpg",descr:"Accusantium tempora dolore autem. Nihil perferendis neque. Dignissimos est quidem quasi sit mollitia. Dolorem suscipit earum recusandae quam. Sunt atque vel dolorem. Quidem in temporibus.",rating:5,price:1555,location:{city:"Odesa"},owner:{name:"Janie",phone:"960-872-6654",email:"Rowena.Beatty@yahoo.com"}},{id:"5f689a2c09b16000e9a2f487",title:"Eligendi vel voluptates perspiciatis.",imgUrl:"/img/apartments/apartment-12.jpg",descr:"Quidem natus sunt. Sunt nobis repudiandae. Id reprehenderit accusantium quasi expedita.",rating:0,price:652,location:{city:"Dnipro"},owner:{name:"Neil",phone:"641-112-1767",email:"Savanah_Kozey@gmail.com"}},{id:"5f689a2c09b16000e9a2f480",title:"Quis nobis eius sint occaecati.",imgUrl:"/img/apartments/apartment-13.jpg",descr:"Exercitationem consequuntur expedita aut neque hic ut ratione. Nulla aut non inventore quod voluptas dolore quod. Doloribus ipsam hic.",rating:2,price:3530,location:{city:"Mariupol"},owner:{name:"Tyrique",phone:"359-552-9767",email:"Brandi88@gmail.com"}},{id:"5f689a2c09b16000e9a2f479",title:"Voluptatibus ea consectetur sed sed quas saepe quo.",imgUrl:"/img/apartments/apartment-14.jpg",descr:"Beatae quaerat esse voluptas laborum id quo perspiciatis. Id debitis totam veritatis nostrum sunt. Laboriosam quis dolorem. Repudiandae hic iure similique blanditiis expedita maiores dignissimos reprehenderit sed.",rating:1,price:3250,location:{city:"Kherson"},owner:{name:"Sean",phone:"605-185-0631",email:"Emmanuel_Pollich5@gmail.com"}},{id:"5f689a2c09b16000e9a2f47a",title:"Tempora laudantium quos sed.",imgUrl:"/img/apartments/apartment-15.jpg",descr:"Debitis aliquid laboriosam optio sequi magnam reiciendis facilis. Earum a id voluptas libero qui. Perspiciatis vero doloribus impedit vel quibusdam.",rating:1,price:3771,location:{city:"Odesa"},owner:{name:"Janet",phone:"382-460-0703",email:"Makenna.Satterfield84@gmail.com"}},{id:"5f689a2c09b16000e9a2f482",title:"Autem saepe est aperiam tempora.",imgUrl:"/img/apartments/apartment-16.jpg",descr:"Quaerat aut ipsam vel. Laudantium dignissimos repellat autem blanditiis velit quidem dignissimos accusantium commodi. Dolor praesentium laudantium voluptatem tempore. Corrupti facilis voluptates id saepe eos repudiandae mollitia. Voluptatem id assumenda sunt at minus.",rating:1,price:2249,location:{city:"Kyiv"},owner:{name:"Noe",phone:"551-479-3150",email:"Jonas.Tromp@yahoo.com"}},{id:"5f689a2c09b16000e9a2f484",title:"Qui omnis magni ad omnis neque.",imgUrl:"/img/apartments/apartment-17.jpg",descr:"Magni qui blanditiis doloribus mollitia laboriosam quibusdam provident. Et et minima quae commodi dicta vel omnis. Numquam nemo laborum ullam perspiciatis tempora.",rating:2,price:2324,location:{city:"Dnipro"},owner:{name:"Aletha",phone:"296-446-0921",email:"Margarita.Durgan34@hotmail.com"}},{id:"5f689a2c09b16000e9a2f489",title:"Possimus iste error harum eum sunt rerum perspiciatis nisi.",imgUrl:"/img/apartments/apartment-18.jpg",descr:"Odio accusantium dicta. Sit minus quo quo. Excepturi est deleniti enim voluptas quis rerum. Libero beatae consequatur. Error nostrum porro quo perspiciatis adipisci.",rating:5,price:605,location:{city:"Lviv"},owner:{name:"Chasity",phone:"738-307-1493",email:"Godfrey.Cormier@gmail.com"}},{id:"5f689a2c09b16000e9a2f486",title:"Saepe autem quam rerum similique enim rerum molestias.",imgUrl:"/img/apartments/apartment-19.jpg",descr:"Reprehenderit velit iusto fugiat possimus animi est rerum. Assumenda minus qui perspiciatis sint veniam culpa quod tempora in. Eligendi qui rerum optio nihil maxime ipsa quaerat voluptas. Quod possimus aut cum inventore quaerat quam. Voluptate ducimus unde ipsa. Id ducimus aut iusto porro.",rating:5,price:2330,location:{city:"Mariupol"},owner:{name:"Bart",phone:"922-384-9740",email:"Chadd_Jacobs28@hotmail.com"}},{id:"5f689a2c09b16000e9a2f483",title:"Ipsum maxime molestiae harum voluptas beatae omnis neque consectetur.",imgUrl:"/img/apartments/apartment-20.jpg",descr:"Sit quo in commodi est ex dicta qui. Dolore minus ea sit voluptatem voluptas non rerum consectetur. Architecto maxime nulla. Et dolorem beatae quidem debitis. Odio ad id atque neque. Neque vero hic quibusdam consequatur perferendis dolor ut.",rating:3,price:1099,location:{city:"Lviv"},owner:{name:"Helmer",phone:"999-690-1616",email:"Concepcion.Cummings32@yahoo.com"}}],Le={name:"HomePage",components:{ApartmentsList:re,ApartmentsItem:X,ApartmentFilterForm:Ae,ContainerList:L},data(){return{text:"",apartments:Ie,filters:{city:"",price:0}}},computed:{filteredApartments(){return this.filterByCityName(this.filterByPrice(this.apartments))}},methods:{filter({city:e,price:t}){void 0!==e&&(this.filters.city=e),void 0!==t&&(this.filters.price=t)},filterByCityName(e){return this.filters.city?e.filter((e=>e.location.city===this.filters.city)):e},filterByPrice(e){return this.filters.price?e.filter((e=>e.price>=this.filters.price)):e}}};const Se=(0,c.Z)(Le,[["render",x],["__scopeId","data-v-0a03054a"]]);var Ce=Se;const Re={class:"apartment-page"},je={class:"apartment-page__content"},We={class:"apartment-page__additional-info"};function Ue(e,t,i,a,n,o){const s=(0,r.up)("ApartmentsMainInfo"),u=(0,r.up)("ApartmentsOwner"),m=(0,r.up)("ReviewsItems"),l=(0,r.up)("ContainerList");return(0,r.wg)(),(0,r.iD)("main",Re,[(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[(0,r._)("div",je,[(0,r.Wm)(s,{apartment:o.apartment},null,8,["apartment"]),(0,r._)("div",We,[(0,r.Wm)(u,{class:"apartment-page__owner",owner:o.apartment.owner},null,8,["owner"]),(0,r.Wm)(m,{reviews:o.reviewsList},null,8,["reviews"])])])])),_:1})])}const Oe={class:"apartment-main-info"},ke={class:"apartment-main-info__heading"},xe={class:"apartment-main-info__title"},Ze=["src"],He={class:"apartment-main-info__description"};function Me(e,t,i,a,n,o){const s=(0,r.up)("StarRating");return(0,r.wg)(),(0,r.iD)("article",Oe,[(0,r._)("div",ke,[(0,r._)("h1",xe,(0,Z.zw)(i.apartment.title),1),(0,r.Wm)(s,{rating:i.apartment.rating},null,8,["rating"])]),(0,r._)("img",{src:`${n.publicPath}`+i.apartment.imgUrl,alt:"",class:"apartment-main-info__photo"},null,8,Ze),(0,r._)("p",He,(0,Z.zw)(i.apartment.descr),1)])}var Pe={name:"ApartmentsMainInfo",props:{apartment:{type:Object,required:!0}},components:{StarRating:T},data(){return{publicPath:"/untitled-vue/"}}};const Ne=(0,c.Z)(Pe,[["render",Me],["__scopeId","data-v-0dff17a1"]]);var Ve=Ne;const Fe=e=>((0,r.dD)("data-v-11040cba"),e=e(),(0,r.Cn)(),e),Ee={class:"apartments-owner"},Ke=Fe((()=>(0,r._)("h2",{class:"apartments-owner__title"},"Информация о владельце:",-1))),Be={class:"apartments-owner__info"},ze={class:"apartments-owner__info"},$e={class:"apartments-owner__info"};function Qe(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("section",Ee,[Ke,(0,r._)("p",Be,(0,Z.zw)(i.owner.name),1),(0,r._)("p",ze,"tel: "+(0,Z.zw)(i.owner.phone),1),(0,r._)("p",$e,"email: "+(0,Z.zw)(i.owner.email),1)])}var Je={name:"ApartmentsOwner",props:{owner:{type:Object,required:!0}}};const Te=(0,c.Z)(Je,[["render",Qe],["__scopeId","data-v-11040cba"]]);var Ye=Te;const Ge=e=>((0,r.dD)("data-v-71b852f6"),e=e(),(0,r.Cn)(),e),Xe={class:"reviews"},et={class:"reviews__heading"},tt=Ge((()=>(0,r._)("h2",{class:"reviews__title"},"Суммарный рейтинг",-1))),it={class:"reviews__rating"};function at(e,t,i,a,n,o){const s=(0,r.up)("StarRating"),u=(0,r.up)("ReviewsItem");return(0,r.wg)(),(0,r.iD)("section",Xe,[(0,r._)("div",et,[tt,(0,r._)("div",it,[(0,r._)("span",null,(0,Z.zw)(o.amountOfReviews)+" отзыва(ов)",1),(0,r.Wm)(s,{rating:o.totalRating},null,8,["rating"])])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.currentReview,(e=>((0,r.wg)(),(0,r.j4)(u,{key:e.author,review:e},null,8,["review"])))),128)),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>o.toggleReviews&&o.toggleReviews(...e)),class:"reviews__show-more"},(0,Z.zw)(o.buttonText),1)])}const rt={class:"reviews-item"},nt={class:"reviews-item__content"};function ot(e,t,i,a,n,o){const s=(0,r.up)("ReviewsHeading");return(0,r.wg)(),(0,r.iD)("section",rt,[(0,r.Wm)(s,{rating:i.review.rating,author:i.review.author},null,8,["rating","author"]),(0,r._)("p",nt,(0,Z.zw)(i.review.content),1)])}const st={class:"reviews-heading"},ut={class:"reviews-heading__content"},mt={class:"reviews-heading__author"};function lt(e,t,i,a,n,o){const s=(0,r.up)("ReviewsAvatar"),u=(0,r.up)("StarRating");return(0,r.wg)(),(0,r.iD)("div",st,[(0,r.Wm)(s,{class:"reviews-heading__avatar"}),(0,r._)("div",ut,[(0,r._)("span",mt,(0,Z.zw)(i.author),1),(0,r.Wm)(u,{rating:i.rating,class:"reviews-heading__rating"},null,8,["rating"])])])}const ct={width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pt=(0,r._)("circle",{cx:"17",cy:"17",r:"17",fill:"white"},null,-1),dt=(0,r._)("circle",{cx:"17",cy:"17",r:"16",fill:"white",stroke:"#FF662D","stroke-width":"2"},null,-1),gt=(0,r._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.80532 28.8444L4.83306 28.8028C7.04003 25.4919 10.7338 23.5156 14.712 23.5156H19.2878C23.266 23.5156 26.9599 25.4919 29.1669 28.8028L29.1946 28.8445C32.1687 25.783 34 21.6054 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 21.6053 1.83126 25.783 4.80532 28.8444ZM16.9999 7C12.9288 7 9.61712 10.3117 9.61712 14.3828C9.61712 18.4539 12.9288 21.7656 16.9999 21.7656C21.071 21.7656 24.3827 18.4539 24.3827 14.3828C24.3827 10.3117 21.071 7 16.9999 7Z",fill:"#FF662D"},null,-1),vt=[pt,dt,gt];function ft(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("svg",ct,vt)}var ht={name:"ReviewsAvatar"};const wt=(0,c.Z)(ht,[["render",ft]]);var _t=wt,bt={name:"ReviewsHeading",components:{StarRating:T,ReviewsAvatar:_t},props:{author:{type:String,required:!0},rating:{type:Number,default:0}}};const qt=(0,c.Z)(bt,[["render",lt],["__scopeId","data-v-b8bcd672"]]);var yt=qt,Dt={name:"ReviewsItem",components:{ReviewsHeading:yt},props:{review:{type:Object,required:!0}}};const At=(0,c.Z)(Dt,[["render",ot],["__scopeId","data-v-27b8cf12"]]);var It=At,Lt={name:"ReviewsItems",components:{ReviewsItem:It,StarRating:T},props:{reviews:{type:Array,required:!0}},data(){return{reviewsLimit:2}},computed:{totalRating(){const e=this.reviews.reduce(((e,t)=>e+t.rating),0);return e/this.reviews.length},amountOfReviews(){return this.reviews.length},currentReview(){return this.reviews.slice(0,this.reviewsLimit)},buttonText(){return this.reviewsLimit===this.reviews.length?"Cвернуть":"Читать еще..."}},methods:{toggleReviews(){this.reviewsLimit!==this.reviews.length?this.reviewsLimit=this.reviews.length:this.reviewsLimit=2}}};const St=(0,c.Z)(Lt,[["render",at],["__scopeId","data-v-71b852f6"]]);var Ct=St,Rt=JSON.parse('[{"author":"Alex","content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit reiciendis modi magnam, aliquid architecto cumque saepe recusandae est optio accusamus ducimus itaque assumenda eius culpa earum. Aspernatur, molestiae dicta!","rating":3.5},{"author":"Ron","content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit reiciendis modi magnam, aliquid architecto cumque saepe recusandae est optio accusamus ducimus itaque assumenda eius culpa earum. Aspernatur, molestiae dicta!","rating":4.5},{"author":"Marry","content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit reiciendis modi magnam, aliquid architecto cumque saepe recusandae est optio accusamus ducimus itaque assumenda eius culpa earum. Aspernatur, molestiae dicta!","rating":4.8},{"author":"John","content":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit reiciendis modi magnam, aliquid architecto cumque saepe recusandae est optio accusamus ducimus itaque assumenda eius culpa earum. Aspernatur, molestiae dicta!","rating":2.8}]'),jt={name:"ApartmentPage",components:{ContainerList:L,ApartmentsMainInfo:Ve,ApartmentsOwner:Ye,ReviewsItems:Ct},computed:{reviewsList(){return Rt},apartment(){return Ie.find((e=>e.id===this.$route.params.id))}}};const Wt=(0,c.Z)(jt,[["render",Ue],["__scopeId","data-v-0faf9c04"]]);var Ut=Wt;const Ot=e=>((0,r.dD)("data-v-4589cd8c"),e=e(),(0,r.Cn)(),e),kt={class:"error"},xt=Ot((()=>(0,r._)("h1",{class:"error__title"},"Page not found",-1))),Zt=[xt];function Ht(e,t,i,a,n,o){return(0,r.wg)(),(0,r.iD)("section",kt,Zt)}var Mt={name:"ErrorPage"};const Pt=(0,c.Z)(Mt,[["render",Ht],["__scopeId","data-v-4589cd8c"]]);var Nt=Pt;const Vt=[{path:"/untitled-vue/",component:Ce,name:"homepages"},{path:"/untitled-vue/apartments/:id",component:Ut,name:"apartment"},{path:"/untitled-vue/:pathMatch(.*)",component:Nt,name:"error-page"}],Ft=(0,B.p7)({history:(0,B.PO)(),routes:Vt});var Et=Ft;(0,a.ri)(U).use(Et).mount("#app")}},t={};function i(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,a,r,n){if(!a){var o=1/0;for(l=0;l<e.length;l++){a=e[l][0],r=e[l][1],n=e[l][2];for(var s=!0,u=0;u<a.length;u++)(!1&n||o>=n)&&Object.keys(i.O).every((function(e){return i.O[e](a[u])}))?a.splice(u--,1):(s=!1,n<o&&(o=n));if(s){e.splice(l--,1);var m=r();void 0!==m&&(t=m)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[a,r,n]}}(),function(){i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/untitled-vue/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,n,o=a[0],s=a[1],u=a[2],m=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(u)var l=u(i)}for(t&&t(a);m<o.length;m++)n=o[m],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(l)},a=self["webpackChunkuntitled_vue"]=self["webpackChunkuntitled_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(759)}));a=i.O(a)})();
//# sourceMappingURL=app.b4522218.js.map