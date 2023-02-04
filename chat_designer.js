//kendo.bind($("#container"), {});


var viewmodel = kendo.observable({
    
    chatWidth:'500px',
    chatBorder:'1px solid lightgray',
    chatBorderRadius:'0.25rem',
    
    headerText:'Header',
    headerTextColor:'Black',
    headerFontWeight:'400',
    headerBackgroundColor:'lightgray',
    headerPadding:'10px',

    footerText:'Footer',
    footerTextColor:'Black',
    footerFontWeight:'400',
    footerBackgroundColor:'lightgray',
    footerPadding:'0px 6px',

    displayGreeting:function(){
        var txt = this.get('headerText');
        alert('Header Text is '+txt+' !!!');
    }
});

kendo.bind($('#view'),viewmodel);


var chat = $("#chat").kendoChat({post:(args)=>{}}).data("kendoChat");