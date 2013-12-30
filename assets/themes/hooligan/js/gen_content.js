$(document).ready(function(){

    contentBox = $("#content_box");

    function addContentItem(name, margin) {
        contentBox.append(
            "<a href='#"+name+"' style='margin-left: "+margin+"px'>"+
                $("#"+name).text()+
            "</a><br>"
        );
    }

    contents = $("#content");
    if (contents.size()!=1) return;

    $(document).scroll(function() {
        contents = $("#contents");
        prebox = $("#tags_box");
        mheight = prebox.offset().top+prebox.height()+35;
        //alert($(document).scrollTop()+","+mheight);
        if ($(document).scrollTop()<mheight)
            contents.attr("style", "position: relative");
        else {
            contents.attr("style", "position: fixed; top: 0px");
            //contents.offset({top:$(document).scrollTop()});
        }
    })

    content = contents.children();
    hlink = "hlink";
    incMag = 20;
    addContentItem("mainTitle",incMag);
    content.each(function(index) {
        ts = $(this);
        var idname="";
        var mg;
        mg=0;
        if (ts.is("h1")) mg=incMag*1, idname=hlink+index;
        if (ts.is("h2")) mg=incMag*2, idname=hlink+index;
        if (ts.is("h3")) mg=incMag*3, idname=hlink+index;
        if (ts.is("h4")) mg=incMag*4, idname=hlink+index;
        if (ts.is("h5")) mg=incMag*5, idname=hlink+index;
        if (ts.is("h6")) mg=incMag*6, idname=hlink+index;
        if (mg!=0) {
            ts.attr("id",idname);
            addContentItem(idname, mg);
        }
    })
})