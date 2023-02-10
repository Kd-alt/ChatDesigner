//kendo.bind($("#container"), {});


var viewmodel = kendo.observable({
    chatWidth:'500px',
    chatHeight:'600px',
    chatBorder:'1px solid lightgray',
    chatBorderRadius:'0.25rem',
    
    headerDisplay:true,
    headerText:'Header',
    headerTextColor:'Black',
    headerFontWeight:'400',
    headerBackgroundColor:'lightgray',
    headerPadding:'10px',

    footerDisplay:true,
    footerText:'Footer',
    footerTextColor:'Black',
    footerFontWeight:'400',
    footerBackgroundColor:'lightgray',
    footerPadding:'0px 6px',
    getNewChatProperties:function(){
        console.log(this.toJSON());
    },
    displayGreeting:function(){
        var txt = this.get('headerText');
        alert('Header Text is '+txt+' !!!');
    },
    onChangeChatHeight:(e)=>{
       var new_chat_height = e.value;
       $('#chat').css('height',new_chat_height);
    },
    toggleHeader:(e)=>{
       viewmodel.set("headerText",'Header');
       viewmodel.set("headerTextColor",'Black');
       viewmodel.set("headerFontWeight",'400');
       viewmodel.set("headerBackgroundColor",'lightgray');
       viewmodel.set("headerPadding",'10px');
    },
    toggleFooter:(e)=>{
       viewmodel.set("footerText",'Footer');
       viewmodel.set("footerTextColor",'Black');
       viewmodel.set("footerFontWeight",'400');
       viewmodel.set("footerBackgroundColor",'lightgray');
       viewmodel.set("footerPadding",'0px 6px');
    }
});

kendo.bind($('#view'),viewmodel);


var chat = $("#chat").kendoChat({post:(args)=>{}}).data("kendoChat");