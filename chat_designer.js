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

    displayGreeting:function(){
        var txt = this.get('headerText');
        alert('Header Text is '+txt+' !!!');
    },
    onChangeChatHeight:(e)=>{
       var new_chat_height = e.value;
       //$('#chat').css('height',new_chat_height);
    }
});

kendo.bind($('#view'),viewmodel);


var chat = $("#chat").kendoChat({post:(args)=>{}}).data("kendoChat");